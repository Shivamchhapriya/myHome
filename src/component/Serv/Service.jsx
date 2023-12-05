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
     const newSlidesToShow = window.innerWidth >= 768 ? 3 : 1;
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
       <div className="nearer row mx-lg-5 mx-mb-3 mx-sm-2">
       </div>
         <div className='mx-lg-5 ms-sm-1 mt-2'>
   <h1 className='ms-2'>Exterior Designer:</h1>
      <CarouselProvider
         naturalSlideWidth={100}
         naturalSlideHeight={70}
         totalSlides={images.length}
         visibleSlides={slidesToShow}
         isPlaying 
         isInfinite={true}
         interval={3000}
         >
         <Slider>
         {images.map((img,ind)=>
            <Slide index={ind}>
            <div className="m-1 px-2">
            <Link to="/work/image">
               <a href='#'> 
                  <div className="our-services-box"> 
                     <div className="our-services-box-img">
                        <img className='image' src={img.image} alt='image' />
                     </div> 
                     <div className="our-services-box-text">
                     <div className='row'> 
                           <div className='col-sm-9'>
                              <h5>READYMADE HOUSE DESIGN</h5>
                              <p>PRE-DESIGNED PLANS</p>
                           </div> 
                           <div className='col-sm-1'>
                              <span className='decor'> <img  src='https://www.modernhousemaker.com/newassets/img/readymade.png' /> </span>
                           </div> 
                     </div> 
                     </div>  
                  </div> 
               </a> 
               </Link> 
            </div>
            </Slide> 
            )}
         </Slider>
         </CarouselProvider>
         </div>
         <div className='mx-lg-5 ms-sm-1 mt-2'>
   <h1 className='ms-2'>Interior Design:</h1>
      <CarouselProvider
         naturalSlideWidth={100}
         naturalSlideHeight={70}
         totalSlides={images.length}
         visibleSlides={slidesToShow}
         isPlaying 
         isInfinite={true}
         interval={3000}
         playDirection='right'
         >
         <Slider>
         {images.map((img,ind)=>
            <Slide index={ind}>
            <div className="m-1 px-2">
            <Link to="/work/image">
               <a href='#'> 
                  <div className="our-services-box"> 
                     <div className="our-services-box-img">
                        <img src={img.image} alt='image' />
                     </div> 
                     <div className="our-services-box-text">
                     <div className='row'> 
                           <div className='col-sm-9'>
                              <h5>READYMADE HOUSE DESIGN</h5>
                              <p>PRE-DESIGNED PLANS</p>
                           </div> 
                           <div className='col-sm-1'>
                              <span className='decor'> <img  src='https://www.modernhousemaker.com/newassets/img/readymade.png' /> </span>
                           </div> 
                     </div> 
                     </div>  
                  </div> 
               </a> 
               </Link> 
            </div>
            </Slide> 
            )}
         </Slider>
         </CarouselProvider>
         </div>
         <div className='mx-lg-5 ms-sm-1 mt-2'>
   <h1 className='ms-2'>Home Decor:</h1>
      <CarouselProvider
         naturalSlideWidth={100}
         naturalSlideHeight={70}
         totalSlides={images.length}
         visibleSlides={slidesToShow}
         isPlaying 
         isInfinite={true}
         interval={4000}
         >
         <Slider>
         {images.map((img,ind)=>
            <Slide index={ind}>
            <div className="m-1 px-2">
            <Link to="/work/image">
               <a href='#'> 
                  <div className="our-services-box"> 
                     <div className="our-services-box-img">
                        <img src={img.image} alt='image' />
                     </div> 
                     <div className="our-services-box-text">
                     <div className='row'> 
                           <div className='col-sm-9'>
                              <h5>READYMADE HOUSE DESIGN</h5>
                              <p>PRE-DESIGNED PLANS</p>
                           </div> 
                           <div className='col-sm-1'>
                              <span className='decor'> <img  src='https://www.modernhousemaker.com/newassets/img/readymade.png' /> </span>
                           </div> 
                     </div> 
                     </div>  
                  </div> 
               </a> 
               </Link> 
            </div>
            </Slide> 
            )}
         </Slider>
         </CarouselProvider>
         </div>
    </div>
  )
}

export default Service
