import React, {useEffect} from "react";
import css from './SuperHeroes.module.css'
import {NavLink} from "react-router-dom";
import Pagination from "../Pagination/Pagination";

const SuperHeroes = (props) => {
    console.log(props)

    const onDelete = (id) => {
        console.log(id)
        props.deleteSuperhero(id)
    }

    return (
        <div className={css.mainContainer}>
            <h4>ВСЕ ГЕРОИ</h4>

            <div style={{marginTop: 30}} className={'row'}>
                {props.superheroes.length && props.superheroes.map(superhero => {
                    return (
                        <div style={{marginTop: 40}} key={superhero.ID} className="col s4">
                            <div style={{position: 'relative'}}>
                                <NavLink className={css.card} to={`/superhero/${superhero.ID}`}>
                                    <div className={css.imgContainer}>
                                        <img src={superhero.Path} style={{height: 230}} alt={"hero-img"}/>
                                    </div>
                                    <div className={css.nikname}>{superhero.NikName}</div>
                                </NavLink>
                                <button
                                    className={`${css.btnDelete} btn-floating btn-small waves-effect waves-light red`}
                                    onClick={() => onDelete(superhero.ID)}>X
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>

            <Pagination totalSuperHero={props.superheroesCount}/>
        </div>
    )
}

export default SuperHeroes