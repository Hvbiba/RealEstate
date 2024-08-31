import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Buy() {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate(); // To navigate to the Property page

    async function fetchData() {
         const url = 'https://run.mocky.io/v3/c93aae39-b77f-4a47-82c8-453ca973ddde';
         const options = {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
             }
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleClick = (id) => {
        navigate(`/property/${id}`);
    };

    return (
        <div className="container my-4">
            <h4>Find Your Dream Property Today</h4>
            <div className="container p-3" id="container">
                {isLoading ? (
                    <i className="fas fa-spinner fa-spin" id="loadingIcon"></i>
                ) : (
                    data.map((card) => (
                        <div key={card.property_id} className="card mb-3 bg-light" onClick={() => handleClick(card.property_id)}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={card.photo} className="img-fluid rounded-start" alt={card.property_id} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title text-dark">{card.address}</h5>
                                        <p className="card-text text-body-secondary">{card.description}</p>
                                        <h5>Price: <span className="text-danger">${card.price}</span></h5>
                                        <h6>{card.beds} Rooms | {card.baths} Baths | {card.sqft} Area</h6>
                                        <p className="card-text"><small className="text-body-secondary">Built In {card.year_built}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Buy;
