import React from 'react';
import styles from './Buttons.module.css';
import GameModeSwitches from "../GameModeSwitches/GameModeSwitches";
import ButtonsForChooseModeGame from "../ButtonsForChooseModeGame/ButtonsForChooseModeGame";


function Buttons({
                     isStartGame, winner, fullness, status, startGame, exitTheGame,
                     gameWithComputer, continueGame, currentGame
                 }) {

    return <article className={styles.container}>
            {currentGame === 6 ? <h3>GAME OVER</h3> : ((isStartGame) ?
                    <div className={styles.wrapperForText}>
                        <h3>
                            THE ROUND {winner || (fullness === 0) ? 'OVER' : 'STARTED'}
                        </h3>
                        <h4>{status}</h4>
                    </div>
                    : <ButtonsForChooseModeGame
                        startGame={startGame} gameWithComputer={gameWithComputer}/>
            )}
        <section>
            {(winner || (fullness === 0)) && <GameModeSwitches continueGame={continueGame}
                                                               exitTheGame={exitTheGame}/>}
        </section>

    </article>
}

export default Buttons;