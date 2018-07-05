import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  getSearchRequest,
  getSuccessSearchRequest,
  getFailureSearchRequest
} from '../actions/search.js';

const isFetching = handleActions(
  {
    [getSearchRequest.toString()]: () => true,
    [getSuccessSearchRequest.toString()]: () => false,
    [getFailureSearchRequest.toString()]: () => false
  },
  false
);

const result = handleActions(
  {
    [getSuccessSearchRequest.toString()]: (_state, action) => action.payload
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
