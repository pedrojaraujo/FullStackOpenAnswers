import React, { useState } from 'react'

const List = ({persons, removePersons}) => {

  const [findPerson, setFindPerson] = useState('')
  const [searchResult, setSearchResult] = useState('')

 

  const searchPerson = (e) => {
    e.preventDefault()

    const aPerson = persons.find((p) => p.name.includes(findPerson))

    if (aPerson) {
      return setSearchResult(<li>{aPerson.name} {aPerson.number}</li>)
    } else {
      return alert("This contact doesn't exist!")
    } 
  }

  
  return (
   <>
    <h2>Contacts of list</h2>
    <ul>
    {searchResult !== "" ? searchResult
    :
    persons.map((person) => (
      <li key={person.id}>
        <p>Name: {person.name} {person.number}</p>
        <button onClick={() => removePersons(person.id)}>Delete</button>
      </li> 
    ))
    } 
    </ul>
    <div>
      <label>Find your friend: </label>
      <input type="text" onChange={(e) => setFindPerson(e.target.value)} />
      <button onClick={searchPerson} >Search</button>
    </div>
   </>
  )
}
export default List