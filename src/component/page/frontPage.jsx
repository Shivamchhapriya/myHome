// import React from "react";
// import './index.css'
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import { Box } from '@mui/material'
// import FormHeader from "./form";
// import CardForm from "./headCard";
// // import { ThemeContext } from '@mui/styled-engine';


// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }
// function FrontPage() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   return (
//     <>
//       <div>
//         <div className="mainImage" >
//           {/* <img src="/asset/frontPage.jpg" className="w-100" alt="" srcset="" /> */}

//           <div className="maincontainer" >
//             <div className="frontHeader " >
//               <h1 className="text-white fw-bold mt-5">अब घर बनेगा रॉयल हाउस मेकर्स के साथ</h1>
//             </div>
//             <div className="row background_color">

//               <div className="frist-grey  col-12 mt-5"  >
//                 <Box >
//                   <div className="background_tab_padding">
//                     <Box sx={{ borderBottom: 1, borderColor: 'divider', background: '#DADADA', marginTop: '-40px' }} className='mx-lg-4 mx-md-2 mx-sm-1'>
//                       <Tabs className="builder " value={value} onChange={handleChange} aria-label="basic tabs example">
//                         <Tab label={
//                           <div>
//                             <div >
//                               <div className="tab_icon">
//                                 <img src="https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/2d.png?version=210" alt="Your Image" width="23" height="23" />
//                               </div>

//                               <span className="mt-1">2D Layout Plan</span>
//                             </div>
//                           </div>
//                         }   {...a11yProps(0)} />
//                         <Tab label={
//                           <div>
//                             <div >
//                               <div className="tab_icon">
//                                 <img src="https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/3d.png?version=210" alt="Your Image" width="23" height="23" />
//                               </div>
//                               3D FRONT ELEVATION
//                             </div>
//                           </div>
//                         }   {...a11yProps(1)} />
//                         <Tab label={
//                           <div >
//                             <div className="tab_icon">
//                               <img src="https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/structual.png?version=210" alt="Your Image" width="23" height="23" />
//                             </div>
//                             STRUCTUAL DESIGN
//                           </div>
//                         }   {...a11yProps(2)} />
//                         <Tab label={
//                           <div >
//                             <div className="tab_icon">
//                               <img src="https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/presentation.png?version=210" alt="Your Image" width="23" height="23" />
//                             </div>
//                             PRESENTATION PLAN
//                           </div>
//                         }   {...a11yProps(3)} />
//                         <Tab label={
//                           <div >
//                             <div className="tab_icon">
//                               <img src="https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/more-1.png?version=210" alt="Your Image" width="23" height="23" />
//                             </div>
//                             MORE
//                           </div>
//                         }   {...a11yProps(4)} />
//                       </Tabs>


//                     </Box>
//                   </div>
//                   <CustomTabPanel className='tab_body' value={value} index={0}>
//                     <FormHeader />

//                   </CustomTabPanel>
//                   <CustomTabPanel className='tab_body' value={value} index={1}>
//                     <FormHeader />

//                   </CustomTabPanel>
//                   <CustomTabPanel className='tab_body' value={value} index={2}>
//                     <FormHeader />

//                   </CustomTabPanel>
//                   <CustomTabPanel className='tab_body' value={value} index={3}>
//                     <FormHeader />

//                   </CustomTabPanel>
//                   <CustomTabPanel className='tab_body_2' value={value} index={4}>
//                     <CardForm />

//                   </CustomTabPanel>
//                 </Box>
//               </div>
//             </div>


//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default FrontPage;


import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './index.css';
import Carousel from 'react-multi-carousel';

// const images = [
//   '	https://maarchitects.in/wp-content/uploads/2018/12/10-1.jpg',
//   '	https://maarchitects.in/wp-content/uploads/2018/12/07-1.jpg',
//   '	https://maarchitects.in/wp-content/uploads/2018/12/08-1.jpg',
//   '	https://maarchitects.in/wp-content/uploads/2018/12/03-1.jpg',
//   '	https://maarchitects.in/wp-content/uploads/2018/12/02-1.jpg'
// ];

const images = [

{ src: 'https://maarchitects.in/wp-content/uploads/2018/12/10-1.jpg', name: 'Rahul Sharma' },
{ src: 'https://maarchitects.in/wp-content/uploads/2018/12/07-1.jpg', name: 'Manish Birla' },
{ src: 'https://maarchitects.in/wp-content/uploads/2018/12/08-1.jpg', name: 'Hemant Patel' },
{ src: 'https://maarchitects.in/wp-content/uploads/2018/12/03-1.jpg', name: 'Vivek Gupta' },
{ src: 'https://maarchitects.in/wp-content/uploads/2018/12/02-1.jpg', name: 'Rajesh Verma' },

];
const FrontPage = () => {
  const [currentIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 1,
      // slidesToSlide: 1// optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
      // slidesToSlide: 4 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 1,
      // slidesToSlide: 2  // optional, default to 1.  
    }
  };

  return (
    <div className="app">
     {/* <Carousel
              responsive={responsive}  
              autoPlay={true}
              swipeable={true}
              infinite={true}
              pauseOnHover={false}
              partialVisible={false}
              rtl={false}
              autoPlaySpeed={5000} 
              arrows={false} 
              dotListClass="custom-dot-list-style" 
                // customButtonGroup={} 
            >
        {images.map((image) => {
          return (<>
            <img
                src={image.src} 
                alt={`Image ${currentIndex + 1}`}
                style={{ width: '100%', height: '95vh', objectFit: 'cover'}}
              />
              <p className='kapil'>{image.name}</p>
          </>
          );
        })}
      </Carousel> */}
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/asset/Home-1.jpg" height={'730rem'} class="d-block w-100 " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/asset/Home-2.jpg" height={'730rem'} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/asset/Home-18.jpg" height={'730rem'} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
};

export default FrontPage;