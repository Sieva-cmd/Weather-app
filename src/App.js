

import { useState } from 'react';
import './App.css'
import React, {useEffect} from 'react';
import axios from 'axios'


const App =() =>{
  const [data,setData] =useState([]);
  const[latitude,  setLatitude] =useState('');
  const [longitude, setLongitude] =useState('');
  const API_URL =`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,cloudcover_mid,windspeed_120m&daily=sunrise,sunset&current_weather=true&timezone=Africa%2FCairo`



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
      
      <div> Temp 
      {data.current_weather? <p>{data.current_weather.temperature}

      {data.hourly_units? <small>{data.hourly_units.temperature_2m} </small>:null }
       </p>:null }
      
      </div>
      <div> Wind
        {data.current_weather?<p>{data.current_weather.windspeed} 
        {data.hourly_units? <small>{data.hourly_units.windspeed_120m} </small>:null } 
        </p>:null }
        
      </div>
      <div>Cloud cover 
       {data.current_weather?<p>{data.current_weather.cloudcover_md}:
       {data.hourly_units? <small>{data.hourly_units.cloudcover_md} </small>:null }
       </p>:null}
        
      </div>
      <div> Humid 
        {data.current_weather?<p>{data.current_weather.relativehumidity_2m} 
        {data.hourly_units? <small>{data.hourly_units.relativehumidity_2m} </small>:null }
        :</p>:null}
        
      </div>

      </div>
    
     
    </div>
         
</>

  )

}


export default App;
