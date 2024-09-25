import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
    const [user , setUser] = useState('Admin');
    const [signIn , setSignIn] = useState('Sign In');
    const navigate = useNavigate();
  return (
    <div className='flex justify-between items-center text-white h-12 bg-teal-600 px-5'>
      <p>Welcome Admineyy!</p>
      <button className='px-4 py-1 bg-teal-700  rounded'>Logout</button>
    </div>
  )
}

export default Navbar
