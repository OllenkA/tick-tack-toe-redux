import React from 'react';
import styles from './PopUp.module.css';
import ReduxForm from "../Form/Form";

function PopUp({closePopUp, setNamesGamesTC}) {

    const onSubmit = (formData) => {
        let name1 = formData.gamer1 ? formData.gamer1 : '';
        let name2 = formData.gamer2 ? formData.gamer2 : '';
        setNamesGamesTC(name1, name2);
        closePopUp();
    };

    return <section className={styles.popupMain}>

            <span onClick={closePopUp} className={styles.span}>
                X
            </span>
            <ReduxForm onSubmit={onSubmit}/>

    </section>
}

export default PopUp;