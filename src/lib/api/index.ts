import axios from 'axios'
export const api = axios.create({
  baseURL: '',
  proxy: {
    protocol: 'https://',
    host: 'dominio.com.br',
    port: 443,
  },
  httpsAgent: false,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})
