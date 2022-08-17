import axios from 'axios';
import { FETCH_TRIPS, receivedTrips } from '../redux/actions/trips';
import { FETCH_USERS_TRIPS, receivedUsersTrips } from '../redux/actions/users';

const baseURL = process.env.REACT_APP_BASE_URL;

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

    case FETCH_USERS_TRIPS:
      next(action);

      axios({
        url: `${baseURL}/users`,
        method: 'get',
      })
        .then((res) => {
          const usersAction = receivedUsersTrips(res.data);
          store.dispatch(usersAction);
        })
        .catch((err) => {
          console.log(err);
        });
      break;

    default:
      next(action);
  }
};
