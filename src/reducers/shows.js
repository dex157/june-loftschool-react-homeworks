import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { showRequest, showSuccess, showFailure } from '../actions/show';

const isFetching = handleActions(
  {
    [showRequest]: () => true,
    [showSuccess]: () => false,
    [showFailure]: () => false
  },
  false
);

const entities = handleActions(
  {
    [showSuccess]: (_state, action) => action.payload
  },
  []
);

const error = handleActions(
  {
    [showFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  isFetching,
  entities,
  error
});
