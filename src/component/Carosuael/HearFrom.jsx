import React, { useState, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import  './First.css'

const HearFrom= () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 800 },
          items: 3,
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
            city:"Haryana",
            name:"Piyush",
            content:"lorem ipsum dolor sit amet, consectetur adip non pro id el element i    id. Lorem ipsum dolor sit amet, consectet tempor invidunt ut labore et dolore magna aliqu sapien null null. Lorem ipsum dolor sit amet, consectet   tempor invidunt ut labore et dolore magna aliqu sap"
        },
       
        {
            city:"Madhya Pradesh",
            name:"Kapil",
            content:"lorem ipsum dolor sit amet, consectetur adip non pro id el element i    id. Lorem ipsum dolor sit amet, consectet tempor invidunt ut labore et dolore magna aliqu sapien null null. Lorem ipsum dolor sit amet, consectet   tempor invidunt ut labore et dolore magna aliqu sap"
        },
       
        {
            city:"Punjab",
            name:"Shivam",
            content:"lorem ipsum dolor sit amet, consectetur adip non pro id el element i    id. Lorem ipsum dolor sit amet, consectet tempor invidunt ut labore et dolore magna aliqu sapien null null. Lorem ipsum dolor sit amet, consectet   tempor invidunt ut labore et dolore magna aliqu sap"
        },
       
        {
            city:"Uttar Pradesh",
            name:"Cherry",
            content:"lorem ipsum dolor sit amet, consectetur adip non pro id el element i    id. Lorem ipsum dolor sit amet, consectet tempor invidunt ut labore et dolore magna aliqu sapien null null. Lorem ipsum dolor sit amet, consectet   tempor invidunt ut labore et dolore magna aliqu sap"
        },
       
        {
            city:"Indore",
            name:"Sachin",
            content:"lorem ipsum dolor sit amet, consectetur adip non pro id el element i    id. Lorem ipsum dolor sit amet, consectet tempor invidunt ut labore et dolore magna aliqu sapien null null. Lorem ipsum dolor sit amet, consectet   tempor invidunt ut labore et dolore magna aliqu sap"
        },
       
        {
            city:"Sanawad",
            name:"Guru",
            content:"lorem ipsum dolor sit amet, consectetur adip non pro id el element i    id. Lorem ipsum dolor sit amet, consectet tempor invidunt ut labore et dolore magna aliqu sapien null null. Lorem ipsum dolor sit amet, consectet   tempor invidunt ut labore et dolore magna aliqu sap"
        },
       
        {
            city:"Pune",
            name:"Ayush",
            content:"lorem ipsum dolor sit amet, consectetur adip non pro id el element i    id. Lorem ipsum dolor sit amet, consectet tempor invidunt ut labore et dolore magna aliqu sapien null null. Lorem ipsum dolor sit amet, consectet   tempor invidunt ut labore et dolore magna aliqu sap"
        },
      ];

      const carouselRef = useRef(null);
      function CustomDot(props) {
        const { onClick, index, active } = props;
        return (
          <button
            onClick={onClick}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: active ? '#3bad4b' : '#3bad4b85', // Change the active and inactive dot color here
              margin: '10px 5px 5px 5px',
              cursor: 'pointer',
              border: 'none',
            }}
          ></button>
        );
      }
  return (
    <div className="px-3 mt-5 "> 
        <center> 
            <b style={{fontSize:"25px"}}>Hear From Our Satisfied Homeowners</b>
            <div className="create_div mb-5">
                        <div className="inner-create_div"></div>
                    </div>
        </center>
    <div className='tab-content' style={{padding:"20px 40px"}}>
    <Carousel
        responsive={responsive}
        autoPlay={true}
        arrows={false}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        pauseOnHover
        partialVisible={false}
        rtl={false}
        dotListClass="custom-dot-list-style"
        ref={carouselRef}
        customDot={<CustomDot />}
      >
      {sliderImageUrl.map((imageUrl, index) => {
        return (
          <div className='ms-4 mb-5'>
            <div className="slider justify-content-center tab-content mt-3 mb-3 " style={{border:"1px solid #BFBFBF"}} key={index} >
              <div className='row'>
                  <div className='col-2'>
                    <img src={"https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/user.png?version=210"} alt="movie" width={"37px"}className=''/>
                  </div>
                  <div className='col-10'>
                      <h4><b>{imageUrl.name} </b></h4>
                      <span style={{color:"green"}}>({imageUrl.city})</span>
                  </div>
                  <img className='mt-3' alt="5 star" loading="lazy" src="https://www.makemyhouse.com/assets/themelibv3assets\images\web-images\five-stars.png?version=210" style={{width: "30%"}}/>
                  {/* <p className='mt-3'>⭐️⭐️⭐️⭐️⭐️</p> */}
                  <p>{imageUrl.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  </div>
  </div>
  
  );
};

export default HearFrom;
