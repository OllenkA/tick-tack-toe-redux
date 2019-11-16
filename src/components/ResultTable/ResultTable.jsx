import React from 'react';
import styles from './ResultTable.module.css';
import {connect} from "react-redux";

function ResultTable(props) {
    return <div className={styles.container}>
        <section>
            <h2>Result table</h2>
        </section>
        {/*{props.isStartGame &&*/}
        <thead>
        <tr>
            <th className={styles.table}>Number game</th>
            <th className={styles.table}>{props.gamer1}</th>
            <th className={styles.table}>{props.gamer2}</th>
        </tr>
        {props.games.map(g => {
            return (
                <tr key={g.id}>
                    <td className={styles.table}>
                        {g.id}
                    </td>
                    <td className={styles.table}>
                        {g.winnerPointsGamer1}
                    </td>
                    <td className={styles.table}>
                        {g.winnerPointsGamer2}
                    </td>
                </tr>
            );
        })}

        {/*<tr>*/}
        {/*    <td className={styles.table}>{props.winnerPointsGamer1?props.winnerPointsGamer1:0}</td>*/}
        {/*    <td className={styles.table}>{props.winnerPointsGamer2?props.winnerPointsGamer2:0}</td>*/}
        {/*</tr>*/}
        {/*<tr>*/}
        {/*    <td className={styles.table}>*/}
        {/*        {props.games.map(g => g.winnerPointsGamer1)}*/}
        {/*    </td>*/}
        {/*    <td className={styles.table}>0</td>*/}
        {/*</tr>*/}
        {/*<tr>*/}
        {/*    <td className={styles.table}>0</td>*/}
        {/*    <td className={styles.table}>0</td>*/}
        {/*</tr>*/}
        </thead>
    </div>
}

const mapStateToProps = (state) => ({
    gamer1: state.main.gamer1,
    gamer2: state.main.gamer2,
    games: state.main.games,
    winnerPointsGamer1: state.main.games.winnerPointsGamer1,
    winnerPointsGamer2: state.main.games.winnerPointsGamer2,
});

export default connect(mapStateToProps, {})(ResultTable);
