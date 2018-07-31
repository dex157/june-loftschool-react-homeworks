import { handleActions } from 'redux-actions';
import {
  getUserRequest,
  getUserSuccess,
  getUserFailure,
  getUserOwnerRequest
} from './actions';

export default handleActions(
  {
    [getUserRequest]: _state => ({
      isFetching: true,
      data: null,
      error: null
    }),
    [getUserOwnerRequest]: _state => ({
      isFetching: true,
      data: null,
      error: null
    }),
    [getUserSuccess]: (_state, action) => ({
      isFetching: false,
      data: action.payload,
      error: null
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
    data: null
  }
);
