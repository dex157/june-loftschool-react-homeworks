import { combineReducers } from 'redux';
import search from './search';
import shows from './show';

export default combineReducers({
  search,
  shows
});
