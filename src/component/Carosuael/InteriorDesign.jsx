import React, { useState, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import  './First.css'

const InteriorDesign = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 800 },
          items: 4,
          slidesToSlide: 1// optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 4,
          slidesToSlide: 4 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 767, min: 464 },
          items: 2,
          slidesToSlide: 2  // optional, default to 1.
        }
      };
      const sliderImageUrl = [
        //First image url
        {
          url:
            "https://www.makemyhouse.com/assets/themelibv2assets/app_assets/images/new/study.webp?version=210",
            name:"Study Room"
        },
        {
          url:
            "https://www.makemyhouse.com/assets/themelibv2assets/app_assets/images/new/bathroom1.webp?version=210",
            name:"Bathroom"
        },
        {
          url:
            "https://www.makemyhouse.com/assets/themelibv2assets/app_assets/images/new/kidsroom.webp?version=210",
            name:"Kids Room"
        },
        {
          url:
            "https://www.makemyhouse.com/assets/themelibv2assets/app_assets/images/new/kitchen.webp?version=210",
            name:"Kitchen"
        },
        {
          url:
            "https://www.makemyhouse.com/assets/themelibv2assets/app_assets/images/new/pujaroom.webp?version=210",
            name:"Puja Room"
        },
        {
            url:
              "https://www.makemyhouse.com/assets/themelibv2assets/app_assets/images/new/kidsroom.webp?version=210",
              name:"Living Room"
          },
    
      ];

      const carouselRef = useRef(null);
      const CustomLeftButton = () => (
        <button
          className="custom-button left-button"
          onClick={() => carouselRef.current.previous()}
        >
                  <img src="https://www.makemyhouse.com//assets/themelibv3assets/images/left-errow.png" alt="" />

        </button>
      );
    
      const CustomRightButton = () => (
        <button
          className="custom-button right-button"
          onClick={() => carouselRef.current.next()}
        >
         <img src="	https://www.makemyhouse.com//assets/themelibv3assets/images/right-errow.png" alt="" />

        </button>
      );
      const CustomButtonGroup = (props) => {
        return (
          <div className="custom-button-group">
          
              <>
                <CustomLeftButton {...props} />
                <CustomRightButton {...props} />
              </>
       
          </div>
        );
      };
  return (
    <div className="px-3 mt-5"> 
    <Carousel
      responsive={responsive}
      autoPlay={true}
      arrows={false}
      swipeable={true}
      draggable={true}
      showDots={false}
      infinite={true}
      pauseOnHover
      partialVisible={false}
      rtl={false}
      autoPlaySpeed={2000} 
      dotListClass="custom-dot-list-style"
        // customButtonGroup={<CustomButtonGroup />}
        ref={carouselRef}
    >
      {sliderImageUrl.map((imageUrl, index) => {
        return (
          <div className="slider p-2 m-1 rounded-3 border border-secondary" key={index} style={{background:"#f8f9fa"}}>
            <img src={imageUrl.url} alt="movie" width={"100%"} height={"200px"} className='rounded-3 border border-secondary'/>
            <center className='mt-3'><b>{imageUrl.name}</b></center>
          </div>
        );
      })}
    </Carousel>
  </div>
  );
};

export default InteriorDesign;
