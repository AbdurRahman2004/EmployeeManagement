import React, { useEffect, useState } from 'react'
import { fetchDepartments , getEmployees } from '../../utils/EmployeeHelper'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Add = () => {
   const [employee , setEmployee] = useState({
    employeeId : null,
    basicSalary : 0,
    allowances : 0,
    deductions : 0,
    payDate : null

   })
   const [departments , setDepartments] = useState([])
   const [employees , setEmployees] = useState([])
 
   const navigate = useNavigate()
   

   useEffect(()=>{
    const getDepartments = async () => {
    const departments =await  fetchDepartments()
    setDepartments(departments)
    };
    getDepartments();
},[])

const handleDepartment = async (e) => {
   const emps = await getEmployees(e.target.value)
   setEmployees(emps)
}

//    useEffect(()=>{
//             const fetchEmployee = async () =>{
//                 try{
//                     const response = await axios.get(`http://localhost:5000/api/employee/${id}`,{
//                         headers : {
//                             "Authorization" : `Bearer ${localStorage.getItem("token")}`
//                         }
//                     });
//                     if(response.data.success){
//                       const employee = response.data.employee;
//                       setEmployee((prev)=> ({...prev , name : employee.userId.name , maritalStatus : employee.maritalStatus,
//                        designation : employee.designation,
//                        salary : employee.salary,
//                        department : employee.department
//                       }))
//                     }
//                 }
//                 catch(error){
//                     if(error.response && !error.response.data.success){
//                         alert(error.response.data.error);
//                     }
//                 }
                
//             }
//         fetchEmployee()
// },[])

    const handleChange = (e) => {
      const {name , value } = e.target;
      
         setEmployee((prevData)=> ({...prevData , [name]:value}))
    }


    const handleSubmit = async (e) => {
      e.preventDefault()
      try{
         const response = await axios.post(`http://localhost:5000/api/salary/add`,employee,{
           headers : {
              "Authorization": `Bearer ${localStorage.getItem('token')}` 
           }
         })

        

         if(response.data.success){
             navigate("/admin-dashboard/employees")
         }
       }catch(error){
           alert(error);
           if(error.response && error.response.data.success){
               alert(error.response.data.error)
           }
       }
    }


  return (
    <>{departments && employees ? (
    <div className='max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
        <h2 className='text-2xl font-bold mb-6'>Add Salary</h2>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {/* Department */}
          <div  >
            <label className='block text-sm font-medium text-gray-700'> Department</label>
            <select name="department" className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            onChange={handleDepartment} value={employee.department}>
                <option value="">Select Department</option>
                {departments.map((department)=> <option key={department._id} value={department._id} >{department.dep_name }</option>)}
                
            </select>
         </div>

         {/* Employee */}
          <div className='cols-span-2' >
            <label className='block text-sm font-medium text-gray-700'> Employee</label>
            <select name="employeeId" className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            onChange={handleChange} >
                <option value="">Select Employee</option>
                {employees.map((emp)=> <option key={emp._id} value={emp._id} >{emp.employeeId }</option>)}
                
            </select>
         </div>
      
         {/* Basic Salary */}
         <div>
            <label className='block text-sm font-medium text-gray-700'>Basic Salary</label>
            <input type="number" name="basicSalary" placeholder='Basic Salary' 
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            onChange={handleChange}
            required/>
         </div>
       
         {/* Allowances */}
         <div>
            <label className='block text-sm font-medium text-gray-700'>Allowances</label>
            <input type="number" name="allowances" placeholder='Allowances' 
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            onChange={handleChange}
            required/>
         </div>


         <div>
            <label className='block text-sm font-medium text-gray-700'>Deductions</label>
            <input type="number" name="deductions" placeholder='detections' 
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            onChange={handleChange}
            required/>
         </div>

         <div>
            <label className='block text-sm font-medium text-gray-700'>Pay Date</label>
            <input type="date" name="payDate"  
            className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
            onChange={handleChange}
            required/>
         </div>

          
        
        </div>
        <button type='submit' className='w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded'>Add Salary</button>
      </form>
    </div>)  : <div>Loading...</div> } </>
  )
}

export default Add
