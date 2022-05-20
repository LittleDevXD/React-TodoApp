import React, { Fragment } from 'react';
import classes from './Body.module.css';

const Body = (props) => {
    return (
        <Fragment>
            <div className={classes.black}></div>
            <div className={classes.white}></div>
            <div className={classes['top-parent']}>
                <div className={classes['todo-header']}>
                    TODO
                </div>
                {props.children}
            </div>
        </Fragment>
    )
}

export default Body;