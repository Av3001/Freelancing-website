import axios from 'axios';

const axiosServices = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosServices;