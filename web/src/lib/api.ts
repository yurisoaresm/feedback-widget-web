import axios from 'axios'

// Connection to our server
//
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})
