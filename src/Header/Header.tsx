import React from 'react';
import styles from "./Header.module.css"
import Nav from "../Nav/Nav";
const Header = () => {
    return (
        <div className={styles.main}>
<Nav/>
        </div>
    );
};

export default Header;