import React from 'react';
import './Checkout.css'

const Checkout = () => {
    return (
        <div className="w-50 mx-auto mt-5">
            <div className="mb-3">
                <label for="exampleFormControlInput1" className=" fw-bolder fs-5 text-success form-label">Your Name :</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder=""/>
                <label for="exampleFormControlInput1" className="fw-bolder fs-5 text-success form-label">Your Phone No :</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder=""/>
                <label for="exampleFormControlInput1" className="fw-bolder fs-5 text-success form-label"> Your Address :</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder=""/>
                <label for="exampleFormControlInput1" className="fw-bolder fs-5 text-success form-label"> Delivery Point :</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder=""/>
                </div>
                <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="fw-bolder fs-5 text-success form-label"> Anything Want To Say  </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                <button className="btn btn-outline-success mt-4 fw-bolder fs-5 px-5 py-2 rounded-pill m-auto" type="submit"> Confirm Order  </button>
             </div>
        </div>
        
    );
};

export default Checkout;