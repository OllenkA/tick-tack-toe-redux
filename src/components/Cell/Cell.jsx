import React from 'react';
import styles from './Cell.module.css';

function Cell({startGameWithComputerTC,isStartGame,isGameWithComputer,id,xIsNext,value,currentGame,onClickCell}) {

    let onClick = (id) => {
        startGameWithComputerTC(id)
    };

    return (

        <button onClick={() => isStartGame && !isGameWithComputer
                ? onClickCell(id) : isGameWithComputer && xIsNext
                    ?onClick(id):null}
            disabled={value || currentGame === 0}
            className={styles.cell}>
            <h2>{value}</h2>
        </button>
    );
}

export default Cell;