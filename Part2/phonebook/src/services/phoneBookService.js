import axios from "axios";
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  return axios.get(baseUrl).then(res => res.data)
}

const createContact = person =>{
  const request = axios.post(baseUrl, person)
  return request.then(res=>  res.data)
}

const deleteContact = (person, persons) =>{
  return axios.delete(`${baseUrl}/${person.id}`, persons)
  .then(res=> res)
}
const updateContact = (id, persons) =>{
  return axios.put(`${baseUrl}/${id}`, persons)
  .then(res=> res)
}

export default {  getAll, createContact, deleteContact, updateContact  }
