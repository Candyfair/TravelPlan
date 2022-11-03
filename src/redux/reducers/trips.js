import {
  FETCH_TRIPS, RECEIVED_TRIP, RECEIVED_TRIPS, SET_LOADING,
} from '../actions/trips';

export const initialState = {
  loading: false,
  list: [],
  selectedTrip: [],
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
        loading: false,
      };

    case RECEIVED_TRIP:
      return {
        ...state,
        selectedTrip: action.payload,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
