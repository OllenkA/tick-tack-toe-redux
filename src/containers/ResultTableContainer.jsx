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
    winnerPointsGamer1: state.main.games.winnerPointsGamer1,
    winnerPointsGamer2: state.main.games.winnerPointsGamer2,
    totalScore: state.main.totalScore,
});

export default connect(mapStateToProps, {})(ResultTableContainer);
