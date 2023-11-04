import React, { useState, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import  './First.css'

const MyCarousel = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 800 },
          items: 3,
          slidesToSlide: 3// optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 767, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      const sliderImageUrl = [
        //First image url
        {
          url:
            "https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/card-1.jpg?version=210"
        },
        {
          url:
            "https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/card-2.jpg?version=210"
        },
        {
          url:
            "https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/card-3.jpg?version=210"
        },
        {
          url:
            "https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/card-4.jpg?version=210"
        },
        {
          url:
            "https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/card-5.jpg?version=210"
        },
        {
          url:
            "https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/card-6.jpg?version=210"
        },
      ];

      const carouselRef = useRef(null);
      const CustomLeftButton = () => (
        <button
          className="custom-button left-button"
          onClick={() => carouselRef.current.previous()}
        >
                  <img src="	https://www.makemyhouse.com//assets/themelibv3assets/images/left-errow.png" alt="" />

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
    <div className="p-5"> 
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
      dotListClass="custom-dot-list-style"
        customButtonGroup={<CustomButtonGroup />}
        ref={carouselRef}
    >
      {sliderImageUrl.map((imageUrl, index) => {
        return (
          <div className="slider p-2 rounded-3" key={index}>
            <img src={imageUrl.url} alt="movie" width={"100%"} className='rounded-3 border border-secondary'/>
          </div>
        );
      })}
    </Carousel>
  </div>
  );
};

export default MyCarousel;
