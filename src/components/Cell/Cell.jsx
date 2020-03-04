import React from 'react';
import styles from './Cell.module.css';
// import zero from '../../assets/O.jpg';
// import cross from '../../assets/X.jpg';

function Cell({
                  startGameWithComputerTC, isStartGame, isGameWithComputer,
                  id, xIsNext, value, onClickCell, isRoundStarted
              }) {

    let onClick = (id) => {
        startGameWithComputerTC(id)
    };
debugger
    return (
        <button onClick={() => isStartGame && !isGameWithComputer
            ? onClickCell(id) : isGameWithComputer && xIsNext
                ? onClick(id) : null}
                disabled={value || !isRoundStarted}
                className={styles.cell}>
            <h2 className={value === 'X'?styles.valueX:styles.value0}> {value}
                {/*{value && <img className={styles.img} src={value === 'X' ? cross : zero} alt={'hi'}/> }*/}
            </h2>
        </button>
    );
}

export default Cell;