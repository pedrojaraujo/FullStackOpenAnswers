import { useState } from 'react'
import { Statistics } from './Statistics'
import { Button } from './Button'


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad 
  
  return (
    <div>
      <h1>Give feedback</h1>
      <Button setGood={setGood} setNeutral={setNeutral} setBad={setBad} />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App