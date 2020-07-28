import React from 'react';
import styles from './Projects.module.css';
import Project from "../Projects/Project";

function Projects() {
    const projectsProp = [
        {id: '01', name:'IT-samurai-game', description: 'Click to Joker and fun', href: 'http://alexooua.github.io/game-kiss'},
        // {id: '02', name:'TodoList', description: 'Take a note for the future', href: 'https://fitkovich1.github.io/todolist13_study/'},
        {id: '02', name:'Counter', description: 'Change start value and count number up or down', href: 'http://alexooua.github.io/counter'},
        // {id: '03', name:'Tic-tac-toe', description: 'Сlassic tic tac toe game', href: 'https://fitkovich1.github.io/tic-tac-toe/'},
        {id: '03', name: 'Calculator', description: 'Сount complex arithmetic expressions', href: 'http://alexooua.github.io/calculator'},
        {id: '04', name: 'Stopwatch', description: 'Measure the time of any action', href: 'http://alexooua.github.io/stop-watch'},
        {id: '05', name: 'Social network', description:'Communication between people', href: 'http://alexooua.github.io/social'}

    ];
    let projects = projectsProp.map((pr) => <Project id={pr.id} name={pr.name} description={pr.description} href={pr.href}/>)
    return (
        <div className={styles.projectsBlock} id="2">
            <span className={styles.myProjects}>My projects</span>
            <div className={styles.container}>
              {projects}
            </div>
        </div>
    );
}

export default Projects;
