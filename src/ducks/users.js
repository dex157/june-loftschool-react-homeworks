import { createActions } from 'redux-actions';
import { handleActions } from 'redux-actions';

export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } = createActions(
  'FETCH_USER_REQUEST',
  'FETCH_USER_SUCCESS',
  'FETCH_USER_FAILURE'
);

export default handleActions(
  {
    [fetchUserRequest.toString()]: state => ({
      ...state,
      isFetching: true,
      isFetched: false,
      data: null,
      error: null
    }),
    [fetchUserSuccess.toString()]: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      error: null,
      data: action.payload.data
    }),
    [fetchUserFailure.toString()]: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      error: action.error
    })
  },
  { isFetching: false, isFetched: false, data: null, error: null }
);
