import React from 'react'
import SummaryCard from './SummaryCard'
import {FaBuilding, FaCheckCircle, FaFileAlt, FaHourglassHalf, FaMoneyBillWave, FaTimesCircle, FaUsers} from "react-icons/fa"

const AdminSummary = () => {
  return (
    <div className='p-6'>
      <h3 className='text-2xl font-bold'>DashBoard Overview</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6'>
        <SummaryCard image={<FaUsers />} text1={"Total Employees"} text2={4} color="bg-teal-600" />
        <SummaryCard image={<FaBuilding />} text1={"Total Departments"} text2={10} color="bg-yellow-600" />
        <SummaryCard image={<FaMoneyBillWave />} text1={"Monthly Salary"} text2="$5000" color="bg-red-600" />
      </div>
      <div className='mt-12'>
        <h4 className='text-2xl font-bold'>Leave Details</h4>
        <div className='grid grid-cols-1 sm:grid-cols-2  gap-4 mt-6'>
        <SummaryCard image={<FaFileAlt />} text1={"Leave Applied"} text2="$5000" color="bg-teal-600" />
        <SummaryCard image={<FaCheckCircle />} text1={"Leave Approved"} text2="$5000" color="bg-green-600" />
        <SummaryCard image={<FaHourglassHalf />} text1={"Leave pending"} text2="$5000" color="bg-yellow-600" />
        <SummaryCard image={<FaTimesCircle />} text1={"Leave Rejected"} text2="$5000" color="bg-red-600" />
        </div>
        
      </div>
    </div>
  )
}

export default AdminSummary
