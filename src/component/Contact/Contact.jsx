import React, { useState } from 'react';
import "./Contact.css";

function Contact() {
 
  return (
    <>
    <div className='map-design'>
        <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.1989907590887!2d75.86164031067347!3d22.683635079326898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcf1f0b22763%3A0x789d74a3d5225d70!2s6%2C%20Shivampuri%20Colony%2C%20Indore%2C%20Madhya%20Pradesh%20452014!5e0!3m2!1sen!2sin!4v1709792132619!5m2!1sen!2sin"
            width="100%"
            height="445"
            style={{borderRadius:"5px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
        </div>
    <div className='row body__2 bg-opacity-100'>
      <section className='col-12' id="section-wrapper">
        <div className="box-wrapper px-1">
            <div className="info-wrap">
                <h2 className="info-title">Contact Information</h2>
                <h3 className="info-sub-title">Fill up the form and our Team will<br/> get back to you within 24 hours</h3>
                <ul className="info-details">
                    <li>
                        <i className="fas fa-phone-alt"></i>
                        <span className='ms-1'>Mobile Number:</span> <a className='ms-5' href="tel:+ 1235 2355 98">+919009700155</a>
                    </li>
                    <li style={{marginRight:"215px"}}>
                        <i className="fas fa-paper-plane"></i>
                        <span className=''>Email:</span> <a style={{marginLeft:"50px"}} className='' href="mailto:info@yoursite.com">royalhousemakers@gmail.com</a>
                    </li>
                    <li style={{marginRight:"190px"}}>
                        <i className="fas fa-globe" ></i>
                        <span className='ms-1'>Website:</span> <a style={{marginLeft:"50px"}} className='' href="#">https://royalhousemakers.com/</a>
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
                            <input type="text" className="fname input-field" placeholder="First Name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="lname input-field" placeholder="Last Name"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="email input-field" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <input type="number" className="phone input-field" placeholder="Mobile"/>
                        </div>
                        <div className="form-group">
                            <textarea name="message" id="" placeholder="  Write your message" className=''></textarea>
                        </div>
                    </div>
                    <input type="submit" value="Send Message" className="submit-button"/>
                </form>
            </div>
        </div>
    </section>
    </div>
    
      
    </>
  );
}

export default Contact;
