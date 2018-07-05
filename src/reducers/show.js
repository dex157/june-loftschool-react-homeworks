import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { showRequest, showSuccess, showFailure } from '../actions/show.js';

export const LOADING_STATE = {
  idle: 'IDLE',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE'
};

const loadingState = handleActions(
  {
    [showRequest.toString()]: () => LOADING_STATE.loading,
    [showSuccess.toString()]: () => LOADING_STATE.success,
    [showFailure.toString()]: () => LOADING_STATE.failure
  },
  LOADING_STATE.idle
);

const result = handleActions(
  {
    [showRequest.toString()]: (_state, action) => action.payload
  },
  []
);

export default combineReducers({
  loadingState,
  result
});
