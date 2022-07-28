import { SET_ICON } from '../actions/create';

const initialState = {
  icon: 'suspension',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ICON:
      return {
        ...state,
        icon: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
