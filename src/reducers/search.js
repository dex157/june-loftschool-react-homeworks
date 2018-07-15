import {
  searchRequest,
  searchSuccess,
  searchFailure
} from '../actions/searchActions';
import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';

const films = handleAction(
  searchSuccess,
  (state, action) => action.payload,
  []
);

const error = handleAction(
  searchFailure,
  (state, action) => action.error,
  null
);

const isFetching = (state = false, action: payloadAction): boolean => {
  switch (action.type) {
    case searchRequest:
      return true;
    case searchSuccess:
      return false;
    case searchFailure:
      return false;
    default:
      return state;
  }
};

const isFetched = (state = false, action: payloadAction): boolean => {
  switch (action.type) {
    case searchRequest:
      return false;
    case searchSuccess:
      return true;
    case searchFailure:
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  error,
  films,
  isFetched,
  isFetching
});

export const getfilms = state => state.films;
export const getIsFetching = state => state.isFetching;
export const getIsFetched = state => state.isFetched;
export const getError = state => state.error;
