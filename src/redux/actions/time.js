export const SET_TIME = 'SET_TIME';
export const HOUR_UP = 'HOUR_UP';
export const HOUR_DOWN = 'HOUR_DOWN';
export const MINUTE_UP = 'MINUTE_UP';
export const MINUTE_DOWN = 'MINUTE_DOWN';

export const setTime = (key, value) => ({
  type: SET_TIME,
  key,
  value,
});

export const hourUp = () => ({
  type: HOUR_UP,
});

export const hourDown = () => ({
  type: HOUR_DOWN,
});

export const minuteUp = () => ({
  type: MINUTE_UP,
});

export const minuteDown = () => ({
  type: MINUTE_DOWN,
});
