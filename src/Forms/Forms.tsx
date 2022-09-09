import React from 'react';
import stylesContainer from "../common/styles/Container.module.css"
import styles from "./Work.module.css"
const Work = () => {
    return (
        <div className={styles.mainBlock}>
        <div className={`${stylesContainer.container} ${styles.changeContainer}`}>
            <h2>I'm looking into remote work options</h2>
            <div className={styles.hire}> <button> hire me </button></div>
        </div>
        </div>
    );
};

export default Work;