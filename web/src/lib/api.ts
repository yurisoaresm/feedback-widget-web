import axios from 'axios'

// Connection to our server
export const api = axios.create({
  baseURL: 'http://localhost:3333',
})
