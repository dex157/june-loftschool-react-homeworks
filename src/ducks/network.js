import { createActions } from 'redux-actions';
import { handleActions } from 'redux-actions';

export const { networkError, clearNetworkErrors } = createActions(
  'NETWORK_ERROR',
  'CLEAR_NETWORK_ERRORS'
);

export default handleActions(
  {
    [networkError.toString()]: (state, action) => {
      return {
        error: action.payload,
        message: action.payload.response.statusText
      };
    },
    [clearNetworkErrors.toString()]: () => ({ error: null, message: null })
  },
  { error: null, message: null }
);

export const getIsNetworkErrorPresent = state => state.network;
