import logo192 from './images/logo192.png'
import './App.css';
import React, {Component, useState, useEffect, useReducer} from "react";
import {Routes, Route} from "react-router-dom";
import { BiCalendar, BiArchive, BiTrash } from "react-icons/bi";
import Search   from "./components/Search"
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";

function App(){
  return(
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3" > 
         <BiArchive className="inline-block text-red-400"/> My Appoinments 
      </h1>
      <AddAppointment />
      <Search />

      <ul className="divide-y divide-gray-200">
        <AppointmentInfo />
      </ul>

    </div>   
  )
}

// function App_2(){
//   return(
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route path="/about" element={<About/>}>
//           <Route path="/services" element={<Services/>}/>
//           <Route path="/history" element={<CompanyHistory/>}/>
//           <Route path="/location" element={<Location/>} />
//         </Route>

//         <Route path="/event" element={<Events/>} />
//         <Route path="/contact" element={<Contacts/>} />
//         <Route path="*" element= {<Oops404/>} />

//       </Routes> 
//     </div>
//   )
// }

export default App;