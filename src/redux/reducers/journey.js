import { SET_DESTINATION, SET_JOURNEY } from '../actions/journey';

const initialState = {
  isSelected: false,
  destination: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_JOURNEY:
      return {
        ...state,
        isSelected: action.value,
      };

    case SET_DESTINATION:
      return {
        ...state,
        destination: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
