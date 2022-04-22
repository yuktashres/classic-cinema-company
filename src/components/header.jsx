import React from "react";
import logo from '../images/logo.svg';
import search from '../images/search.png';

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <a href="/" className="navbar-brand" target="_blank" rel="noopener noreferrer"
                >
                    <img src={logo} alt="Test Logo" style={{ width: '100px' }}
                    />
                </a>
                <ul>
                    <li><a className="navbar-selection-1" href="/">What's On</a></li>
                    <li><a className="navbar-selection-2" href="/">Coming Soon</a></li>
                    <li><a className="navbar-selection-3" href="/">Sign Up</a></li>
                    <li><a className="navbar-selection-4" href="/">Your Visit</a></li>
                    <li><a className="navbar-selection-5" href="/">Book Tickets</a></li>
                    <li>
                        <img className="search" src={search}
                            alt="Search"
                            style={{ width: '60px' }}
                        />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;