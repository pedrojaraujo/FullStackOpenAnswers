import React, { useState, useEffect } from 'react';
import List from '../List/List';
import Form from '../Form/Form';
import handlePersons from '../../utils/handlePersons';
import personsService from '../../services/persons';

const Content = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  useEffect(() => {
    personsService
      .getAll()
      .then(response => setPersons(response));
  }, [persons]);

  const handleFormSubmit = (e) => {
    handlePersons(e, persons, newName, newNumber, setPersons, setNewName, setNewNumber);
  };

  const removePersons = (id) => {
    personsService
    .deletePerson(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
        console.log('terminei')
      })
      .catch(error => {
        console.error('Erro ao excluir pessoa:', error)
      })
  }

  const togglePersons = (id) => {
    const person = persons.find(n => n.name === newName)

    if (person) {
      const changedPerson = {...person, number:newNumber}
    
    
      const confirmed = window.confirm(`${newNumber} is already added to phonebook, replace the old number with a new one?`)
    
      if (confirmed) {
        personsService
        .togglePerson(id, changedPerson)
        .then(r => {
         setPersons(persons.map(p => p.id !== id ? p : r))
        })
      }
    
    }
  }

  return (
    <>
      <Form
        persons={persons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        handleFormSubmit={handleFormSubmit}
        togglePersons={togglePersons}
      />
        
      <List 
      persons={persons}
      removePersons={removePersons}
      togglePersons={togglePersons}
      />
    </>
  );
};

export default Content;
