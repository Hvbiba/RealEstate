import React from "react";
import './Nav.css'
import { Link } from "react-router-dom";

export default function Logo(){
    return(
    <div className="container" id="logo">
        <Link to='/'>
            <img src="https://static.rdc.moveaws.com/rdc-ui/spots/spot-property-making-an-offer.svg"  alt='logo img'/>
        </Link>
      
    </div>
    );
}

