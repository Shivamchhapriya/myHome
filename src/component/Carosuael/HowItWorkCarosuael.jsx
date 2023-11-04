import React, { useState, useRef } from "react";
import Carousel from "react-multi-carousel";

function AllCarosuael() {
  return (
    <div className="row rounded-4 p-2 bg-white mb-5">
      <div className="col-12">
        <img
          width={"100%"}
          className="mt-2"
          src="https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/htw-1.jpg?version=210"
          alt=""
        />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 mt-3 text-start mb-5">
        <h6>
          <img
            style={{ width: "25px" }}
            src="https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/h-check.png?version=210"
            alt=""
          />
          <b className="ms-2">Construction Agency Assigned :</b>
        </h6>
        <p>
          We get you linked to our authorized partners in your city, who are
          curated and filtered by our experts{" "}
        </p>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 mt-3 text-start mb-4">
        <h6>
          <img
            style={{ width: "25px" }}
            src="https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/h-check.png?version=210"
            alt=""
          />
          <b className="ms-2">Construction Agency Assigned :</b>
        </h6>
        <p>
          We get you linked to our authorized partners in your city, who are
          curated and filtered by our experts{" "}
        </p>
      </div>
    </div>
  );
}
function CustomDot(props) {
    const { onClick, index, active } = props;
  
    return (
      <button
        onClick={onClick}
        style={{
          width: '100%',
          height: '10px',
          borderRadius: '10%',
          backgroundColor: active ? '#3bad4b' : '#3bad4b85', // Change the active and inactive dot color here
          margin: '5px 10px',
          cursor: 'pointer',
          border: 'none',
        }}
      ></button>
    );
  }

function HowItWorkCarosuael() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1000 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const carouselRef = useRef(null);
  return (
    <>
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
        {[1, 2, 3].map((dt) => {
          return (
            <div className="slider p-2 rounded-3" key={dt}>
              <AllCarosuael />
            </div>
          );
        })}
      </Carousel>
    </>
  );
}

export default HowItWorkCarosuael;
