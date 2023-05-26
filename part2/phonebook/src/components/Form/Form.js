import React from 'react'

const Form = ({newName, setNewName, newNumber, setNewNumber, handleFormSubmit, togglePersons, persons}) => {

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
          number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
          <button onClick={() => togglePersons(persons.find(p => p.id))}>Change Number</button>
        </div>
      </form>
    </div>
  )
}

export default Form