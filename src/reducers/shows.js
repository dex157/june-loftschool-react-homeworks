import { showRequest, showSuccess, showFailure } from '../actions/showActions';
import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';

const show = handleAction(showSuccess, (state, action) => action.payload, []);

const error = handleAction(showFailure, (state, action) => action.error, null);

const isFetching = (state = false, action: payloadAction): boolean => {
  switch (action.type) {
    case showRequest:
      return true;
    case showSuccess:
      return false;
    case showFailure:
      return false;
    default:
      return state;
  }
};

const isFetched = (state = false, action: payloadAction): boolean => {
  switch (action.type) {
    case showRequest:
      return false;
    case showSuccess:
      return true;
    case showFailure:
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  error,
  show,
  isFetched,
  isFetching
});

export const getShow = state => state.show;
export const getIsFetching = state => state.isFetching;
export const getIsFetched = state => state.isFetched;
export const getError = state => state.error;
