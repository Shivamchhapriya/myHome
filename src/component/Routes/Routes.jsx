import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from '../Dashboard';
import Demo from '../accountBox';
import Service from '../Serv/Service';
import Contact from '../Contact/Contact';
import Footer from '../Footer';
import HowItWork from './../HowItWork/HowItWork';

function AllRoutes() {
  return (
    <>
    <Router>
    
    <Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/home" element={<Dashboard />} />
          <Route path='/about us' element={<Service/>} />
					<Route path="/login" element={<Demo />} />
          <Route path='contact us' element={<Contact/>} />
          {/* <Route path='/whatsapp' element={<HowItWork/>} /> */}
				</Routes>
        <Footer/>
    </Router>
        </>
  )
}

export default AllRoutes;