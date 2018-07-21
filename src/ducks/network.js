import {combineReducers} from 'redux';
import {createActions, handleActions} from 'redux-actions';

export const {clearNetworkErrors, networkError} = createActions(
   'CLEAR_NETWORK_ERRORS',
   'NETWORK_ERROR'
);

export const
   getIsNetworkErrorPresent = state => state.network.error,
   getMessage = state => state.network.message;

const error = handleActions(
   {
      [clearNetworkErrors]: () => null,
      [networkError]: () => true
   },
   null
);

const message = handleActions(
   {
      [clearNetworkErrors]: () => null,
      [networkError]: (state, action) => action.payload.message
   },
   null
);

export default combineReducers({
   error,
   message
});
