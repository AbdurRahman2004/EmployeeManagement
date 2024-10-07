

import {  Route, Routes, Navigate ,BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import Departments from './pages/Departments'
import Leaves from './pages/Leaves'
import Salary from './pages/Salary'
import Setting from './pages/Setting'
import Login from './pages/Login'
import EmployeeDaashboard from './pages/EmployeeDaashboard.jsx';



function App() {
  
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/dashboard" />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/employee-dashboard' element={<EmployeeDaashboard />}></Route>
        
      </Routes>
    </BrowserRouter>
    </>
    )
}

export default App
