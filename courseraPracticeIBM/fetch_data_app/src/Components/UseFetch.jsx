// Custom Hook UseFetch
import {useState, useEffect} from 'react';

const UseFetch = (url) => {
   const [data, setData] = useState();

   // logic to fetch data from any given url:
   useEffect(() => {
    fetch(url)
    .then((res) => res.json())      // converting the response from the server to a JSON format
    .then((data) => setData(data))      // this sets the retrieve data to the state variable 'data'. setData is a function that updates the state in React functional components.
   }, [])

   return[data]

}
export default UseFetch;

// explanation :

// The "url" variable is passed as an argument in the useFetch arrow function to specify the exact URL of a specific website
// from which any component can easly fetch data. 
// This function allows components using the custom hook to provide the URL dynamically, enableing seamless data fetching from various sources without the need for redundant code.