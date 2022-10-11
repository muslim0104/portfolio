import React from 'react';
import stylesContainer from "../common/styles/Container.module.css"
import styles from "./Footer.module.css"
const Footer = () => {
    return (
        <div className={styles.mainBlock}>
       <div className={`${stylesContainer.container} ${styles.changeContainer}`}>

         <div className={styles.elem}></div>
       </div>
        </div>
    );
};

export default Footer;