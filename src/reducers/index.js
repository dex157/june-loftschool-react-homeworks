import { combineReducers } from 'redux';
import search from 'components/Search/searchReducer';
import shows from 'components/ShowPage/pageReducer';

export default combineReducers({
  search,
  shows
});
