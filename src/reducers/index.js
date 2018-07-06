import { combineReducers } from 'redux';
import search from './search';
import shows from './shows';

export default combineReducers({
  search,
  shows
});
