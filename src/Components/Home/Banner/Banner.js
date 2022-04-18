import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='full-banner pt-5'>
          <h1 className='text-danger banner-title p-5 fw-bolder'> RexX Fit . </h1>
          <h1 className='text-danger banner-title ps-5 m-auto '> Physical Fitness Is Very Important. </h1>
          <button className="btn btn-outline-danger fw-bolder fs-5 px-5 py-3 p m-5 " type="submit"> Contact Us</button>
        </div>
    );
};

export default Banner;