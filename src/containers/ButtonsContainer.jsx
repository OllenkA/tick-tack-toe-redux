import React from 'react';
import {connect} from "react-redux";
import {continueGame, gameWithComputer, startGame, exitTheGame} from "../redux/main-reducer";
import Buttons from "../components/Buttons/Buttons";
import {calculateWinner} from "../utility/objects-helpers";


function ButtonsContainer(props) {
    // stoppedGame(props.squares, props.xIsNext, props.gamer1, props.gamer2);
    const winner = calculateWinner(props.squares);
    const fullness = props.squares.filter(sq => sq.value === null).length;
    let status;
    if (winner) {
        status = 'Winner : ' + (winner.toUpperCase() === "X" ? props.gamer1 : props.gamer2);
    } else if (!winner && fullness === 0) {
        status = '0 : 0 --- DRAW'
    } else {
        status = 'Next move : ' + (props.xIsNext ? props.gamer1
            : props.gamer2);
    }

    return <Buttons exitTheGame={props.exitTheGame}
                    gameWithComputer={props.gameWithComputer}
                    continueGame={props.continueGame}
                    winner={winner}
                    fullness={fullness}
                    status={status}
                    startGame={props.startGame}
                    isStartGame={props.isStartGame}
    />;
}

const mapStateToProps = (state) => {
    return {
        isGameWithComputer: state.main.isGameWithComputer,
        isStartGame: state.main.isStartGame,
        gamer1: state.main.gamer1,
        gamer2: state.main.gamer2,
        xIsNext: state.main.xIsNext,
        squares: state.main.squares,
    }
};

export default connect(mapStateToProps,
    {exitTheGame, gameWithComputer, continueGame, startGame})(ButtonsContainer);
