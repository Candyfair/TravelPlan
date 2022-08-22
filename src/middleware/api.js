import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://itinerary-publisher-backend.herokuapp.com',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    // eslint-disable-next-line quote-props
    'Accept': 'application/json',
  },
});

export default instance;
