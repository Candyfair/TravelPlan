export const FETCH_USERS_TRIPS = 'FETCH_USERS_TRIPS';
export const RECEIVED_USERS_TRIPS = 'RECEIVED_USERS_TRIPS';

export const fetchUsersTrips = () => ({
  type: FETCH_USERS_TRIPS,
});

export const receivedUsersTrips = (payload) => ({
  type: RECEIVED_USERS_TRIPS,
  payload,
});
