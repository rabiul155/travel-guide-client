import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HotelCard from '../HotelCard/HotelCard';
import './Hotel.css'

const Hotel = () => {

    const hotel = useLoaderData();
    console.log(hotel);
    return (
        <div className=' hotel'>
            <h2 className=' m-3'>Available Hotel</h2>
            <div className=' m-3'>
                {
                    hotel.map(singleHotel => <HotelCard
                        key={hotel.id}
                        singleHotel={singleHotel}
                    ></HotelCard>)
                }
            </div>
        </div>
    );
};

export default Hotel;