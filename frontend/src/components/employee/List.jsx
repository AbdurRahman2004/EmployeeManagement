import React from 'react'
import { Link } from 'react-router-dom'

const List = () => {
  return (
    <div className='p-6'>
        <div className='text-center'>
        <h3 className='text-2xl font-bold'>Manage Department</h3>
      </div>
      <div className='flex justify-between items-center'><input type="text" className='px-4 py-0.5'  placeholder='Search By Dep Name'/>
      <Link to='/admin-dashboard/add-employee' className='px-4 py-1 bg-teal-600 rounded text-white'> Add New Department </Link> 
      </div>
    </div>
  )
}

export default List
