import React from 'react'
import {Navigate} from 'react-router-dom'
import { useAuth } from '../context/authContext'

const PrivateRoutes = ({children}) => {
    const {user , loading} = useAuth

    if(loading){
        <div>Loading....</div>
    }
    
    
    return user ? children : <Navigate to="/admin-dashboard" />
}

export default PrivateRoutes
