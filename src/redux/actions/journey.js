export const SET_JOURNEY = 'SET_JOURNEY';
export const SET_DESTINATION = 'SET_DESTINATION';

export const setJourney = (value) => ({
  type: SET_JOURNEY,
  value,
});

export const setDestination = (value) => ({
  type: SET_DESTINATION,
  value,
});
