import React from 'react';
import stylesContainer from "../common/styles/Container.module.css"
import styles from "./Works.module.css"
import Work from "./Work/Work";


const Works = () => {
    return (
        <div className={styles.mainBlockworks}>
        <div className={`${stylesContainer.container} ${styles.changeContainerworks}`}>
<Work name={""}/>
<Work/>
        </div>
        </div>
    );
};

export default Works;