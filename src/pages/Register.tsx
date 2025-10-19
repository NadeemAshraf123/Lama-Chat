import React from 'react'
import { useNavigate } from 'react-router-dom'



const Register = () => {

    const navigate = useNavigate();

  return (
    <div className='formContainer'>
    <div className='formWrapper'>
        <span className='logo'>Lama Chat</span>
        <span className='title'>Register</span>
        <form>
            <input type='text' placeholder='display name' />
            <input type='email'placeholder='email' />
            <input type='password' placeholder='password' />
            <input type='file' id='file' />
            <label htmlFor="file">
                <img src="" alt="" />
            </label>
            <button onClick={()=>{navigate('/login')}}>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
    </div>
    </div>
  )
}

export default Register