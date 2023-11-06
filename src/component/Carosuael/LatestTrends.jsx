import React, { useState, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import  './First.css'

const LatestTrends= () => {
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
            "https://www.makemyhouse.com/assets/themelibv2assets/app_assets/images/new/1000sqft.webp?version=210",
            size:"Area: 950sqft - 1100sqft"
        },
        {
          url:
            "https://www.makemyhouse.com/assets/themelibv2assets/app_assets/images/new/1150sqft.webp?version=210",
            size:"Area: 1150sqft - 1300sqft"
        },
        {
          url:
            "https://www.makemyhouse.com/assets/themelibv2assets/app_assets/images/new/1350sqft.webp?version=210",
            size:"Area: 1350sqft - 1500sqft"
        },
        {
          url:
            "https://www.makemyhouse.com/assets/themelibv2assets/app_assets/images/new/1750sqft.webp?version=210",
            size:"Area: 1550sqft - 1800sqft"
        },
        {
          url:
            "https://www.makemyhouse.com/assets/themelibv2assets/app_assets/images/new/2BHK.webp?version=210",
            size:"Area: 1750sqft - 1900sqft"
        },
        {
          url:
            "	https://www.makemyhouse.com/assets/themelibv2assets/app_assets/images/new/6BHK.webp?version=210",
            size:"Area: 1950sqft - 2100sqft"
        },
        {
          url:
            "https://www.makemyhouse.com/assets/themelibv2assets/app_assets/images/new/6BHK.webp?version=210",
            size:"Area: 2150sqft - 2300sqft"
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

    <div className="px-3  tab-content" > 
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
          <div className="slider p-1 rounded-5 justify-content-center" key={index}>
            <img src={imageUrl.url} alt="movie" width={"100%"} height={"250px"} className='rounded-3 border border-secondary'/>
            <center className='mt-3'><b>{imageUrl.size}</b></center>
          </div>
        );
      })}
    </Carousel>
  </div>
  );
};

export default LatestTrends;
