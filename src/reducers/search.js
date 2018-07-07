import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { searchRequest, searchSuccess, searchFailure } from '../actions/search';

const result = handleActions(
  {
    [searchSuccess]: (_state, action) => [...action.payload]
  },
  []
);

const isFetching = handleActions(
  {
    [searchRequest]: () => true,
    [searchSuccess]: () => false,
    [searchFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [searchRequest]: () => null,
    [searchSuccess]: () => null,
    [searchFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  result,
  isFetching,
  error
});
