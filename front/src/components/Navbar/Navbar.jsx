import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={'purple darken-4'}>
            <div style={{padding: '0 20px'}}>
                <NavLink to={'/'} className="brand-logo">HERO</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <NavLink to={'/create/superhero'}>
                            Создать героя
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar