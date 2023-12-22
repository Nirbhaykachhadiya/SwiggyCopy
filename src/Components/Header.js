import React from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'

const Header = () => {
  const onlineStatus=useOnlineStatus()
  return (
    <div className='main-header flex h-24   justify-between bg-pink-200 shadow-2xl sm:bg-yellow-300 lg:bg-green-300'>
      <div className='logo font-bold text-2xl flex items-center pl-10' >logo</div>
      <div className='navbar flex  justify-between items-center pr-10' >
            <ul className=' flex justify-between pr-5'>
                <li className='  text-xl  underline'>{onlineStatus?"green":"false"}</li>
                <li  className='pl-4 text-xl underline'><Link to="/Instamart">Instamart</Link></li>
                <li  className='pl-4 text-xl underline'><Link to="/">Home</Link></li>
                <li  className='pl-4 text-xl underline'><Link to="/About">About</Link></li>
                <li  className='pl-4 text-xl underline'><Link to="/">Cart</Link></li>
            </ul>
            <button className=' pl-5 text-xl border-black border rounded-md shadow-2xl bg-slate-100	'><h1 className='pr-5 pb-1'>Login</h1></button>
        </div>
    </div>
  )
}

export default Header