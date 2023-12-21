import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='main-div-header'>
        <div className='logo'>logo</div>
        <div className=' navbar'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/">Cart</Link></li>
            </ul>
            <button>Login</button>
        </div>
    </div>
  )
}

export default Header