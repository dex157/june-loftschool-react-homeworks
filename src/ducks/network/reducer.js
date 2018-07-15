import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
    networkError,
    clearNetworkError
} from './actions';

const error = handleActions(
  {
    [networkError.toString()]: (_state, action) => action.payload,
    [clearNetworkError.toString()]: (_state, action) => null
  },
  null
);

const message = handleActions(
  {
    [networkError.toString()]: (_state, action) => action.payload.response.data.message,
    [clearNetworkError.toString()]: () => null
  },
  null
);

export default combineReducers({
  error,
  message
});