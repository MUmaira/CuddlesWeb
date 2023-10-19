import React from 'react'
import { useLoader } from '../../context/LoaderContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getErrorMessage } from '../../utils/errorMessages';
import { auth, db, doc, setDoc, getDocs } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/Login.css'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({ email: '', password: '' });
    const { isLoading, setIsLoading } = useLoader();
    const navigate = useNavigate();

    const handleLogin = async () => {
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
        toast.error(`Email is required`);
        setError((prevError) => ({ ...prevError, email: 'Email is required' }));
        return;
    }else if (!emailRegex.test(email)) {
        toast.error(`Please enter a valid email`);
        setError((prevError) => ({
          ...prevError,
          email: 'Please enter a valid email.',
        }));
        return;
    }

      if (!password) {
        toast.error(`Password is required`);
        setError((prevError) => ({
          ...prevError,
          password: 'Password is required',
        }));
        return;
      }
      setError({ email: '', password: '' });
  
      setIsLoading(true);

      try {
        const loggedUser = await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        //  toast.success(`Successfully logged in`);
        })         
       // navigate('/dashboard')
      } catch (error) {
        error && setIsLoading(false);
        const errorCode = error.code;
        const errorMessages = getErrorMessage(errorCode);
        toast.error(`Log in failed`);
        setError((prevError) => ({
          ...prevError,
          email: errorMessages.email,
          password: errorMessages.password,
        }));
      }
    };

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          navigate('/dashboard');
        }
      });
      return unsubscribe;
    }, []);
    
  return (
    <div>
    <h2 className='loginTitle'>Log into your account</h2>
    <form>
      <div className='divContainer'>
        <label className='labelText' htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="loginInput"
          value={email}
          onChange={(e) => {setEmail(e.target.value);
        }}
         
          errorMessage={error.email}
        />
      </div>
      <div className='divContainer'>
        <label htmlFor="password" className='labelText'>Password</label>
        <input
          type="password"
          id="password"
          className="loginPassword"
          value={password}
          onChange={(e) => {setPassword(e.target.value);
        }}
          errorMessage={error.password}
        />
      </div>

      <button
        type="button"
        className="loginButton"
        style={{
          backgroundColor: '#9F678C',
          color: 'white',
        }}
        onClick={handleLogin}
      >
        Log in
      </button>
      <div className='noAccount'>
      <p>
      Dont have an account?     
       <span onClick={(e) => {
                        e.preventDefault();
                        navigate("/signup");
                      }} className='textClick'>Register</span> 
       </p>
     </div>
    </form>
    <ToastContainer />
  </div>
  )
}

export default Login

