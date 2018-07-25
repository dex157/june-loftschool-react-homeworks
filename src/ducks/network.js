import { combineReducers } from 'redux';
import { createActions, handleActions } from 'redux-actions';

/* Start Actions */
export const { clearNetworkErrors, networkError } = createActions(
  'CLEAR_NETWORK_ERRORS',
  'NETWORK_ERROR'
);
/* End Actions */

/* Start Selectors */
export const getIsNetworkErrorPresent = state => state.network.error;
export const getNetworkError = state => state.network.message;
/* End Selectors */

/* Start Reducers */
const message = handleActions(
  {
    [clearNetworkErrors]: () => null,
    [networkError]: (_, action) => action.payload.message
  },
  null
);

const error = handleActions(
  {
    [clearNetworkErrors]: () => null,
    [networkError]: () => true
  },
  null
);
/* End Reducers */

export default combineReducers({ message, error });
