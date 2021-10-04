import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <p><FaFacebookSquare/></p>
                <p><SiGmail/></p>
                <p><TiSocialLinkedin/></p>
                <p><TiSocialTwitter/></p>
                <p><TiSocialYoutube/></p>
            </div>
            <small>© 2021 learning academy. Trademarks and brands are the property of their respective owners.</small>
        </div>
    );
};

export default Footer;