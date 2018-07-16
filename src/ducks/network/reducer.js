import { handleActions } from 'redux-actions';
import { clearNetworkErrors, networkError } from './actions';
import { combineReducers } from 'redux';

const error = handleActions(
  {
    [clearNetworkErrors.toString()]: () => false
  },
  false
);

const message = handleActions(
  {
    [networkError.toString()]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  error,
  message
});
