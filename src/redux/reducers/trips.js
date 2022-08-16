import { FETCH_TRIPS, RECEIVED_TRIPS } from '../actions/trips';

const initialState = {
  loading: false,
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_TRIPS:
      return {
        ...state,
        loading: true,
      };

    case RECEIVED_TRIPS:
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
