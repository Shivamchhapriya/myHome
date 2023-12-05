import React from "react";
import "./header.css"
import Dashboard from "../Dashboard";
import {  Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBtc, faSafari, faTwitter } from '@fortawesome/free-brands-svg-icons';


function Navbar() {
  return (
    <>
     
      <div class="top_header mid_header">
        <div class="">
          <div class="row">
            <div class="col-sm-12">
              <nav class="navbar navbar-expand-lg navbar-light row">
                <div class="col-sm-2">
                  <a class="navbar-brand" href="#">
                  <Link to="/">
                    <img className="ms-2 rounded-1" loading="lazy" alt="" src="./Nav-logo.png" width="80px" />
                    </Link>
                  </a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon text-white mb-2" style={{marginLeft:"200px"}}><FontAwesomeIcon icon={faSafari} style={{ color: '#D1D1D1',width: '50px', height: "35px" }} /></span>
                  </button>
                </div>
                <div class="col-sm-7 menu-pos">
                  <div class="collapse navbar-collapse menu-pos" id="navbarSupportedContent">
                    <ul class="nav navbar-nav mr-auto menu-pos">
                      <li class="nav-item dropdown me-4 menu-pos">
                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Architecture
                        </a>
                        <div class="dropdown-menu menu-1" aria-labelledby="navbarDropdown" style={{ width: "100%" }}>
                          <div class="row">
                            <div class="col-3">
                              <div class="menu_head">
                                <h6>By Size</h6>
                              </div>
                              <a class="dropdown-item" href="/#">
                                26 x 50 House plans </a>
                              <a class="dropdown-item" href="#">
                                30 x 45 House plans </a>
                              <a class="dropdown-item" href="#">
                                30 x 60 House plans </a>
                              <a class="dropdown-item" href="#">
                                35 x 60 House plans </a>
                              <a class="dropdown-item" href="#">
                                40 x 60 House plans </a>
                              <a class="dropdown-item" href="#">
                                50 x 60 House plans </a>
                              <a class="dropdown-item" href="#">
                                40 x 70 House Plans </a>
                              <a class="dropdown-item" href="#">
                                30 x 80 House Plans </a>
                              <a class="dropdown-item" href="#">
                                33 x 60 House plans </a>
                              <a class="dropdown-item" href="#">
                                25 x 60 House plans </a>
                              <a class="dropdown-item" href="#">
                                30 x 70 House plans </a>
                              <a class="dropdown-item" href="#">
                                15 x 40 House plans </a>
                            </div>
                            <div class="col-3">
                              <div class="menu_head">
                                <h6>&nbsp;</h6>
                              </div>
                              <a class="dropdown-item" href="#">
                                30 x 40 House plans </a>
                              <a class="dropdown-item" href="#">
                                30 x 50 House plans </a>
                              <a class="dropdown-item" href="#">
                                30 x 65 House plans </a>
                              <a class="dropdown-item" href="#">
                                40 x 50 House plans </a>
                              <a class="dropdown-item" href="#">
                                40 x 80 House plans </a>
                              <a class="dropdown-item" href="#">
                                50 x 90 House Plans </a>
                              <a class="dropdown-item" href="#">
                                25 x 60 House Plans </a>
                              <a class="dropdown-item" href="#">
                                15 x 50 House plans </a>
                              <a class="dropdown-item" href="#">
                                25 x 50 House plans </a>
                              <a class="dropdown-item" href="#">
                                20 X 50 House Plans </a>
                              <a class="dropdown-item" href="#">
                                20 x 40 House Plans </a>
                            </div>
                            <div class="col-3">
                              <div class="menu_head">
                                <h6>By Area</h6>
                              </div>
                              <ul class="p-0">
                                <a class="dropdown-item"  href="#">
                                  500 sqft - 700 sqft </a>
                                <a class="dropdown-item"  href="#">
                                  700 sqft - 900 sqft </a>
                                <a class="dropdown-item"  href="#">
                                  900 sqft - 1100 sqft </a>
                                <a class="dropdown-item"  href="#">
                                  1100 sqft - 1300 sqft </a>
                                <a class="dropdown-item"  href="#">
                                  1300 sqft - 1500 sqft </a>
                                <a class="dropdown-item"  href="#">
                                  1500 sqft - 1700 sqft </a>
                                <a class="dropdown-item"  href="#">
                                  1700 sqft - 2000 sqft </a>
                                <a class="dropdown-item"  href="#">
                                  2000 sqft - 2200 sqft </a>
                                <a class="dropdown-item"  href="#">
                                  2200 sqft - 2500 sqft </a>
                                <a class="dropdown-item"  href="#">
                                  2500 sqft - 2700 sqft </a>
                                <a class="dropdown-item"  href="#">
                                  2700 sqft - 3000 sqft </a>
                                <a class="dropdown-item"  href="#">
                                  3000 &amp; above </a>
                              </ul>
                            </div>
                            <div class="col-3">
                              <div class="menu_head">
                                <h6>By Bedroom</h6>
                              </div>
                              <ul class="p-0">
                                <a class="dropdown-item" href="#">
                                  1 BHK </a>
                                <a class="dropdown-item" href="#">
                                  2 BHK </a>
                                <a class="dropdown-item" href="#">
                                  3 BHK </a>
                                <a class="dropdown-item" href="#">
                                  4 BHK </a>
                                <a class="dropdown-item" href="#">
                                  5 BHK </a>
                                <a class="dropdown-item" href="#">
                                  6 BHK </a>
                              </ul>
                            </div>

                          </div>
                        </div>
                      </li>

                      <li class="nav-item dropdown me-4 menu-pos">
                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Interior
                        </a>
                        <div class="dropdown-menu " aria-labelledby="navbarDropdown">
                          <div class="row">
                            <div class="col-sm-12">
                              <ul class="fade-up p-0">
                                <div class="row row-cols-auto">
                                  <div class="dropdown_menu_links ">
                                    <a class="dropdown-item" href="#">Bedroom</a><a class="dropdown-item" href="/architectural-design?subcategory=Living-room">Living room</a><a class="dropdown-item" href="/architectural-design?subcategory=Bathroom">Bathroom</a><a class="dropdown-item" href="/architectural-design?subcategory=Dining-room">Dining room</a><a class="dropdown-item" href="/architectural-design?subcategory=Puja-room">Puja room</a><a class="dropdown-item" href="/architectural-design?subcategory=Study-room">Study room</a><a class="dropdown-item" href="/architectural-design?subcategory=Kitchen">Kitchen</a><a class="dropdown-item" href="/architectural-design?subcategory=Kids-room">Kids room</a></div><div class="dropdown_menu_links"><a class="dropdown-item" href="/architectural-design?subcategory=Home-bar">Home bar</a><a class="dropdown-item" href="/architectural-design?subcategory=Entry/corridor">Entry/corridor</a><a class="dropdown-item" href="/architectural-design?subcategory=Outdoor-~-garden">Outdoor-&amp;-garden</a><a class="dropdown-item" href="/architectural-design?subcategory=TV-unit">TV unit</a><a class="dropdown-item" href="/architectural-design?subcategory=Window">Window</a><a class="dropdown-item" href="/architectural-design?subcategory=Staircase">Staircase</a><a class="dropdown-item" href="/architectural-design?subcategory=Wardrobe">Wardrobe</a><a class="dropdown-item" href="/architectural-design?subcategory=Closet">Closet</a></div><div class="dropdown_menu_links"><a class="dropdown-item" href="/architectural-design?subcategory=Sofa">Sofa</a><a class="dropdown-item" href="/architectural-design?subcategory=Home-Office">Home Office</a><a class="dropdown-item" href="/architectural-design?subcategory=Corridor">Corridor</a><a class="dropdown-item" href="/architectural-design?subcategory=Garage-~-shed">Garage &amp; shed</a><a class="dropdown-item" href="/architectural-design?subcategory=Home-Gym">Home Gym</a><a class="dropdown-item" href="/architectural-design?subcategory=Utility-room">Utility room</a><a class="dropdown-item" href="/architectural-design?subcategory=Home-theatre">Home theatre</a><a class="dropdown-item" href="/architectural-design?subcategory=Home-library">Home library</a></div><div class="dropdown_menu_links"><a class="dropdown-item" href="/architectural-design?subcategory=Swimming-pool">Swimming pool</a><a class="dropdown-item" href="/architectural-design?subcategory=Ceiling">Ceiling</a><a class="dropdown-item" href="/architectural-design?subcategory=Chimney">Chimney</a><a class="dropdown-item" href="/architectural-design?subcategory=Terrace">Terrace</a><a class="dropdown-item" href="/architectural-design?subcategory=Wall">Wall</a><a class="dropdown-item" href="/architectural-design?subcategory=Drawing-room">Drawing room</a><a class="dropdown-item" href="/architectural-design?subcategory=Rrecreation-Room">Rrecreation Room</a><a class="dropdown-item" href="/architectural-design?subcategory=Dressing-Room">Dressing Room</a></div><div class="dropdown_menu_links"><a class="dropdown-item" href="/architectural-design?subcategory=Lobby">Lobby</a><a class="dropdown-item" href="/architectural-design?subcategory=Balcony">Balcony</a><a class="dropdown-item" href="/architectural-design?subcategory=Cafe">Cafe</a><a class="dropdown-item" href="/architectural-design?subcategory=Restaurant">Restaurant</a><a class="dropdown-item" href="/architectural-design?subcategory=Hotel">Hotel</a><a class="dropdown-item" href="/architectural-design?subcategory=Hospital">Hospital</a><a class="dropdown-item" href="/architectural-design?subcategory=Clinic">Clinic</a><a class="dropdown-item" href="/architectural-design?subcategory=Gym">Gym</a></div><div class="dropdown_menu_links"><a class="dropdown-item" href="/architectural-design?subcategory=Office">Office</a><a class="dropdown-item" href="/architectural-design?subcategory=Shop">Shop</a><a class="dropdown-item" href="/architectural-design?subcategory=Showroom/Retail-Outlet">Showroom/Retail Outlet</a><a class="dropdown-item" href="/architectural-design?subcategory=Mall">Mall</a><a class="dropdown-item" href="/architectural-design?subcategory=Marrige">Marrige</a><a class="dropdown-item" href="/architectural-design?subcategory=Cinema-hall/Multiplex">Cinema hall/Multiplex</a><a class="dropdown-item" href="/architectural-design?subcategory=Salon">Salon</a><a class="dropdown-item" href="/architectural-design?subcategory=Bar/Pub">Bar/Pub</a></div><div class="dropdown_menu_links"><a class="dropdown-item" href="/architectural-design?subcategory=Sports-Club">Sports Club</a><a class="dropdown-item" href="/architectural-design?subcategory=School">School</a><a class="dropdown-item" href="/architectural-design?subcategory=College">College</a><a class="dropdown-item" href="/architectural-design?subcategory=Hostel">Hostel</a><a class="dropdown-item" href="/architectural-design?subcategory=Library">Library</a><a class="dropdown-item" href="/architectural-design?subcategory=Resort">Resort</a><a class="dropdown-item" href="/architectural-design?subcategory=Confrerence-Room">Confrerence Room</a><a class="dropdown-item" href="/architectural-design?subcategory=Directors-cabin">Directors cabin</a>
                                  </div>
                                </div></ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="nav-item dropdown me-4 errow-img menu-pos">
                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Contractor
                        </a>
                        <div class="dropdown-menu menu-50 ps-1 pe-0" aria-labelledby="navbarDropdown">
                          <div class="row">
                            <div class="col-sm-6">
                              <ul class="p-0">
                                <li><a class="dropdown-item" href="#"><img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/cw-1.png" class="me-3" /> Civil
                                  contractor</a></li>
                                <li><a class="dropdown-item" href="#"><img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/cw-2.png" class="me-3" /> Roofing
                                  contractor </a></li>
                                <li><a class="dropdown-item" href="#"><img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/cw-3.png" class="me-3" /> Flooring
                                  contractor</a></li>
                                <li><a class="dropdown-item" href="#"><img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/cw-4.png" class="me-3" /> Concrete-RCC
                                  contractor </a></li>
                                <li><a class="dropdown-item" href="#"><img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/cw-5.png" class="me-3" />
                                  Landscape-Garden Works Services </a></li>
                              </ul>
                            </div>
                            <div class="col-sm-6">
                              <ul class="p-0">
                                <li><a class="dropdown-item" href="#"><img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/cw-6.png" class="me-3" /> Painting
                                  contractor</a></li>
                                <li><a class="dropdown-item" href="#"><img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/cw-7.png" class="me-3" /> Ceiling
                                  contractor </a></li>
                                <li><a class="dropdown-item" href="#"><img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/cw-8.png" class="me-3" /> Electrical
                                  contractor</a></li>
                                <li><a class="dropdown-item" href="#"><img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/cw-9.png" class="me-3" /> Plumbing
                                  contractor </a></li>
                                <li><a class="dropdown-item" href="#"><img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/cw-10.png" class="me-3" /> Solar
                                  contractor </a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="nav-item dropdown me-4 errow-img menu-pos">
                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Services
                        </a>
                        <div class="dropdown-menu menu-5 ps-1 pe-0" aria-labelledby="navbarDropdown">
                          <div class="row">
                            <div class="col-md-12">
                              <ul class="p-0">
                                <li class="border-bottom">
                                  <a class="dropdown-item" href="#">
                                    <img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/o-m-1.png" class="me-3" style={{ width: "30px", marginLeft: "-5px" }} />
                                    Buy &amp; Sell Plot
                                  </a>
                                </li>
                                <li class="border-bottom">
                                  <a class="dropdown-item" href="#">
                                    <img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/o-m-2.png" class="me-3" style={{ width: "30px", marginLeft: "-5px" }} />
                                    Turnkey Construction
                                  </a>
                                </li>
                                <li class="border-bottom">
                                  <a class="dropdown-item" href="#">
                                    <img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets\images\web-images\e-5.png" class="me-3" style={{ width: "30px", marginLeft: "-5px" }} />
                                    Contractors &amp; Labors
                                  </a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">
                                    <img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/b-menu-5.png" class="me-3" /> Site
                                    Supervision &amp; Quality Audit
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="nav-item dropdown me-4 errow-img menu-pos">
                        <Link to="/work">
                          <a class="nav-link text-white" style={{fontSize:"16px"}} href="#" id="navbarDropdown"  >
                            Work
                          </a>
                        </Link>
                      </li>
                      <li class="nav-item dropdown me-4 errow-img menu-pos">
                        <Link to="/contact">
                          <a class="nav-link text-white" style={{fontSize:"16px"}} href="#" id="navbarDropdown"  >
                            Contact Us
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-sm-3 text-end menu-pos">
                  <div class="d-flex three-btn menu-pos">
                    <a class="p-3">
                      <i class="fa fa-search text-white mt-1" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" aria-hidden="true"></i>
                    </a>
                    <div class="collapse" id="collapseExample">
                      <div class="w-75 m-auto">
                        <form class="form-inline row bg-light p-2">
                          <div class="col-sm-10">
                            <input type="text" class="form-control" placeholder="Search like 1200 sq ft, 30x40, Residential, Delhi" onkeyup="ajaxSearch()" name="search_data" id="search_data" />
                          </div>
                          <div class="col-sm-2">
                            <button type="submit" class="btn btn-primary w-100">Search</button>
                          </div>
                          <div class="col-sm-12">
                            <div id="suggestions" style={{ display: "none" }}>
                              <ul id="suggestionslist"></ul>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <button type="button" class="ree-quote step-form btn btn-outline-success text-white me-2" fdprocessedid="hb00hg">Consult Online Now</button>
                    <button type="button" class="btn btn-outline-warning text-white me-2" id="News_popup" fdprocessedid="6u4ysx">News</button>
                    <div class="dropdown">
                    </div>
                    <Link to="/login">
                    <a class="btn btn-light" href="#"><img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/Login.png" class="me-2" style={{ width: "15px" }} />Login</a>
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