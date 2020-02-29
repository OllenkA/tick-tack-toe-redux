import React from 'react';
import styles from './Cell.module.css';

function Cell(props) {

    let onClick = (id) => {
        props.startGameWithComputerTC(id)
    };

    return (

        <button onClick={() => props.isStartGame && !props.isGameWithComputer
                ? props.onClickCell(props.id) : props.isGameWithComputer && props.xIsNext
                    ?onClick(props.id):null}
            disabled={props.value && props.currentGame === 0}
            className={styles.cell}>
            <h2>{props.value}</h2>
        </button>
    );
}

export default Cell;