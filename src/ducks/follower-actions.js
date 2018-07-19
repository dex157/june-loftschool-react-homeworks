import { createActions } from "redux-actions";

const {
  followers: {
    getRequest: getFollowersRequest,
    getSuccess: getFollowersSuccess,
    getFailure: getFollowersFailure
  }
} = createActions({
  FOLLOWERS: {
    GET_REQUEST: null,
    GET_SUCCESS: null,
    GET_FAILURE: null
  }
});

export { getFollowersRequest, getFollowersSuccess, getFollowersFailure};