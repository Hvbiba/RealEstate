import React from "react";
import './Home.css'
import { Link } from "react-router-dom";

const Options = () => {
    const optionsObj = [
        {
            img: 'https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-agent-lg-1.webp',
            option: 'Buy a home',
            text: 'Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.',
            link: 'Browse Homes',
            href:'/buying'
        },
        {
            img: 'https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-sell-lg-1.webp',
            option: 'Sell a home',
            text: 'No matter what path you take to sell your home, we can help you navigate a successful sale ,navigate a successful sale.',
            link: 'See Your Options',
            href:'/selling'
        },
        {
            img: 'https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-rent-lg-1.webp',
            option: 'Rent a home',
            text: 'We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.',
            link: 'Find Rentals',
            href: 'renting'
        }
    ];

    return (
        <div className="container my-4" >
        <h3 className="text-dark">Unlock Your Real Estate Opportunities.</h3>
        <div id="display-options">
            {
                optionsObj.map((card, index) => (
                    <div className="card text-center" key={index}>
                        <img src={card.img} className="card-img-top" alt={card.option} />
                        <div className="card-body">
                            <h5 className="card-title">{card.option}</h5>
                            <p className="card-text">{card.text}</p>
                            <Link to={card.href} className="btn btn-outline-primary">{card.link}</Link>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
    );
}

export default Options;
