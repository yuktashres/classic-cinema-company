import React from "react";
import logo from './logo.svg';

const Footer = () => {
    return (
        <footer className="footer-section" style={{ backgroundColor: '#663399' }}>
            <img src={logo}
                alt="Test Logo"
                style={{ width: '100px' }}
            />
            <div className="footer-selection" style={{padding: '40px 40px 10px 10px'}}>
                <a href="/" style={{ color: 'white', textDecoration: 'none', padding: '10px 10px 10px 10px', fontWeight: 'bold' }} >More Info</a>
                <a href="/" style={{ color: 'white', textDecoration: 'none', padding: '10px 10px 10px 10px' }} >About us</a>
                <a href="/" style={{ color: 'white', textDecoration: 'none', padding: '10px 10px 10px 10px' }} >FAQ</a>
                <a href="/" style={{ color: 'white', textDecoration: 'none', padding: '10px 10px 10px 10px' }} >Contact us</a>
            </div>

            <div className="mt-auto py-3 container text-center" style={{ color: 'white', fontSize: '10px', paddingBottom: '10px' }}>
                <p>Copyright &copy; The Classic Cinema Company Ltd 2020. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;