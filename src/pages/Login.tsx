import React from 'react'
import { useNavigate } from 'react-router-dom'



const Login = () => {

    const navigate = useNavigate();

    
  return (
    <div className='formContainer'>
    <div className='formWrapper'>
        <span className='logo'>Lama Chat</span>
        <span className='title'>Register</span>
        <form>
            <input type='email'placeholder='email' />
            <input type='password' placeholder='password' />
            <button onClick={()=>{navigate('/home')}}>Sign in</button>
        </form>
        <p>You do have an account? Register</p>
    </div>
    </div>
  )
}

export default Login