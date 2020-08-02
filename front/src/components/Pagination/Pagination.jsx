import React from "react";
import {NavLink} from "react-router-dom";

const Pagination = (props) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(props.totalSuperHero / 5); i++) {
        pageNumbers.push(i)
    }
    return (
       <div style={{position: 'absolute', bottom: '5%', left: '45%'}}>
           <ul className={"pagination"}>
               {pageNumbers.map(number => (
                   <li className="active" style={{marginLeft: 5}} key={number}>
                       <NavLink to={'/' + number}>{number}</NavLink>
                   </li>
               ))}
           </ul>
       </div>
    )
}


export default Pagination