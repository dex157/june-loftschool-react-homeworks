import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  getSearchRequest,
  getSearchSuccess,
  getSearchFailure
} from './searchActions';

const isFetching = handleActions(
  {
    [getSearchRequest.toString()]: () => true,
    [getSearchFailure.toString()]: () => false,
    [getSearchSuccess.toString()]: () => false
  },
  false
);

const result = handleActions(
  {
    [getSearchSuccess.toString()]: (_state, action) => action.payload
  },
  []
);

const error = handleActions(
  {
    [getSearchFailure.toString()]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  isFetching,
  result,
  error
});
