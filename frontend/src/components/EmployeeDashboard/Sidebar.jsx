import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/authContext'

const Sidebar = () => {
    const {user} = useAuth()
    return (
        <div className='bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64'>
            <div className='bg-teal-600 h-12 flex items-center justify-center'>
                Employee MS
            </div>
            <div className='px-4'>
            <NavLink to='/employee-dashboard' className={({isActive})=> `${isActive? "bg-teal-500" : " "} flex items-center space-x-4  py-2.5 px-4 rounded`} end>
           
                <img className='w-2/12' src={assets.dashboard} alt="" />
                <p>Dashboard</p>
            
            </NavLink>
           
            <NavLink to={`/employee-dashboard/profile/${user._id}`} className={({isActive})=> `${isActive? "bg-teal-500" : " "} flex items-center space-x-4  py-2.5 px-4 rounded` }> 
                <img className='w-2/12' src={assets.staff} alt="" />
                  <p>My Profile</p>
             
            </NavLink>
           
            <NavLink to={`/employee-dashboard/leaves/${user._id}`} className={({isActive})=> `${isActive? "bg-teal-500" : " "} flex items-center space-x-4  py-2.5 px-4 rounded` }> 
                <img className='w-2/12' src={assets.leave} alt="" />
                <p>Leaves</p>
            </NavLink>
            <NavLink to={`/employee-dashboard/salary/${user._id}`} className= {({isActive})=> `${isActive? "bg-teal-500" : " "} flex items-center space-x-4  py-2.5 px-4 rounded` } > 
                <img className='w-2/12' src={assets.salary} alt="" />
                <p>Salary</p>
             </NavLink>
            <NavLink to="/employee-dashboard/setting" className={({isActive})=> `${isActive? "bg-teal-500" : " "} flex items-center space-x-4  py-2.5 px-4 rounded` }> 
                <img className='w-2/12' src={assets.setting} alt="" />
                <p>Setting</p>
   
            </NavLink>
            </div>

        </div>
    )
}

export default Sidebar
