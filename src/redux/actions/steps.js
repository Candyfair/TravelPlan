export const SET_STEP = 'SET_JOURNEY';
export const SET_DESTINATION = 'SET_DESTINATION';

export const setStep = (value) => ({
  type: SET_STEP,
  value,
});

export const setDestination = (value) => ({
  type: SET_DESTINATION,
  value,
});
