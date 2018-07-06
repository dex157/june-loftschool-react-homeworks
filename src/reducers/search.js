import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { searchRequest, searchSuccess, searchFailure } from '../actions/search';

const isFetching = handleActions(
  {
    [searchRequest.toString()]: () => true,
    [searchSuccess.toString()]: () => false,
    [searchFailure.toString()]: () => false
  },
  false
);

const serials = handleActions(
  {
    [searchSuccess.toString()]: (_state, action) => action.payload
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
  serials,
  error
});
