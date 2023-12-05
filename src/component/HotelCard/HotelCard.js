import React from 'react';
import './HotelCard.css';



const HotelCard = ({ singleHotel }) => {
    const { name, about, picture } = singleHotel;
    return (

        <div>
            <div className="card mb-3 cart-container" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={picture} className="img-fluid rounded-start card-image" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p>{about.slice(0, 250)}</p>
                            <button className=' btn btn-primary w-100'>Confirm Booking</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HotelCard;