import axios from 'axios';

const axiosServices = axios.create({
  baseURL:process.env.URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosServices;