import React, { useState } from 'react';

import Body from '../UI/Body';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import classes from './Todo.module.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faXmark } from '@fortawesome/free-solid-svg-icons'; // <-- import styles to be used

const Todo = () => {
    const [todos, setTodos] = useState([
        {
            id: "t1",
            todo: "Learn React",
            completed: false
        },
        {
            id: "t2",
            todo: "Read for 30mins",
            completed: false
        },
        {
            id: "t3",
            todo: "Meditate",
            completed: true
        },
        {
            id: "t4",
            todo: "Go to Gym",
            completed: false
        },
    ])

    const inputHandler = (input) => {
        setTodos(prev => {
            return [
                ...prev, 
                input
            ]
        })
    }

    return (
        <Body>
            <TodoInput onInput={inputHandler}/>
            <TodoList todos={todos}/>
            {/* <FontAwesomeIcon icon={faXmark} /> */}
        </Body>
    )
}

export default Todo;