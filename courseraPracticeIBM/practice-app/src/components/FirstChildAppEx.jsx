// Example of child component

// We are getting info from the parent (App) component, and placing it in this child component
import React from 'react';

const FirstChildAppEx = (props) => {
    return(
        <>
            <h1>{props.name}</h1>
        </>
    );
}

export default FirstChildAppEx;