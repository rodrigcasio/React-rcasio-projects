import React from 'react';

// Second example to recieve from the parent component (App) data and place it where props. is 

const SecondChildAppEx = (props) => {
    return(
        <>
            <h2>{props.name}</h2>
            <div>{props.employeeID}</div>
            <div>{props.dept_name}</div>
        </>
    );
}

// Setting defualt props outside the function
SecondChildAppEx.defaultProps = {
    dept_name:  "Software Developer"
};


export default SecondChildAppEx;