import axios from 'axios'

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  baseUrlUser: 'https://todo-app-vqdy.onrender.com',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

export default apiClient;
