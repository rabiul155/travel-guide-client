import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Booking.css';

const Booking = () => {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState(null);
    const bookingPlace = useLoaderData();
    const { index, name, details } = bookingPlace;
    console.log(index);

    return (
        <div className=' booking-content'>
            <div className=' d-flex justify-content-center align-items-center mt-5  p-5'>
                <div className=' w-50 m-5 pe-5'>
                    <div className=' pe-5'>
                        <h1> {name}</h1>
                        <p>{details}</p>
                    </div>
                </div>
                <div className=' border border-warning py-4 px-3 bg-dark bg-opacity-50 w-25'>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Origin</Form.Label>
                            <Form.Control className='fw-bold search-field' type="text" placeholder="Enter Your Origin" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control className='fw-bold search-field' type="text" defaultValue={name} placeholder="" />
                        </Form.Group>
                        <div className=' d-flex justify-content-between mb-3'>
                            <div>
                                <Form.Label>From</Form.Label>
                                <DatePicker className='search-field w-75' selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                            <div>
                                <Form.Label>To</Form.Label>
                                <DatePicker className='search-field w-75' selected={endDate} onChange={(date) => setEndDate(date)} />
                            </div>

                        </div>

                        <Link to={`/hotel/${index}`} className=' w-100 btn btn-primary ' variant="primary" type="submit">
                            Start Booking
                        </Link>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Booking;