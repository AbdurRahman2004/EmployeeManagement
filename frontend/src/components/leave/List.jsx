import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { useAuth } from '../../context/authContext';


const List = () => {
  const {user} = useAuth();
  const [leaves , setLeave] = useState([])
  const { id } = useParams()

  const fetchLeaves = async () => {
    
    try {
        const response = await axios.get(`https://employee-api-eight.vercel.app/api/leave/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        console.log(response.data);
        if (response.data.success) {
            setLeave(response.data.leaves);
            
        }
    } catch (error) {
        if (error.response && !error.response.data.success) {
            alert(error.message);
        }
    }
};

useEffect(() => {
    fetchLeaves();
}, []);

  return (
    <div className='p-6'>
    <div className='text-center'>
    <h3 className='text-2xl font-bold'>Manage Leaves</h3>
  </div>
  <div className='flex justify-between items-center'><input type="text" className='px-4 py-0.5'  placeholder='Search By Dep Name' />
  {user.role === "employee" && (
  <Link to='/employee-dashboard/add-leave' className='px-4 py-1 bg-teal-600 rounded text-white'> Add New Leave </Link>
)} 
  </div>
  
  
            

                   
                        <table className="w-full text-sm text-left text-gray-500 mt-6 ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 border border-gray-200">
                                <tr>
                                    <th className="px-6 py-3">SNO</th>
                                    <th className="px-6 py-3">LEAVE TYPE</th>
                                    <th className="px-6 py-3">FROM</th>
                                    <th className="px-6 py-3">TO</th>
                                    <th className="px-6 py-3">DESCRIPTION</th>
                                    <th className="px-6 py-3">STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leaves.map((leave, index) => (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-6 py-3">{index + 1}</td>
                                        <td className="px-6 py-3">{leave.leaveType}</td>
                                        <td className="px-6 py-3">{new Date(leave.startDate).toLocaleDateString()}</td>
                                        <td className="px-6 py-3">{new Date(leave.endDate).toLocaleDateString()}</td>
                                        <td className="px-6 py-3">{leave.reason}</td>
                                        <td className="px-6 py-3">{leave.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    
                </div>
            )}



export default List
