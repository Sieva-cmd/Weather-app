

import { useState } from 'react';
import './App.css'
import React, {useEffect} from 'react';
import axios from 'axios'


const App =() =>{
  const [data,setData] =useState([]);
  const[latitude,  setLatitude] =useState('');
  const [longitude, setLongitude] =useState('');
  const API_URL =`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,cloudcover,cloudcover_mid,windspeed_120m`



  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(API_URL).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLatitude('');
      setLongitude('')
    }
  }
  
  


  return(
    <>

    <div className='main'>
    <div className='search'>
        <input
          value={longitude}
          onChange={event => setLongitude(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Longitude'
          type="text" />
           <input
          value={latitude}
          onChange={event => setLatitude(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Latitude'
          type="text" />
                
          </div>


      <div className='app'>
      <h1> Nairobi</h1>
   
      
      <h2>22°</h2>
      </div>

      <div className='elements'>
      <div> Temp {data.hourly_units? <p>{data.hourly_units.temperature_2m} </p>:null }
      </div>
      <div> Wind<p>{data.hourly_units? <p>{data.hourly_units.windspeed_120m} </p>:null }</p>
      </div>
      <div>Cloud cover <p> {data.hourly_units? <p>{data.hourly_units.cloudcover_md} </p>:null }</p>
      </div>
      <div> <p>Humid {data.hourly_units? <p>{data.hourly_units.relativehumidity_2m} </p>:null }</p>
      </div>

      </div>
     
    </div>
         
</>

  )

}


export default App;
