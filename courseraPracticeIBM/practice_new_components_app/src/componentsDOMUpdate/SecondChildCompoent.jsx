import React from 'react';

const SecondChildComponent = React.memo(() => {
    console.log('Rendering SecondChildComponent');
    
    return(
        <div>
            <h2>Second Child Component</h2>
            <p>This is the second child component.</p>
        </div>
    );
});
export default SecondChildComponent;

// Explanation
/*
    The second child componet only shows information related to that component.

    IBM explanation: 
    if we inspect the console logs, we'll notice the following behavior.

"For the first time loading,
all the components will render.
When you select to update the item,
only the first child component will be re-rendered.
Neither the app component nor
the second child component will change.
React's virtual DOM compares the updated app with
the previous virtual DOM and determines that
only the state of the first child component has changed.
Therefore, it only updates the relevant part of the DOM,
the child component, without re-rendering the entire list.

This example demonstrates how React's virtual DOM updates
only the necessary parts of
the DOM, improving the application's performance,
especially in scenarios where
only specific components or elements need to be updated. "  : IBM.
*/