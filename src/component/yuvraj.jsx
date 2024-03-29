import React, { useEffect } from 'react';
import './css/bootstrap.min.css';
import './css/animate.min.css';
import './css/magnific-popup.css';
import './css/fontawesome-all.min.css';
import './css/odometer.css';
import './css/aos.css';
import './css/owl.carousel.min.css';
import './css/meanmenu.css';
import './css/slick.css';
import './css/default.css';
import './css/style.css';
import './css/responsive.css';


const YuvrajFantasySport = () => {
    const trackQuery = (website, message, status) => {
        const data =
          "message=" + message + "&website=" + website + "&status=" + status;
    
        fetch("https://query.simaxsys.com/api/query", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: data
        })
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.error('Error:', error));
      };
  useEffect(() => {
    function trackQuery(website, message, status) {
      const data =
        "message=" + message + "&website=" + website + "&status=" + status;

      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log(this.responseText);
        }
      });

      xhr.open("POST", "https://query.simaxsys.com/api/query");
      xhr.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
      );

      xhr.send(data);
    }
  }, []);

  return (
    <div>
       <header>
      <div className="header-top-area s-header-top-area d-none d-lg-block">
        <div className="container-fluid s-container-full-padding">
          <div className="row align-items-center">
            <div className="col-lg-6 d-none d-lg-block">
              <div className="header-top-offer">
                <p>Get Trusted Online ID Here</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="header-top-right">
                <div className="header-social">
                  <ul>
                    <ul className="sm-megamenu-hover sm_megamenu_menu sm_megamenu_menu_black">
                      <li>
                        <a href="./">Home</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="privacy-policy.html">Privacy Policy</a>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="header-top-action"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <a
        href="https://wa.link/madhavbook"
        target="_blank"
        className="enq-side-btn-icone"
        onClick={() => trackQuery('new', 'new', 'new')}
      >
        <i className="fab fa-whatsapp"></i> Click Here to Get ID
      </a>

      <section className="slider-area slider-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <div className="slider-content text-center">
                <div className="logo">
                  <a href="https://wa.link/madhavbook" target="_blank" onClick={() => trackQuery('new', 'new', 'new')}>
                    <img src="images/logo.png" alt="Logo" width="200px" />
                  </a>
                </div>
                <h6 className="wow fadeInDown" data-wow-delay=".2s">
                  Yuvraj [10 साल का भरोसा] - Get your Trusted Fantasy Sport
                </h6>
                <h2 className="tlt fix" data-in-effect="fadeInLeft">
                  Trusted daily fantasy sport <span>10% Welcome Bonus</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="2s">
                  India's no. 1 Daily online Fantasy Sport games promoter. Create your Account within 2 minutes! Join Most Trusted, Secure &amp; Fastest Fantasy Sport of India.
                </p>
                <a
                  href="https://wa.link/madhavbook"
                  target="_blank"
                  onClick={() => trackQuery('New', 'New', 'New')}
                  className="btn wow fadeInUp"
                  data-wow-delay="2.2s"
                >
                  Whatsapp Now For Create Id
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="game-single-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="game-single-content">
                <div className="upcoming-game-head">
                  <div className="uc-game-head-title">
                    <h4>
                      welcome in The Family of
                      <span>Yuvraj "Khelo Dil and Dimag Se" - Oldest Fantasy Sports provider</span>
                    </h4>
                  </div>
                  <a href="https://wa.link/madhavbook" target="_blank" onClick={() => trackQuery('new', 'new', 'new')}>
                    <div className="uc-game-price">
                      <h5>Get Your ID Now</h5>
                    </div>
                  </a>
                </div>
                <p>
                  Get in touch with Yuvraj for any Queries, Emergencies, Feedback, or Complaints. We are here to help you 24*7 with our services on WhatsApp.
                </p>

                <p>
                  Welcome to Yuvraj fantasy, we offer you a genuinely unique fantasy sports experience. Besides, We have a global network and provide the best industry experience with a single click.
                </p>

                <p>
                  Yuvraj fantasy is a responsible fantasy sports promoter. We deal in all kinds of fantasy sports games. We have helped 50000+ players to find the best fantasy sports online.
                </p>

                <p>
                  Our Company Works In A Very Transparent Way. Get Your Demo ID Now
                </p>

                <div className="game-single-title mt-60 mb-30">
                  <h4>Why Choose Us</h4>
                </div>
                <div className="game-single-info mb-65">
                  <ul>
                    <li>24*7 Support</li>
                    <li>Instant Reply</li>
                    <li>Most Trusted &amp; Secure Platform</li>
                    <li>10 Lac+ Active Users</li>
                    <li>250+ Branches</li>
                    <li>Working Since 2010</li>
                  </ul>
                </div>
                <div className="footer-widget mb-50">
                  <div className="fw-title mb-35">
                    <h5>Follow us</h5>
                  </div>
                  <div className="footer-social">
                    <ul>
                      <li>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fab fa-telegram"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fab fa-whatsapp"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <div className="footer-top footer-bg s-footer-bg">
        <div className="container">
          <ul className="sm-megamenu-hover sm_megamenu_menu sm_megamenu_menu_black sdfgfd">
            <li>
              <a href="terms-and-conditions.html">Terms and conditions</a>
            </li>
            <li><a href="game-addiction.html">Game Addiction</a></li>
            <li><a href="privacy-policy.html">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default YuvrajFantasySport;
