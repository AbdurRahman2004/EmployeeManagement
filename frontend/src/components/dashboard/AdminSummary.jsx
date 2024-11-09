import React, { useEffect, useState } from 'react';
import SummaryCard from './SummaryCard';
import axios from 'axios';
import { FaBuilding, FaCheckCircle, FaFileAlt, FaHourglassHalf, FaMoneyBillWave, FaTimesCircle, FaUsers } from "react-icons/fa";

const AdminSummary = () => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/dashboard/summary", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        setSummary(response.data);
        console.log(response.data);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.error);
        }
        console.log(error.message);
      }
    };

    fetchSummary();
  }, []);

  if (!summary) {
    return <div>Loading...</div>; // Show a loading state if `summary` is null
  }

  return (
    <div className='p-6'>
      <h3 className='text-2xl font-bold'>Dashboard Overview</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6'>
        <SummaryCard image={<FaUsers />} text1={"Total Employees"} text2={summary.totEmployees} color="bg-teal-600" />
        <SummaryCard image={<FaBuilding />} text1={"Total Departments"} text2={summary.totDepartments} color="bg-yellow-600" />
        <SummaryCard image={<FaMoneyBillWave />} text1={"Monthly Salary"} text2={summary.totalSalary} color="bg-red-600" />
      </div>
      <div className='mt-12'>
        <h4 className='text-2xl font-bold'>Leave Details</h4>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6'>
          <SummaryCard image={<FaFileAlt />} text1={"Leave Applied"} text2={summary.leaveSummary.appliedFor} color="bg-teal-600" />
          <SummaryCard image={<FaCheckCircle />} text1={"Leave Approved"} text2={summary.leaveSummary.approved} color="bg-green-600" />
          <SummaryCard image={<FaHourglassHalf />} text1={"Leave Pending"} text2={summary.leaveSummary.pending} color="bg-yellow-600" />
          <SummaryCard image={<FaTimesCircle />} text1={"Leave Rejected"} text2={summary.leaveSummary.rejected} color="bg-red-600" />
        </div>
      </div>
    </div>
  );
};

export default AdminSummary;
