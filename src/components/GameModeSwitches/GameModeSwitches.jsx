import React from 'react';
import styles from '../Buttons/Buttons.module.css';


function GameModeSwitches({exitTheGame, continueGame}) {

    return <div className={styles.wrapperForButtons}>

        <button className={styles.button} onClick={exitTheGame}>
            EXIT FROM THIS MODE
        </button>
        <button className={styles.button} onClick={continueGame}>
            CONTINUE ( NEW ROUND )
        </button>

    </div>
}

export default GameModeSwitches;