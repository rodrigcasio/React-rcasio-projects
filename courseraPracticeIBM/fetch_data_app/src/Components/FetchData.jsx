import React from 'react';
import UseFetch from './UseFetch.jsx';

const FetchData = () => {
    const [data] = UseFetch('https://api.npoint.io/9045c260b1565daa9e15');      // setting the url into the value of data 
    console.log(data);      // checking if the data was retrieved in the variable data, can be viewed in the console tab of the website

    return (
        <>
            <ul className="list_data_main">
                <h1 className="usefetch_heading">Use Fetch Custom Hook</h1>
            </ul>
        </>
    );
}
export default FetchData;
