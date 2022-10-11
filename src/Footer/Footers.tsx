import React from 'react';
import Footer from "./Footer";
import stylesContainer from "../common/styles/Container.module.css"
import styles from './Footer.module.css'

const Footers = () => {
    return (
        <div className={styles.mainBlock}>



            <div className={`${stylesContainer.container} ${styles.changeContainerFooter}`}>
               <h3>My social networks</h3>
                <div className={styles.footerBlock}>
                <Footer/>
                <Footer/>
                <Footer/>
                </div>
            </div>

        </div>
    );
};

export default Footers;