import { config } from 'dotenv'
import axios from 'axios'
import { token_path } from './routes.js'

config();

const { BASE_URL } = process.env;

export const login = async ({email, password}) => {
  const { data } = await axios.get(`${BASE_URL}${token_path}`, {
    email,
    password,
  })
  return data
};