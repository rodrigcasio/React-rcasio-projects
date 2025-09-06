import React from 'react';
import UseFetch from './UseFetch.jsx';
import './FetchData.css'

const FetchData = () => {
    const [data] = UseFetch('https://api.npoint.io/9045c260b1565daa9e15');      // setting the url into the value of data 
    console.log(data);      // checking if the data was retrieved in the variable data, can be viewed in the console tab of the website

    return (
        <>
            <h1 className="usefetch_heading">Use Fetch Custom Hook</h1>
            <ul className="list_data_main">
                {data && data.map((e, index) => (    // conditional if data is true.. we can fetch data using 'e' parameter to access each type of data passed e.
                    <li key={index} className="list_data">
                        <h3>{e.name}</h3>
                        <p><strong>Importance: </strong>{e.importance}</p>
                        <p><stong>Benefits: </stong>{e.benefits}</p>
                        <p><strong>Best time to intake: </strong>{e.best_time_to_intake}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default FetchData;
