import React, { useState, useEffect } from 'react'

function App() { // primary component , it is a defualt export
  const [currDate, setCurrDate] = useState(new Date()); // 1. Use 'useState' to create a state variable for the current time

  useEffect(() => {     // 2. use 'useEffect' to set up timer when the component mounts.
    const timerID = setInterval(() =>{    // This function will run once after the initial render
      setCurrDate(new Date());  // update the state with the new time every second.
    }, 1000);

    return () => clearInterval(timerID);    // 3. clear up the timer when the component unmounts
  }, []);   // the empty array  [] tells React to run this effect only once.

  return (
    <div>
      <h1>Hello World!<br />Im Rodrigo Casio</h1>
      <h2>The time now is {currDate.toLocaleTimeString()}.</h2>
      <h3>Today is {currDate.toLocaleDateString()}.</h3>
      <p>This is my first time using JSX and it is awesome!</p>
      <p>One day will become a great developer and engineer!</p>
      {/*child div here adding components inside this compontens*/}
      <div>
        <Comp2A />
        <Comp3A />
      </div>
    </div>
  );
}

// secondary component, they are named exports  
// A : App
export function Comp2A(){
  return (
    <div>
      <h2>Im component2 im being called from the App component, which im inside of it</h2>
    </div>
  );
}

export function Comp3A(){
  return (
    <p>Hello, im component 3, and im being called from component App <strong>(im inside of it too!)</strong></p>
  );
}


export default App;