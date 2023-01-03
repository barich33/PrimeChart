import axios from 'axios';
const API_URL='https://60520252fb49dc00175b74f7.mockapi.io';
export const client = axios.create({
  baseURL: API_URL,
});
