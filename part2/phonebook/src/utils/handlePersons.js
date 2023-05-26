import personsService from '../services/persons'

const handlePersons = (e, persons, newName, newNumber, setPersons, setNewName, setNewNumber) => {
  e.preventDefault()
  const existName = persons.find(person => person.name === newName)
  const existNumber = persons.find(person => person.number === newNumber)

  


  if(newName === '' || newNumber === '') {
    return alert('Do you forgot something')
  } else if (existName && existNumber ) {
    return alert(`${newName} is already exist`)
  } else if (existNumber) {
    return alert(`${newNumber} is already exist`)
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
  
};

export default handlePersons
