import React from 'react'
import { useLoader } from '../../context/LoaderContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
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
    <Card style={{ width: '40%', height:'350px', marginRight:'50px', marginLeft:'530px', marginBottom:'20px', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)'}}>
    <Card.Body>
    <form>
      <div className='divContainer'>
        <label className='labelText' htmlFor="email">Email</label>
        <br/>
        <input
          type="email"
          id="email"
          placeholder='Email'
          value={email}
          style={{ width: '90%', padding: '8px', marginBottom: '30px', borderRadius:"10px", border:"1px solid #A9A9A9", textAlign:'center' }}
          onChange={(e) => {setEmail(e.target.value);
        }}
         
          errorMessage={error.email}
        />
      </div>
      <div className='divContainer'>
        <label htmlFor="password" className='labelText'>Password</label>
        <br/>
        <input
          type="password"
          id="password"
          placeholder='Password'
          value={password}
          style={{ width: '90%', padding: '8px', marginBottom: '30px', borderRadius:"10px", border:"1px solid #A9A9A9", textAlign:'center' }}
          onChange={(e) => {setPassword(e.target.value);
        }}
          errorMessage={error.password}
        />
      </div>

      <button
        type="button"
        style={{
          backgroundColor: '#9F678C',
          color: 'white',
          width:'50%',
          padding:'10px',
          border:'none',
          cursor:'pointer',
          borderRadius:'7px'
        }}
        onClick={handleLogin}
      >
        Log in
      </button>
      <div className='noAccount'>
      <p>
      Do not have an account?     
       <span onClick={(e) => {
                        e.preventDefault();
                        navigate("/signup");
                      }} className='textClick'>Register</span> 
       </p>
     </div>
    </form>
    </Card.Body>
    </Card>
    <ToastContainer />
  </div>
  )
}

export default Login

