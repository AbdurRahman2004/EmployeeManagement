import React from 'react'
import { createContext } from 'react'
import { assets , products } from '../assets/assets';


export const Details = createContext();

const EmployeeContext = (props) => {

    const value = {
        assets , products
    }
  return (
    <Details.Provider value={value}>
       {props.children};
    </Details.Provider>
  )
}

export default EmployeeContext
