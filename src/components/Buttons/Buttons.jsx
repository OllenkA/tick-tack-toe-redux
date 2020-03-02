import React from 'react';
import styles from './Buttons.module.css';
import GameModeSwitches from "../GameModeSwitches/GameModeSwitches";
import ButtonsForChooseModeGame from "../ButtonsForChooseModeGame/ButtonsForChooseModeGame";


function Buttons({
                     isStartGame, winner, fullness, status, startGame, gameWithComputer,
                     exitTheGame, continueGame, currentGame
                 }) {

    return <section className={styles.container}>

        {currentGame === 6 ? <h2>GAME OVER</h2> : ((isStartGame) ?
                <div>
                    <h2>THE ROUND {winner || (fullness === 0) ? 'OVER' : 'STARTED'}</h2>
                    <h3>{status}</h3>
                </div>
                : <ButtonsForChooseModeGame
                    startGame={startGame} gameWithComputer={gameWithComputer}/>
        )}

        {(winner || (fullness === 0)) && <GameModeSwitches continueGame={continueGame}
                                                           exitTheGame={exitTheGame}/>}

    </section>
}

export default Buttons;