import React from 'react';
import './Place.css'
import Carousel from 'react-bootstrap/Carousel';

const Place = ({ place }) => {
    const { name, details, picture } = place;
    console.log(place);


    return (

        <Carousel.Item >
            <div className=' d-flex justify-content-center align-items-center mb-4 '>
                <div className=' w-50 p-5'>
                    <h3>{name}</h3>
                    <p>{details}</p>
                </div>
                <div className='card-img-info' >
                    <img src={picture} className="card-img d-block" alt="..." />
                    <h3 className=' card-text'>{name}</h3>
                </div>
            </div>
        </Carousel.Item>




    );
};

export default Place;