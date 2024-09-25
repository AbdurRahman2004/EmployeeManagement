import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import Departments from './pages/Departments'
import Leaves from './pages/Leaves'
import Salary from './pages/Salary'
import Setting from './pages/Setting'
import SingIn from './pages/SingIn'
import AdminSidebar from './components/AdminSidebar'


function App() {
  
  return (
    <div>
      <Routes>
        {/* Define the route for Sign In page */}
        <Route path='/login' element={<SingIn />} />
        
        {/* Define the routes that require the Navbar */}
        <Route path='/' element={<><Dashboard /></>} />
        <Route path='/employees' element={<><Employees /></>} />
        <Route path='/departments' element={<><Departments /></>} />
        <Route path='/leaves' element={<><Leaves /></>} />
        <Route path='/salary' element={<><Salary /></>} />
        <Route path='/setting' element={<><Setting /></>} />
      </Routes>
      
    </div>
  )
}

export default App
