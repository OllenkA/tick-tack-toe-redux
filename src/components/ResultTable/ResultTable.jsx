import React from 'react';
import styles from './ResultTable.module.css';

function ResultTable({games, gamer1, gamer2, allPointsGamer1, allPointsGamer2}) {

    return <div className={styles.container}>
        <section>
            <h2>Result table</h2>
        </section>
        <thead>
        <tr>
            <th className={styles.table}>Number round</th>
            <th className={styles.table}>{gamer1}</th>
            <th className={styles.table}>{gamer2}</th>
        </tr>

        {games.map(g => {
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
                })
        }
              <tr>
                  <td className={styles.table}>
                      Total
                  </td>
                  <td className={styles.table}>
                      {allPointsGamer1}
                  </td>
                  <td className={styles.table}>
                      {allPointsGamer2}
                  </td>
              </tr>
        </thead>
    </div>
}

export default ResultTable;
