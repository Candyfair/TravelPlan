/* eslint-disable no-case-declarations */
import api from './api';

import { ADD_TRIP, ADD_STEP, changeValue } from '../redux/actions/create';
import { FETCH_TRIPS, receivedTrips, setLoading } from '../redux/actions/trips';
import { FETCH_USERS_TRIPS, receivedUsersTrips } from '../redux/actions/users';
import { FETCH_TYPES, receivedTypes } from '../redux/actions/types';

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
            console.log('New trip added:', res.data, 'id:', res.data.id);
            store.dispatch(changeValue('id', res.data.id));
          },
        )
        .catch((err) => {
          console.log('Erreur sur la route /POST trips', err.response.data);
          store.dispatch(setLoading(false));
        });

      next(action);
      break;

    case ADD_STEP:
      const {
        id,
        stepPosition,
        travelName,
        startDate,
        endDate,
        startTime,
        endTime,
        departurePoint,
        arrivalPoint,
        details,
        stepType,
      } = store.getState().create;

      store.dispatch(setLoading(true));

      const newStep = new URLSearchParams();
      newStep.append('trip_id', id);
      newStep.append('position', stepPosition);
      newStep.append('travelName', travelName);
      newStep.append('startDate', startDate);
      newStep.append('endDate', endDate);
      newStep.append('startTime', startTime);
      newStep.append('endTime', endTime);
      newStep.append('pointDeparture', departurePoint);
      newStep.append('pointArrival', arrivalPoint);
      newStep.append('details', details);
      newStep.append('step_type', stepType);

      console.log('New step info:', newStep);

      api.post('/steps', newStep)
        .then(
          (res) => {
            console.log('New step added:', res.date, 'id:', res.data.id);
            store.dispatch(changeValue('id', res.data.id));
          },
        )
        .catch((err) => {
          console.log('Erreur sur la route /POST steps', err.response.data);
          store.dispatch(setLoading(false));
        });

      next(action);
      break;

    case FETCH_TYPES:
      next(action);

      api.get(
        '/types',
      )
        .then((res) => {
          const typesAction = receivedTypes(res.data);
          store.dispatch(typesAction);
        })
        .catch((err) => {
          console.log(err);
        });
      break;

    default:
      next(action);
  }
};
