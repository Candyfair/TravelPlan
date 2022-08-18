/* eslint-disable no-case-declarations */
import api from './api';

import { ADD_TRIP } from '../redux/actions/create';
import { FETCH_TRIPS, receivedTrips, setLoading } from '../redux/actions/trips';
import { FETCH_USERS_TRIPS, receivedUsersTrips } from '../redux/actions/users';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_TRIPS:
      next(action);

      api.get(
        '/trips',
      )
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

      api.get(
        '/users',
      )
        .then((res) => {
          const usersAction = receivedUsersTrips(res.data);
          store.dispatch(usersAction);
        })
        .catch((err) => {
          console.log(err);
        });
      break;

    case ADD_TRIP:
      const {
        tripName, slug, user, position,
      } = store.getState().create;

      store.dispatch(setLoading(true));

      // Force conversion to form-urlencoded format (Form data by default)
      const newTrip = new URLSearchParams();
      newTrip.append('tripName', tripName);
      newTrip.append('slug', slug);
      newTrip.append('position', position);
      newTrip.append('user_id', user);

      console.log('New trip info:', newTrip);

      api.post('/trips', newTrip)
        .then(
          (res) => {
            console.log('New trip added:', res.data);
          },
        )
        .catch((err) => {
          console.log('Erreur sur la route /POST trips', err.response.data);
          store.dispatch(setLoading(false));
        });

      next(action);
      break;

    default:
      next(action);
  }
};
