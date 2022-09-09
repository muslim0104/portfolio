import React from 'react';
import styles from "./Nav.module.css"
const Nav = () => {
    return (
        <div className={styles.main}>

         <a href="">Главная</a>
         <a href="">Скиллы</a>
         <a href="">Работы</a>
         <a href=""> Контакты</a>



        </div>
    );
};

export default Nav;