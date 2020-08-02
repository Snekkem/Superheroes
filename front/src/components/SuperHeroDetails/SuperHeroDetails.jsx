import React, {useEffect, useState} from "react";
import css from './SuperHeroDetails.module.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper'
import 'swiper/swiper-bundle.min.css';
import * as axios from "axios";

SwiperCore.use([Navigation])

const SuperHeroDetails = (props) => {
    const [isChange, setChange] = useState(false)
    const [fileInputState, setFileInputState] = useState('')
    const [value, setValue] = useState({
        nikName: '',
        realName: '',
        superPowers: '',
        description: '',
        catchPhrase: '',
        image: []
    })
    const onDelete = (id) => {
        props.deleteImage(id)
    }

    const onSave = () => {
        setChange(!isChange)
        setValue({
            ...value,
            nikName: props.details.NikName,
            realName: props.details.RealName,
            superPowers: props.superPowers.SuperPower,
            description: props.details.OriginDescription,
            catchPhrase: props.details.CatchPhrase
        })
        if (isChange)
            props.updateDetails({
                NikName: value.nikName,
                RealName: value.realName,
                OriginDescription: value.description,
                CatchPhrase: value.catchPhrase,
            }, {SuperPower: value.superPowers}, {imgURL: value.image}, props.details.ID)
    }

    const onChangeData = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
    }

    const handleFileInputChange = async (images) => {
        const file = images.target.files[0]

        let reader = new FileReader()

        if (file)
            await reader.readAsDataURL(file)

        reader.onload = () => {
            uploadImage(reader.result)
        }
    }

    const uploadImage = async (base64EncodedImage) => {
        try {
            await axios.post('http://localhost:5000/api/info/upload',
                {data: base64EncodedImage})
                .then(response => response.data.url)
                .then(url => setValue({...value, image: url}))
        } catch (e) {
            console.error(e)
        }
    }

    console.log(props)
    debugger
    return (
        <div className={css.detailsContainer}>
            <Swiper
                navigation
                tag={"section"}
                wrapperTag={"ul"}
                spaceBetween={280}
                slidesPerView={2}
            >
                {props.images.map(img =>
                    <SwiperSlide key={img.ID} tag={"li"}>
                        <div className={css.imgRelative}>
                            <img className={css.images} alt={`img ${img.ID}`} src={img.Path}/>

                            {props.images.length > 1 &&
                            <button onClick={() => onDelete(img.ID)}
                                    className={`${css.deleteImg} waves-effect waves-light btn red darken-4`}>X
                            </button>}
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>

            <div style={{position: 'relative'}}>
                {isChange
                    ? <>

                        <input type={"text"} name={'nikName'} className="validate"
                               placeholder={"Введите никнейм"} style={{fontSize: 30}}
                               value={value.nikName} onChange={onChangeData}/>
                        <input type={"text"} name={'realName'} className="validate"
                               placeholder={"Введите настоящее имя"}
                               value={value.realName} onChange={onChangeData}/>
                        <h5>СПОСОБНОСТИ</h5>
                        <input type={"text"} name={'superPowers'} className="validate"
                               placeholder={"Введите суперспособности"}
                               value={value.superPowers} onChange={onChangeData}/>
                        <h5>ОПИСАНИЕ</h5>
                        <textarea style={{height: 90, padding: 5}} name={'description'} className="validate"
                                  placeholder={"Введите описание"}
                                  value={value.description} onChange={onChangeData}/>
                        <h5>КОРОННАЯ ФРАЗА</h5>
                        <input type={"text"} name={'catchPhrase'} className="validate"
                               placeholder={"Введите коронную фразу"}
                               value={value.catchPhrase} onChange={onChangeData}/>
                        <div style={{display: "flex", position: 'absolute', top: 0, right: 0}}>
                            <input type={"file"} onChange={handleFileInputChange} value={fileInputState}/>
                            <button className={"waves-effect green darken-1 waves-teal btn-flat"} type={"button"}
                                    onClick={onSave}>Сохранить
                            </button>
                        </div>
                    </>
                    : <>
                        <h4>{props.details.NikName}</h4>
                        <h6 style={{paddingBottom: 10}}>Настоящее имя: {props.details.RealName}</h6>
                        <hr/>
                        <h5>СПОСОБНОСТИ</h5>
                        <div style={{paddingBottom: 10}}>{props.superPowers.SuperPower}</div>
                        <hr/>
                        <h5>ОПИСАНИЕ</h5>
                        <div style={{paddingBottom: 10}}>{props.details.OriginDescription}</div>
                        <hr/>
                        <h5>КОРОННАЯ ФРАЗА</h5>
                        <div>{props.details.CatchPhrase}</div>
                        <div>
                            <button className={"waves-effect blue accent-2 waves-teal btn-flat"} type={"button"}
                                    style={{position: 'absolute', top: 0, right: 0}}
                                    onClick={onSave}>Изменить
                            </button>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default SuperHeroDetails