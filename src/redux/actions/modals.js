export const SET_MODAL = 'SET_MODAL';
export const CHANGE_TITLE = 'CHANGE_TITLE';

export const setModal = (value, element) => ({
  type: SET_MODAL,
  value,
  element,
});

export const changeTitle = (value) => ({
  type: CHANGE_TITLE,
  value,
});
