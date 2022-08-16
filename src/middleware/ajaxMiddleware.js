import axios from 'axios';
import { FETCH_TRIPS, receivedTrips } from '../redux/actions/trips';

const baseURL = process.env.REACT_APP_BASE_URL;
console.log(`baseURL: ${baseURL}`);

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_TRIPS:
      next(action);

      axios({
        url: `${baseURL}/trips`,
        method: 'get',
      })
        .then((res) => {
          const tripsAction = receivedTrips(res.data);
          store.dispatch(tripsAction);
        })
        .catch((err) => {
          console.log(err);
        });
      break;

    default:
      next(action);
  }
};
