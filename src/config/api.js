import axios from 'axios'

const axiosServer = axios.create({
  // baseURL: 'https://ciconiaserver.amilhasbala.com' // NO SOCKET
  // baseURL: 'http://35.197.153.118' // HTTP
  baseURL: 'http://35.192.115.213'
})

export default axiosServer
