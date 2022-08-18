export const SET_ICON = 'SET_ICON';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const ADD_TRIP = 'ADD_TRIP';

export const setIcon = (value) => ({
  type: SET_ICON,
  value,
});

export const changeValue = (key, value) => ({
  type: CHANGE_VALUE,
  key,
  value,
});

// Send form to API (new trip)
export const addTrip = () => ({
  type: ADD_TRIP,
});
