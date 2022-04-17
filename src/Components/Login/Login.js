import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Login.css'



const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword,user,error,loading] = useSignInWithEmailAndPassword(auth);
    const location =useLocation();

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    let from = location.state?.from?.pathname || "/";

    const handleEmail = event =>{
        setEmail(event.target.value)
    }
    const handlePassword = event =>{
        setPassword(event.target.value)
    }
    const handleSignIn = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    const navigate = useNavigate();
    
    if(user){
        navigate(from, { replace: true });
    }

    
    
   

    return (
     <div className="login-banner mt-5">
           <button onClick={() =>signInWithGoogle()}  className="btn d-block mx-auto btn-outline-danger px-5 fw-bolder fs-5"> Sign in with Google </button>
        <form onSubmit={handleSignIn} className='w-25 mx-auto mt-5' >
            <h4 className='text-center fw-bolder text-success mb-4'> Log In to RexXFit </h4>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label text-success fw-bolder">Email address</label>
                <input onBlur={handleEmail} type="email" className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp"/>
               
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label text-success fw-bolder">Password</label>
                <input onBlur={handlePassword} type="password" className="form-control" required id="exampleInputPassword1"/>
            </div>

            <div className=" mb-3 ">
                <Link className='pe-4 ms-5' to='/reset'> Reset password ? </Link>
                <Link to='/forgot'> Forgot Password ? </Link>
                <Link className='text-decoration-none d-block mt-3 text-center text-success fw-bolder' to='/signup'> New? Create An Account </Link> 
            </div>  
            <button type="submit" className="btn btn-outline-success d-block mx-auto px-5 fw-bolder fs-5"> Log In</button>
        </form>
        </div>

    );
};

export default Login;