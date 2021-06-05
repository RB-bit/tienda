import React from 'react'
import './Footer.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedinIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
    return (
        <React.Fragment>
            <div className="site-footer">
                <div className="site-footer-about">
                    <h6>About</h6>
                    <p>
                        The Nike Air Max 270 React continues to drive iterative progress in the Air Max lineage. The introduction of Nike React technology results in a smooth transition from heel to forefoot (offset is also reduced compared to its predecessor) and an energetic tread.</p>
                </div>

                <div>
                    <h6>Payments</h6>
                    <ul className="footer-links">
                        <li><img src="../assets/img/payments/paypal.png" alt=" paypal payment " /></li>
                        <li><img src="../assets/img/payments/visaok.png" alt=" visa payment " /></li>
                        <li><img src="../assets/img/payments/american-express.png" alt=" amex payment " /></li>
                        <li><img src="../assets/img/payments/western-union.png" alt=" western-union payment " /></li>
                    </ul>
                </div>

                <div>
                    <h6>Social</h6>
                    <ul className="social-icons">
                        <li><a className="social-icons-instagram" href="https://www.instagram.com/nikesportswear/?hl=es-la" target="blank"><InstagramIcon /></a></li>
                        <li><a className="social-icons-facebook" href="https://www.facebook.com/nikesportswear/" target="blank"><FacebookIcon /></a></li>
                        <li><a className="social-icons-twitter" href="https://twitter.com/nike?lang=es" target="blank"><TwitterIcon /></a></li>
                        <li><a className="social-icons-linkedin" href="https://www.linkedin.com/company/nike" target="blank"><LinkedinIcon /></a></li>
                    </ul>
                </div>
            </div>


            <div className="footer-copyright">
                <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by
                    <a href="https://www.nike.com/ar/" target="blank"> Nike</a></p>
            </div>

        </React.Fragment>
    )
}

export default Footer
