import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = ({service}) => {
    const {name , img , description , price} = service;
    return (
        <div className="service-card w-75">
        <div className=" mx-auto  card w-75 border-0">
        <img src={img} className=" w-100 card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title text-center fw-bolder text-success">{name}</h5>
            <p className="card-text text-center">{description}</p>
            <h5 className='fw-bolder text-center '> Monthly Cost ${price} </h5>
            <Link to='/checkout'><button className="btn btn-outline-success mt-4 fw-bolder fs-5 px-3 py-2 rounded-pill m-auto" type="submit"> Choose & Payment </button> </Link>
            
        </div>
        </div>
        </div>
    );
};

export default ServiceDetails;