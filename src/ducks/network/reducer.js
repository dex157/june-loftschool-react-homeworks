import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { networkError, clearNetworkErrors } from './action';

const error = handleActions(
  {
    [networkError.toString()]: (_state, action) => action.payload
  },
  null
);

const message = handleActions(
  {
    [clearNetworkErrors.toString()]: (_state, action) =>
      action.payload.response.data.message
  },
  null
);

export default combineReducers({
  error,
  message
});
