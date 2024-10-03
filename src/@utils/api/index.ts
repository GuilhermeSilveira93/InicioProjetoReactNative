import axios from 'axios'
export const api = axios.create({
  baseURL: 'https://secure.softrack.com.br/',
  proxy: {
    protocol: 'https://',
    host: 'secure.softrack.com.br',
    port: 443,
  },
  httpsAgent: false,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

/* export const dbL = axios.create({
  baseURL: 'https://secure.softrack.com.br',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
}) */
