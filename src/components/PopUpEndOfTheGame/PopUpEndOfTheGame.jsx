import React from 'react';
import styles from "../PopUp/PopUp.module.css";

function PopUpEndOfTheGame({exitTheGame, totalScore, gamer1, gamer2}) {

    const totalAllScore = () => {
        if (totalScore.allPointsGamer1 > totalScore.allPointsGamer2) {
            return 'Winner: ' + gamer1
        } else if (totalScore.allPointsGamer1 < totalScore.allPointsGamer2) {
            return 'Winner: ' + gamer2
        } else {
            return 'DEAD HEAT'
        }
    };

    return <article className={styles.container}>
        <section className={styles.popupMain}>
            <span
                onClick={exitTheGame}
                className={styles.span}>
                X
            </span>

            <section className={styles.popup}>

                <h2>GAME OVER</h2>
                <h3>{totalAllScore()}</h3>
                <h4>Score: {totalScore.allPointsGamer1} : {totalScore.allPointsGamer2}</h4>
                <h4>To return to the menu - close this window!</h4>

            </section>

        </section>
    </article>
}

export default PopUpEndOfTheGame;