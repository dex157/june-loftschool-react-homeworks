import { combineReducers } from 'redux';
import search from '../ducks/search';
import shows from '../ducks/shows';

export default combineReducers({
  search,
  shows
});
