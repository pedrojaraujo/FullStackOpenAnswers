import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  return axios.get(baseUrl)
  .then(r => r.data)
}

const create = (newPerson) => {
  return axios.post(baseUrl, newPerson)
  .then(r => r.data)
}

const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

const togglePerson = (id, updatedData) => {
  const request = axios.put(`${baseUrl}/${id}`, updatedData)
  return request.then(response => response.data)
}


export default {getAll, create, deletePerson, togglePerson}