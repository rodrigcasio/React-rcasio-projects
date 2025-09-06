import React from 'react';
import UseFetch from './UseFetch.jsx';
import './FetchData.css';

// Exercise practice with a new component and new API using the same custom hook

const FetchYogaData = () => {
    const [data] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');      // assiging the value of data to the API
    console.log(data);      // checking if data is coming in the console tab

    return (
        <>
            
        </>
    );
}
export default FetchYogaData;