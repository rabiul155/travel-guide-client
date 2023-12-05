import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Home.css';

import Carousel from 'react-bootstrap/Carousel';


const Home = () => {

    const places = useLoaderData();

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };



    return (
        <div className='mt-5 home-content'>
            <Carousel className='mt-5 pt-3' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className=' d-flex justify-content-center align-items-center mb-4 '>
                        <div className=' w-50 p-5'>
                            <h3>{places[0].name}</h3>
                            <p>{places[0].details}</p>
                        </div>
                        <Link to={`/booking/${places[0].id}`} className='card-img-info' >
                            <img src={places[0].picture} className="card-img d-block" alt="..." />
                            <h3 className=' card-text text-white'>{places[0].name}</h3>
                        </Link>
                    </div>

                </Carousel.Item>
                <Carousel.Item >
                    <div className=' d-flex justify-content-center align-items-center mb-4 '>
                        <div className=' w-50 p-5'>
                            <h3>{places[1].name}</h3>
                            <p>{places[1].details}</p>
                        </div>
                        <Link to={`/booking/${places[1].id}`} className='card-img-info' >
                            <img src={places[1].picture} className="card-img d-block" alt="..." />
                            <h3 className=' card-text text-white'>{places[1].name}</h3>
                        </Link>
                    </div>

                </Carousel.Item>
                <Carousel.Item >
                    <div className=' d-flex justify-content-center align-items-center mb-4 '>
                        <div className=' w-50 p-5'>
                            <h3>{places[2].name}</h3>
                            <p>{places[2].details}</p>
                        </div>
                        <Link to={`/booking/${places[2].id}`} className='card-img-info' >
                            <img src={places[2].picture} className="card-img d-block" alt="..." />
                            <h3 className=' card-text text-white'>{places[2].name}</h3>
                        </Link>
                    </div>

                </Carousel.Item>
                <Carousel.Item >
                    <div className=' d-flex justify-content-center align-items-center mb-4 '>
                        <div className=' w-50 p-5'>
                            <h3>{places[3].name}</h3>
                            <p>{places[3].details}</p>
                        </div>
                        <Link to={`/booking/${places[3].id}`} className='card-img-info' >
                            <img src={places[3].picture} className="card-img d-block" alt="..." />
                            <h3 className=' card-text text-white '>{places[3].name}</h3>
                        </Link>
                    </div>

                </Carousel.Item>
                <Carousel.Item >
                    <div className=' d-flex justify-content-center align-items-center mb-4 '>
                        <div className=' w-50 p-5'>
                            <h3>{places[4].name}</h3>
                            <p>{places[4].details}</p>
                        </div>
                        <Link to={`/booking/${places[4].id}`} className='card-img-info' >
                            <img src={places[4].picture} className="card-img d-block" alt="..." />
                            <h3 className=' card-text text-white'>{places[4].name}</h3>
                        </Link>
                    </div>

                </Carousel.Item>
                <Carousel.Item >
                    <div className=' d-flex justify-content-center align-items-center mb-4 '>
                        <div className=' w-50 p-5'>
                            <h3>{places[5].name}</h3>
                            <p>{places[5].details}</p>
                        </div>
                        <Link to={`/booking/${places[5].id}`} className='card-img-info' >
                            <img src={places[5].picture} className="card-img d-block" alt="..." />
                            <h3 className=' card-text text-white'>{places[5].name}</h3>
                        </Link>
                    </div>

                </Carousel.Item>



                {/* {
                    places?.map(place => <Place
                        key={place.id}
                        place={place}
                    ></Place>)
                } */}


            </Carousel>


        </div>


    )
};

export default Home;