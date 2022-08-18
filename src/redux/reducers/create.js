import { CHANGE_VALUE, SET_ICON } from '../actions/create';

const initialState = {
  icon: 'suspension',
  id: '',
  tripName: '',
  slug: '',
  user: '',
  position: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ICON:
      return {
        ...state,
        icon: action.value,
      };

    case CHANGE_VALUE:
      return {
        ...state,
        [action.key]: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
