import React from 'react';
import "./Service.css";

function Service() {

 const images = [
   {image: "/asset/Home-3.jpg"},
   {image: "/asset/Home-4.jpg"},
   {image: "/asset/Home-15.jpg"},
   {image: "/asset/Home-6.jpg"},
   {image: "/asset/Home-7.jpg"},
   {image: "/asset/Home-8.jpg"},
   {image: "/asset/Home-9.jpg"},
   {image: "/asset/Home-15.jpg"},
   {image: "/asset/Home-11.jpg"},
   {image: "/asset/Home-12.jpg"},
   {image: "/asset/Home-13.jpg"},
   {image: "/asset/Home-14.jpg"},
 ]

  return (
    <div className='container'>
       <div className='sec-heading'>
            <h5>Our Services</h5>
            <h3>SERVICES WE PROVIDE</h3>
       </div>
       <div className="Hii row mx-lg-5 mx-mb-3 mx-sm-2">
        <p className='para'>Our Home reflect our personality, so get your house designed in the best possible way. As one of the Top Interior Design Firms in Indore, we offer excellent House Design Plans. We use advance technologies to deliver fabulous Home Design Indore that reflect Creativity and Innovation. From false ceilings, glamorous kitchens to amazing wardrobes and luxurious sofas. Our Team of Interior Designers always try to provide the Best House Design in Indore.</p>
       <div className="row mt-5"> 

       {images.map((img)=>
          <div className="col-md-4 mb-3"> 
            <a href='#'> 
                <div className="our-services-box"> 
                   <div className="our-services-box-img">
                      <img src={img.image} />
                   </div> 
                   <div className="our-services-box-text">
                   <div className='row'> 
                        <div className='col-sm-9'>
                           <h5>READYMADE HOUSE DESIGN</h5>
                           <p>PRE-DESIGNED PLANS</p>
                        </div> 
                        <div className='col-sm-3'>
                           <span className='decor'> <img  src='https://www.modernhousemaker.com/newassets/img/readymade.png' /> </span>
                        </div> 
                   </div> 
                   </div>  
                </div> 
            </a> 
          </div> 
          )}
       </div>
       {/* <div className="row mt-5 mb-3 ">
          <div className="col-md-4 mb-3">
            <a href='#'>
                <div className="our-services-box">
                   <div className="our-services-box-img">
                      <img src='https://www.modernhousemaker.com/newassets/img/3d-floorplan-img.jpg' />
                   </div>  
                   <div className="our-services-box-text">
                   <div className='row'>
                        <div className='col-sm-9'>
                           <h5>FLOOR PLANS</h5>
                           <p>THE BEST DESIGNED PLANS</p>
                        </div>
                        <div className='col-sm-3'>
                           <span className='decor'> <img  src='	https://www.modernhousemaker.com/newassets/img/plan-fe.png' /> </span>
                        </div>
                   </div>
                   </div>
                </div>
            </a>
          </div>
          <div className="col-md-4 mb-3">
            <a href='#'>
                <div className="our-services-box">
                   <div className="our-services-box-img">
                      <img src='https://www.modernhousemaker.com/newassets/img/Frontelevation-img.jpg' />
                   </div>  
                   <div className="our-services-box-text">
                   <div className='row'>
                        <div className='col-sm-9'>
                           <h5>FRONT ELEVATIONS</h5>
                           <p>PHOTOREALISTIC 3D IMAGES</p>
                        </div>
                        <div className='col-sm-3'>
                           <span className='decor'> <img  src='	https://www.modernhousemaker.com/newassets/img/elehouse.png' /> </span>
                        </div>
                   </div>
                   </div>
                </div>
            </a>
          </div>
          <div className="col-md-4 mb-3">
            <a href='#'>
                <div className="our-services-box">
                   <div className="our-services-box-img">
                      <img src='https://www.modernhousemaker.com/newassets/img/Commercial-img.jpg'/>
                   </div>  
                   <div className="our-services-box-text">
                   <div className='row'>
                        <div className='col-sm-9'>
                           <h5>COMMERCIAL DESIGNS</h5>
                           <p>DESIGN TO ATTRACT</p>
                        </div>
                        <div className='col-sm-3'>
                           <span className='decor'> <img  src='https://www.modernhousemaker.com/newassets/img/com-construction.png' /> </span>
                        </div>
                   </div>
                   </div> 
                </div>
            </a>
          </div>
       </div> */}
    </div>
    </div>
  )
}

export default Service
