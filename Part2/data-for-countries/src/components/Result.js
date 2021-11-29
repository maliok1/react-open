import Display from "./Display"; 

import {  useState, useEffect } from 'react';

const Result = ({ countries, search })=>{

  const [selectedCountry, setSelectedCountry] = useState()
  const [selectToggle, setSelectToggle] = useState(false)
  
  useEffect(()=>{
    setSelectToggle(false)
  },[search])

  let results = countries.filter(country =>
    country.name.toLowerCase().startsWith(search))

  let selectCountry = (country) => {
     setSelectToggle(true)
     setSelectedCountry( country )
  }

  if(results.length > 10){
    return  <p>Too many matches, spesify another filer</p>
  } else if (results.length === 1) {
    return (
    <Display country={results[0]}/>
    )
  } else  { 

     return ( 
       <>
       { 
        !selectToggle ?
         <ul>
            {results.map(country =>  { 
              return (
                <li key={country.alpha3Code}>
                  {country.name}
                  <button onClick={()=>selectCountry(country)}>Show</button>
                </li> 
              )
            }  )}
          </ul>
          :  <Display country={selectedCountry}/>
       }

          {/* {selectedCountry ? :' Select a country' } */}
        </>
        ) 
  } 


}

export default Result;