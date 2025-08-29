import React from 'react'
import EmployeeDetails from './EmployeeDetails.jsx'

function OrganizationDetails () {
    const employee_designation = 'Project Manager'; // value of the prop
    return (
        <>  {/* EmployeeDetails becomes a child component  */}
            <EmployeeDetails employee_designation = { employee_designation }/>  
        </>
    )
}
export default OrganizationDetails;


/*  
    Code Explanation

    This component acts as a parent to EmployeeDetails
    Its primary porpuse is to define and pass props to its child

    1. Define the value of the prop here in the parent component.
    const employee_delegation = 'Project Manager';  ln:5

    2.  Pass the 'employee_designation' variable as a prop to the child component.
    <EmployeeDetails employee_designation = { employee_designation } />     ln:8 

    Explanation:

    This is the **parent component**. In React, data flows in one direction: from parent to child. 
    This component demonstrates that fundamental principle by holding the 'employee_designation' 
    data and passing it down to the 'EmployeeDetails' component. It doesn't use the data itself; 
    it's simply a container that gives its child the information it needs. This makes the child 
    component more reusable since it can receive different data from different parents.

ln-by-ln- expl:

1. import React from 'react':
 This imports the core React library, which is necessary for creating React components.

2. import EmployeeDetails from './EmployeeDetails.jsx':
 This line is crucial. It imports the EmployeeDetails component from its file, making it available for use in this component.

3. function OrganizationDetails () { ... }:
 This defines your parent component. It's a functional component that will contain and manage the child component.

4. const employee_designation = 'Project Manager';:
 This creates a local variable within the parent component. This variable holds the data that you want to pass down as a prop.

5. return (...):
 This returns the JSX that defines the parent component's UI.

6. <EmployeeDetails employee_designation = { employee_designation }/>:
 This is where the parent-child relationship is established and the prop is passed. The employee_designation on the left is the prop name that the child will receive. The { employee_designation } on the right is the value from the local variable defined in this parent component.

7. export default OrganizationDetails;:
This exports the OrganizationDetails component so it can be imported and used by other files, like main.jsx.

    The OrganizationDetails component becomes the parent simply because it renders the EmployeeDetails component inside of it.
    The Parent-Child Relationship

    Parent: The component that contains and renders another component.
    Child: The component that is rendered by another component.   
 */
