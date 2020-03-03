import React from 'react';
import styles from '../Buttons/Buttons.module.css';


function ButtonsForChooseModeGame({startGame, gameWithComputer}) {

    return <section className={styles.wrapperForButtons}>

        <button className={styles.button}
                onClick={startGame}>
            START GAME WITH FRIEND
        </button>
        <button className={styles.button}
                onClick={gameWithComputer}>
            START GAME WITH COMPUTER
        </button>

    </section>
}

export default ButtonsForChooseModeGame;