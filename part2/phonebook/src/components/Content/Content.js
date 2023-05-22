import React from 'react'
import { useState } from 'react'
import List from '../List/List'
import Form from '../Form/Form'
const Content = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handlePersons = (e) => {

    e.preventDefault()
    const existName = persons.find(person => person.name === newName)
    const existNumber = persons.find(person => person.number === newNumber)

    if (existName) {
      alert(`${newName} is already exist`)
    } else if (existNumber) {
      alert(`${newNumber} is already exist`)
    }
    if (!existName && !existNumber) {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons([...persons, newPerson])
    }

    setNewName("")
    setNewNumber("")
    
  };

  return (
   <>
    <Form 
    newName={newName}
    setNewName={setNewName}
    newNumber={newNumber}
    setNewNumber={setNewNumber}
    handlePersons={handlePersons} />

    <List persons={persons} />
   </>
  )
}
export default Content