import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { networkError, clearNetworkErrors } from './action';

const message = handleActions(
  {
    [networkError]: (_state, action) => action.payload.response.data.message,
    [clearNetworkError]: () => null
  },
  null
);

const error = handleActions(
  {
    [networkError]: (_state, action) => action.payload,
    [clearNetworkError]: () => null
  },
  null
);

export default combineReducers({
  error,
  message
});
