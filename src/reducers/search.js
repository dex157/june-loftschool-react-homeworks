import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  getSearchRequest,
  getSuccesshSearchRequest,
  getFailureSearchRequest
} from '../actions/search.js';

const isFetching = handleActions(
  {
    [getSearchRequest.toString()]: () => true,
    [getSuccesshSearchRequest.toString()]: () => false,
    [getFailureSearchRequest.toString()]: () => false
  },
  false
);

const result = handleActions(
  {
    [getSuccesshSearchRequest.toString()]: (_state, action) => action.payload
  },
  false
);

const error = handleActions(
  {
    [getFailureSearchRequest.toString()]: (_state, action) => action.payload
  },
  false
);

export default combineReducers({
  isFetching,
  result,
  error
});
