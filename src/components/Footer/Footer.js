import React from 'react';
import styles from './Footer.module.css';
import './Footer.css'


function Footer() {

    return (
        <div className='footer'>
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
                  integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                  crossOrigin="anonymous"/>
            <span className="spanInitials">Zaiats Aleksei</span>
            <ul className="containerFooter">
                <li><a href="https://vk.com/aleksey_zayats" target='_blank'> <i className="fa fa-vk"></i> </a></li>
                <li><a href="https://www.facebook.com/Aleksei.Zayets" target='_blank'> <i className="fa fa-facebook"></i> </a></li>
                <li><a href="https://t.me/Zaiats_Akeksei" target='_blank'> <i className="fa fa-telegram"></i> </a></li>
                <li><a href="https://github.com/alexooua" target='_blank'> <i className="fa fa-github"></i> </a></li>
                <li><a href="viber://chat?number=+380932077941" target='_blank'> <i className="fa fa-whatsapp"></i> </a></li>
            </ul>
            <ul className="containerFooter2">
                <li><a title="Позвонить" href="tel:+380932077941"><i className="fa fa-phone"></i><span>+38-(093)-207-79-41</span></a></li>
                <li><a title="Позвонить" href="tel:+380966635434"><i className="fa fa-phone"></i><span>+38-(096)-663-54-34</span></a></li>

            </ul>

            <span className="spanEndFooter">2020 All rights reserved</span>
        </div>
    );
}

export default Footer;
