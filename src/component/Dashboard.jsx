import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FrontPage from './page/frontPage'
import MyCarousel from './Carosuael/First'   

import Back11 from './Background1/Back11'
import Back_4 from './Background_4/Back_4'
import ContractorWorkes from './ContractorWorkers/ContractorWorker'
import Back1 from './Background/Back1'
// import HowItWork from './HowItWork/HowItWork'
import Back_3 from './Background_3/Back_3'
// import CommercialDesign from './CommercialDesign'
import LatestHouse from './LatestHouse'
// import Footer from './Footer'
import Showcasing from './Carosuael/Showcasing'
import HearFrom from './Carosuael/HearFrom'
import Demo from './page/demo'
import Service from './Serv/Service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
// import Contact from './Contact/Contact';
import Footer from './Footer';
import Contact from './Contact/Contact';
import ResponsiveAppBar from './ResponsiveAppBar';
import Navbar from './Navbar/Navbar';
// import YuvrajFantasySport from './yuvraj';

function Dashboard() {
  return (
   <>
   {/* <Demo/> */}
   {/* <ResponsiveAppBar/> */}
   <Navbar/>
   <FrontPage/>
   {/* <MyCarousel/> */}
   {/* <Back1/> */}
  
   {/* <LatestHouse/> */}
   {/* <CommercialDesign/> */}
   <Service />
   {/* <Back11/> */}
   {/* <Back_4/> */}
   {/* <ContractorWorkes/> */}
   {/* <HowItWork/> */}
   {/* <Back_3/> */}
  
   <Showcasing/>
   <Contact />

   {/* <HearFrom/> */}
   {/* <Footer/> */}
   {/* <YuvrajFantasySport /> */}
   
{/* <FontAwesomeIcon icon={faFacebook} /> */}

   
   </>
  )
}

export default Dashboard
