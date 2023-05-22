import React from 'react'

const Form = ({newName, setNewName, newNumber, setNewNumber, handlePersons}) => {

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handlePersons}>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
          number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default Form