

import { useState } from 'react';
import './App.css'
import React, {useEffect} from 'react';
import axios from 'axios'
import * as Unicons from '@iconscout/react-unicons';
import { UilTemperaturePlus } from '@iconscout/react-unicons'
import { UilWind } from '@iconscout/react-unicons'
import { UilClouds } from '@iconscout/react-unicons'
import { UilTemperature } from '@iconscout/react-unicons'


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
      <h1 className='header'>CYWEATHER WEATHER FOCUST SYSTEM</h1>
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
          <div className='heading'>  <h2>Current Weather as Per Now</h2></div>
        
      <div className='elements'>
       
      
            <div> Temp <Unicons.UilTemperaturePlus /> 
            {data.current_weather? <p>{data.current_weather.temperature}

            {data.hourly_units? <small>{data.hourly_units.temperature_2m} </small>:null }
            </p>:null }
            
            </div>
            <div> Wind <Unicons.UilWind />  
              {data.current_weather?<p>{data.current_weather.windspeed} 
              {data.hourly_units? <small>{data.hourly_units.windspeed_120m} </small>:null } 
              </p>:null }
              
            </div>
            <div>Cloud cover <Unicons.UilClouds />
            {data.current_weather?<p>{data.current_weather.cloudcover_md}:
            {data.hourly_units? <small>{data.hourly_units.cloudcover_md} </small>:null }
            </p>:null}
              
            </div>
            <div> Humid  <Unicons.UilTemperature />
              {data.current_weather?<p>{data.current_weather.relativehumidity_2m} 
              {data.hourly_units? <small>{data.hourly_units.relativehumidity_2m} </small>:null }
              :</p>:null}
              
            </div>

      </div>
      <h2 className='heading'>Todays Weather from 6am to 6pm</h2>
      <div className='mapping'>
     
              <div>
              <h5>Time {data.hourly? <small>{data.hourly.time[6]} </small>:null } </h5>
              <p>Temperature {data.hourly ?<small>{data.hourly.temperature_2m[6]} </small>:null }°C </p>
              <p>Clouds {data.hourly ?<small>{data.hourly.cloudcover_mid[6]} </small>:null }% </p>
              <p>Humidity {data.hourly ?<small>{data.hourly.relativehumidity_2m[6]} </small>:null }% </p>
              <p>Wind {data.hourly ?<small>{data.hourly.windspeed_120m[6]} </small>:null }km/h </p>
              </div>

              <div>
              <h5>Time {data.hourly? <small>{data.hourly.time[7]} </small>:null } </h5>
              <p>Temperature {data.hourly ?<small>{data.hourly.temperature_2m[7]} </small>:null }°C </p>
              <p>Clouds {data.hourly ?<small>{data.hourly.cloudcover_mid[7]} </small>:null }% </p>
              <p>Humidity {data.hourly ?<small>{data.hourly.relativehumidity_2m[7]} </small>:null }% </p>
              <p>Wind {data.hourly ?<small>{data.hourly.windspeed_120m[7]} </small>:null }km/h </p>
              </div>


              <div>
              <h5>Time {data.hourly? <small>{data.hourly.time[8]} </small>:null } </h5>
              <p>Temperature {data.hourly ?<small>{data.hourly.temperature_2m[8]} </small>:null }°C </p>
              <p>Clouds {data.hourly ?<small>{data.hourly.cloudcover_mid[8]} </small>:null }% </p>
              <p>Humidity {data.hourly ?<small>{data.hourly.relativehumidity_2m[8]} </small>:null }% </p>
              <p>Wind {data.hourly ?<small>{data.hourly.windspeed_120m[8]} </small>:null }km/h </p>
              </div>
     

      </div>
   
      <div className='three'>
            <div>
            <h5>Time {data.hourly? <small>{data.hourly.time[9]} </small>:null } </h5>
            <p>Temperature {data.hourly ?<small>{data.hourly.temperature_2m[9]} </small>:null }°C </p>
            <p>Clouds {data.hourly ?<small>{data.hourly.cloudcover_mid[9]} </small>:null }% </p>
            <p>Humidity {data.hourly ?<small>{data.hourly.relativehumidity_2m[9]} </small>:null }% </p>
            <p>Wind {data.hourly ?<small>{data.hourly.windspeed_120m[9]} </small>:null }km/h </p>
            </div>

            <div>
            <h5>Time {data.hourly? <small>{data.hourly.time[10]} </small>:null } </h5>
            <p>Temperature {data.hourly ?<small>{data.hourly.temperature_2m[10]} </small>:null }°C </p>
            <p>Clouds {data.hourly ?<small>{data.hourly.cloudcover_mid[10]} </small>:null }% </p>
            <p>Humidity {data.hourly ?<small>{data.hourly.relativehumidity_2m[10]} </small>:null }% </p>
            <p>Wind {data.hourly ?<small>{data.hourly.windspeed_120m[10]} </small>:null }km/h </p>
            </div>

            <div>
            <h5>Time {data.hourly? <small>{data.hourly.time[11]} </small>:null } </h5>
            <p>Temperature {data.hourly ?<small>{data.hourly.temperature_2m[11]} </small>:null }°C </p>
            <p>Clouds {data.hourly ?<small>{data.hourly.cloudcover_mid[11]} </small>:null }% </p>
            <p>Humidity {data.hourly ?<small>{data.hourly.relativehumidity_2m[11]} </small>:null }% </p>
            <p>Wind {data.hourly ?<small>{data.hourly.windspeed_120m[11]} </small>:null }km/h </p>
            </div>

      </div>


      <div className='one'>
              
            <div>
              <h5>Time {data.hourly? <small>{data.hourly.time[12]} </small>:null } </h5>
              <p>Temperature {data.hourly ?<small>{data.hourly.temperature_2m[12]} </small>:null }°C </p>
              <p>Clouds {data.hourly ?<small>{data.hourly.cloudcover_mid[12]} </small>:null }% </p>
              <p>Humidity {data.hourly ?<small>{data.hourly.relativehumidity_2m[12]} </small>:null }% </p>
              <p>Wind {data.hourly ?<small>{data.hourly.windspeed_120m[12]} </small>:null }km/h </p>
              </div>

              <div>
            <h5>Time {data.hourly? <small>{data.hourly.time[13]} </small>:null } </h5>
              <p>Temperature {data.hourly ?<small>{data.hourly.temperature_2m[13]} </small>:null }°C </p>
              <p>Clouds {data.hourly ?<small>{data.hourly.cloudcover_mid[13]} </small>:null }% </p>
              <p>Humidity {data.hourly ?<small>{data.hourly.relativehumidity_2m[13]} </small>:null }% </p>
              <p>Wind {data.hourly ?<small>{data.hourly.windspeed_120m[13]} </small>:null }km/h </p>
              </div>

              <div>
              <h5>Time {data.hourly? <small>{data.hourly.time[14]} </small>:null } </h5>
              <p>Temperature {data.hourly ?<small>{data.hourly.temperature_2m[14]} </small>:null }°C </p>
              <p>Clouds {data.hourly ?<small>{data.hourly.cloudcover_mid[14]} </small>:null }% </p>
              <p>Humidity {data.hourly ?<small>{data.hourly.relativehumidity_2m[14]} </small>:null }% </p>
              <p>Wind {data.hourly ?<small>{data.hourly.windspeed_120m[14]} </small>:null }km/h </p>
              </div>
      </div>


      <div className='two'>
          <div>
            <h5>Time {data.hourly? <small>{data.hourly.time[15]} </small>:null } </h5>
            <p>Temperature {data.hourly ?<small>{data.hourly.temperature_2m[15]} </small>:null }°C </p>
            <p>Clouds {data.hourly ?<small>{data.hourly.cloudcover_mid[15]} </small>:null }% </p>
            <p>Humidity {data.hourly ?<small>{data.hourly.relativehumidity_2m[15]} </small>:null }% </p>
            <p>Wind {data.hourly ?<small>{data.hourly.windspeed_120m[15]} </small>:null }km/h </p>
            </div>

            <div>
            <h5>Time {data.hourly? <small>{data.hourly.time[16]} </small>:null } </h5>
            <p>Temperature {data.hourly ?<small>{data.hourly.temperature_2m[16]} </small>:null }°C </p>
            <p>Clouds {data.hourly ?<small>{data.hourly.cloudcover_mid[16]} </small>:null }% </p>
            <p>Humidity {data.hourly ?<small>{data.hourly.relativehumidity_2m[16]} </small>:null }% </p>
            <p>Wind {data.hourly ?<small>{data.hourly.windspeed_120m[16]} </small>:null }km/h </p>
            </div>

            <div>
            <h5>Time {data.hourly? <small>{data.hourly.time[17]} </small>:null } </h5>
            <p>Temperature {data.hourly ?<small>{data.hourly.temperature_2m[17]} </small>:null }°C </p>
            <p>Clouds {data.hourly ?<small>{data.hourly.cloudcover_mid[17]} </small>:null }% </p>
            <p>Humidity {data.hourly ?<small>{data.hourly.relativehumidity_2m[17]} </small>:null }% </p>
            <p>Wind {data.hourly ?<small>{data.hourly.windspeed_120m[17]} </small>:null }km/h </p>
            </div>
      </div>
      <div className='weather'>

      <div>
      <h5>Time {data.hourly? <small>{data.hourly.time[18]} </small>:null } </h5>
      <p>Temperature {data.hourly ?<small>{data.hourly.temperature_2m[18]} </small>:null }°C </p>
      <p>Clouds {data.hourly ?<small>{data.hourly.cloudcover_mid[18]} </small>:null }% </p>
      <p>Humidity {data.hourly ?<small>{data.hourly.relativehumidity_2m[18]} </small>:null }% </p>
      <p>Wind {data.hourly ?<small>{data.hourly.windspeed_120m[18]} </small>:null }km/h </p>
      </div>
    </div>
    
     
    </div>
         
</>

  )

}


export default App;
