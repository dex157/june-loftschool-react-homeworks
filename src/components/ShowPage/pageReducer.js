import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  getPageRequest,
  getPageSuccess,
  getPageFailure
} from './pageActions';

const isFetching = handleActions(
  {
    [getPageRequest.toString()]: () => true,
    [getPageFailure.toString()]: () => false,
    [getPageSuccess.toString()]: () => false
  },
  false
);

const entities = handleActions(
  {
    [getPageSuccess.toString()]: (state, action) => {
      return [...state, action.payload];
    }
  },
  []
);

const error = handleActions(
  {
    [getPageFailure.toString()]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  isFetching,
  entities,
  error
});
