import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { showFailure, showRequest, showSuccess } from '../actions/show';

const isFetching = handleActions(
  {
    [showRequest.toString()]: () => true,
    [showSuccess.toString()]: () => false,
    [showFailure.toString()]: () => false
  },
  false
);

const entities = handleActions(
  {
    [showSuccess.toString()]: (state, action) => action.payload
  },
  []
);

export default combineReducers({
  entities,
  isFetching
});
