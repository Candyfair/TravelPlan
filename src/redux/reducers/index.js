import { combineReducers } from 'redux';
import journey from './journey';
import create from './create';
import trips from './trips';

export default combineReducers({
  journey,
  create,
  trips,
});
