import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  searchRequest,
  searchSuccess,
  searchFailure
} from '../actions/search.js';

const loadingState = handleActions(
  {
    [searchRequest]: () => 'LOADING',
    [searchSuccess]: () => 'SUCCESS',
    [searchFailure]: () => 'FAILURE'
  },
  'IDLE'
);

const result = handleActions(
  {
    [searchSuccess]: (state, action) => {
      console.log(state, action);
      return action.payload;
    }
  },
  []
);

export default combineReducers({
  result,
  loadingState
});
