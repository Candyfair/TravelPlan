export const SET_ICON = 'SET_ICON';

export const setIcon = (value) => ({
  type: SET_ICON,
  value,
});

export const CHANGE_VALUE = 'CHANGE_VALUE';

export const changeValue = (key, value) => ({
  type: CHANGE_VALUE,
  key,
  value,
});
