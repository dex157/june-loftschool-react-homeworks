import { combineReducers } from 'redux';
import search from './search';
import show from './show';

export default combineReducers({
  search,
  show
});
