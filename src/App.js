import './App.css';
import React, { useState, useEffect, useReducer, useCallback} from "react";
import { BiArchive } from "react-icons/bi";
import Search   from "./components/Search"
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";

function App(){

  let [appointmentList, setAppointmentList] = useState([]);

  let[query, setQuery] = useState("");
  let[sortBy, setSortBy] = useState("petName");
  let[orderBy, setOrderBy] = useState("Asc");

  const filteredAppointments = appointmentList.filter(
    item => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      )
    }
  ).sort((a, b) => {
      let order = (orderBy  === 'Asc' ) ? 1 : -1;
      return (
          a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 *order : 1 * order
      )
  })

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

        {/* init the value of queryString var and onQueryInput event    */}
      <Search
          queryString={query}
          onQueryInput={myQuery => setQuery(myQuery)}
          orderBy = {orderBy}
          onOrderByChange = {orderDirection => setOrderBy(orderDirection)}
          sortBy = {sortBy}
          onSortByChange = {mySort => setSortBy(mySort) }
      />

      <ul className="divide-y divide-gray-200">
        {filteredAppointments
          .map(appointment => (
            <AppointmentInfo key = {appointment.id} appointment = {appointment} 
              onDeleteAppointment = {
                appointmentId =>
                  setAppointmentList(appointmentList.filter(appointment =>
                      appointment.id !== appointmentId))
              }
            />
          ))}
      </ul>

    </div>   
  )
}

export default App;