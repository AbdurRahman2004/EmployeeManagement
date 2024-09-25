import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { assets } from '../assets/assets'
import Navbar from '../components/Navbar'
import AdminSummary from '../components/AdminSummary'

const Dashboard = () => {
  return (
    <div className='flex'>
        <AdminSidebar />
        <div className='flex-1 ml-64 bg-gray-100 h-screen'>
           <Navbar />
           <AdminSummary />
        </div>
    </div>
  )
}

export default Dashboard



{/* <div className='flex bg-gray-100 w-full gap-6' >
<AdminSidebar />
<div className='mt-8 flex flex-col '>
    <div className='flex flex-col gap-6'>
        <h1 className='font-extrabold text-3xl'>DashBoard Overview</h1>
        <div className='ml-4 mr-52 flex justify-between gap-4'>
            <div className='flex gap-4 w-[250px] p-2 bg-white border'>
                <img className='w-[45px] aspect-square ' src={assets.group} alt="" />
                <div>
                    <p>Total Employee</p>
                    <p className='font-semibold'>4</p>
                </div>
            </div>
            <div className='flex gap-4 w-[250px] p-2 bg-white border'>
                <img className='w-[45px] aspect-square ' src={assets.dept} alt="" />
                <div>
                    <p>Total Department</p>
                    <p className='font-semibold'>3</p>
                </div>
            </div>
            <div className='flex gap-4 w-[250px] p-2 bg-white border'>
                <img className='w-[45px] aspect-square ' src={assets.income} alt="" />
                <div>
                    <p>Monthly Pay</p>
                    <p className='font-semibold'>Rs.50k</p>
                </div>
            </div>
            
            
        </div>

    </div>
   
   <div className='flex flex-col ml-4 mr-52 mt-12'>
    <p className='text-center text-3xl font-bold'>Leave Details</p>
    <div className='m-9'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-8 '>
    <div className='flex gap-4 w-full p-2 bg-white border'>
                <img className='w-[45px] aspect-square ' src={assets.form} alt="" />
                <div>
                    <p>Leave Applied</p>
                    <p className='font-semibold'>2</p>
                </div>
            </div><div className='flex gap-4 w-full p-2 bg-white border'>
                <img className='w-[45px] aspect-square ' src={assets.check} alt="" />
                <div>
                    <p>Leave Approved</p>
                    <p className='font-semibold'>2</p>
                </div>
            </div><div className='flex gap-4 w-full p-2 bg-white border'>
                <img className='w-[45px] aspect-square ' src={assets.pending} alt="" />
                <div>
                    <p>Leave Pending</p>
                    <p className='font-semibold'>2</p>
                </div>
            </div><div className='flex gap-4 w-full p-2 bg-white border'>
                <img className='w-[45px] aspect-square ' src={assets.cross} alt="" />
                <div>
                    <p>Leave Rejected</p>
                    <p className='font-semibold'>1</p>
                </div>
            </div>
    </div>
    </div>
   </div>
</div>

</div> */}