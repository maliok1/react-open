import React, { useState, useEffect } from 'react';
import axios from "axios";

const Display = ({ country })=>{

  const [ weather, setWeather ] = useState([])

  useEffect(()=> {
    axios.get(`http://api.weatherstack.com/current?access_key=44ac8ea0646fdcf6e8b130b08599c1d8&query=${country.name}`).then(
      res => { 
        setWeather(res.data.current)
         }
    )
  }, [country.name])
  

  return(
    <div>
        <h1> {country.name}</h1>
        <h4> Capital: {country.capital}</h4>
        <h4> Population: {country.population}</h4>
        <h2>Spoken languages:</h2>
        <ul>
         { country.languages.map(lang => <li key={country.alpha3Code}>{lang.name}</li>)}
        </ul>
        <img src={country.flag} alt= {`flag of ${country.name}`} />

        <h2>Weather in {country.name}</h2>
        <h4>Temperature: {  weather.temperature }</h4>
        <img src={weather.weather_icons ? weather.weather_icons[0]: ''} alt={weather.weather_descriptions} />
        <h4>Wind: { `${weather.wind_speed} mph ${weather.wind_dir}` }</h4>
      </div>
  )
  
}

export default Display;