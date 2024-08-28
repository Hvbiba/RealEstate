import React from "react";

export default function Services(){
    const servicesObj = [
        {
            img:'https://static.rdc.moveaws.com/rdc-ui/spots/spot-property-making-an-offer.svg',
            title:'Ideal Listings',
        },
        {
            img:'https://static.rdc.moveaws.com/rdc-ui/spots/spot-money-stack.svg',
            title:'Smart Savings',
        },
        {
            img:'https://static.rdc.moveaws.com/rdc-ui/spots/spot-agent.svg',
            title:'Seamless Experience',
        },
        {
            img:'https://static.rdc.moveaws.com/rdc-ui/spots/spot-calculator.svg',
            title:'Service Help',
        },
        {
            img:'https://static.rdc.moveaws.com/rdc-ui/spots/spot-sell.svg',
            title:'Perfect Home for You',
        },
        {
            img:'https://static.rdc.moveaws.com/rdc-ui/spots/spot-rent.svg',
            title:'Your Dream Home',
        }
    ];
    return(
        <div className="container my-4">
            <h3>Essential Real Estate Services to Meet Your Needs.</h3>
            <div id="services">
            {
                servicesObj.map((card ,index) =>(
                    <div className="card text-center" key={index}>
                        <img src={card.img} className="card-img-top" alt={card.title} />
                        <div className="card-body">
                            <h5 className="card-title">{card.title}</h5>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}