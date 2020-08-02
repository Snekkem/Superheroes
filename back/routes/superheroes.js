const {Router} = require('express')
const {Pool} = require('pg')
const connection = require('./../config/conString')
const {cloudinary} = require('./../utils/cloudinary')
const {check, validationResult} = require('express-validator')

const pool = new Pool(connection)
pool.connect()

const router = Router()

router.get('/all/:page', async (req, res) => {
    try {
        const {rows} = await pool.query(`SELECT "Superheroes"."ID", "Superheroes"."NikName", "Images"."Path"
            FROM "Superheroes"
            JOIN "Images" ON "Superheroes"."ID" = "Images"."SuperheroID"
            WHERE "Images"."ID" is NULL
               OR "Images"."ID" = (
                   SELECT MIN("ID") FROM "Images" WHERE "Superheroes"."ID" = "Images"."SuperheroID"
               ) 
            ORDER BY "Superheroes"."ID"
            LIMIT 5 OFFSET 5 * (${req.params.page} - 1)`)

        res.send(rows)
    } catch (e) {
        res.json({message: 'Что-то пошло не так.'})
    }
})

router.get('/getCountSuperheroes', async (req, res) => {
    try {
        const {rows} = await pool.query(`SELECT COUNT(*) FROM "Superheroes" `)

        res.send(rows[0])
    } catch (e) {
        res.json({message: 'Что-то пошло не так.'})
    }
})

router.get('/details/:heroId', async (req, res) => {
    try {
        const {rows} = await pool.query(`SELECT "Superheroes"."ID", "Superheroes"."NikName", "Superheroes"."RealName", "Superheroes"."OriginDescription", 
        "Superheroes"."CatchPhrase" FROM public."Superheroes" 
         WHERE "Superheroes"."ID" = ${req.params.heroId}`)

        res.send(rows[0])
    } catch (e) {
        res.json({message: 'Что-то пошло не так.'})
    }
})

router.get('/getImages/:heroId', async (req, res) => {
    try {
        const {rows} = await pool.query(`SELECT "Images"."ID", "Images"."Path" FROM "Images" 
        JOIN "Superheroes" ON "Images"."SuperheroID" = "Superheroes"."ID" 
        WHERE "Superheroes"."ID" = ${req.params.heroId}`)

        res.send(rows)
    } catch (e) {
        res.json({message: 'Что-то пошло не так.'})
    }
})

router.post('/deleteImage', async (req, res) => {
    try {
        const {imgId} = req.body
        await pool.query(`DELETE FROM "Images" WHERE "Images"."ID" = ($1)`, [imgId])

        res.json({message: 'Успешно'})
    } catch (e) {
        res.json({message: 'Что-то пошло не так.'})
    }
})

router.get('/getSuperPowers/:heroId', async (req, res) => {
    try {
        const {rows} = await pool.query(`SELECT "SuperPowers"."ID", "SuperPowers"."SuperPower" FROM "SuperPowers" 
        JOIN "Superheroes" ON "SuperPowers"."SuperheroID" = "Superheroes"."ID" 
        WHERE "Superheroes"."ID" = ${req.params.heroId}`)

        res.send(rows[0])
    } catch (e) {
        res.json({message: 'Что-то пошло не так.'})
    }
})

