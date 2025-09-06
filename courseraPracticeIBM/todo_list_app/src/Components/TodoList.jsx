import React from 'react';
import './TodoList.css';
import {useState} from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);         // represents an array of the todo items 
    const [headingInput, setHeadingInput] = useState('');          // represent the value entered by user into the input field for adding a new heading for a todo list 
    const [listInputs, setListInputs] = useState({});       // initialize  listInputs as an empty object "{}". This state will hold the value  of input fields for each todo item individually

    const handleAddTodo = () => {
        if(headingInput.trim() !== ''){
            setTodos([...todos, { heading : headingInput, lists : [] }]);
            setHeadingInputs('');
        }
    }


    return(
        <>
            <div className="todo-container">
                <h1 className="title">My Todo List</h1>
                <div className="input-container">
                    <input  type="text" className="heading-input" placeholder="Enter heading" 
                    value={headingInput} onChange={(e) => {setHeadingInput(e.target.value); }}
                    />
                    <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
                </div>
            </div> 
                {todos.map((todo, index) => (           // iterate over each todo item in the todos array,
                    <div key={index} className="todo-card">
                        <div className="heading_todo">      {/* displaying each heaedings */}
                            <h3>{todo.heading}</h3>
                            <button className="delete-button-heading" onClick={() => handleDeleteTodo(index)}>Delete Heading </button>
                        </div>
                    </div>
                ))}
            <div className="todo-main">

            </div>
        </>
    );
}
export default TodoList;
