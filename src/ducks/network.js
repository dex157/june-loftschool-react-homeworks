import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';

const getIsNetworkErrorPresent = state => state.network.error;

const getMessage = state => state.network.message;

const clearNetworkErrors = createAction('CLEARNETWORKERRORS');

const networkError = createAction('NETWORKERROR');

const error = handleActions(
  {
    [clearNetworkErrors]: () => null,
    [networkError]: (_state, action) => true
  },
  null
);

const message = handleActions(
  {
    [clearNetworkErrors]: () => null,
    [networkError]: (_state, action) => action.payload.message
  },
  null
);

export { getIsNetworkErrorPresent, getMessage, clearNetworkErrors, networkError };

export default combineReducers({ error, message });
