import React from 'react';
import { Link } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import './SignIn.css'

const SignIn = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    return (
        <div className="signup-banner mt-5">
           <button onClick={() =>signInWithGoogle()}  className="btn  d-block mx-auto btn-outline-danger px-5 fw-bolder fs-5"> Sign in with Google </button>
        <form className='w-25 mx-auto pt-5' >
            <h4 className='text-center fw-bolder text-success '> SignUp In to RexXFit </h4>
            <div className="mb-3">
                <label for="exampleInput" className="form-label text-success fw-bolder"> Your Name</label>
                <input type="text" className="form-control" id="exampleInput" aria-describedby="Help"/>
               
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label text-success fw-bolder">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
               
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label text-success fw-bolder">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label text-success fw-bolder">Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputPassword2"/>
            </div>
            <div className=" mb-3 ">
                <Link className='text-decoration-none d-block mt-3 text-center text-success fw-bolder' to='/login'> Already Have An Account ?  Log In </Link>
            </div>
 
            <button type="submit" className="btn btn-outline-success d-block mx-auto px-5 fw-bolder fs-5"> Register </button>
        </form>
        </div>
    );
};

export default SignIn;