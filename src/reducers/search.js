import { handleActions } from 'redux-actions';
import { searchRequest, searchSuccess, searchFailure } from '../actions/search';
import { combineReducers } from 'redux';

const isFetching = handleActions(
  {
    [searchRequest.toString()]: () => true,
    [searchSuccess.toString()]: () => false,
    [searchFailure.toString()]: () => false
  },
  false
);

const result = handleActions(
  {
    [searchSuccess.toString()]: (_state, action) => [...action.payload]
  },
  []
);

const error = handleActions(
  {
    [searchFailure.toString()]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  isFetching,
  result,
  error
});
