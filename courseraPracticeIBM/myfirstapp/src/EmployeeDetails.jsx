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
                <h4>This is an example of a component class</h4>
                <p>Here we area managing the state of the events when the input value is changed: </p>

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

