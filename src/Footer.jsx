import React from "react";
import footerLogo from './images/CCC-Logo2.png';

const Footer = () => {
    return (
        <footer>
            <>
                <img src={footerLogo}
                    alt="Footer logo"
                    width={100}
                    style={{ float: 'left', padding: '0px 0px 10px 10px' }}>
                </img>
                <ul style={{listStyle: 'none', backgroundColor: '#696969'}}>
                    <li style={{fontWeight: 'bold', color: 'black'}}>More Info</li>
                    <li>About us</li>
                    <li>FAQ</li>
                    <li>Contact us</li>
                </ul>
            </>
        </footer>
    );
};

export default Footer;