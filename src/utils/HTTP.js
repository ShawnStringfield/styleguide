import axios from 'axios'
import {moveidbBaseUrl} from '../constants'

const req = axios.create({
  baseURL: moveidbBaseUrl
})

req.interceptors.response.use(function(response) {
  return response.data.results || response.data
})

const HTTP = function(options) {
  const onSuccess = (response) => response

  const onError = function(error) {
    return Promise.reject(error.data || error.data.status_message)
  }

  return req.request(options)
    .then(onSuccess)
    .catch(onError)
}

export default HTTP
