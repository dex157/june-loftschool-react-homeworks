import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { showFailure, showRequest, showSuccess } from '../actions/show';

const entities = handleActions(
  {
    [showSuccess.toString()]: (state, action) => [...state, action.payload]
  },
  []
);

const isFetching = handleActions(
  {
    [showRequest.toString()]: () => true,
    [showSuccess.toString()]: () => false,
    [showFailure.toString()]: () => false
  },
  false
);

export default combineReducers({
  entities,
  isFetching
});
