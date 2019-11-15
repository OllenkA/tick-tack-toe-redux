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
            <th className={styles.table}>{props.gamer1}</th>
            <th className={styles.table}>{props.gamer2}</th>
        </tr>
        <tr>
            <td className={styles.table}>0{}</td>
            <td className={styles.table}>0</td>
        </tr>
        <tr>
            <td className={styles.table}>0</td>
            <td className={styles.table}>0</td>
        </tr>
        <tr>
            <td className={styles.table}>0</td>
            <td className={styles.table}>0</td>
        </tr>
        </thead>
    </div>
}

const mapStateToProps = (state) => ({
    gamer1: state.main.gamer1,
    gamer2: state.main.gamer2,
});

export default connect(mapStateToProps)(ResultTable);
