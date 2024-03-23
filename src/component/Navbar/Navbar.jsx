import React from "react";
import "./apk.css";
import Dashboard from "../Dashboard";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBtc, faSafari, faTwitter } from '@fortawesome/free-brands-svg-icons';
import ResponsiveAppBar from "../ResponsiveAppBar";


function Navbar() {
  return (
    <>
      <div className="top_header mid_header">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <nav className="navbar navbar-expand-lg navbar-light fixed-top fixed_Nav" style={{ backgroundColor: "transparent" }}>
                <ResponsiveAppBar />
                <div className="col-sm-6 collapse navbar-collapse" id="navbarSupportedContent">
                  <div className="col-sm-2">
                    <a className="navbar-brand" href="#">
                      <Link to="/">
                        <img className="ms-5 rounded-1 img-fluid" loading="lazy" alt="" src="./1111.png" />
                      </Link>
                    </a>
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
