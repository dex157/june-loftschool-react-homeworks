import { handleActions } from 'redux-actions';
import {
  getFollowersRequest,
  getFollowersSuccess,
  getFollowersFailure
} from './actions';

export default handleActions(
  {
    [getFollowersRequest]: _state => ({
      isFetching: true,
      followers: [],
      error: null
    }),
    [getFollowersSuccess]: (_state, action) => ({
      isFetching: false,
      error: null,
      followers: action.payload
    }),
    [getFollowersFailure]: (_state, action) => ({
      isFetching: false,
      error: action.payload,
      followers: []
    })
  },
  {
    isFetching: false,
    error: null,
    followers: []
  }
);
