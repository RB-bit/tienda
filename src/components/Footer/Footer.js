import React from 'react'
import './Footer.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
    return (
            <div className="footer">

                    <ul className="footer__Nav">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Contact</li>
                    </ul>

                    <ul className="footer__RRSS">
                        <li><InstagramIcon/></li>
                        <li><FacebookIcon/></li>
                        <li><TwitterIcon/></li>
                    </ul>
            </div>
    )
}

export default Footer
