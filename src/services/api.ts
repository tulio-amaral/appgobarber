import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.241.225:3333',
});

export default api;
