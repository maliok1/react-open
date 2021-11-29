import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Search from './components/Search';
import Result from './components/Result';

function App() {
  const [ search, setSearch ] = useState([])
  const [ countries, setCountries] = useState([]); 

  useEffect(
    ()=>{
      axios.get('https://restcountries.com/v2/all')
      .then(res => {
        let foundCountries = res.data.map(country => country)
        setCountries(foundCountries)
      })
    }
    , [])


  return (
    <div className="App">
      <Search setSearch={setSearch} search={search} />
      <Result countries={countries} search={search} />
    </div>
  );
}

export default App;
