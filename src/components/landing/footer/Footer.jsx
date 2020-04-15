import React from 'react';
import Links from '../../navigation/Links';

import './Footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="copyright">
                <p>Legal Stuff</p>
                <p>Business Stuff</p>
                <p>&copy; Copyright 2020</p>
            </div>

            <div className="footer-links">
                <Links />
            </div>

            <div className="contact">
                <p>blog</p>
                <p>newsletter</p>
                <p>email</p>
            </div>
        </div>
    )
}

export default Footer;