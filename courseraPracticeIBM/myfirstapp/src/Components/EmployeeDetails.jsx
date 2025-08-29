import React, { Component } from 'react';

// .state  :  represetns the data that the component needs to render and respond to user interactions

class EmployeeDetails extends Component {
    constructor(props){
        super(props);
        this.state = { employee_id: '', employee_email: '' }; // initialize to properties : employee_id and employee_email both set to empty strings     
    }   
    
    handleInputChange = event => {      // method() is triggered whenever a change occurs in the input fields
        const { name, value } = event.target;
        this.setState({ [name]: value });       // update the value of the data with this.setState 
    };

    // render method()
    render(){
        const { employee_id, employee_email } = this.state;
        const { employee_designation } = this.props;        // new
        return (
            <div className="EmployeeDetails">
                <input type="text" name="employee_id" value={employee_id}
                    onChange={ this.handleInputChange } placeholder='Enter Employee ID' />
                <br></br>
                <input type="text" name="employee_email" value={employee_email}
                    onChange={ this.handleInputChange } placeholder='Enter Employee email' />
                <br></br>
                <button onClick={ () => alert(`Employee ID: ${employee_id}\nEmail: ${employee_email}\nDesignation: ${employee_designation}.`)}>Show Details</button>
            </div>
        );
    }
}
export default EmployeeDetails;

/*  Code Explanation

This is the **child component**. It is responsible for its own behavior and display. It manages
its internal data (what the user types) using **state**. It also uses the data provided by its 
parent, which is accessed through **props**. The key difference is that state is internal and can 
be changed by the component, while props are external and read-only.

Ln-by-ln Explanation

1. import React, { Component } from 'react';:
 This imports React and the Component class, which is necessary for defining a class component.

2. class EmployeeDetails extends Component { ... }:
 This line declares a new class component named EmployeeDetails that inherits from React's Component class.

3. constructor(props){ ... }:
 The constructor is the first method called when the component is created. It's where you initialize the component's state and bind methods.

4. super(props);:
 This is a required call in the constructor of a class component. It calls the constructor of the parent class (Component) and ensures that this.props is correctly set.

5. this.state = { employee_id: '', employee_email: '' };:
 This initializes the component's state. This data is private to the component and can be changed over time using this.setState().

6. render(){ ... }:
 This is a required method in every class component. It returns the JSX that defines the component's UI. This method is called every time the component's state or props change.

7. const { employee_designation } = this.props;:
 This is where the prop is received. this.props is a built-in object in class components that contains all the props passed from the parent. We use destructuring to easily access the employee_designation prop.

8. const { employee_id, employee_email } = this.state;:
 This is where you access the component's state for use in your JSX.

9. <button onClick={ () => alert(...) }>Show Details</button>:
 This is the button that triggers the alert pop-up. The alert's message uses the values from both state and props (${employee_id}, ${employee_email}, and ${employee_designation}), which demonstrates how your component can use data from both sources.

*/