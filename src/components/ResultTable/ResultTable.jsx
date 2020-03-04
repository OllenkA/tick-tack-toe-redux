import React from 'react';
import styles from './ResultTable.module.css';


function ResultTable({games, gamer1, gamer2, allPointsGamer1, allPointsGamer2, currentGame}) {

    return <table className={styles.container} cellPadding={15}>
        {/*<caption className={styles.headlineTable}>Result table</caption>*/}
        <thead>
        <tr>
            <th>{gamer1}</th>
            {games.map(g => {
                return <td key={g.id} className={currentGame > g.id ? styles.activeGame : undefined}>
                    {g.winnerPointsGamer1}
                </td>
            })}
            <td>{allPointsGamer1}</td>
        </tr>
        <tr>
            <th>{gamer2}</th>
            {games.map(g => {
                return <td key={g.id} className={currentGame > g.id ? styles.activeGame : undefined}>
                    {g.winnerPointsGamer2}
                </td>
            })}
            <td>{allPointsGamer2}</td>
        </tr>
        <tr>
            <th>№ round</th>
            {games.map(g => {
                return <td key={g.id} className={currentGame >= g.id ? styles.activeGame : undefined}>
                    {g.id}
                </td>
            })}
            <td>Total</td>
        </tr>
        </thead>
    </table>
}

export default ResultTable;