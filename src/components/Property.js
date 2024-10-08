import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Property() {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function fetchData(key) {
        fetch(`https://run.mocky.io/v3/${key}`)
            .then((res) => res.json())
            .then((data) => {
                const foundProperty = data.find(item => item.property_id === id);
                if (foundProperty) {
                    setProperty(foundProperty);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setError('Error fetching property data');
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        const keys = [
            'eefcfaf7-6518-4e33-8b26-854df7d4fb51', // rechange home key api
            '820156ff-8df2-49f5-a305-355b57929f7c', // rechange rent key api
            'b1e96e86-146f-45b7-8d86-cd206d52abf3' // rechange sell key api
        ];

        for (const key of keys) {
            if (property) break;
            fetchData(key);
        }
    }, [id]);

    if (loading) return <i className="fas fa-spinner fa-spin" id="loadingIcon"></i>;

    return (
        <div>
            {property ? (
                <div className='container d-flex' id='property'>
                     <img src={property.photo} alt={property.description} />
                    <div className='container my-5 p-3 ' id='info'>
                        <h3 className='p-1'>{property.address}</h3>
                        <p className='text-secondary'>
                            {property.description}
                            <br></br>
                            Year Built: {property.year_built}
                        </p>
                        <h5>Price: <span className='text-danger'>${property.price}</span></h5>
                        <h5>{property.beds} Beds | {property.baths} Baths | {property.sqft} Sqft</h5>
                        {property.rental_type &&(
                            <>
                                <h5>Rental Type: {property.rental_type}</h5>
                            </>
                        )
                        }
                        {property.sold_out!== undefined && (
                        <h5>
                            Property: 
                            <span className={property.sold_out === true ? 'text-danger' : 'text-success'}>
                                {property.sold_out === true ? ' Sold Out' : ' Available'}
                            </span>
                        </h5>
                        )}
                        {property.seller && (
                            <>
                                <h5>About Seller :</h5>
                                <div className='d-flex' id='contacts'>
                                    <button type='button' className="btn btn-outline-dark m-1">{property.seller.name}</button>
                                    <button type='button' className="btn btn-outline-dark m-1">{property.seller.phone}</button>
                                    <button type='button' className="btn btn-outline-dark m-1">{property.seller.contact}</button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            ) : (
                <p>Property not found</p>
            )}
        </div>
    );
}
