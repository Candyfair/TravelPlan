import { CHANGE_TITLE, SET_MODAL } from '../actions/modals';

const initialState = {
  modal: false,
  element: '',
  title: 'Add a new step to your trip',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MODAL:
      return {
        ...state,
        modal: action.value,
        element: action.element,
      };

    case CHANGE_TITLE:
      return {
        ...state,
        title: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
