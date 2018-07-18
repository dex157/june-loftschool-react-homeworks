import { handleActions } from 'redux-actions';
import { showRequest, showSuccess, showFailure } from './actions';

export default handleActions(
  {
    [showRequest.toString()]: state => ({
      ...state,
      isFetching: true
    }),
    [showSuccess.toString()]: (state, action) => ({
      ...state,
      isFetching: false,
      result: action.payload
    }),
    [showFailure.toString()]: (state, action) => ({
      ...state,
      isFetching: false,
      error: action.payload
    })
  },
  {
    isFetching: false,
    result: {},
    error: null
  }
);
