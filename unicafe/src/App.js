import React, { useState } from 'react';
import Statistics from './Statistics';


const Button = ({ handleClickGood, handleClickNeutral, handleClickBad }) => {
  return(
    <div>
      <button onClick={ handleClickGood }> Good </button> 
      <button onClick={ handleClickNeutral }> Neutral </button>
      <button onClick={ handleClickBad }> Bad </button>
    </div>
  )
  
}
const App = () => {
  // // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let handleClickGood = () => {
    setGood(good + 1)
  }

  let handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }

  let handleClickBad= () => {
    setBad(bad + 1)
  }

  return (
    <div>
     <h3> Give feedback </h3>
     <Button handleClickGood={ handleClickGood } handleClickNeutral={ handleClickNeutral }  handleClickBad={ handleClickBad } />
     <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App