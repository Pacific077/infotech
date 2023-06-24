import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css"
 const Header =()=>{
    return(
        <div className="header">
            <h4 className="Brandname">INFOTECH</h4>
            <nav className="navbar">
                <Link className="noline" to={"/"}>Home</Link>
                <Link className="noline" to={"/contact"}>Contact</Link>
                <a className="noline" href="/#about">About</a>
                <a className="noline" href="/#brands">Brands</a>
                <Link className="noline" to={"/services"}>Services</Link>
            </nav>
        </div>
    )
 };

 export default Header;
