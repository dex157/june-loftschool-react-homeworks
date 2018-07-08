import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  getShowRequest,
  getShowSuccess,
  getShowFailure
} from '../actions/show';

export const LOADING_STATE = {
  idle: 'IDLE',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE'
};

const entities = handleActions(
  {
    [getShowSuccess.toString()]: (_state, action) => action.payload
  },
  []
);

const loadingState = handleActions(
  {
    [getShowRequest.toString()]: () => LOADING_STATE.loading,
    [getShowSuccess.toString()]: () => LOADING_STATE.success,
    [getShowFailure.toString()]: () => LOADING_STATE.failure
  },
  LOADING_STATE.idle
);

const error = handleActions(
  {
    [getShowFailure.toString()]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  entities,
  loadingState,
  error
});
