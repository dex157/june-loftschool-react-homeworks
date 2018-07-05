import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  getShowsRequest,
  getShowsSuccess,
  getShowsFailure
} from '../actions/search';

export const LOADING_STATE = {
  idle: 'IDLE',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE'
};

const entities = handleActions(
  {
    [getShowsSuccess.toString()]: (_state, action) => action.payload
  },
  []
);

const loadingState = handleActions(
  {
    [getShowsRequest.toString()]: () => LOADING_STATE.loading,
    [getShowsSuccess.toString()]: () => LOADING_STATE.success,
    [getShowsFailure.toString()]: () => LOADING_STATE.failure
  },
  LOADING_STATE.idle
);

const error = handleActions(
  {
    [getShowsFailure.toString()]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  entities,
  loadingState,
  error
});
