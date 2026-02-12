import './CSS/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div id="footer">
            <div id="top-nav">
                <ul>
                    <li>Socials</li>
                    <li id="message-nav">Send A Message</li>
                </ul>
            </div>
            <div id="footer-nav">
                <ul>
                    <a href="#"><li><FontAwesomeIcon icon={faInstagram} /></li></a>
                    <a href="#"><li><FontAwesomeIcon icon={faLinkedin} /></li></a>
                    <a href="#"><li><FontAwesomeIcon icon={faYoutube} /></li></a>
                    <a href="#"><li><FontAwesomeIcon icon={faGithub} /></li></a>
                    <a href="#" id="footer-nav-right"><li>aidenpswanson@gmail.com</li></a>
                </ul>
            </div>
            <div id="copyright">
                <p>© 2024 Aiden Swanson. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;