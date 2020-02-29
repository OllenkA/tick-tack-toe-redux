import React from 'react';
import styles from './PopUp.module.css';
import ReduxForm from "../Form/Form";

function PopUp(props) {

    const onSubmit = (formData) => {
        let name1 = formData.gamer1 ? formData.gamer1 : '';
        let name2 = formData.gamer2 ? formData.gamer2 : '';
        props.setNamesGamesTC(name1, name2);
        props.closePopUp();
    };
    return (
        <section className={styles.popupMain}>
            <span onClick={props.closePopUp} className={styles.span}>
                X
            </span>
            <ReduxForm onSubmit={onSubmit}/>
        </section>
    );
}

export default PopUp;