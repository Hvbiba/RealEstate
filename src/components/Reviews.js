import React, { useEffect, useState } from "react";
import Form from "./Form";

export default function Reviews(){
    const [review , setReview] = useState([])
    async function fetchData(){
        const url = 'https://66c1868cf83fffcb5879810d.mockapi.io/reviews';
        const options = {
        method: 'GET',
        headers: {
        'x-rapidapi-key': 'b2d63c3c9dmsh242a400ff5403edp13db23jsn5dfc46d56916',
        'x-rapidapi-host': 'realty-in-us.p.rapidapi.com'
        }
        };

        try {
        const response = await fetch(url, options);
        const result = await response.text();
        const data = JSON.parse(result)
        console.log(data);
        setReview(data);
        } catch (error) {
        console.error(error);
        }
        }
        useEffect(()=>{
            fetchData();
        },[]);
        return (
            <div className="container my-4">
                <h3>Reviews from Our Happy Customers <i className="fa fa-smile-o" aria-hidden="true"></i></h3>
                <div className="reviews-section d-flex">
                <div id="reviews" className="row w-50">
                    {
                        review.length>0?(
                        review.map((card, index) => (
                            <div className="card" key={index}>
                                <img src="https://static.rdc.moveaws.com/rdc-ui/spots/spot-agent.svg" id ='user-img'className="card-img-top" alt="Customer review" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{card.display_name}</h5>
                                    <p className="card-text">{card.comment.slice(0, 40)} ...</p>
                                    <h6>Since: {card.year}</h6>
                                    <img src={`https://supersimple.dev/projects/amazon/images/ratings/rating-${card.rating}.png`} className="rate-img"/>
                                </div>
                            </div>
                        ))
                        ):null
                    }
                </div>
                    <Form />
                </div>
            </div>
        );
        
    }

  