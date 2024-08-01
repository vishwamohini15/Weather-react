import { useEffect, useState } from 'react';
import './temp.css'
import Weathercard from './weathercard';

function Tempurature(){

const [searchvalue, setsearchvalue]=useState("pune");

const[tempinfo, settempinfo]=useState({})

const getweatherinfo=async()=>{
 try {
     let url=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=5c1f34a665cbfd460c61e999438df82d`);

     const data=await url.json();
     console.log(data);
     const {temp, humidity, pressure}=data.main;
     const{main:weathermood}=data.weather[0].main
     const{name}=data;
     const{speed}=data.wind;
     const{country, sunset}=data.sys


     const mynewweatherinfo={
          temp,
          humidity,
          pressure,
          weathermood,
          name,
          speed,
          country,
          sunset
     }
settempinfo(mynewweatherinfo)
     // console.log(temp);
 } catch (error) {
     console.log(error);
 }
}

useEffect(()=>{
     getweatherinfo()
}, [])

     return(
<>
<div className="wrap">
<div className="search">
<input type='search' 
placeholder='search...'
autoFocus
id='search'
className='searchterm'

value={searchvalue}
onChange={(e)=>setsearchvalue(e.target.value)
}
></input>

<button  onClick={getweatherinfo} className='searchbutton' type='button'>search</button>
</div>

</div>

<Weathercard  tempinfo={tempinfo}></Weathercard>
</>
     )
}

export default Tempurature;