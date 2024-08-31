import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Rent(){
    const [rental, setRentalProperties] = useState([]);
    const [isLoading , setLoading] = useState('true');
    const navigate = useNavigate();

    const fetchRentalData = async () => {
        const url = 'https://run.mocky.io/v3/084c1036-baab-44f4-8ef6-14ec3a5d519a'; 
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setRentalProperties(data);
            console.log(data)
        } catch (error) {
            console.error('Error fetching rental data:', error);
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRentalData();
    }, []);
    
    const handleClick = (id) => {
        navigate(`/property/${id}`);
    };

    return(
         <div className="container my-4">
            <h4>Discover Your Next Rental Property</h4>
            <div className="container p-3" id="container">
                {isLoading ? (
                      <i className="fas fa-spinner fa-spin" id="loadingIcon"></i>
                ) : (
                    rental.map((card) => (
                        <div key={card.property_id} className="card mb-3 bg-light"
                            onClick={()=>handleClick(card.property_id)}
                        >
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
                                        <h6>Rental Type: {card.rental_type}</h6>
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
