import { SET_MODAL } from '../actions/modals';

const initialState = {
  modal: false,
  element: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MODAL:
      return {
        ...state,
        modal: action.value,
        element: action.element,
      };

    default:
      return state;
  }
};

export default reducer;
