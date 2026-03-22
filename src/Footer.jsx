import './CSS/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer id="footer">
            <div className="footer-inner">
                <p className="footer-brand">AS</p>

                <div className="footer-links">
                    <a
                        href="https://github.com/Cassequel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-icon-link"
                        aria-label="GitHub"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                        href="https://linkedin.com/in/aiden-swanson"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-icon-link"
                        aria-label="LinkedIn"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                        href="mailto:aidenpswanson@gmail.com"
                        className="footer-email-link"
                    >
                        aidenpswanson@gmail.com
                    </a>
                </div>

                <p className="footer-copy">&copy; 2026 Aiden Swanson</p>
            </div>
        </footer>
    );
}

export default Footer;
