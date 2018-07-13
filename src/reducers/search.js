import { handleActions } from 'redux-actions';
import { searchRequest, searchSuccess, searchFailure } from 'actions/search';
import { combineReducers } from 'redux';

const isLoading = handleActions(
  {
    [searchRequest.toString()]: () => true,
    [searchSuccess.toString()]: () => false,
    [searchFailure.toString()]: () => false
  },
  false
);

const serials = handleActions(
  {
    [searchSuccess.toString()]: (state, action) => action.payload
  },
  []
);

const error = handleActions(
  {
    [searchFailure.toString()]: (state, action) => action.payload
  },
  null
);

export default combineReducers({
  isLoading,
  serials,
  error
});
