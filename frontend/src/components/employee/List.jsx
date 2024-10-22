import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { EmployeeButtons } from '../../utils/EmployeeHelper'
import DataTable from "react-data-table-component"
import { columns } from '../../utils/EmployeeHelper'


const List = () => {
  const [employees , setEmployees ] = useState([])
  const [empLoading , setEmpLoading] = useState(false)


  useEffect(()=>{
    const fetchEmployees = async () => {
      setEmpLoading(true);
      try{
        const response = await axios.get("http://localhost:5000/api/employee", {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          }
        });
        console.log(response.data);
        if(response.data.success){
         let sno = 1; 
         const data = await response.data.employees.map((emp)=>(
          
          {
            _id: emp._id,
            sno: sno++,
            dep_name: emp.department.dep_name,
            name : emp.userId.name,
            dob: new Date(emp.dob).toLocaleDateString(),
            profileImage : <img src={`http://localhost:5000/${emp.userId.profileImage}`} width={40} className='rounded-full' />,
            action: (<EmployeeButtons _id={emp._id} />)
  
          }
          
         ))
         setEmployees(data);
        }
      }
      catch(error){
        if(error.response && error.response.data.success){
          alert(error.response.data.error)
      }
      }
      finally{
        setEmpLoading(false);
      }
    }
    fetchEmployees();
  },[])
  return (
    <div className='p-6'>
        <div className='text-center'>
        <h3 className='text-2xl font-bold'>Manage Employee</h3>
      </div>
      <div className='flex justify-between items-center'><input type="text" className='px-4 py-0.5'  placeholder='Search By Dep Name'/>
      <Link to='/admin-dashboard/add-employee' className='px-4 py-1 bg-teal-600 rounded text-white'> Add New Employee </Link> 
      </div>
      <div>
        <DataTable columns={columns} data={employees} />
      </div>
    </div>
  )
}

export default List
