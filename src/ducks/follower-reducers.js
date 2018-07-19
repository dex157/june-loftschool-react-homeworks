import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { getFollowersRequest, getFollowersSuccess, getFollowersFailure } from "./follower-actions";

const followers = handleActions(
  {
    [getFollowersSuccess]: (_state, action) => action.payload.data
  },
  []
);

const followersError = handleActions(
  {
    [getFollowersFailure]: (_state, action) => action.payload
  },
  null
);

export const LOADING_STATE = {
  idle: 'IDLE',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
};

const loadingState = handleActions(
  {
    [getFollowersRequest.toString()]: () => LOADING_STATE.loading,
    [getFollowersSuccess.toString()]: () => LOADING_STATE.success,
    [getFollowersFailure.toString()]: () => LOADING_STATE.failure,
  },
  LOADING_STATE.idle,
);


export const isFetching = state => {
  let currentState = state.login.loadingState;
  return currentState === LOADING_STATE.idle
    || currentState === LOADING_STATE.loading;
};

export default combineReducers({
  followers,
  loadingState,
  followersError
});