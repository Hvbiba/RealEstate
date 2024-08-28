import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Rent(){
    const [sellProperties, setSellProperties] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchData = async () => {
        const url = 'https://run.mocky.io/v3/8ef0c379-2fa9-4d02-9721-93e3d50274de'; 
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setSellProperties(data);
            console.log(data)
        } catch (error) {
            console.error('Error fetching rental data:', error);
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    
    const handleClick = (id) => {
        navigate(`/property/${id}`);
    };
    return(
        <div className="container my-4">
        <h4>Sell Your Property with Ease</h4>
        <div className="container p-3" id="container">
            {isLoading ? (
                  <i className="fas fa-spinner fa-spin" id="loadingIcon"></i>
            ) : (
                sellProperties.map((card) => (
                    <div key={card.property_id} className="card mb-3 bg-light"
                        onClick={()=>handleClick(card.property_id)}
                    >
                        <div className="row g-0">
                            <div className="col-md-4" id="sold-style">
                                {card.sold_out ? <h6 className="sold-out text-light bg-danger p-2">Sold Out</h6> : null}
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
export default Rent;