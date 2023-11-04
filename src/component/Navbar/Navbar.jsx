import React from "react";
import "./header.css"



function Navbar() {
  return (
    <>
      <div class="top_header mid_header">
        <div class="">
          <div class="row">
            <div class="col-sm-12">
              <nav class="navbar navbar-expand-lg navbar-light row">
                <div class="col-sm-2">
                  <a class="navbar-brand" href="https://www.makemyhouse.com/">
                    <img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/logo.webp" width="120px" />
                  </a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
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
                              <a class="dropdown-item" href="/site/products/?c=filter&amp;category=&amp;pre_defined=1&amp;product_direction=">
                                26 x 50 House plans </a>
                              <a class="dropdown-item" href="/site/products/?c=filter&amp;category=&amp;pre_defined=3&amp;product_direction=">
                                30 x 45 House plans </a>
                              <a class="dropdown-item" href="/site/products/?c=filter&amp;category=&amp;pre_defined=5&amp;product_direction=">
                                30 x 60 House plans </a>
                              <a class="dropdown-item" href="/site/products/?c=filter&amp;category=&amp;pre_defined=7&amp;product_direction=">
                                35 x 60 House plans </a>
                              <a class="dropdown-item" href="/site/products/?c=filter&amp;category=&amp;pre_defined=9&amp;product_direction=">
                                40 x 60 House plans </a>
                              <a class="dropdown-item" href="/site/products/?c=filter&amp;category=&amp;pre_defined=12&amp;product_direction=">
                                50 x 60 House plans </a>
                              <a class="dropdown-item" href="/site/products/?c=filter&amp;category=&amp;pre_defined=14&amp;product_direction=">
                                40 x 70 House Plans </a>
                              <a class="dropdown-item" href="/site/products/?c=filter&amp;category=&amp;pre_defined=18&amp;product_direction=">
                                30 x 80 House Plans </a>
                              <a class="dropdown-item" href="/site/products/?c=filter&amp;category=&amp;pre_defined=20&amp;product_direction=">
                                33 x 60 House plans </a>
                              <a class="dropdown-item" href="/site/products/?c=filter&amp;category=&amp;pre_defined=22&amp;product_direction=">
                                25 x 60 House plans </a>
                              <a class="dropdown-item" href="/site/products/?c=filter&amp;category=&amp;pre_defined=24&amp;product_direction=">
                                30 x 70 House plans </a>
                              <a class="dropdown-item" href="/site/products/?c=filter&amp;category=&amp;pre_defined=26&amp;product_direction=">
                                15 x 40 House plans </a>
                            </div>
                            <div class="col-3">
                              <div class="menu_head">
                                <h6>&nbsp;</h6>
                              </div>
                              <a class="dropdown-item" href="/site/products/?c=filter&amp;category=&amp;pre_defined=2&amp;product_direction=">
                                30 x 40 House plans </a>
                              <a class="dropdown-item" href="/site/products/?c=filter&amp;category=&amp;pre_defined=4&amp;product_direction=">
                                30 x 50 House plans </a>
                              <a class="dropdown-item" href="/site/products/?c=filter&amp;category=&amp;pre_defined=6&amp;product_direction=">
                                30 x 65 House plans </a>
                              <a class="dropdown-item" href="/site/products/?c=filter&amp;category=&amp;pre_defined=8&amp;product_direction=">
                                40 x 50 House plans </a>
                              <a class="dropdown-item" href="/site/products/?c=filter&amp;category=&amp;pre_defined=11&amp;product_direction=">
                                40 x 80 House plans </a>
                              <a class="dropdown-item" href="/site/products/?c=filter&amp;category=&amp;pre_defined=13&amp;product_direction=">
                                50 x 90 House Plans </a>
                              <a class="dropdown-item" href="/site/products/?c=filter&amp;category=&amp;pre_defined=17&amp;product_direction=">
                                25 x 60 House Plans </a>
                              <a class="dropdown-item" href="/site/products/?c=filter&amp;category=&amp;pre_defined=19&amp;product_direction=">
                                15 x 50 House plans </a>
                              <a class="dropdown-item" href="/site/products/?c=filter&amp;category=&amp;pre_defined=21&amp;product_direction=">
                                25 x 50 House plans </a>
                              <a class="dropdown-item" href="/site/products/?c=filter&amp;category=&amp;pre_defined=23&amp;product_direction=">
                                20 X 50 House Plans </a>
                              <a class="dropdown-item" href="/site/products/?c=filter&amp;category=&amp;pre_defined=25&amp;product_direction=">
                                20 x 40 House Plans </a>
                            </div>
                            <div class="col-3">
                              <div class="menu_head">
                                <h6>By Area</h6>
                              </div>
                              <ul class="p-0">
                                <a class="dropdown-item" target="_blank" href="/architectural-design?min_area=500&amp;max_area=700">
                                  500 sqft - 700 sqft </a>
                                <a class="dropdown-item" target="_blank" href="/architectural-design?min_area=700&amp;max_area=900">
                                  700 sqft - 900 sqft </a>
                                <a class="dropdown-item" target="_blank" href="/architectural-design?min_area=900&amp;max_area=1100">
                                  900 sqft - 1100 sqft </a>
                                <a class="dropdown-item" target="_blank" href="/architectural-design?min_area=1100&amp;max_area=1300">
                                  1100 sqft - 1300 sqft </a>
                                <a class="dropdown-item" target="_blank" href="/architectural-design?min_area=1300&amp;max_area=1500">
                                  1300 sqft - 1500 sqft </a>
                                <a class="dropdown-item" target="_blank" href="/architectural-design?min_area=1500&amp;max_area=1700">
                                  1500 sqft - 1700 sqft </a>
                                <a class="dropdown-item" target="_blank" href="/architectural-design?min_area=1700&amp;max_area=2000">
                                  1700 sqft - 2000 sqft </a>
                                <a class="dropdown-item" target="_blank" href="/architectural-design?min_area=2000&amp;max_area=2200">
                                  2000 sqft - 2200 sqft </a>
                                <a class="dropdown-item" target="_blank" href="/architectural-design?min_area=2200&amp;max_area=2500">
                                  2200 sqft - 2500 sqft </a>
                                <a class="dropdown-item" target="_blank" href="/architectural-design?min_area=2500&amp;max_area=2700">
                                  2500 sqft - 2700 sqft </a>
                                <a class="dropdown-item" target="_blank" href="/architectural-design?min_area=2700&amp;max_area=3000">
                                  2700 sqft - 3000 sqft </a>
                                <a class="dropdown-item" target="_blank" href="/architectural-design?min_area=300&amp;max_area=">
                                  3000 &amp; above </a>
                              </ul>
                            </div>
                            <div class="col-3">
                              <div class="menu_head">
                                <h6>By Bedroom</h6>
                              </div>
                              <ul class="p-0">
                                <a class="dropdown-item" target="_blank" href="/architectural-design?bedroom=1&amp;type=2">
                                  1 BHK </a>
                                <a class="dropdown-item" target="_blank" href="/architectural-design?bedroom=2&amp;type=2">
                                  2 BHK </a>
                                <a class="dropdown-item" target="_blank" href="/architectural-design?bedroom=3&amp;type=2">
                                  3 BHK </a>
                                <a class="dropdown-item" target="_blank" href="/architectural-design?bedroom=4&amp;type=2">
                                  4 BHK </a>
                                <a class="dropdown-item" target="_blank" href="/architectural-design?bedroom=5&amp;type=2">
                                  5 BHK </a>
                                <a class="dropdown-item" target="_blank" href="/architectural-design?bedroom=6&amp;type=2">
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
                                    <a class="dropdown-item" href="/architectural-design?subcategory=Bedroom">Bedroom</a><a class="dropdown-item" href="/architectural-design?subcategory=Living-room">Living room</a><a class="dropdown-item" href="/architectural-design?subcategory=Bathroom">Bathroom</a><a class="dropdown-item" href="/architectural-design?subcategory=Dining-room">Dining room</a><a class="dropdown-item" href="/architectural-design?subcategory=Puja-room">Puja room</a><a class="dropdown-item" href="/architectural-design?subcategory=Study-room">Study room</a><a class="dropdown-item" href="/architectural-design?subcategory=Kitchen">Kitchen</a><a class="dropdown-item" href="/architectural-design?subcategory=Kids-room">Kids room</a></div><div class="dropdown_menu_links"><a class="dropdown-item" href="/architectural-design?subcategory=Home-bar">Home bar</a><a class="dropdown-item" href="/architectural-design?subcategory=Entry/corridor">Entry/corridor</a><a class="dropdown-item" href="/architectural-design?subcategory=Outdoor-~-garden">Outdoor-&amp;-garden</a><a class="dropdown-item" href="/architectural-design?subcategory=TV-unit">TV unit</a><a class="dropdown-item" href="/architectural-design?subcategory=Window">Window</a><a class="dropdown-item" href="/architectural-design?subcategory=Staircase">Staircase</a><a class="dropdown-item" href="/architectural-design?subcategory=Wardrobe">Wardrobe</a><a class="dropdown-item" href="/architectural-design?subcategory=Closet">Closet</a></div><div class="dropdown_menu_links"><a class="dropdown-item" href="/architectural-design?subcategory=Sofa">Sofa</a><a class="dropdown-item" href="/architectural-design?subcategory=Home-Office">Home Office</a><a class="dropdown-item" href="/architectural-design?subcategory=Corridor">Corridor</a><a class="dropdown-item" href="/architectural-design?subcategory=Garage-~-shed">Garage &amp; shed</a><a class="dropdown-item" href="/architectural-design?subcategory=Home-Gym">Home Gym</a><a class="dropdown-item" href="/architectural-design?subcategory=Utility-room">Utility room</a><a class="dropdown-item" href="/architectural-design?subcategory=Home-theatre">Home theatre</a><a class="dropdown-item" href="/architectural-design?subcategory=Home-library">Home library</a></div><div class="dropdown_menu_links"><a class="dropdown-item" href="/architectural-design?subcategory=Swimming-pool">Swimming pool</a><a class="dropdown-item" href="/architectural-design?subcategory=Ceiling">Ceiling</a><a class="dropdown-item" href="/architectural-design?subcategory=Chimney">Chimney</a><a class="dropdown-item" href="/architectural-design?subcategory=Terrace">Terrace</a><a class="dropdown-item" href="/architectural-design?subcategory=Wall">Wall</a><a class="dropdown-item" href="/architectural-design?subcategory=Drawing-room">Drawing room</a><a class="dropdown-item" href="/architectural-design?subcategory=Rrecreation-Room">Rrecreation Room</a><a class="dropdown-item" href="/architectural-design?subcategory=Dressing-Room">Dressing Room</a></div><div class="dropdown_menu_links"><a class="dropdown-item" href="/architectural-design?subcategory=Lobby">Lobby</a><a class="dropdown-item" href="/architectural-design?subcategory=Balcony">Balcony</a><a class="dropdown-item" href="/architectural-design?subcategory=Cafe">Cafe</a><a class="dropdown-item" href="/architectural-design?subcategory=Restaurant">Restaurant</a><a class="dropdown-item" href="/architectural-design?subcategory=Hotel">Hotel</a><a class="dropdown-item" href="/architectural-design?subcategory=Hospital">Hospital</a><a class="dropdown-item" href="/architectural-design?subcategory=Clinic">Clinic</a><a class="dropdown-item" href="/architectural-design?subcategory=Gym">Gym</a></div><div class="dropdown_menu_links"><a class="dropdown-item" href="/architectural-design?subcategory=Office">Office</a><a class="dropdown-item" href="/architectural-design?subcategory=Shop">Shop</a><a class="dropdown-item" href="/architectural-design?subcategory=Showroom/Retail-Outlet">Showroom/Retail Outlet</a><a class="dropdown-item" href="/architectural-design?subcategory=Mall">Mall</a><a class="dropdown-item" href="/architectural-design?subcategory=Marrige">Marrige</a><a class="dropdown-item" href="/architectural-design?subcategory=Cinema-hall/Multiplex">Cinema hall/Multiplex</a><a class="dropdown-item" href="/architectural-design?subcategory=Salon">Salon</a><a class="dropdown-item" href="/architectural-design?subcategory=Bar/Pub">Bar/Pub</a></div><div class="dropdown_menu_links"><a class="dropdown-item" href="/architectural-design?subcategory=Sports-Club">Sports Club</a><a class="dropdown-item" href="/architectural-design?subcategory=School">School</a><a class="dropdown-item" href="/architectural-design?subcategory=College">College</a><a class="dropdown-item" href="/architectural-design?subcategory=Hostel">Hostel</a><a class="dropdown-item" href="/architectural-design?subcategory=Library">Library</a><a class="dropdown-item" href="/architectural-design?subcategory=Resort">Resort</a><a class="dropdown-item" href="/architectural-design?subcategory=Confrerence-Room">Confrerence Room</a><a class="dropdown-item" href="/architectural-design?subcategory=Directors-cabin">Directors cabin</a>
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
                                <li><a class="dropdown-item" href="https://www.makemyhouse.com/civil-contractor"><img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/cw-1.png" class="me-3" /> Civil
                                  contractor</a></li>
                                <li><a class="dropdown-item" href="https://www.makemyhouse.com/roofing-contractor"><img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/cw-2.png" class="me-3" /> Roofing
                                  contractor </a></li>
                                <li><a class="dropdown-item" href="https://www.makemyhouse.com/flooring-&amp;-tiling-contractor"><img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/cw-3.png" class="me-3" /> Flooring
                                  contractor</a></li>
                                <li><a class="dropdown-item" href="https://www.makemyhouse.com/concrete-contractor"><img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/cw-4.png" class="me-3" /> Concrete-RCC
                                  contractor </a></li>
                                <li><a class="dropdown-item" href="https://www.makemyhouse.com/landscape-contractor"><img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/cw-5.png" class="me-3" />
                                  Landscape-Garden Works Services </a></li>
                              </ul>
                            </div>
                            <div class="col-sm-6">
                              <ul class="p-0">
                                <li><a class="dropdown-item" href="https://www.makemyhouse.com/painting-contractor"><img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/cw-6.png" class="me-3" /> Painting
                                  contractor</a></li>
                                <li><a class="dropdown-item" href="https://www.makemyhouse.com/construction-falseceiling"><img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/cw-7.png" class="me-3" /> Ceiling
                                  contractor </a></li>
                                <li><a class="dropdown-item" href="https://www.makemyhouse.com/electrical-contractor"><img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/cw-8.png" class="me-3" /> Electrical
                                  contractor</a></li>
                                <li><a class="dropdown-item" href="https://www.makemyhouse.com/construction-plumbing"><img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/cw-9.png" class="me-3" /> Plumbing
                                  contractor </a></li>
                                <li><a class="dropdown-item" href="https://www.makemyhouse.com/construction-homedecorator"><img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/cw-10.png" class="me-3" /> Solar
                                  contractor </a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="nav-item dropdown me-4 errow-img menu-pos">
                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Other Services
                        </a>
                        <div class="dropdown-menu menu-5 ps-1 pe-0" aria-labelledby="navbarDropdown">
                          <div class="row">
                            <div class="col-md-12">
                              <ul class="p-0">
                                <li class="border-bottom">
                                  <a class="dropdown-item" href="https://plotkhareedo.com/" target="_blank">
                                    <img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/o-m-1.png" class="me-3" style={{ width: "30px", marginLeft: "-5px" }} />
                                    Buy &amp; Sell Plot
                                  </a>
                                </li>
                                <li class="border-bottom">
                                  <a class="dropdown-item" href="https://www.masonsandmortar.com/" target="_blank">
                                    <img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/o-m-2.png" class="me-3" style={{ width: "30px", marginLeft: "-5px" }} />
                                    Turnkey Construction
                                  </a>
                                </li>
                                <li class="border-bottom">
                                  <a class="dropdown-item" href="https://yellowcap.in/" target="_blank">
                                    <img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets\images\web-images\e-5.png" class="me-3" style={{ width: "30px", marginLeft: "-5px" }} />
                                    Contractors &amp; Labors
                                  </a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="https://www.makemyhouse.com/site/site_supervision" target="_blank">
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
                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Resources
                        </a>
                        <div class="dropdown-menu menu-25 menu-6 ps-1 pe-0" aria-labelledby="navbarDropdown">
                          <div class="row">
                            <div class="col-sm-12">
                              <ul class="p-0">
                                <li class="border-bottom">
                                  <a class="dropdown-item" href="http://myplan.in" target="_blank">
                                    <img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/community.png" class="me-3" /> community
                                  </a>
                                </li>
                                <li class="border-bottom">
                                  <a class="dropdown-item" href="/design-story">
                                    <img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/stry.png" class="me-3" /> Stories
                                  </a>
                                </li>
                                <li class="border-bottom">
                                  <a class="dropdown-item" href="/blogs">
                                    <img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/blog-i.png" class="me-3" /> Blogs
                                  </a>
                                </li>
                                <li class="border-bottom">
                                  <a class="dropdown-item" href="https://www.makemyhouse.com//design-magazine">
                                    <img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/magazin.png" class="me-3" /> magazine
                                  </a>
                                </li>
                                <li class="border-bottom">
                                  <a class="dropdown-item" href="https://www.makemyhouse.com/site/design_video">
                                    <img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/youtube.png" class="me-3" /> Videos
                                  </a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="https://www.makemyhouse.com/site/webinar">
                                    <img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/webinar-2.png" class="me-3" />
                                    Webinar
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="nav-item dropdown me-4 errow-img menu-pos">
                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          More
                        </a>
                        <div class="dropdown-menu  menu-25 menu-7 ps-1 pe-0" aria-labelledby="navbarDropdown">
                          <div class="row">
                            <div class="col-sm-12">
                              <ul class="p-0">
                                <li class="border-bottom">
                                  <a class="dropdown-item" href="https://www.makemyhouse.com/house-construction-cost-calculator-mmh/">
                                    <img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets\images\web-images/cost.png" class="me-3" /> Cost Calculator
                                  </a>
                                </li>
                                <li class="border-bottom">
                                  <a class="dropdown-item" href="/site/architectural_services">
                                    <img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/h-iw.png" class="me-3" /> How It
                                    Works
                                  </a>
                                </li>
                                <li class="border-bottom">
                                  <a class="dropdown-item" href="https://www.makemyhouse.com/site/refer">
                                    <img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/r-f.png" class="me-3" /> Refer a
                                    Friend
                                  </a>
                                </li>
                                <li class="border-bottom">
                                  <a class="dropdown-item" href="https://www.makemyhouse.com/ilpg/commercial/1">
                                    <img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/corporation.png" class="me-3" /> MMH
                                    for Corporate
                                  </a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="https://www.makemyhouse.com/designer-signup-home">
                                    <img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/professionals.png" class="me-3" />
                                    List as Professional
                                  </a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="https://www.makemyhouse.com/site/partner">
                                    <img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/handshake.png" class="me-3" />
                                    Partner With Us
                                  </a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="/page/career">
                                    <img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/carrer.png" class="me-3" /> Career
                                  </a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="/contact_us">
                                    <img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/contact.png" class="me-3" /> Contact
                                    Us
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
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
                    {/* <style>
                      .user-menu li a:hover{
                        text - decoration: none;
                      background: #e5e5e5;
								}
                      .user-menu li a{
                        padding: 2px 10px
								}
                    </style> */}
                    <a class="btn btn-light" href="https://www.makemyhouse.com/auth/loginv2?redirect=https://www.makemyhouse.com/"><img loading="lazy" alt="" src="https://www.makemyhouse.com/assets/themelibv3assets/images/Login.png" class="me-2" style={{ width: "15px" }} />Login</a>

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