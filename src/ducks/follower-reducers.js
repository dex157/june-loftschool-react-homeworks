import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { fetchFollowersRequest, fetchFollowersSuccess, fetchFollowersFailure } from "./follower-actions";

export const ids = handleActions(
  {
    [fetchFollowersSuccess]: (_state, action) => action.payload.data
  },
  []
);

const followersError = handleActions(
  {
    [fetchFollowersFailure]: (_state, action) => action.payload
  },
  null
);

export const isFetched = handleActions(
  {
    [fetchFollowersRequest]: () => false,
    [fetchFollowersSuccess]: () => true,
    [fetchFollowersFailure]: () => true
  },
  false
);

export const isFetching = state => {
  return !state.followers.isFetched;
};

export default combineReducers({
  ids,
  isFetched,
  followersError
});