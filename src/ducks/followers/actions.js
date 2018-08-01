import { createActions } from "redux-actions";

const {
  followers: {
    getRequest: fetchFollowersRequest,
    getSuccess: fetchFollowersSuccess,
    getFailure: fetchFollowersFailure
  }
} = createActions({
  FOLLOWERS: {
    GET_REQUEST: null,
    GET_SUCCESS: null,
    GET_FAILURE: null
  }
});

export { fetchFollowersRequest, fetchFollowersSuccess, fetchFollowersFailure};