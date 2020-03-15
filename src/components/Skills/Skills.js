import React from 'react';
import styles from './Skills.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from "@fortawesome/fontawesome-svg-core";
import {
    fab,
    faCss3,
    faGithubAlt,
    faHtml5,
    faJs,
    faReact} from "@fortawesome/free-brands-svg-icons";
import { Icon, InlineIcon } from '@iconify/react';
import typescriptIcon from '@iconify/icons-cib/typescript';
import redux from '@iconify/icons-simple-icons/redux';

library.add(faReact, fab);


function Skills() {
    return (
        <div className={styles.skillsBlock} id = "1">
            <div className={styles.container}>
                <span className={styles.spanMySkills}>My skills</span>
                <div className={styles.skills}>
                    <div className={styles.skill}>
                        <div className={styles.reactLogoImage}>
                            <FontAwesomeIcon className={styles.icon} icon={faReact}/>
                        </div>
                        <span className={styles.nameOfSkill}>React</span>
                    </div>

                    <div className={styles.skill}>
                        <div className={styles.jsLogoImage}>
                            <FontAwesomeIcon className={styles.icon} icon={faJs}/>
                        </div>
                        <span className={styles.nameOfSkill}>JavaScript</span>
                    </div>

                    <div className={styles.skill}>
                        <div className={styles.htmlLogoImage}>
                            <FontAwesomeIcon className={styles.icon} icon={faHtml5}/>
                        </div>
                        <span className={styles.nameOfSkill}>HTML5</span>
                    </div>

                    <div className={styles.skill}>
                        <div className={styles.cssLogoImage}>
                            <FontAwesomeIcon className={styles.icon} icon={faCss3}/>
                        </div>
                        <span className={styles.nameOfSkill}>CSS3</span>
                    </div>

                    <div className={styles.skill}>
                        <div className={styles.gitLogoImage}>
                            <FontAwesomeIcon className={styles.icon} icon={faGithubAlt}/>
                        </div>
                        <span className={styles.nameOfSkill}>Git Hub</span>
                    </div>

                    <div className={styles.skill}>
                            <Icon className={styles.typeScriptLogoImage} icon={typescriptIcon} />
                        <span className={styles.nameOfSkill}>TypeScript</span>
                    </div>

                    <div className={styles.skill}>
                        <Icon className={styles.reduxLogoImage} icon={redux} />
                        <span className={styles.nameOfSkill}>Redux/Redux-Thunk</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;


