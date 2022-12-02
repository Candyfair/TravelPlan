import {
  FETCH_TRIPS, RECEIVED_TRIP, RECEIVED_TRIPS, REORDER_STEPS, SET_LOADING,
} from '../actions/trips';

export const initialState = {
  loading: false,
  list: [],
  selectedTrip: [],
  stepsOrder: [],
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

    case REORDER_STEPS:
      return {
        ...state,
        stepsOrder: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
