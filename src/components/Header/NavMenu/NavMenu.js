import React from 'react';
import styles from './NavMenu.module.css';

function NavMenu() {
    return (
        <div className={styles.navMenu}>
            <a href="#0" className={styles.link}>Home</a>
            <a href="#1" className={styles.link}>Skills</a>
            <a href="#2" className={styles.link}>Projects</a>
            <a href="#3" className={styles.link}>Contacts</a>
        </div>
    );
}

export default NavMenu;
