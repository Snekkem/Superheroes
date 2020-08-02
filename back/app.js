const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const PORT = 5000

const app = express()

app.use(cors())

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb', extended: true}))

app.use('/api/info', require('./routes/superheroes'))

app.listen(PORT, () => console.log(`Server started with ${PORT} port...`))