import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import './SignIn.css'

const SignIn = () => {
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth , {sendEmailVerification :true});
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [confirmPass , setConfirmPass] = useState("");
    const [error , setError] = useState("");
    const navigate = useNavigate();


    const handleName = event => {
        setName (event.target.value);
    }
    const handleEmail = event => {
        setEmail (event.target.value);
    }
    const handlePass = event => {
        setPassword (event.target.value);
    }
    const handleConfirmPass = event => {
        setConfirmPass (event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if(password !== confirmPass){
            setError("Didn't Match The Password")
            return;

        }
        if(password.length <= 6 ){
            setError (" Password should be six characters ")
        }
        createUserWithEmailAndPassword(email,password);
    }

    if (user){
        navigate("/") 
    }

    return (
        <div className="signup-banner mt-5">
           <button onClick={() =>signInWithGoogle()}  className="btn  d-block mx-auto btn-outline-danger px-5 fw-bolder fs-5"> Sign in with Google </button>
        <form onSubmit={handleCreateUser} className='w-25 mx-auto pt-5' >
            <h4 className='text-center fw-bolder text-success '> SignUp In to RexXFit </h4>
            <div className="mb-3">
                <label for="exampleInput" className="form-label text-success fw-bolder"> Your Name</label>
                <input onBlur={handleName} type="text" className="form-control" required id="exampleInput" aria-describedby="Help"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label text-success fw-bolder">Email address</label>
                <input onBlur={handleEmail} type="email" className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label text-success fw-bolder">Password</label>
                <input onBlur={handlePass} type="password" className="form-control" required id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label text-success fw-bolder">Confirm Password</label>
                <input onBlur={handleConfirmPass} type="password" className="form-control" required id="exampleInputPassword2"/>
            </div>
            <p className='text-center text-danger fw-bolder' > {error} </p>
            <div className=" mb-3 ">
                <Link className='text-decoration-none d-block mt-3 text-center text-success fw-bolder' to='/login'> Already Have An Account ?  Log In </Link>
            </div>
            <button  type="submit" className="btn btn-outline-success d-block mx-auto px-5 fw-bolder fs-5"> Register </button>
        </form>
        </div>
    );
};

export default SignIn;