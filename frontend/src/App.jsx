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
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/login' element={<SingIn />}></Route>
        <Route path='/employees' element={<Employees />}></Route>
        <Route path='/departments' element={<Departments />}></Route>
        <Route path='/leaves' element={<Leaves />}></Route>
        <Route path='/salary' element={<Salary />}></Route>
        <Route path='/setting' element={<Setting />}></Route>
      </Routes>
      
    </div>
  )
}

export default App
