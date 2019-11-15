import React from 'react';
import styles from './Buttons.module.css';


function Buttons(props) {
    return <section className={styles.container}>
        {props.isStartGame ?
            <div><h2>THE ROUND {props.winner || (props.fullness === 0) ? 'OVER' : 'STARTED'}</h2>
                <h3>{props.status}</h3></div>
            : <section className={styles.startButtons}>
                <button className={styles.button} onClick={props.startGame}>START GAME WITH FRIEND</button>
                <button className={styles.button} onClick={props.gameWithComputer}>START GAME WITH COMPUTER</button>
            </section>}

            {props.winner || (props.fullness === 0)?
                <div className={styles.wrapperForButtons}>
                {/*<button className={styles.button} onClick={props.startGameAgain}>NEW GAME</button>*/}
                <button className={styles.button} onClick={props.exitTheGame}>EXIT FROM THIS MODE</button>
                <button className={styles.button} onClick={props.continueGame}>NEW ROUND</button>
            </div>:null}
        {/*{props.winner || (props.fullness === 0)?*/}
        {/*    <div className={styles.wrapperForButtons}>*/}
        {/*    /!*<button className={styles.button} onClick={props.startGameAgain}>NEW GAME</button>*!/*/}
        {/*    <button className={styles.button} onClick={props.gameWithComputer}>GAME with computer</button>*/}
        {/*    <button className={styles.button} onClick={props.continueGame}>CONTINUE GAME</button>*/}
        {/*</div> : null}*/}
    </section>
}

export default Buttons;