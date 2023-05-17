import React from 'react'

export const Button = ({setGood, setNeutral, setBad}) => {

  const handleGoodClick = () => {
    setGood((e) => e + 1)
  }

  const handleNeutralClick = () => {
    setNeutral((e) => e + 1)
  }

  const handleBadClick = () => {
    setBad((e) => e + 1)
  }
  return (
    <span>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
    </span>
  )
}
