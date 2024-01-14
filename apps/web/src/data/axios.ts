import axios from 'axios'

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_DATABASE,
})

export { client }
