import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_UR,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    // 'Content-Type': 'application/json',
    // eslint-disable-next-line quote-props
    'Accept': 'application/json',
  },
});

export default instance;
