import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
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
    <Navbar/>
    <Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/login" element={<Demo />} />
          <Route path='work' element={<Service/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='work/image' element={<HowItWork/>} />
				</Routes>
        <Footer/>
    </Router>
        </>
  )
}

export default AllRoutes;