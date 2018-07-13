import { handleActions } from 'redux-actions';
import { showRequest, showSuccess, showFailure } from '../actions/show';
import { combineReducers } from 'redux';

const isLoading = handleActions(
  {
    [showRequest.toString()]: () => true,
    [showSuccess.toString()]: () => false,
    [showFailure.toString()]: () => false
  },
  false
);

const select = handleActions(
  {
    [showSuccess.toString()]: (state, action) => action.payload
  },
  []
);

export default combineReducers({
  select,
  isLoading
});
