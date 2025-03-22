import axios from 'axios'
import { createHash } from '../utils'

export const apiInstance = axios.create({
  baseURL: 'http://localhost:4040',
})

apiInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken') || ''
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  const HASH_SECRET =
    '1TJwJDCxVP+FoHtbPZYW73MFfTeErO+Fp9icWQfidpzhkAufP1oJybXVeilbDZx/CvFMCLPsdP0fJ/YI65wQSA=='
  const timestamp = Date.now()
  const body = config.data || {}
  const str = JSON.stringify(body) + HASH_SECRET + timestamp + accessToken

  config.headers['x-access-hash'] = createHash(str)
  config.headers['x-access-ts'] = timestamp
  return config
})
