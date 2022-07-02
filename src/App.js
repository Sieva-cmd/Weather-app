import React from 'react';
import './App.css';
import {useState} from 'react'

function App() {

// const url = "https://api.open-meteo.com/v1/forecast?latitude=-1.2762&longitude=36.7965&hourly=temperature_2m,relativehumidity_2m,cloudcover_mid,windspeed_120m&current_weather=true"

    return (

       <>
       <div className='search'>
        <input type='text' placeholder='search by Name' />
       </div>
       <div className='app'>
        <h1> Nairobi</h1>
        <h2>22°</h2>
       </div>
       
       <div className='elements'>
        <div><i className="fa-solid fa-temperature-snow">Temp</i> </div>
        <div> <p>  <i className="fa-solid fa-wind">Wind</i></p></div>
        <div> <p> <i className="fa-solid fa-clouds">Cloud cover</i></p></div>
        <div> <p> <i className="fa-solid fa-droplet-degree">Humid</i></p></div>
        
       </div>

       <div className='hours'>
        <div><p>6:00 am</p></div>
        <div><p>7:00 am</p></div>
        <div><p>8:00 am</p></div>
        <div><p>9:00 am</p></div>
         <div><p>10:00 am</p></div>
         <div><p>11:00 am</p></div>
         <div><p> 12:00 noon</p></div>
         <div><p>13:00 pm</p></div>
         <div><p>14:00 pm</p></div>
         <div><p>15:00 pm</p></div>
         <div><p>1600: pm</p></div>
         <div><p>17:00 pm</p></div>
         <div><p>18:00 pm</p></div>
       </div>
       
       </>
    );
}

export default App;