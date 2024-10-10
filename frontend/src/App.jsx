

import {  Route, Routes, Navigate ,BrowserRouter } from 'react-router-dom';

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
import AdminSummary from './components/dashboard/AdminSummary.jsx';
import DepartmentList from './components/department/DepartmentList.jsx';



function App() {
  
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/admin-dashboard" />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/admin-dashboard' element={
          <PrivateRoutes>
            <RoleBasedRoutes requiredRole={["admin"]}>
              <AdminDashboard /> 
            </RoleBasedRoutes>
          </PrivateRoutes>}>
            <Route index element={<AdminSummary />}>
            </Route>
            <Route path='/admin-dashboard/departments' element={<DepartmentList />}>
            </Route>
          </Route>
        <Route path='/employee-dashboard' element={<EmployeeDaashboard />}></Route>
        
      </Routes>
    </BrowserRouter>
    </>
    )
}

export default App
