import logo192 from './images/logo192.png'
import './App.css';
import React, {Component, useState, useEffect, useReducer} from "react";
import {Routes, Route} from "react-router-dom";
import { IconName,BsFillAlarmFill } from "react-icons/bs";

import {
  Home,
  About,
  Events,
  Contacts,
  Oops404,
  Services,
  CompanyHistory,
  Location
} from "./pages"


function App(){
  return(
    <div>
      <h1 > <BsFillAlarmFill /> My Appoinments </h1>
    </div>   
  )
}

function App_2(){
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About/>}>
          <Route path="/services" element={<Services/>}/>
          <Route path="/history" element={<CompanyHistory/>}/>
          <Route path="/location" element={<Location/>} />
        </Route>

        <Route path="/event" element={<Events/>} />
        <Route path="/contact" element={<Contacts/>} />
        <Route path="*" element= {<Oops404/>} />

      </Routes> 
    </div>
  )
}

export default App;