router.post('/createSuperhero',
    [
        check('nikName', 'Введите корректное имя').isLength({min: 2}),
        check('realName', 'Введите корректное имя').isLength({min: 2}),
        check('originDescription', 'Введите корректное описание').isLength({min: 2}),
        check('catchPhrase', 'Введите корректные коронную фразу').isLength({min: 2}),
        check('superPowers', 'Введите корректные суперспобности').isLength({min: 2})
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.json({
                errors: errors.array(),
                message: 'Неккоректные данные при создании героя'
            })
        }
        try {
            const {nikName, realName, originDescription, catchPhrase, image, superPowers} = req.body

            const isExistHero = await pool.query('SELECT "NikName" FROM "Superheroes" WHERE "NikName" = $1', [nikName])

            if (isExistHero.rows.length !== 0) {
                return res.json({message: 'Герой с данным никнеймом уже существует'})
            }

            const {rows} = await pool.query(`INSERT INTO "Superheroes" ("NikName", "RealName", "OriginDescription", "CatchPhrase") 
            VALUES ($1, $2, $3, $4) RETURNING "ID"`, [nikName.trim(), realName.trim(), originDescription.trim(), catchPhrase.trim()])

            await pool.query('INSERT INTO "Images" ("SuperheroID", "Path") VALUES ($1, $2)', [rows[0].ID, image])

            await pool.query('INSERT INTO "SuperPowers" ("SuperheroID", "SuperPower") VALUES ($1, $2)', [rows[0].ID, superPowers.trim()])

            res.send({message: 'Успешно'})
        } catch (e) {
            res.json({message: 'Что-то пошло не так.'})
        }
    })

router.post('/updateDetails', async (req, res) => {
    try {
        const {ID, details, imgURL, superPowers} = req.body
        console.log(req.body)
        await pool.query('UPDATE "Superheroes" SET "NikName" = $1 WHERE "ID" = $2', [details.NikName, ID])
        await pool.query('UPDATE "Superheroes" SET "RealName" = $1 WHERE "ID" = $2', [details.RealName, ID])
        await pool.query('UPDATE "Superheroes" SET "OriginDescription" = $1 WHERE "ID" = $2', [details.OriginDescription, ID])
        await pool.query('UPDATE "Superheroes" SET "CatchPhrase" = $1 WHERE "ID" = $2', [details.CatchPhrase, ID])

        await pool.query('UPDATE "SuperPowers" SET "SuperPower" = $1 WHERE "SuperheroID" = $2', [superPowers.SuperPower, ID])

        if (imgURL.imgURL.length > 0)
            await pool.query('INSERT INTO "Images" ("SuperheroID" ,"Path") VALUES ($1, $2)', [ID, imgURL.imgURL])

        res.json({message: 'Изменения сохранены'})
    } catch (e) {
        console.log(e)
        res.json({message: 'Что-то пошло не так'})
    }
})

router.post('/deleteSuperhero', async (req, res) => {
    try {
        const {ID} = req.body

        const {rows} = await pool.query('DELETE FROM "Images" WHERE "SuperheroID" = $1 RETURNING "SuperheroID"', [ID])

        await pool.query('DELETE FROM "Superheroes" WHERE "ID" = $1', [rows[0].SuperheroID])

        await pool.query('DELETE FROM "SuperPowers" WHERE "SuperheroID" = $1', [rows[0].SuperheroID])

        res.json({message: 'Удалено'})
    } catch (e) {
        console.log(e)
        res.json({message: 'Что-то пошло не так'})
    }
})

// router.post('/createImages', async (req, res) => {
//     try {
//         const {ID, image} = req.body
//
//         await pool.query(`INSERT INTO "Images" ("SuperheroID", "Path")
//         VALUES ($1, $2)`, [ID, image])
//
//         res.send({message: 'Успешно'})
//     } catch (e) {
//         res.json({message: 'Что-то пошло не так.'})
//     }
// })

router.post('/upload', async (req, res) => {
    try {
        const fileStr = req.body.data
        const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'dev_setups'
        })
        res.send({url: uploadedResponse.url})
    } catch (e) {
        res.json({message: 'Что-то пошло не так'})
    }
})

router.get('/getUploadedImages', async (req, res) => {
    try {
        const {resources} = await cloudinary.search
            .expression('folder:superheroes')
            .sort_by('public_id', "desc")
            .max_results(10)
            .execute()
        const publicIds = resources.map(file => file.public_id)
        res.send(publicIds)
    } catch (e) {
        console.log(e)
        res.json({message: 'Что-то пошло не так'})
    }
})


module.exports = router