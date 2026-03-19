import axios from "axios";

const url = "http://localhost:3001/persons";

const getAll = () => axios.get(url).then((response) => response.data);

const createObj = (personObj) =>
  axios.post(url, personObj).then((response) => response.data);

const deleteObj = (id) => axios.delete(`${url}/${id}`);

const updateObj = (id, newObj) =>
  axios.put(`${url}/${id}`, newObj).then((response) => response.data);

export default { getAll, createObj, deleteObj, updateObj };
