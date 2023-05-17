import React from 'react'

export const Statistics = ({good, neutral, bad, all}) => {

  const average = () => {
    return good + (neutral * 0) + (bad * -1)    
  }

  const positivePercent = () => {
    return good * 100 / all
  }

  return (
   <>
    {all === 0 ? <p>No feedback given</p> 
    :
    <table>
      <tr>
        <th>Statistics</th>
      </tr>
      <tr><td>Good:{good}</td></tr>
      <tr><td>Neutral:{neutral}</td></tr>  
      <tr><td>Bad:{bad}</td></tr>  
      <tr><td>All:{all}</td></tr>  
      <tr><td>Average:{average()}</td></tr>  
      <tr><td>Positive:{positivePercent()}%</td></tr>  
    </table>
    }
   </>
  )
}
