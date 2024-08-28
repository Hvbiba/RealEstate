import React from "react";
import './Home.css'

export default function Section(){
    return(
        <div className="home-section">
             <img src="https://static.rdc.moveaws.com/images/hero/default/2021-11/webp/hp-hero-desktop-xl-2x.webp" className="w-100" />
            <div className="container text-center text-light">
                <h1>Your Journey to the Perfect Home Starts Here</h1>
                <p className="large-text"> Whether you're looking to buy, sell, or rent, 
                our comprehensive listings and expert advice will 
                guide you every step of the way. Explore a wide range of
                properties tailored to your needs and preferences. 
                From cozy apartments to luxurious estates, we have something for 
                everyone. Start your real estate journey with us today 
                and find the perfect place to call home.</p>
            </div>
           
        </div>
    );
}