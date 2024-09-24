import React, { useState } from 'react'

const SingIn = () => {
  const [error ,setError] = useState(true);
  return (
    <div className='h-screen bg-teal-400 flex justify-center items-center'>
      <div className='flex flex-col bg-white p-8 items-center justify-center'>
        <h1 className='font-semibold'>Login</h1>
        {error ? <p className='text-xs text-red-600'>Invalid credential</p> : ""}
        <div className='flex flex-col  '>
          <label className='text-gray-500'>Email</label>
          <input className='px-3 py-2 w-3/4  border'type="text" name="" id="" />
        </div>
        <div className='flex flex-col  '>
          <label className='text-gray-500'>Password</label>
          <input className='px-3 py-2 w-3/4  border'type="text" name="" id="" />
        </div>
        </div>

      </div>
      
   
  )
}

export default SingIn
