import React from "react";
import "../styles/brands.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// import { Link } from "react-router-dom";
// import { faIconName } from '@fortawesome/free-solid-svg-icons';
const Brands =(props)=>{
    return(
        <div  className = {props.className}>
         <FontAwesomeIcon icon={props.icon}  size="2xl"/>
         <p>{props.brand}</p>
        </div>
    )
}
export default Brands;