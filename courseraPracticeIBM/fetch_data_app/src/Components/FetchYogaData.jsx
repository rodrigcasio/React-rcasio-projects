import React from 'react';
import UseFetch from './UseFetch.jsx';
import './FetchData.css';

// Exercise practice with a new component and new API using the same custom hook

const FetchYogaData = () => {
    const [data] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');      // assiging the value of data to the API
    console.log(data);      // checking if data is coming in the console tab

    return (
        <>
            <h1 className="usefetch_heading">Yoga Benefits (re-using the Use Fetch custom hook)</h1>
            <ul className="list_data_main">
                {data && data.map((e, index) => (
                    <li key={index} className="list_data">
                        <h3>{e.name}</h3>
                        <p><strong>Benefits: </strong>{e.benefits}</p>
                        <p><strong>Time Duration: </strong>{e.time_duration}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default FetchYogaData;