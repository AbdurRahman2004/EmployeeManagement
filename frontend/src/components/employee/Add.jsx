import React, { useEffect, useState } from 'react'
import { fetchDepartments } from '../../utils/EmployeeHelper'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Add = () => {
   const [departments , setDepartments] = useState([])
   const [formData , setFormData] = useState({})
   const navigate = useNavigate()

    useEffect(()=>{
        const getDepartments = async () => {
        const departments =await  fetchDepartments()
        setDepartments(departments)
        };
        getDepartments();
    },[])

    const handleChange = (e) => {
      const {name , value , files} = e.target;
      if(name === "image"){
         setFormData((prevData)=> ({...prevData , [name]:files[0]}))
      }
      else{
         setFormData((prevData)=> ({...prevData , [name]:value}))
      }
    }
    const handleSubmit = async (e) => {
      e.preventDefault()
      const formDataObj = new FormData()
      Object.keys(formData).forEach((key)=>{
         formDataObj.append(key,formData[key])
      })
      try{
         const response = await axios.post('https://employee-api-eight.vercel.app/api/employee/add',formDataObj,{
           headers : {
              "Authorization": `Bearer ${localStorage.getItem('token')}` ,
               'Content-Type': 'multipart/form-data'
           }
         })

         if(response.data.success){
             navigate("/admin-dashboard/employees")
         }
       }catch(error){
           if(error.response && error.response.data.success){
               alert("You Cant Add")
           }
       }
    }
  return (
    <div className='max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
        <h2 className='text-2xl font-bold mb-6'>Add new Employees</h2>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {/* Name */}
         <div>
            <label className='block text-sm font-medium text-gray-700'>Name</label>
            <input type="text" name="name" placeholder='Insert name' 
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            onChange={handleChange}
            required/>
         </div>
         {/* Email */}
         <div>
            <label className='block text-sm font-medium text-gray-700'>Email</label>
            <input type="email" name="email" placeholder='Insert email' 
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            onChange={handleChange}
            required/>
         </div>

        {/* Employee Id */}
        <div>
            <label className='block text-sm font-medium text-gray-700'>Employee Id</label>
            <input type="text" name="employeeId" placeholder='Employee Id' 
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            onChange={handleChange}
            required/>
         </div>
         {/* Date of Birth */}
         <div>
            <label className='block text-sm font-medium text-gray-700'>DOB</label>
            <input type="date" name="dob" placeholder='DOB' 
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            onChange={handleChange}
            required/>
         </div>
         {/* Gender */}
         <div>
            <label className='block text-sm font-medium text-gray-700'>Gender</label>
            <select name="gender" className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>

            </select>
         </div>
         {/* Marital Status */}
         <div>
            <label className='block text-sm font-medium text-gray-700'>Marital Status</label>
            <select name="maritalStatus" className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            onChange={handleChange}>
                <option value="">Select Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
            </select>
         </div>
         {/* Designation */}
         <div>
            <label className='block text-sm font-medium text-gray-700'>Designation</label>
            <input type="text" name="designation" placeholder='DOB' 
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            onChange={handleChange}
            required/>
         </div>
         {/* Department */}
         <div>
         <label className='block text-sm font-medium text-gray-700'> Department</label>
            <select name="department" className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            onChange={handleChange}>
                <option value="">Select Department</option>
                {departments.map((department)=> <option key={department._id} value={department._id} >{department.dep_name }</option>)}
                
            </select>
         </div>
         {/* Salary */}
         <div>
            <label className='block text-sm font-medium text-gray-700'>Salary</label>
            <input type="number" name="salary" placeholder='salary' 
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            onChange={handleChange}
            required/>
         </div>
         {/* Password */}
         <div>
            <label className='block text-sm font-medium text-gray-700'>Password</label>
            <input type="password" name="password" placeholder='*****' 
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            onChange={handleChange}
            required/>
         </div>

         {/* Role */}
         <div>
            <label className='block text-sm font-medium text-gray-700'>Role </label>
            <select name="role" className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            onChange={handleChange}>
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
            </select>
         </div>
         {/* Image */}
         <div>
            <label className='block text-sm font-medium text-gray-700'>Upload Image</label>
            <input type="file" name="image" placeholder='Upload Image' 
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            onChange={handleChange}
            required/>
         </div>
        </div>
        <button type='submit' className='w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded'>Add Employee</button>
      </form>
    </div>
  )
}

export default Add
