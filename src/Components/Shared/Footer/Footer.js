import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <section className="footer mt-5 pt-5 ">
        <div className="conteinar footer-row bg-dark p-5">
        
        <div className="product">
            <h3 className="orange">Our Product</h3>
            <p className='text-white'>Our recent Product</p>
            <p className='text-white'>Our Old Fasion product</p>
            <p className='text-white'>Our Rejected Product</p>
            <p className='text-white'>Our Dicount Avaiable Product</p>
            <p className='text-white'> Our Customization Product</p>

        </div>
        <div className="product">
            <h3 className="orange"> Our Product </h3>
            <p className='text-white'>Our recent Product</p>
            <p className='text-white'>Our Old Fasion product</p>
            <p className='text-white'>Our Rejected Product</p>
            <p className='text-white'>Our Dicount Avaiable Product</p>
            <p className='text-white'> Our Customization Product</p>

        </div>
        <div className="product">
            <h3 className="orange">Our Product</h3>
            <p className='text-white'>Our recent Product</p>
            <p className='text-white'>Our Old Fasion product</p>
            <p className='text-white'>Our Rejected Product</p>
            <p className='text-white'>Our Dicount Avaiable Product</p>
            <p className='text-white'> Our Customization Product</p>

        </div>
        <div className="mail">
            <h3 className="orange">abir@gmail.com</h3>
            <h3 className="orange">esrah@gmail.com</h3>
            <h3 className="orange">company@gmail.com</h3>
            

        </div>
        <div>
            <button className="btn btn-outline-danger fw-bolder fs-5 px-5 py-3 mt-5 " type="submit"> See Products </button>
        </div>
    </div>
    </section>
    );
};

export default Footer;