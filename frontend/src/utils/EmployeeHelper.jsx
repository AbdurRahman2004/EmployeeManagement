import axios from "axios"
import { useNavigate } from "react-router-dom";

export const fetchDepartments = async () => {
    let departments;
    try{
      const response = await axios.get("https://employee-api-eight.vercel.app/api/department", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      });
      if(response.data.success){
        departments = response.data.departments
    }
}
    catch(error){
      if(error.response && error.response.data.success){
        alert(error.response.data.error)
    }
    }
    return departments
  }

  //Employee for Salary form


  export const getEmployees = async (_id) => {
    let employees;
    try{
      const response = await axios.get(`https://employee-api-eight.vercel.app/api/employee/department/${_id}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      });
      if(response.data.success){
        employees = response.data.employees
    }
}
    catch(error){
      if(error.response && error.response.data.success){
        alert(id + " id")
    }
    }
    return employees
  }

  export const columns = [
    {
        name : "S.no",
        selector : (row) => row.sno,
        width : "70px"
    },
    {
        name : "Name",
        selector : (row) => row.name,
        sortable : true,
        width: "100px"
        },
    {
        name : "Image",
        selector : (row) => row.profileImage,
        sortable : true,
        width : "90px"
        },   
    {
        name : "Department",
        selector : (row) => row.dep_name,
        sortable : true,
        width : "120px"
        },
    {
        name : "DOB",
        selector : (row) => row.dob,
        sortable : true,
        width : "130px"
        },
    {
        name : "Action",
        selector : (row) => row.action,
        center : true
    }
]


  export const EmployeeButtons = ({_id}) => {
    const navigate = useNavigate()
   
    return (
        <div className="flex space-x-3">
        <button className="px-3 py-1 bg-teal-600 "
        onClick={()=>navigate(`/admin-dashboard/employees/${_id}`)}>View</button>
        <button className="px-3 py-1 bg-blue-600 " onClick={()=>navigate(`/admin-dashboard/employees/edit/${_id}`)}
        >Edit</button>
        <button className="px-3 py-1 bg-yellow-600 "
        onClick={()=> navigate(`/admin-dashboard/employees/salary/${_id}`)}>Salary</button>
        <button className="px-3 py-1 bg-red-600 "
        onClick={()=> navigate(`/admin-dashboard/employees/leaves/${_id}`)}>Leave</button>

        </div>
    )
}