import React from 'react';
import styles from './Cell.module.css';
// import {calculateWinner} from "../../utility/objects-helpers";
// import {stoppedGame} from "../../utility/objects-helpers";

function Cell(props) {
    let onClick = (id) => {
        props.startGameWithComputerTC(id)
        // props.onMovePlayer(id);
        // const winner = calculateWinner(props.squares)
        // if(!winner){
        //     setTimeout(() => {
        //         ()
        //     },2000)
        // }
    };

    return (
        <button
            onClick={() => props.isStartGame && !props.isGameWithComputer ? props.onClickCell(props.id) :
                props.isGameWithComputer && props.xIsNext?onClick(props.id):null}
            disabled={props.value}
            className={styles.cell}>
            <h2>{props.value}</h2>
        </button>
    );
}

export default Cell;