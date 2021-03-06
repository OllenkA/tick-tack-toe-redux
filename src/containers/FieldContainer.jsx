import React, {Component} from 'react';
import '../App.css';
import Cell from "../components/Cell/Cell";
import Field from "../components/Field/Field";
import {startGameWithComputerTC} from "../redux/main-reducer";
import {clickOnCell, closePopUp, setNamesGamesTC, startGame, onMovePlayer, exitTheGame} from '../redux/actions'
import {connect} from "react-redux";
import {calculateWinner} from "../utility/objects-helpers";


class FieldContainer extends Component {

    onClickCell = (id) => {
        if (calculateWinner(this.props.squares) || this.props.squares[this.props.squares.id]) {
            return;
        }
        this.props.clickOnCell(id);
        calculateWinner(this.props.squares);
    };

    render() {
        let cells = this.props.squares.map((square, i) => {
            return <Cell key={i} value={square.value} id={square.id} isStartGame={this.props.isStartGame}
                         xIsNext={this.props.xIsNext} onClickCell={this.onClickCell}
                         isGameWithComputer={this.props.isGameWithComputer}
                         startGameWithComputerTC={this.props.startGameWithComputerTC}
                         onMovePlayer={this.props.onMovePlayer} isRoundStarted={this.props.isRoundStarted}
            />
        });

        return <article className={'field'}>
            <Field isPopUpActive={this.props.isPopUpActive}
                   exitTheGame={this.props.exitTheGame}
                   currentGame={this.props.currentGame}
                   cells={cells}
                   closePopUp={this.props.closePopUp}
                   setNamesGamesTC={this.props.setNamesGamesTC}
                   gamer1={this.props.gamer1}
                   gamer2={this.props.gamer2}
                   totalScore={this.props.totalScore}
                   isRoundStarted={this.props.isRoundStarted}
            />
        </article>
    }
}

const mapStateToProps = (state) => {
    return {
        isGameWithComputer: state.main.isGameWithComputer,
        squares: state.main.squares,
        xIsNext: state.main.xIsNext,
        isStartGame: state.main.isStartGame,
        isPopUpActive: state.main.isPopUpActive,
        currentGame: state.main.currentGame,
        gamer1: state.main.gamer1,
        gamer2: state.main.gamer2,
        totalScore: state.main.totalScore,
        isRoundStarted: state.main.isRoundStarted,
    }
};

export default connect(mapStateToProps, {
    clickOnCell, closePopUp, startGame, setNamesGamesTC,
    startGameWithComputerTC, onMovePlayer, exitTheGame,
})(FieldContainer);