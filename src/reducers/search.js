import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { searchRequest, searchSuccess, searchFailure } from '../actions/search';

const series = handleActions(
  {
    [searchRequest]: () => [],
    [searchSuccess]: (_, { payload }) => payload,
    [searchFailure]: state => state
  },
  []
);

const loading = handleActions(
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
    [searchFailure]: (_, { payload }) => payload
  },
  null
);

export default combineReducers({
  series,
  loading,
  error
});
