import React, {useEffect} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import SuperHeroDetails from "./SuperHeroDetails";
import {
    deleteImage,
    getSuperheroDetails,
    getSuperheroImages,
    getSuperPowers, isLoadedAC,
    setSuperheroImagesAC, updateDetails
} from "../../redux/superhero-reducer";
import Preloader from "../Preloader/Preloader";

const SuperHeroDetailsContainer = (props) => {
    useEffect(() => {
        const id = props.match.params.id
        props.getSuperheroImages(id)
        props.getSuperheroDetails(id)
        props.getSuperPowers(id)
    }, [])

    return (
        <>
            {props.isLoaded ? <Preloader/> : null}
            <SuperHeroDetails {...props} />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        details: state.superheroesReducer.superheroDetails,
        images: state.superheroesReducer.images,
        superPowers: state.superheroesReducer.superPowers,
        isLoaded: state.superheroesReducer.isLoaded
    }
}

const withRouterSuperheroes = withRouter(SuperHeroDetailsContainer)

export default connect(mapStateToProps, {
    getSuperheroDetails,
    getSuperheroImages,
    getSuperPowers,
    setSuperheroImagesAC,
    deleteImage,
    updateDetails,
    isLoadedAC
})(withRouterSuperheroes)