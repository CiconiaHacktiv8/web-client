import axios from 'axios'

const axiosServer = axios.create({
  baseURL: 'https://ciconiaserver.amilhasbala.com'
  // baseURL: 'http://35.197.153.118'
})

export default axiosServer
