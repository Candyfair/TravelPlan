import { FETCH_USERS_TRIPS, RECEIVED_USERS_TRIPS } from '../actions/users';

export const initialState = {
  loading: false,
  usersList: [],
  user: 1,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_USERS_TRIPS:
      return {
        ...state,
        loading: true,
      };

    case RECEIVED_USERS_TRIPS:
      return {
        ...state,
        usersList: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
