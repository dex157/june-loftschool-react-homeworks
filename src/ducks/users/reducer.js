import { handleActions } from 'redux-actions';
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from './action';

export default handleActions(
  {
    [fetchUserRequest.toString()]: state => ({
      ...state,
      isFetching: true,
      isFetched: false
    }),
    [fetchUserSuccess.toString()]: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      data: action.payload.data
    }),
    [fetchUserFailure.toString()]: (state, action) => ({
      ...state,
      isFetching: false,
      error: action.error
    })
  },
  { isFetching: false, isFetched: false, data: null, error: null }
);
