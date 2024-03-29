import { combineReducers } from 'redux';
import steps from './steps';
import create from './create';
import trips from './trips';
import users from './users';
import modals from './modals';
import time from './time';
import types from './types';

export default combineReducers({
  steps,
  create,
  trips,
  users,
  modals,
  time,
  types,
});
