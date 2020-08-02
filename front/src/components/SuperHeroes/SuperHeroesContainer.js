import React, {useEffect} from "react";
import SuperHeroes from "./SuperHeroes";
import {connect} from "react-redux";
import {deleteSuperhero, getCount, getSuperheroes} from "../../redux/superhero-reducer";
import {withRouter} from "react-router-dom";

const SuperHeroesContainer = (props) => {
    useEffect(() => {
        props.getSuperheroes(props.match.params.page ? props.match.params.page : 1)
        props.getCount()
    }, [props.match.params.page])

    return (
        <SuperHeroes {...props} />
    )
}

const mapStateToProps = (state) => {
    return {
        superheroes: state.superheroesReducer.superheroes,
        superheroesCount: state.superheroesReducer.superheroesCount
    }
}

const withRouterSuperheroes = withRouter(SuperHeroesContainer)

export default connect(mapStateToProps, {getSuperheroes, getCount, deleteSuperhero})(withRouterSuperheroes)