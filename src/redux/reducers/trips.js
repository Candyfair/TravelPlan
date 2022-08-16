import { FETCH_TRIPS, RECEIVED_STEPS, RECEIVED_TRIP, RECEIVED_TRIPS } from '../actions/trips';

export const initialState = {
  loading: false,
  list: [],
  selectedTrip: [],
  selectedSteps: [],
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
      };

    case RECEIVED_STEPS:
      return {
        ...state,
        selectedSteps: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
