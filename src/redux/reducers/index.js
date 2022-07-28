import { combineReducers } from 'redux';
import journey from './journey';
import create from './create';

export default combineReducers({
  journey,
  create,
});
