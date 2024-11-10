import { useNavigate } from "react-router-dom"
import axios from "axios"


export const columns = [
    {
        name : "S.no",
        selector : (row) => row.sno
    },
    {
        name : "Department name",
        selector : (row) => row.dep_name,
        sortable : true
        },
    {
        name : "Action",
        selector : (row) => row.action
    }
]

export const DepartmentButtons = ({_id, onDepartmentDelete}) => {
    const navigate = useNavigate()
    const handleDelete = async (_id) => {
        const confirm = window.confirm("Do you want to delete?")
        if(confirm){
        try{
           
            const response = await axios.delete(`https://employee-api-eight.vercel.app/api/department/${_id}`,{
              headers : {
                 "Authorization": `Bearer ${localStorage.getItem('token')}` 
              }
            })
  
            if(response.data.success){
              onDepartmentDelete()        
              }
          }catch(error){
              if(error.response && error.response.data.success){
                console.log(error.response.data)         

                  alert(error.response.data.error)
              }
          }
        }
    }
    return (
        <div className="flex space-x-3">
        <button className="px-3 py-1 bg-teal-600 "
        onClick={()=>navigate(`/admin-dashboard/department/${_id}`)}>Edit</button>
        <button className="px-3 py-1 bg-red-600 "
        onClick={()=>handleDelete(_id)}>Delete</button>

        </div>
    )
}