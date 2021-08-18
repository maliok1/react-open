import React from 'react'

const StatisticLine = ({text, value}) =>{
  return(
    <table>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{value}</td>
          </tr>
        </tbody>
      </table>
  )  
}


const Statistics = ({good, neutral, bad}) => {
  let total = good + neutral +bad ;
  
    return( 
      total > 0 ?
      <div>
        <h3>Statistics</h3>
        <StatisticLine text="Good" value = {good} />
        <StatisticLine text="Neutral" value = {neutral} />
        <StatisticLine text="Bad" value = {bad} />
        <StatisticLine text="All" value = {good + neutral + bad } />
        <StatisticLine text="Average" value = {total ? (good - bad) / total : 0 } />
        <StatisticLine text="Positive" value =  { total ? (good * 100) / total + '%' : 0 + '%'}   />
      </div>  :  (<h5> No feedback given </h5>)
    )
}

export default Statistics;