// Example for a Higher Order Component
// HOC
//  this component pulls in the other components to create a page containing all the data and formatting
//  each component gets imported, 
//  then take each imported components as the function's parameters 

import React from 'react';
import Title from './Title';
import Author from './Author';
import Type from './Type';
import Description from './Description';

const NovelBlog = ({ title, author, type, description }) => {
    return (
        <div className="novel-post">
            <Title title={title} />
            <Author author={author} />
            <Type type={type} />
            < Description description={description} />
        </div>
        
    );
}
export default NovelBlog;