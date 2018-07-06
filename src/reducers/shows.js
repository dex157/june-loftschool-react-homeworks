import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { showRequest, showSuccess, showFailure } from '../actions/show';

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
    [showSuccess.toString()]: (_state, action) => action.payload
  },
  []
);

const error = handleActions(
  {
    [showFailure.toString()]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  isFetching,
  entities,
  error
});
