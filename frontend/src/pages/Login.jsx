
import React, { useState , useContext} from 'react'
import axios from 'axios';
import Footer from '../components/Footer';
import  { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [error ,setError] = useState(null);
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {login} = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      const response = await axios.post("https://employee-api-eight.vercel.app/api/auth/login",{ email ,password });
      if(response.data.success){
        login(response.data.user)
        localStorage.setItem("token",response.data.token)
        if(response.data.user.role === 'admin'){
          
          navigate("/admin-dashboard"); 
          
        }
        else{
          
          navigate("/employee-dashboard");
          
        }
      }
    }
    catch(error){
      
      if(error.response && !error.response.data.success){
       setError(error.response.data.error)
      } else {
        setError("Server Error"); 
      }
    }
  }


  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-b from-teal-600 from-50% to-gray-100 to-50% space-y-6'>
      <h2 className='font-sevillana text-3xl text-white pacifico-regular'>Employee Management System</h2>
        <div className='border shadow p-6 w-80 bg-white'>
          <h2 className='text-2xl font-bold mb-4'></h2>
        {error ? <p className='text-xs text-red-600'>{error}</p> : ""}
        <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700'>Email</label>
          <input className='w-full px-3 py-2 border' type="text" placeholder='Enter your Email' onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 '>Password</label>
          <input className='w-full px-3 py-2 border'type="text" placeholder='******' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
         
         <div className='flex gap-6'>
          <div className='flex text-sm items-center justify-between gap-2'>
           <input type="checkbox" id="remember" />
           <label htmlFor="remember">Remember me</label>
           </div>
           <a href="" className='text-sm text-teal-400'>Forgot Password?</a>
         </div>
         <button className='w-full px-4 py-2 mt-4 text-white bg-teal-700 hover:bg-teal-400 hover:text-gray-600 transition-all duration-200'>login</button>
        </form>
        </div>
      <Footer />
      </div>
      
   
  )
}

export default Login
