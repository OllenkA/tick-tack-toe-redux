import React from 'react';
import styles from "../PopUp/PopUp.module.css";

function PopUpEndOfTheGame({closePopUpEndOfTheGameTC,totalScore, gamer1, gamer2}) {

    const totalAllScore =  () => {
        if(totalScore.allPointsGamer1 > totalScore.allPointsGamer2){
            return gamer1
        } else if(totalScore.allPointsGamer1 < totalScore.allPointsGamer2){
            return gamer2
        } else {
            return 'DEAD HEAT'
        }
    };

    return (
        <section  className={styles.popupMain}>
            <span
                onClick={closePopUpEndOfTheGameTC}
                className={styles.span}>
                X
            </span>
            <section>
                <h3>GAME OVER</h3>
                Winner: {totalAllScore()}
            </section>
        </section>
    );
}

export default PopUpEndOfTheGame;