import personsService from '../services/persons'

const handlePersons = (e, persons, newName, newNumber, setPersons, setNewName, setNewNumber) => {
  e.preventDefault()
  const existName = persons.find(person => person.name === newName)
  const existNumber = persons.find(person => person.number === newNumber)

  


  if(newName === '' || newNumber === '') {
    return alert('Do you forgot something!')
  } else if (existName || existNumber) {

    const confirmed = window.confirm(`${newName} already exists. Do you want to update it?`)

    if (confirmed) {
      const personUpdate = {
        name: newName,
        number:newNumber,
      }
  
      personsService
      .togglePerson(existName.id, personUpdate)
      .then(r => {
        setPersons(persons.map(p => p.id === existName.id ? r : p))
    })
  }
    
  } else {
    const newPerson = {
      name: newName,
      number: newNumber,
    }
    personsService
    .create(newPerson)
    .then(r => {
      setPersons(persons.concat(r))
    })
  }
  setNewName('')
  setNewNumber('')
  
}

export default handlePersons
