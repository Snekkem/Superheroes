import React, {useEffect, useState} from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {createSuperhero, isAddedAC} from "../../redux/superhero-reducer";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators";
import {FileInput, Input, TextArea} from "../../common/FormsControl/FormsControl";
import {useHistory} from 'react-router-dom'
import * as axios from "axios";

const maxLength25 = maxLengthCreator(25);
const minLength = minLengthCreator(2);

const AddSuperheroForm = (props) => {
    const [fileInputState, setFileInputState] = useState('')
    const handleFileInputChange = (images) => {
        const file = images.target.files[0]
        if (file)
            props.previewFile(file)
    }

    return (
        <form className="col s12" style={{padding: 20}} onSubmit={props.handleSubmit}>
            <div className="row">
                <div className="input-field col s6">
                    <Field name={"nikname"} component={Input} id="first_name" type="text" className="validate"
                           validate={[required, maxLength25, minLength]} placeholder={"Nikname"}/>
                </div>
                <div className="input-field col s6">
                    <Field name={"realname"} component={Input} id="real_name" type="text" className="validate"
                           validate={[required, maxLength25, minLength]} placeholder={"Real Name"}/>
                </div>
                <div className="input-field col s12">
                    <Field name={"description"} component={TextArea} id="description" type="textarea"
                           placeholder={"Description"}
                           className="validate" style={{height: 90, padding: 5}} validate={[required, minLength]}/>
                </div>
                <div className="input-field col s12">
                    <Field name={"superPowers"} component={Input} id="superPowers" type="text" className="validate"
                           validate={[required, minLength]} placeholder={"Super Powers"}/>
                </div>
                <div className="input-field col s12">
                    <Field name={"catchPhrase"} component={Input} id="catchPhrase" type="text" className="validate"
                           validate={[required, minLength]} placeholder={"Catch Phrase"}/>
                </div>
                <div className="input-field col center s12">
                    <Field name={"images"} component={FileInput} id="images" type="file"
                           value={fileInputState} required onChange={handleFileInputChange} validate={[required]}/>
                </div>
                <button type={"submit"} style={{margin: 20}}
                        className={"waves-effect pink darken-4 waves-light right btn"}>Создать
                </button>
            </div>
            {props.previewSource.length !== 0 &&
            <img src={props.previewSource} style={{height: 150}}/>}
        </form>
    )
}

const AddSuperheroReduxForm = reduxForm({form: 'addSuperhero'})(AddSuperheroForm)

const AddSuperhero = (props) => {
    const [previewSource, setPreviewSource] = useState([])

    const history = useHistory()

    let urlImg = ''

    const uploadImage = async (base64EncodedImage) => {
        try {
            await axios.post('http://localhost:5000/api/info/upload',
                {data: base64EncodedImage})
                .then(response => urlImg = response.data.url)
        } catch (e) {
            console.error(e)
        }
    }

    const previewFile = (file) => {
        const reader = new FileReader()

        reader.readAsDataURL(file)

        reader.onload = () => {
            setPreviewSource(reader.result)
        }
    }

    useEffect(() => {
        if (props.isAdded)
            history.push('/1')
    }, [props.isAdded])

    const onSubmit = async (formData) => {
        if (!previewSource) return
        await uploadImage(previewSource)

        await props.createSuperhero(formData.nikname, formData.realname, formData.description, formData.catchPhrase, urlImg, formData.superPowers)

        props.isAddedAC(false)
    }

    return (
        <div className="row">
            <AddSuperheroReduxForm previewFile={previewFile} previewSource={previewSource} onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        info: state.superheroesReducer.superheroFullInfo,
        isAdded: state.superheroesReducer.isAdded
    }
}


export default connect(mapStateToProps, {createSuperhero, isAddedAC})(AddSuperhero)