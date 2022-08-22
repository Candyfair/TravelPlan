import axios from 'axios';

import * as CONSTANTS from '../utils/constants';

const instance = axios.create({
  baseURL: CONSTANTS.API.baseURL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    // eslint-disable-next-line quote-props
    'Accept': 'application/json',
  },
});

export default instance;
