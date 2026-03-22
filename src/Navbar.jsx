import { useState } from 'react';
import './CSS/Navbar.css';

const NAV_LINKS = [
    { label: 'About',    href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills',   href: '#skills' },
    { label: 'Contact',  href: '#footer' },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <a href="#hero" className="nav-logo">Aiden Swanson</a>

            <ul className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
                {NAV_LINKS.map(link => (
                    <li key={link.label}>
                        <a href={link.href} onClick={() => setMenuOpen(false)}>
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>

            <button
                className={`nav-hamburger ${menuOpen ? 'nav-hamburger--open' : ''}`}
                onClick={() => setMenuOpen(prev => !prev)}
                aria-label="Toggle menu"
            >
                <span /><span /><span />
            </button>
        </nav>
    );
}

export default Navbar;
