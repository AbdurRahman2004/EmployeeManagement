import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className='flex  flex-col gap-7 items-center jus text-white max-w-[250px] h-screen bg-gray-800'>
            <div className='flex cursor-pointer pl-5 mt-4 gap-6'>
                <img className='w-2/12' src={assets.dashboard} alt="" />
                <p>Dashboard</p>
            </div>
            <NavLink to="/employees"> <div className='flex pl-5 cursor-pointer  gap-6'>
                <img className='w-2/12' src={assets.staff} alt="" />

                <div className='flex flex-col items-center justify-center'>
                    <p>Employees</p>
                </div>
            </div>  </NavLink>
            <NavLink to="/department"><div className='flex pl-5 cursor-pointer gap-6'>
                <img className='w-2/12' src={assets.department} alt="" />
                <p>Departments</p>
            </div>   </NavLink>
            <NavLink to="/leaves"> <div className='flex pl-5  cursor-pointer gap-6'>
                <img className='w-2/12' src={assets.leave} alt="" />
                <p>Leaves</p>
            </div>  </NavLink>
            <NavLink to="/salary"> <div className='flex pl-5 cursor-pointer  gap-6'>
                <img className='w-2/12' src={assets.salary} alt="" />
                <p>Salary</p>
            </div> </NavLink>
            <NavLink to="/setting"> <div className='flex  pl-5 cursor-pointer  gap-6'>
                <img className='w-2/12' src={assets.setting} alt="" />
                <p>Setting</p>
            </div>
            </NavLink>

        </div>
    )
}

export default SideBar
