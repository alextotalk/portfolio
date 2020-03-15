import React from 'react';
import styles from './Projects.module.css';

function Project(props) {
    return (<>
            <div className={styles.projects}>
                <div className={styles.project}>
                    <h2>{props.id}</h2>
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                    <button><a href={props.href} target='_blank'>Watch</a></button>
                </div>
            </div>
        </>
    );
}

export default Project;
