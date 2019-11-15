import React from 'react';
import styles from './Settings.module.css';

function Settings() {
    return <aside className={styles.settings}>
        <button className={styles.buttonsSettings}>
            Play with friend
        </button>
        <button className="buttonsSettings">
            Play with computer
        </button>
    </aside>

}

export default Settings;
