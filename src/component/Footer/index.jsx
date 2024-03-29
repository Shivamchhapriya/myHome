import React from "react";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
function Footer() {
    return (
        <>
           <footer className="footer-section px-3">
            <div className="container">
                <div className="footer-cta pt-3 pb-3">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mt-2">
                            <div className="single-cta">
                                <i className="fas fa-map-marker-alt ms-2 "></i>
                                <div className="cta-text ms-5">
                                    <h4 className="text-start">Find us</h4>
                                    <p className="text-start">6 A Shivampuri colony,<br /> Bholaram Ustadmarg,<br /> Indore, 452001</p>
                                   

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mt-2">
                            <div className="single-cta">
                                <i className="fas fa-phone"></i>
                                 <div className="cta-text ms-5">
                                    <h4 className="text-start">Call us</h4>
                                    <span className="text-start">9009700155</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mt-2">
                            <div className="single-cta">
                                <i className="far fa-envelope-open" ></i>
                                <div className="cta-text ms-5">
                                    <h4 className="text-start">Mail us</h4>
                                    <span className="text-start">royalhousemakers@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mt-2">
                            <div className="footer-social-icon single-cta">
                            <i class="fa-sharp fa-regular fa-user-plus"></i>
                                <span>Follow Us : </span>
                                <a className="Icons" href="#"><FontAwesomeIcon icon={faFacebook}  /></a>
                                <a className="Icons" href="#"><FontAwesomeIcon icon={faInstagram}  /></a>
                                <a className="Icons" href="#"><FontAwesomeIcon icon={faLinkedin}  /></a>
                                <a className="Icons" href="#"><FontAwesomeIcon icon={faTwitter}  /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-content">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <Link to="/">
                                        <img src="./777.png" className="img-fluid" alt="logo" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-3 mb-md-0">
                            <div className="footer-widget">
                                <div className="footer-widget-heading mt-4">
                                    <h3 className="text-center">Useful Links</h3>
                                </div>
                                <ul className="color_footer">
                                    <li><Link to="/">Home</Link></li>
                                    <li><a href="#">About</a></li>
                                    <li><Link to="work">Services</Link></li>
                                    <li><a href="#">Portfolio</a></li>
                                    <li><Link to="contact">Contact</Link></li>
                                    <li><a href="#">Expert Team</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3 className="text-center">Subscribe</h3>
                                </div>
                                <div className="mb-3">
                                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Email Address" />
                                        <button><i className="fab fa-email-plane"></i>Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyrig ht-area">
                <div className="">
                    <div className="row" style={{ padding: '10px 0px' }}>
                        <div className="col-12 text-center">
                            <div className="copyright-text">
                                <p>Copyright &copy; 2024, All Right Reserved <a href="#">Royal House Makers</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;