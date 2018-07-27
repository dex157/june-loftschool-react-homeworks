import { handleActions } from 'redux-actions';
import {
  getUserRequest,
  getUserSuccess,
  getUserFailure,
  getUserOwnerRequest
} from './actions';

export default handleActions(
  {
    [getUserRequest]: state => ({ ...state, isFetching: true }),
    [getUserOwnerRequest]: state => ({ ...state, isFetching: true }),
    [getUserSuccess]: (state, action) => ({
      ...state,
      isFetching: false,
      data: action.payload
    }),
    [getUserFailure]: (state, action) => ({
      ...state,
      isFetching: false,
      error: action.payload
    })
  },
  {
    isFetching: false,
    error: null,
    data: {}
  }
);
