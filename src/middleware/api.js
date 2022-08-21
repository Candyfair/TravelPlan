import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    // eslint-disable-next-line quote-props
    'Accept': 'application/json',
  },
});

export default instance;
