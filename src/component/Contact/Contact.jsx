import React, { useState } from 'react';
import "./Contact.css";

function Contact() {
  return (
    <>
    <div className='row body__2 bg-opacity-100'>
      <section className='col-12' id="section-wrapper">
        <div className="box-wrapper px-1">
            <div className="info-wrap">
                <h2 className="info-title">Contact Information</h2>
                <h3 className="info-sub-title">Fill up the form and our Team will get back to you within 24 hours</h3>
                <ul className="info-details">
                    <li>
                        <i className="fas fa-phone-alt"></i>
                        <span className='ms-1'>Mobile Number:</span> <a className='ms-5 text-secondary' href="tel:+ 1235 2355 98">+919893764788</a>
                    </li>
                    <li>
                        <i className="fas fa-paper-plane"></i>
                        <span className='ms-1'>Email:</span> <a className='ms-5 text-secondary' href="mailto:info@yoursite.com">www.royalhousemakers.com</a>
                    </li>
                    <li>
                        <i className="fas fa-globe"></i>
                        <span className='ms-1'>Website:</span> <a className='ms-5 text-secondary' href="#">https://royalhousemakers.com/</a>
                    </li>
                </ul>
                <ul className="social-icons d-flex justify-content-center ">
                    <li className='List_1'><a href="#"><i className="fab fa-facebook"></i></a></li>
                    <li className='List_2'><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li className='List_2'><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>
            <div className="form-wrap">
                <form action="#" method="POST">
                    <h2 className="form-title">Send us a message</h2>
                    <div className="form-fields">
                        <div className="form-group">
                            <input type="text" className="fname" placeholder="First Name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="lname" placeholder="Last Name"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="email" placeholder="Mail"/>
                        </div>
                        <div className="form-group">
                            <input type="number" className="phone" placeholder="Phone"/>
                        </div>
                        <div className="form-group">
                            <textarea name="message" id="" placeholder="Write your message"></textarea>
                        </div>
                    </div>
                    <input type="submit" value="Send Message" className="submit-button"/>
                </form>
            </div>
        </div>
    </section>
    </div>
    <div className='map-design'>
        <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.67471091678!2d75.86384989999999!3d22.723972749999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1701263795871!5m2!1sen!2sin"
            width="100%"
            height="445"
            style={{borderRadius:"5px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
        </div>
      
    </>
  );
}

export default Contact;
