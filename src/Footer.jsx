import React from "react";
import footerLogo from './images/CCC-Logo2.png';
import map from './images/map.png';

const Footer = () => {
    return (
        <footer>
            <>
                <img src={footerLogo}
                    alt="Footer logo"
                    width={150}
                    style={{ float: 'left', padding: '20px 0px 10px 120px' }}>
                </img>
                <ul style={{ listStyle: 'none', backgroundColor: '#696969', padding: '30px 30px 30px 25%', color: 'white' }}>
                    <li style={{ fontWeight: 'bold' }}><a href="/" style={{ textDecoration: 'none', color: 'white' }}>More Info</a></li><br></br>
                    <li><a href="/" style={{ textDecoration: 'none', color: 'white' }}>About us</a></li>
                    <li><a href="/" style={{ textDecoration: 'none', color: 'white' }}>FAQ</a></li>
                    <li><a href="/" style={{ textDecoration: 'none', color: 'white' }}>Contact us</a></li>
                </ul>
                <div>
                    <img src={map}
                        alt="Footer logo"
                        width={150}
                        style={{ float: 'left', padding: '20px 0px 10px 120px' }}>
                    </img>

                    </div>


                    <h3>Copyright &copy;</h3>
            </>
        </footer>
    );
};

export default Footer;