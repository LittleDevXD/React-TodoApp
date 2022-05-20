import classes from './TodoList.module.css';

const TodoList = (props) => {

    const todoAll = props.todos.filter(todo => {
        return !todo.completed
    })

    const todoDiv = todoAll.map(todo => {
        return  <li className={classes.todo}>
                    <div className={classes.todoflex}>
                            <div className={classes.checkbox}></div> 
                            <span>{todo.todo}</span> 
                        </div>                        
                        <p className={classes.delete} onClick={() => {
                            console.log(todo.id)
                            delete props.todos[props.todos.indexOf(todo)]
                        }}>Delete</p>
                    </li>     
    })

    return (
        <div className={classes.todos}>
            <ul className={classes['todos-list']}>
                {todoDiv}
            </ul>
            <div className={classes['todo-btns']}>
                <div className={classes['items-left']}>
                    4 items left
                </div>
                <div className={classes['todo-filters']}>
                    <div className={`${classes['todo-filter']} ${classes['active']}`}>All</div>
                    <div className={classes['todo-filter']}>Active</div>
                    <div className={classes['todo-filter']}>Completed</div>
                </div>
                <div className={classes['todo-clear']}>
                    Clear Completed
                </div>
            </div>
        </div>
    )
}

export default TodoList;