import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Services.css'

const Services = () => {
    const [services , setServices] = useState([])
    useEffect(() => {
        fetch("servicesData.json")
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div>
            <h1 className='text-center text-danger fw-bolder mt-5 pt-5' > OUR EXCLUSIVE SERVICES. </h1>
            <div className="service-section mt-5 ps-5 ms-5   ">
         
              {
                   services.map( service => <ServiceDetails key={service.id} service={service} > </ServiceDetails>  )
             }      

            </div>
        </div>
    );
};

export default Services;
