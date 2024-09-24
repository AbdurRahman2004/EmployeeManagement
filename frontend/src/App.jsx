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
import SideBar from './components/SideBar'


function App() {
  
  return (
    <div>
      <Routes>
        {/* Define the route for Sign In page */}
        <Route path='/login' element={<SingIn />} />
        
        {/* Define the routes that require the Navbar */}
        <Route path='/' element={<><Navbar /><Dashboard /></>} />
        <Route path='/employees' element={<><Navbar /><Employees /></>} />
        <Route path='/departments' element={<><Navbar /><Departments /></>} />
        <Route path='/leaves' element={<><Navbar /><Leaves /></>} />
        <Route path='/salary' element={<><Navbar /><Salary /></>} />
        <Route path='/setting' element={<><Navbar /><Setting /></>} />
      </Routes>
      
    </div>
  )
}

export default App
