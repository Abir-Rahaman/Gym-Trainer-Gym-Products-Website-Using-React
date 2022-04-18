import React from 'react';
import notFound from '../../../src/Images/notfound.jpg'

const Notfound = () => {
    return (
        <section className='ms-5 ps-5 containe'>
                <div className='ms-5 ps-5 d-flex'>
                    <img className='ps-5 ms-5 w-50' src={notFound} alt="" />
            </div>
            </section>
    );
};

export default Notfound;