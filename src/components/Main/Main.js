import React from 'react';
/*import styles from './Main.module.css';*/
import './Main.css'
// import photo from '../../common/images/'


function Main() {
    return (
        <div className = "main" id="0">
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
                  integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                  crossOrigin="anonymous"/>
            <div className="container">
                <div className="greeting">
                    <span className="hello">Hello!</span>
                    <span className="name">I'm Zaiats Aleksei</span>
                    <span className="whoAmI">FRONTEND DEVELOPER</span>
                </div>

                <div className="wrapper">
                    <div className="card">
                        <div className="front"></div>
                        <div className="back">
                            <div className="content">
                                <h1>
                                    Zaiats Aleksei
                                    <span>Frontend Developer</span>
                                </h1>
                                <ul className="socials">
                                    <li>
                                        <a href="https://vk.com/aleksey_zayats" target='_blank'> <i className="fa fa-vk"></i> </a>
                                        <a href="https://www.facebook.com/Aleksei.Zayets" target='_blank'> <i className="fa fa-facebook"></i> </a>
                                        <a href="https://t.me/Zaiats_Akeksei" target='_blank'> <i className="fa fa-telegram"></i> </a>
                                        <a href="https://github.com/alexooua" target='_blank'> <i className="fa fa-github"></i> </a>
                                        <a href="viber://chat?number=+380932077941" target='_blank'> <i className="fa fa-whatsapp"></i> </a>
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
