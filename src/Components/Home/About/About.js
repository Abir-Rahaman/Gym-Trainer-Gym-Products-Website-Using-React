import React from 'react';
import './About.css'
import profile from '../../../Images/profile.png'

const About = () => {
    return (
        <div className='profile-info container'>
            <img className='rounded-pill w-25 ' src={profile} alt="" />
            <h5 className='text-center mt-5 pt-5 fw-bolder'> Assalamuilaikum , I am Abir Rahaman . I study in Daffodil International University . My background is CSE and I Wanna Be Software Developer. I hope within 2 years I will Achieve My goal. Thank You. </h5>
        </div>
    );
};

export default About;