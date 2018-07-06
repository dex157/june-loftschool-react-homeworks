import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  searchRequest,
  searchSuccess,
  searchFailure
} from '../actions/search';

export const LOADING_STATE = {
  idle: 'IDLE',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE'
};

const entities = handleActions(
  {
    [searchSuccess.toString()]: (_state, action) => action.payload
  },
  []
);

const loadingState = handleActions(
  {
    [searchRequest.toString()]: () => LOADING_STATE.loading,
    [searchSuccess.toString()]: () => LOADING_STATE.success,
    [searchFailure.toString()]: () => LOADING_STATE.failure
  },
  LOADING_STATE.idle
);

const error = handleActions(
  {
    [searchFailure.toString()]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  entities,
  loadingState,
  error
});
