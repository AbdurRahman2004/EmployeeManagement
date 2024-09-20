import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
    const [user , setUser] = useState('Admin');
    const [signIn , setSignIn] = useState('Sign In');
    const navigate = useNavigate();
  return (
    <div className='bg-turquoise text-white'>
    <div className='flex  justify-between items-center py-4 mx-6 border-b '>
       <div className='flex flex-col justify-center md:flex-row gap-10'>
           <img className='w-32 cursor-pointer' src={assets.logo} alt="" />
           <p className='font-medium text-xl prata-regular'> Welcome, {user} !</p>
       </div>
       <button onClick={()=>navigate('/login')} className=' border py-2 px-4 rounded bg-gray-700 text-white'>{signIn}</button>
    </div>
    </div>
  )
}

export default Navbar
