import React from 'react';
import styles from "../PopUp/PopUp.module.css";

function PopUpEndOfTheGame(props) {
    return (
        <section  className={styles.popupMain}>
            <span
                onClick={props.closePopUpEndOfTheGameTC}
                className={styles.span}>
                X
            </span>
            <section>
                <h3>GAME OVER</h3>
                <h5>Winner: {props.winner.toUpperCase() === "X" ? props.gamer1 : props.gamer2}</h5>
            </section>
        </section>
    );
}

export default PopUpEndOfTheGame;