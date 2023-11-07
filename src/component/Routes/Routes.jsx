import React from 'react';
// import {  Router, Route, Link, BrowserRouter,Switch } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import AccountBox from '../accountBox';
import Dashboard from '../Dashboard';
import Demo from '../accountBox';

function AllRoutes() {
  return (
    <>
    <Router>
        <Navbar/>
    <Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/login" element={<Demo />} />
					
				</Routes>
    </Router>
    
        </>
  )
}

export default AllRoutes;