import './App.css';
import React, {Component, useState, useEffect, useReducer, useCallback} from "react";
import {Routes, Route} from "react-router-dom";
import { BiArchive } from "react-icons/bi";
import Search   from "./components/Search"
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";

function App(){

  let [appointmentList, setAppointmentList] = useState([]);

  const fetchData = useCallback(() => {
    fetch('./data.json') 
      .then(response => response.json())
      .then(data => {
        setAppointmentList(data)
      });
  }, [])

  //monitors data change, will invoke the function whenever fetchData's value changes
  useEffect( () => {
    fetchData()
  }, [fetchData]);

  return(
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3" > 
         <BiArchive className="inline-block text-red-400"/> My Appoinments 
      </h1>
      <AddAppointment />
      <Search />

      <ul className="divide-y divide-gray-200">
        {appointmentList 
          .map(appointment => (
            <AppointmentInfo key={appointment.id} appointment= {appointment} />
          ))}
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