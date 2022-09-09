import React from 'react';
import stylesContainer from "../common/styles/Container.module.css"
import styles from "./Footer.module.css"
const Forms = () => {
    return (
        <div className={styles.mainBlock}>
       <div className={`${stylesContainer.container} ${styles.changeContainer}`}>
           <h3>Contacts</h3>
           <form className={styles.form}>

                   <input type="text" />
                   <input type="text"/>
                   <textarea></textarea>
               </form>

           <button>Send</button>

       </div>
        </div>
    );
};

export default Forms;