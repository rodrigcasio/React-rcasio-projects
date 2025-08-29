import ListFavLanguages, {Comp1LFL, Comp2LFL} from './Components/ListFavLanguages.jsx';
import OrganizationDetails from './Components/OrganizationDetails.jsx'; // importing the new parent component
import Card from './Components/Card.jsx';
import Clock from './Components/Clock.jsx';

function App() { // primary component , it is a defualt export
  return (
    <div>
      <h1>Hello World!<br />Im Rodrigo Casio</h1>
      <p>This is my first time using JSX and it is awesome!</p>
      <p>time: {<Clock />}</p>
      <div>
        <h2>Below are the components from their own file</h2>
        <ListFavLanguages />
        <OrganizationDetails />   
        <Card />
      </div>
      <div>
        <h5>Below are secondary components from the file App</h5>
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