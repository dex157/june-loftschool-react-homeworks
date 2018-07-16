import { handleActions } from 'redux-actions';
import { clearNetworkErrors, networkError } from './actions';
import { combineReducers } from 'redux';

const error = handleActions(
  {
    [clearNetworkErrors]: () => null
  },
  null
);

const message = handleActions(
  {
    [networkError]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  error,
  message
});
