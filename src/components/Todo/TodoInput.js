import React, { useRef, useState } from 'react';

import classes from './TodoInput.module.css';

const TodoInput = (props) => {
    const inputRef = useRef();

    // store value
    const [todoInput, setTodoInput] = useState();

    // grap input value
    const changeHandler = (event) => {
        setTodoInput(inputRef.current.value);
    }

    // submit input value
    const submitHandler = (event) => {
        const todo = {
            id: Math.random(),
            todo: todoInput,
            completed: false
        }

        event.preventDefault()

        // if input is valid
        if (todoInput) {
            props.onInput(todo);

            // reset input value
            inputRef.current.value = '';
            setTodoInput('');   
        }
    }

    return (
        <form className={classes['todo-input-wrapper']} onSubmit={submitHandler}>
            <input 
                className={classes['todo-input']} 
                type="text" 
                placeholder="Add your todo..."
                ref={inputRef}
                onChange={changeHandler} />
            <button className={classes['todo-submit']}>+</button>
        </form>
    )
}

export default TodoInput;