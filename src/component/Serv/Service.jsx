import React, { useEffect, useState } from 'react';
import "./Service.css";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {  Link } from 'react-router-dom';

function Service() {

 const images = [
   {image: "/asset/Home-13.jpg "},
   {image: "/asset/Home-18.jpg"},
   {image: "/asset/Home-15.jpg"},
   {image: "/asset/Home-11.jpg"},
   {image: "/asset/Home-7.jpg"},
   {image: "/asset/Home-8.jpg"},
   {image: "/asset/Home-9.jpg"},
   {image: "/asset/Home-15.jpg"},
   {image: "/asset/Home-6.jpg"},
   {image: "/asset/Home-13.jpg"},
   {image: "/asset/Home-17.jpg"},
   {image: "/asset/Home-14.jpg"},
 ]

 const [slidesToShow, setSlidesToShow] = useState(2); // Default to 2 slides

 useEffect(() => {
   const handleResize = () => {
     const newSlidesToShow = window.innerWidth >= 768 ? 1 : 1;
     if (newSlidesToShow !== slidesToShow) {
       setSlidesToShow(newSlidesToShow);
     }
   };

   window.addEventListener('resize', handleResize);
   handleResize();
   return () => {
     window.removeEventListener('resize', handleResize);
   };
 }, [slidesToShow]);

  return (
    <div className='container'>
       <div className='sec-heading mt-2'>
            <h5>Our Services</h5>
            <h3>SERVICES WE PROVIDE</h3>
       </div>
       <div className=''>
      <div className='row'>
        <div className='col-xl-12 col-sm-12'>
          
          <div className=''>
            <img className='design img-fluid' src="./1.png" alt="Project" />
          </div>
         
          <div className="row mt-1">
            <div className='col-lg-6 '>
              <img className='img_set img-fluid border' src='2.jpg' alt="Project" />
            </div>
            <div className='col-lg-6'>
              <div className='p_1 img_set mt-2'>
                <div className='full-width-paragraph'>
                  <p>
                    <strong className='react'>Client:</strong> ARG Developers<br />
                    <strong className='react'>Site area:</strong> 1.22 Acres<br />
                    <strong className='react'>Built up area:</strong> 31,500 sq.m.
                  </p>
                  <p>
                    Argus is a high-end residential tower with unprecedented architectural character, located on the 48m wide Tonk road, major arterial corridor running through the entire city, to the east and panoramic urban sprawl to the west.<br />
                    With the concept of creating an extrovert tower with volumetric play in architectural language, the 64 luxurious, 3 & 4 bhk apartments ranging from 3000-4000sqft. are knit up intact to produce an immensely interesting 17 story tower, responsive to wind flow and sun path. play in architecture, the building hence has mega green terraces on various levels making a mark in the city’s skyline, enjoying the picturesque surrounding views. The unique volumetric play allows the apartments to open up on all four sides and wind flow through the greens and pool spirals along the building keeping it naturally cool and ventilated, for the uniqueness and highly environmental sustainable design, the building enjoys the title of <strong>LEED Platinum</strong> rated green building.
                  </p>
                </div>
              </div>
            </div>
            
            <div className='col-lg-6'>
              <div className='p_1 img_set mt-2'>
                <p>
                  <strong className='react'>Client:</strong> ARG Developers<br />
                  <strong className='react'>Site area:</strong> 1.22 Acres<br />
                  <strong className='react'>Built up area:</strong> 31,500 sq.m.
                </p>
                <p>
                  Argus is a high-end residential tower with unprecedented architectural character, located on the 48m wide Tonk road, major arterial corridor running through the entire city, to the east and panoramic urban sprawl to the west.<br />
                  With the concept of creating an extrovert tower with volumetric play in architectural language, the 64 luxurious, 3 & 4 bhk apartments ranging from 3000-4000sqft. are knit up intact to produce an immensely interesting 17 story tower, responsive to wind flow and sun path. play in architecture, the building hence has mega green terraces on various levels making a mark in the city’s skyline, enjoying the picturesque surrounding views. The unique volumetric play allows the apartments to open up on all four sides and wind flow through the greens and pool spirals along the building keeping it naturally cool and ventilated, for the uniqueness and highly environmental sustainable design, the building enjoys the title of <strong>LEED Platinum</strong> rated green building.
                </p>
              </div>
            </div>
            <div className='col-lg-6'>
              <img className='img_set img-fluid border' src='3.jpg' alt="Project" />
            </div>

            <div className='col-lg-6'>
              <img className='img_set img-fluid border' src='4.jpeg' alt="Project" />
            </div>
            <div className='col-lg-6'>
              <div className='p_1 img_set mt-2'>
                <div className='full-width-paragraph'>
                  <p>
                    <strong className='react'>Client:</strong> ARG Developers<br />
                    <strong className='react'>Site area:</strong> 1.22 Acres<br />
                    <strong className='react'>Built up area:</strong> 31,500 sq.m.
                  </p>
                  <p>
                    Argus is a high-end residential tower with unprecedented architectural character, located on the 48m wide Tonk road, major arterial corridor running through the entire city, to the east and panoramic urban sprawl to the west.<br />
                    With the concept of creating an extrovert tower with volumetric play in architectural language, the 64 luxurious, 3 & 4 bhk apartments ranging from 3000-4000sqft. are knit up intact to produce an immensely interesting 17 story tower, responsive to wind flow and sun path. play in architecture, the building hence has mega green terraces on various levels making a mark in the city’s skyline, enjoying the picturesque surrounding views. The unique volumetric play allows the apartments to open up on all four sides and wind flow through the greens and pool spirals along the building keeping it naturally cool and ventilated, for the uniqueness and highly environmental sustainable design, the building enjoys the title of <strong>LEED Platinum</strong> rated green building.
                  </p>
                </div>
              </div>
            </div>


            <div className='col-lg-6 newcla'>
              <div className='p_1 img_set mt-2'>
                <p>
                  <strong className='react'>Client:</strong> ARG Developers<br />
                  <strong className='react'>Site area:</strong> 1.22 Acres<br />
                  <strong className='react'>Built up area:</strong> 31,500 sq.m.
                </p>
                <p>
                  Argus is a high-end residential tower with unprecedented architectural character, located on the 48m wide Tonk road, major arterial corridor running through the entire city, to the east and panoramic urban sprawl to the west.<br />
                  With the concept of creating an extrovert tower with volumetric play in architectural language, the 64 luxurious, 3 & 4 bhk apartments ranging from 3000-4000sqft. are knit up intact to produce an immensely interesting 17 story tower, responsive to wind flow and sun path. play in architecture, the building hence has mega green terraces on various levels making a mark in the city’s skyline, enjoying the picturesque surrounding views. The unique volumetric play allows the apartments to open up on all four sides and wind flow through the greens and pool spirals along the building keeping it naturally cool and ventilated, for the uniqueness and highly environmental sustainable design, the building enjoys the title of <strong>LEED Platinum</strong> rated green building.
                </p>
              </div>
            </div>
            <div className='col-lg-6'>
              <img className='img_set img-fluid border' src='5.jpg' alt="Project" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
       
     </div>
   )
}

export default Service
