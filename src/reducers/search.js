import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  searchRequest,
  searchSuccess,
  searchFailure
} from '../actions/search.js';

export const LOADING_STATE = {
  idle: 'IDLE',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE'
};

const loadingState = handleActions(
  {
    [searchRequest.toString()]: () => LOADING_STATE.loading,
    [searchSuccess.toString()]: () => LOADING_STATE.success,
    [searchFailure.toString()]: () => LOADING_STATE.failure
  },
  LOADING_STATE.idle
);

const result = handleActions(
  {
    [searchSuccess.toString()]: (_state, action) => action.payload
  },
  []
);

export default combineReducers({
  result,
  loadingState
});
