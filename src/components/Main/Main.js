import React from 'react';
/*import styles from './Main.module.css';*/
import './Main.css'
import photo from '../../common/images/Колясик2.png'


function Main() {
    return (
        <div className = "main" id="0">
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
                  integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                  crossOrigin="anonymous"/>
            <div className="container">
                <div className="greeting">
                    <span className="hello">Hello!</span>
                    <span className="name">I'm Nikolas Fitkovich</span>
                    <span className="whoAmI">FRONTEND DEVELOPER</span>
                </div>

                <div className="wrapper">
                    <div className="card">
                        <div className="front"></div>
                        <div className="back">
                            <div className="content">
                                <h1>
                                    Fitkovich Nikolas
                                    <span>Frontend Developer</span>
                                </h1>
                                <ul className="socials">
                                    <li>
                                        <a href="https://vk.com/volleymen" target='_blank'><i className="fa fa-vk"></i></a>
                                        <a href="https://www.instagram.com/nikola10fit_/" target='_blank'><i className="fa fa-instagram"></i></a>
                                        <a href="https://github.com/fitkovich1" target='_blank'><i className="fa fa-github"></i></a>
                                        <a href="https://t.me/Fitkovich_Nikolai" target='_blank'><i className="fa fa-telegram"></i></a>
                                        <a href="https://wa.me/375292746603" target='_blank'><i className="fa fa-whatsapp"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
