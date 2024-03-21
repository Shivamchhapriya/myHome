import React from "react";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
function Footer() {
    return (
        <>
            <footer class="footer-section mt-5">
                <div>
                    <div class="footer-cta pt-3 pb-3">
                        <div class="row ms-5">
                            <div class="col-xl-3 col-sm-12 mt-2 ">
                                <div class="single-cta">
                                    <i class="fas fa-map-marker-alt" ></i>
                                    <div class="cta-text" style={{ marginTop: "6px", marginRight: "50px" }}>
                                        <h4 className="text-start" >Find us</h4>
                                        <span className="text-start">www.royalhousemakers.com</span>
                                        <p className="text-start">6 A Shivampuri colony, <br></br> Bholaram Ustadmarg,<br></br> Indore, 452001</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-sm-12 mt-3">
                                <div class="single-cta">
                                    <i class="fas fa-phone" ></i>
                                    <div class="cta-text" style={{ marginRight: "140px" }}>
                                        <h4 className="text-start">Call us</h4>
                                        <span className="text-start">9009700155</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-sm-12 mt-3">
                                <div class="single-cta">
                                    <i class="far fa-envelope-open"></i>
                                    <div class="cta-text">
                                        <h4 className="text-start">Mail us</h4>
                                        <span className="text-start">royalhousemakers@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-sm-12">
                                <div class="footer-social-icon mt-3 text-start">
                                    <span>Follow us</span>
                                    <a className="ms-3" href="#"><FontAwesomeIcon icon={faFacebook} style={{ color: '#D1D1D1', width: '23px', height: "25px" }} /></a>
                                    <a className="ms-2" href="#"><FontAwesomeIcon icon={faInstagram} style={{ color: '#D1D1D1', width: '23px', height: "25px" }} /></a>
                                    <a className="ms-2" href="#"><FontAwesomeIcon icon={faLinkedin} style={{ color: '#D1D1D1', width: '23px', height: "25px" }} /></a>
                                    <a className="ms-2" href="#"><FontAwesomeIcon icon={faTwitter} style={{ color: '#D1D1D1', width: '23px', height: "25px" }} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-content pt-5 pb-3">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-logo ms-3">
                                        <Link to="/">
                                            <img src="./777.png" class="img-fluid" alt="logo" />
                                        </Link>
                                    </div>
                                    <div class="footer-text ms-3">
                                        {/* <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                        elit,Lorem ipsum dolor sit amet.</p> */}
                                    </div>

                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-30">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading ms-4 mt-4">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul className="color_footer">
                                        <Link to="/">
                                            <li><a href="#">Home</a></li>
                                        </Link>
                                        <li><a href="#">About</a></li>
                                        <Link to="work">
                                            <li><a href="#">Services</a></li>
                                        </Link>
                                        <li><a href="#">Portfolio</a></li>
                                        <Link to="contact">
                                            <li><a href="#">Contact</a></li>
                                        </Link>
                                        {/* <li><a href="#">About us</a></li> */}
                                        {/* <li><a href="#">Our Services</a></li> */}
                                        <li><a href="#">Expert Team</a></li>
                                        {/* <li><a href="#">Contact us</a></li> */}
                                        {/* <li><a href="#">Latest News</a></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-50 p-4">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div class=" mb-25">
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div class="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            <button><i class="fab fa-email-plane"></i>Subscribe</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-area">
                    <div>
                        <div class="row" style={{ padding: "10px 0px" }}>
                            <div class="col-xl-12 col-lg-12 text-center text-lg-left">
                                <div class="copyright-text">
                                    <p>Copyright &copy; 2024, All Right Reserved <a href="#">Anup</a></p>
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