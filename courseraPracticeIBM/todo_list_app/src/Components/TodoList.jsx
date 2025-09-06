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
            setHeadingInput('');
        }
    }

    // Function to handle adding a new list item to a specific todo heading
    const handleAddList = (index) => {
        if(listInputs[index] && listInputs[index].trim !== ''){                 // Checking  if the input for the given index is not empty or just whitespace
            const newTodos = [...todos];    // creates a copy of the current todos array
            newTodos[index].list.push(listInputs[index]);   //  Add the new list item to the corresponding heading's list 
            setTodos(newTodos);     // Update the todos state with the new list item
            setListInputs({...listInputs, [index] : ''});   // Clear the input field for that index 
        }
    }

    // Function to update list value for a specific heading index
    const handleListInputChange = (index, value) => {
        setListInputs({...listInputs, [index]: value });    // Update the listInputs state for the corresponding index
    }

    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];        // create a shallow copy of the current todos array
        newTodos.splice(index , 1);         // Remove the todo at the specified index
        setTodos(newTodos);                 // Update th state with the new array (without the deleted todo)
    }

    return(
        <>
            <div className="todo-container">
                <h1 className="title">My Todo List</h1>
                <div className="input-container">
                    <input  
                    type="text" 
                    className="heading-input" 
                    placeholder="Enter heading" 
                    value={headingInput} 
                    onChange={(e) => {setHeadingInput(e.target.value); }} // Update heading input value
                    />
                    <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
                </div>
            </div> 
            <div className="todo_main"> {/* main section displaying all todos */}
                {todos.map((todo, index) => (           // iterate over each todo item in the todos array,
                    <div key={index} className="todo-card">
                        <div className="heading_todo">      {/* displaying each heaedings */}
                            <h3>{todo.heading}</h3>
                            <button className="delete-button-heading" onClick={() => handleDeleteTodo(index)}>Delete Heading </button>
                        </div>
                        <ul>{/* Render all lists items under this heading */}
                            {todo.lists.map((list, listIndex) => (
                                <li key={listIndex} className="todo_inside_list">
                                    <p>{list}</p>
                                </li>
                            ))}
                        </ul>
                        {/* Input section to add list item under this heading */}
                        <div className="add_list">  
                            <input type="text" className="list-input" placeholder="Add List" value={listInputs[index] || ''}    // Maintain controlled input
                                onChange={(e) => handleListInputChange(index, e.target.value)} // Update list input value
                                />
                            <button clasName="add-list-button" onClick={() => handleAddList(index)}>Add List</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
export default TodoList;
