

import {  Route, Routes, Navigate ,BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import Departments from './pages/Departments'
import Leaves from './pages/Leaves'
import Salary from './pages/Salary'
import Setting from './pages/Setting'
import Login from './pages/Login'
import EmployeeDaashboard from './pages/EmployeeDaashboard.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import PrivateRoutes from './utils/PrivateRoutes.jsx';
import RoleBasedRoutes from './utils/RoleBasedRoutes.jsx';



function App() {
  
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/admin-dashboard" />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/admin-dashboard' element={
          <PrivateRoutes><RoleBasedRoutes requiredRole={["admin"]}><AdminDashboard /> </RoleBasedRoutes></PrivateRoutes>}></Route>
        <Route path='/employee-dashboard' element={<EmployeeDaashboard />}></Route>
        
      </Routes>
    </BrowserRouter>
    </>
    )
}

export default App
