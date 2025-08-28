function App(props) { // primary component , it is a defualt export
  const currDate = new Date();

  return (
    <div>
      <h1>Hello World!</h1>
      <h2>The time now is {currDate.toLocaleTimeString()}.</h2>
      <p>This is my first time using JSX and it is awesome!</p>
      <p>Today is <strong>August 27, 2025</strong> and my name is Rodrigo Casio</p>
      <p>I will become a great developer and engineer!</p>
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