

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
import AddDepartment from './components/department/AddDepartment.jsx';
import EditDepartment from './components/department/EditDepartment.jsx';
import List from './components/employee/List.jsx';
import Add from './components/employee/Add.jsx';
import View from './components/employee/View.jsx';
import Edit from './components/employee/Edit.jsx';
import AddSalary from './components/salary/Add.jsx';
import ViewSalary from './components/salary/View.jsx';



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
            <Route path='/admin-dashboard/departments' element={<DepartmentList />}> </Route>
            <Route path='/admin-dashboard/add-department' element={<AddDepartment />}></Route>
            <Route path='/admin-dashboard/department/:id' element={<EditDepartment />}></Route>
            <Route path='/admin-dashboard/employees' element={<List />}></Route>
            <Route path='/admin-dashboard/salary/add' element={<AddSalary />}></Route>

            <Route path='/admin-dashboard/add-employee' element={<Add />}></Route>
            <Route path='/admin-dashboard/employees/:id' element={<View />}></Route>
            <Route path='/admin-dashboard/employees/edit/:id' element={<Edit />}></Route>
            <Route path='/admin-dashboard/employees/salary/:id' element={<ViewSalary />}></Route>
            

            

      
          </Route>
        <Route path='/employee-dashboard' element={<EmployeeDaashboard />}></Route>
        
      </Routes>
    </BrowserRouter>
    </>
    )
}

export default App
