import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { showRequest, showSuccess, showFailure } from '../actions/show';

const entities = handleActions(
  {
    [showSuccess]: (state, action) => [...state, action.payload]
  },
  []
);

const isFetching = handleActions(
  {
    [showRequest]: () => true,
    [showSuccess]: () => false,
    [showFailure]: () => false
  },
  false
);

export default combineReducers({
  entities,
  isFetching
});
