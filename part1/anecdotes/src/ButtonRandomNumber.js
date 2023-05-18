import React from 'react'

const ButtonRandomNumber = ({setSelected}) => {


const randomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 7)
  return setSelected(randomNumber)
}

  return (
    <span>
      <button onClick={randomNumber}>Next anecdote</button>
    </span>
  )
}

export default ButtonRandomNumber