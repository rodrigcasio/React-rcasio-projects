// Example for a Higher Order Component
// HOC

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