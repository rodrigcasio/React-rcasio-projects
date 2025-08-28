import React from 'react'
import EmployeeDetails from './EmployeeDetails.jsx'

function OrganizationDetails () {
    const employee_designation = 'Project Manager'; // value of the prop
    return (
        <>
            <EmployeeDetails employee_designation = { employee_designation }/>
        </>
    )
}
export default OrganizationDetails
