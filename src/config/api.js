import axios from 'axios'

const axiosServer = axios.create({
  baseURL: 'http://35.197.153.118'
})

export default axiosServer
