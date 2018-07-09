import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { networkError, clearNetworkErrors } from './action';

const error = handleActions(
  {
    [networkError]: (_state, action) => action.payload,
    [clearNetworkErrors]: () => null
  },
  null
);

const message = handleActions(
  {
    [networkError]: (_state, action) => action.payload.response.data.message,
    [clearNetworkErrors]: () => null
  },
  null
);

export default combineReducers({
  error,
  message
});
