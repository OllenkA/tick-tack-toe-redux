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
                {props.totalScore.allPointsGamer1 > props.totalScore.allPointsGamer2? <p>Winner: {props.gamer1}</p>
                    :<p>Winner: {props.gamer2}</p>}
            </section>
        </section>
    );
}

export default PopUpEndOfTheGame;