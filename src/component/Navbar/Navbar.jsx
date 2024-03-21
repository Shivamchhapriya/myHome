import React from "react";
import "./apk.css";
import Dashboard from "../Dashboard";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBtc, faSafari, faTwitter } from '@fortawesome/free-brands-svg-icons';


function Navbar() {
  return (
    <>

      <div class="top_header mid_header">
        <div class="">
          <div class="row">
            <div class="col-sm-12">
              <nav className="navbar navbar-expand-lg navbar-light fixed-top fixed_Nav" style={{ backgroundColor: "transparent", zIndex: 2 }}>
               
                <div className="col-sm-6  collapse navbar-collapse" id="navbarSupportedContent">
                <div class="col-sm-2" >
                  <a class="navbar-brand" href="#">
                    <Link to="/">
                      <img className="ms-5 rounded-1" loading="lazy" alt="" src="./777.png" width="210px" />
                    </Link>
                  </a>
                </div>
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown me-4 errow-img menu-pos ">
                      <Link to="/work">
                        <a class="nav-link text-white ms-4" style={{ fontSize: "16px" }} href="#" id="navbarDropdown"  >
                          Home
                        </a>
                      </Link>
                    </li>
                    <li class="nav-item dropdown me-4 errow-img menu-pos ">
                      <Link to="/work">
                        <a class="nav-link text-white" style={{ fontSize: "16px" }} href="#" id="navbarDropdown"  >
                          About Us
                        </a>
                      </Link>
                    </li>
                    <li class="nav-item dropdown me-4 errow-img menu-pos  ">
                      <Link to="/work">
                        <a class="nav-link text-white" style={{ fontSize: "16px" }} href="#" id="navbarDropdown"  >
                          Services
                        </a>
                      </Link>
                    </li>

                    <li class="nav-item dropdown me-4 errow-img menu-pos  ">
                      <Link to="/contact">
                        <a class="nav-link text-white" style={{ fontSize: "16px" }} href="#" id="navbarDropdown"  >
                          Contact Us
                        </a>
                      </Link>
                    </li>
                    <li class="nav-item dropdown me-4 errow-img menu-pos  ">
                      <Link to="/contact">
                        <a class="nav-link text-white" style={{ fontSize: "16px" }} href="#" id="navbarDropdown"  >
                          Payment
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-4 text-end menu-pos">
                  <div class="d-flex three-btn menu-pos" style={{ marginLeft: "200px" }}> 

                    <div class="collapse" id="collapseExample">
                      
                    </div>
                    
                    <Link to="/login">
                      <a class="btn ms-5" href="#"><img loading="lazy" alt="" src="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png" class="me-2" style={{ width: "35px" }} /></a>
                    </Link>
                    <div className="mt-3">
                      
                    </div>
                    <Link to="/login">
                      <a class="btn ms-5" href="#"><img loading="lazy" alt="" src="	https://cdn-icons-png.flaticon.com/512/8983/8983815.png" class="me-2" style={{ width: "35px" }} /></a>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;