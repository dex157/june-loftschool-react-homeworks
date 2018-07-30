import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  getShowRequest,
  getShowSuccess,
  getShowFailure
} from '../actions/show';

const show = handleActions(
  {
    [getShowRequest]: () => {},
    [getShowSuccess]: (_, { payload }) => payload,
    [getShowFailure]: state => state
  },
  {}
);

const loading = handleActions(
  {
    [getShowRequest]: () => true,
    [getShowSuccess]: () => false,
    [getShowFailure]: () => false
  },
  true
);

const error = handleActions(
  {
    [getShowRequest]: () => null,
    [getShowSuccess]: () => null,
    [getShowFailure]: (_, { payload }) => payload
  },
  null
);

export default combineReducers({
  show,
  loading,
  error
});
