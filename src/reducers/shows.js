import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { showRequest, showSuccess, showFailure } from '../actions/show.js';

const loadingState = handleActions(
  {
    [showRequest]: () => 'LOADING',
    [showSuccess]: () => 'SUCCESS',
    [showFailure]: () => 'FAILURE'
  },
  'IDLE'
);

const result = handleActions(
  {
    [showSuccess]: (state, action) => action.payload
  },
  []
);

export default combineReducers({
  loadingState,
  result
});
