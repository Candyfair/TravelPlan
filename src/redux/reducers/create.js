import { CHANGE_VALUE, SET_ICON } from '../actions/create';

const initialState = {
  id: '', // Add trip
  tripName: '',
  slug: '',
  user: '',
  position: '',
  icon: 'suspension', // Add step
  stepPosition: '',
  travelName: '',
  startDate: '',
  endDate: '',
  startTime: '',
  endTime: '',
  departurePoint: '',
  arrivalPoint: '',
  details: '',
  stepType: '',
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
