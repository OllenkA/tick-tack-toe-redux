import React from 'react';
import {connect} from "react-redux";
import ResultTable from "../components/ResultTable/ResultTable";

function ResultTableContainer(props) {
    return <ResultTable {...props}/>
}

const mapStateToProps = (state) => ({
    gamer1: state.main.gamer1,
    gamer2: state.main.gamer2,
    games: state.main.games,
    allPointsGamer1: state.main.totalScore.allPointsGamer1,
    allPointsGamer2: state.main.totalScore.allPointsGamer2,
    currentGame: state.main.currentGame,
});

export default connect(mapStateToProps, {})(ResultTableContainer);