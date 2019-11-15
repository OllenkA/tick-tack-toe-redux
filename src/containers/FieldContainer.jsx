import React, {Component} from 'react';
import '../App.css';
import Cell from "../components/Cell/Cell";
import Field from "../components/Field/Field";
import {
    clickOnCell,
    closePopUp,
    setNamesGamesTC,
    startGame,
    startGameWithComputerTC,
    onMovePlayer
} from "../redux/main-reducer";
import {connect} from "react-redux";
import {calculateWinner} from "../utility/objects-helpers";
import ButtonsContainer from "./ButtonsContainer";


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
                         onMovePlayer={this.props.onMovePlayer}
                         squares={this.props.squares}/>
        });

        return <article className={'gameField'}>
            <Field isPopUpActive={this.props.isPopUpActive}
                   cells={cells}
                   closePopUp={this.props.closePopUp} setNamesGamesTC={this.props.setNamesGamesTC}
            />
            <ButtonsContainer/>
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
    }
};

export default connect(mapStateToProps, {
    clickOnCell, closePopUp, startGame,
    setNamesGamesTC, startGameWithComputerTC, onMovePlayer
})(FieldContainer);