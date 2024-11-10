import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { EmployeeButtons } from '../../utils/EmployeeHelper'
import DataTable from "react-data-table-component"
import { columns } from '../../utils/EmployeeHelper'


const List = () => {
  const [employees , setEmployees ] = useState([])
  const [empLoading , setEmpLoading] = useState(false)
  const [filteredEmployee , setFilteredEmployee] = useState([])


 

  useEffect(() => {
    const fetchEmployees = async () => {
      setEmpLoading(true);
      try {
        const response = await axios.get("https://employee-api-eight.vercel.app/api/employee", {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          }
        });
        console.log("Fetched employees: ", response.data.employees);
  
        if (response.data.success) {
          let sno = 1;
          const data = response.data.employees.map(emp => ({
            _id: emp._id,
            sno: sno++,
            dep_name: emp.department?.dep_name || "N/A", // Added check
            name: emp.userId?.name || "N/A",             // Added check
            dob: new Date(emp.dob).toLocaleDateString(),
            profileImage: (
              <img
                src={`https://employee-api-eight.vercel.app/${emp.userId?.profileImage || "default.jpg"}`} // Fallback image
                width={40}
                className='rounded-full'
                alt="Profile"
              />
            ),
            action: <EmployeeButtons _id={emp._id} />
          }));
          console.log("Formatted data: ", data);
          setEmployees(data);
          setFilteredEmployee(data);
        }
      } catch (error) {
        if (error.response && error.response.data.success) {
          alert(error.response.data.error);
        }
      } finally {
        setEmpLoading(false);
      }
    };
    fetchEmployees();
  }, []);
  

  const handleFilter = (e) => {
    const records = employees.filter((emp) => (
      emp.name.toLowerCase().includes(e.target.value.toLowerCase())
    ))
    setFilteredEmployee(records)
  }
  return (
    <div className='p-6'>
        <div className='text-center'>
        <h3 className='text-2xl font-bold'>Manage Employee</h3>
      </div>
      <div className='flex justify-between items-center'><input type="text" className='px-4 py-0.5'  placeholder='Search By Dep Name' onChange={handleFilter}/>
      <Link to='/admin-dashboard/add-employee' className='px-4 py-1 bg-teal-600 rounded text-white'> Add New Employee </Link> 
      </div>
      <div className='mt-6'>
        <DataTable columns={columns} data={filteredEmployee} pagination/>
      </div>
    </div>
  )
}

export default List
