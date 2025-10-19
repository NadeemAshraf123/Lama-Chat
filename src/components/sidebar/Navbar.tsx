import React from 'react'
import car6 from '../../assets/car6.jpeg';
const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>
            Lama Chat
        </span>
        <div className='user'>
            <img src={car6} alt=''  />
            <span>Jhon</span>
            <button>logout</button>
        </div>
        </div>
  )
}

export default Navbar