import React from 'react';
import styles from "./Main.module.css"
import stylesContainer from "../common/styles/Container.module.css"
import myImg from "../assets/img/i.jpg"
import {url} from "inspector";

const Main = () => {
    let styleImg={
        backgroundImage:`url(${myImg})`,
    }
    return (
        <div className={styles.main}>
            <div className={` ${styles.changeContainer} ${stylesContainer.container} `}>
                <div className={styles.imgBlock} style={styleImg}>   </div>

                    <div>
                    <h1 className={styles.header_text}>
                    <div>
                        MUSLIM
                    </div>
                        <div>
                            MAGAMADOV
                        </div>


                    </h1>
                        <div className={styles.span_style}>
                    <span className={styles.text_span}>CREATIVE FRONTEND-DEVELOPER </span>
                        </div>
                        <div className={styles.text_p}>
                        <p>
                            Hi, I’m Muslim Magamadov and I am creative frontend-developer
                            developer who dream making the world better place by creating captivating products

                        </p>
                        </div>
                    </div>



            </div>
        </div>


    );
};

export default Main;