import {
  HOUR_DOWN,
  HOUR_UP,
  MINUTE_DOWN,
  MINUTE_UP,
  SET_FIELD,
  SET_TIME,
  SHOW_CALENDAR,
  SHOW_TIME_PICKER,
} from '../actions/time';

const initialState = {
  picker: false, // show time picker
  hour: 0,
  minute: 0,
  field: '',
  calendar: false, // Show calendar
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_TIME_PICKER:
      return {
        ...state,
        picker: action.value,
      };

    case SHOW_CALENDAR:
      return {
        ...state,
        calendar: action.value,
      };

    case SET_FIELD:
      return {
        ...state,
        field: action.value,
      };

    case HOUR_UP:
      return {
        ...state,
        hour: state.hour + 1,
      };

    case HOUR_DOWN:
      return {
        ...state,
        hour: state.hour - 1,
      };

    case MINUTE_UP:
      return {
        ...state,
        minute: state.minute + 1,
      };

    case MINUTE_DOWN:
      return {
        ...state,
        minute: state.minute - 1,
      };

    case SET_TIME:
      return {
        ...state,
        [action.key]: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
