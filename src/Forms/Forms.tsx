import React from 'react';
import stylesContainer from "../common/styles/Container.module.css"
import styles from "./Form.module.scss"
const Forms = () => {
    return (
        <div className={styles.mainBlock}>
       <div className={`${stylesContainer.container} ${styles.changeContainer}`}>
           <div className={styles.titleForm}>
           <h3>Contacts</h3>
           </div>
           <form className={styles.form}>

                   <input type="text"  className={styles.textField__input}/>
                   <input type="text" className={styles.textField_floating3}/>
                   <textarea></textarea>
               </form>

           <button type={"submit"}>Send</button>

       </div>
        </div>
    );
};

export default Forms;