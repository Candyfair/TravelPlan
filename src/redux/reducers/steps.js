import { SET_DESTINATION, SET_STEP } from '../actions/steps';

const initialState = {
  isSelected: false,
  destination: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_STEP:
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
