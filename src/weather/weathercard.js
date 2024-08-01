import './weathercard.css'
import React, { useEffect, useState } from 'react'
const Weathercard = ({tempinfo}) => {
     const[weatherstate,setweatherstate]=useState(" ")
const{
     temp,
     humidity,
     pressure,
     weathermood,
     name,
     speed,
     country,
     sunset
}= tempinfo;

useEffect(() => {
  if (weathermood) {
     switch (weathermood) {
          case "Clouds":setweatherstate("☁")
               break;

               case "Haze":setweatherstate("🌦")
               break;

               case "Clear":setweatherstate("🌞")
               break;
     
               case "Rain":setweatherstate("🌨")
               break;
          default:
               setweatherstate("🌞")
               break;
     }
  }


}, [weathermood])


//converting the second into time
let sec=sunset;
let date=new Date(sec*1000);
let timstr= `${date.getHours()}: ${date.getMinutes()}`

  return (
    <div className='contain'>
     <article  className='widget'>
     <div className='weathericon'>
          🔆
            <span  className='iconhu'>{weatherstate}</span>
     </div>

     <div weatherinfo>
          <div className='temperature'>
               <span >{temp}&deg;</span>
          </div>

          <div className='description'>
               <div weathercondirion>
                    {weathermood}
               </div>
               <div className='place'>{name}, {country}</div>
          </div>
     </div>

     <div className='date'>{new Date().toLocaleString()}</div>
<div className='extra-temp'>
     <div className='twe-sided-section'>
          <p>
               🌞
          </p>
          <p className='extra-info-leftside'>
             {timstr} pm <br></br>
               sunset
          </p>
     </div>

     <div className='twe-sided-section'>
          <p>
          🌫️
          </p>
          <p className='extra-info-leftside'>
               {humidity}<br></br>
               humidity
          </p>
     </div>

     <div className='weather-extra-info'>
     <div className='twe-sided-section'>
          <p>
          🌧
          </p>
          <p className='extra-info-leftside'>
               {pressure}pm <br></br>
               pressure
          </p>
     </div>

     <div className='twe-sided-section'>
          <p>
          💨
          </p>
          <p className='extra-info-leftside'>
               {speed} <br></br>
               speed
          </p>
     </div>
     </div>
</div>

</article>
    </div>
  )
}

export default Weathercard