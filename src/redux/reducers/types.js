import { FETCH_TYPES, RECEIVED_TYPES } from '../actions/types';

const initialState = {
  loading: false,
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_TYPES:
      return {
        ...state,
        loading: true,
      };

    case RECEIVED_TYPES:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
