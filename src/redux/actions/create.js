export const SET_ICON = 'SET_ICON';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const ADD_TRIP = 'ADD_TRIP';
export const ADD_STEP = 'ADD_STEP';

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

// Send form to API (new step)
export const addStep = () => ({
  type: ADD_STEP,
});
