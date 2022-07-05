
// import './App.css';
// import {useState} from 'react'
// import axios from 'axios'



// const initialValues = {
//   longitude: "",
//   latitude: "",

// };
// function App() {

// const  [data,setData] = useState({});
// const [values, setValues] = useState(initialValues);

// const handleInputChange = (e) => {
//   const { name, value } = e.target;
//   setValues({
//     ...values,
//     [name]: value,
//   });
// };


// const url = "https://api.open-meteo.com/v1/forecast?latitude={}&longitude={}&hourly=temperature_2m,relativehumidity_2m,cloudcover_mid,windspeed_120m&current_weather=true"

// const searchLocation =(event) =>{
//   if (event.key === 'enter'){
//     axios.get(url).then((response) =>{
//       setData(response.data)
//       console.log(response.data)
//     })
  

// }
// }

//     return (

//        <>
//        <div className='main'>
//        <div className='search'>
//         <form>
//         <input type='text' value={values.longitude}
//         onChange={handleInputChange}
//         name='longitude'
//         label ="longitude"
      
//         placeholder='search by Name' />
//           <input type='text' value={values.latitude}
//           onChange={handleInputChange}
//           name='latitude'
//           label ="latitude"
   
//         placeholder='search by Name' />
//         <button onSubmit={searchLocation}> Submit</button>
//         </form>
      
//        </div>
//        <div className='app'>
//         <h1> Nairobi</h1>
//         <h2>22°</h2>
//        </div>
       
//        <div className='elements'>
//         <div><i className="fa-solid fa-temperature-snow">Temp</i> </div>
//         <div> <p>  <i className="fa-solid fa-wind">Wind</i></p></div>
//         <div> <p> <i className="fa-solid fa-clouds">Cloud cover</i></p></div>
//         <div> <p> <i className="fa-solid fa-droplet-degree">Humid</i></p></div>
        
//        </div>

//        <div className='hours'>
//         <div><p>6:00 am</p></div>
//         <div><p>7:00 am</p></div>
//         <div><p>8:00 am</p></div>
//         <div><p>9:00 am</p></div>
//          <div><p>10:00 am</p></div>
//          <div><p>11:00 am</p></div>
//          <div><p> 12:00 noon</p></div>
//          <div><p>13:00 pm</p></div>
//          <div><p>14:00 pm</p></div>
//          <div><p>15:00 pm</p></div>
//          <div><p>1600: pm</p></div>
//          <div><p>17:00 pm</p></div>
//          <div><p>18:00 pm</p></div>
//        </div>
//        </div>
       
       
//        </>
//     );
// }

// export default App;

import { useState } from 'react';
import './App.css'
import React, {useEffect} from 'react';

const API_URL ="https://api.open-meteo.com/v1/forecast?latitude=-1.2762&longitude=36.625&hourly=temperature_2m,relativehumidity_2m,cloudcover,cloudcover_mid,windspeed_120m"
// const weather ={
//   latitude: '-1.125',
//   longitude: '36.625',
//   hourly_units: {
//     windspeed_120m: "km/h",
//     relativehumidity_2m: "%",
//     time: "iso8601",
//     temperature_2m: "°C",
//     cloudcover_mid: "%",
  
//     }


// }

const App =() =>{
  const [data,setData] =useState([]);
  const[searchTerm, setSearchTerm] =useState('')

  const searchWeather =async (longitude) =>{
    const response = await fetch(`${API_URL}&s={longitude}`)
    const data = await response.json();
    setData(data.search)
    console.log(data)
  }
  useEffect(() =>{
    searchWeather(36.625)
  } ,[]);


  return(
    <>
    <div className='search'>
            <form>
      
            <input type='number'
             placeholder='search by Longitude' />
              
             <button> Submit</button>
            </form>
          
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
</>

  )

}
export default App;