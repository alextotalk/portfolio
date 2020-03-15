import React from 'react';
import styles from '../../components/Header/Header.module.css';
import NavMenu from "../../components/Header/NavMenu/NavMenu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDribbble, faReact,fab, } from "@fortawesome/free-brands-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
library.add(faReact, fab);

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <FontAwesomeIcon className={styles.icon} icon={faDribbble}/>
            </div>
            <div className={styles.container}>
                <NavMenu/>
            </div>
        </div>
    );
}

export default Header;
