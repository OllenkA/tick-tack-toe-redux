import React from 'react';
import styles from "../PopUp/PopUp.module.css";
import {Field, reduxForm} from "redux-form";


const Form = ({handleSubmit}) => {
    return (
        <form className={styles.popup} onSubmit={handleSubmit}>
            <h3>HI!</h3>
            <h4 className={styles.name}>
                Enter your name, please:
            </h4>
            <div>
                <Field name={'gamer1'} component='input'
                       placeholder={'Gamer 1'} className={styles.input}/>
            </div>
            <h4 className={styles.name}>
                Enter name your rival, please:
            </h4>
            <div>
                <Field name={'gamer2'} component='input'
                       placeholder={'Gamer 2'} className={styles.input}/>
            </div>
            <button className={styles.button}>
                HERE GOES..!
            </button>
        </form>
    );
};

const ReduxForm = reduxForm({form: 'gamers'})(Form);

export default ReduxForm;