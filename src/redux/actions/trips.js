export const FETCH_TRIPS = 'FETCH_TRIPS';
export const RECEIVED_TRIPS = 'RECEIVED_TRIPS';
export const RECEIVED_TRIP = 'RECEIVED_TRIP';
export const SET_LOADING = 'SET_LOADING';

export const fetchTrips = () => ({
  type: FETCH_TRIPS,
});

export const receivedTrips = (payload) => ({
  type: RECEIVED_TRIPS,
  payload,
});

export const receivedTrip = (payload) => ({
  type: RECEIVED_TRIP,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});
