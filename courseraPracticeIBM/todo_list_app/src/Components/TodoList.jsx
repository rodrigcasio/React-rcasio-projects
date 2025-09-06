import React from 'react';
import './TodoList.css';

const TodoList = () => {
    
    return(
        <>
            <div className="todo-container">
                <h1 className="title">My Todo List</h1>
                <div className="input-container">
                    <input  type="text" className="heading-input" placeholder="Enter heading"/>
                    <button className="add-list-button"></button>
                </div>
            </div>
            <div className="todo-main">

            </div>
        </>
    );
}
export default TodoList;
