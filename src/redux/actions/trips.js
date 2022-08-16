export const FETCH_TRIPS = 'FETCH_TRIPS';
export const RECEIVED_TRIPS = 'RECEIVED_TRIPS';

export const fetchTrips = () => ({
  type: FETCH_TRIPS,
});

export const receivedTrips = (payload) => ({
  type: RECEIVED_TRIPS,
  payload,
});
