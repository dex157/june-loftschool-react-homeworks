import { put, call, takeLatest } from "redux-saga/effects";
import { getUserFollowers } from "../api";
import {
  getFollowersRequest,
  getFollowersSuccess,
  getFollowersFailure
} from "../ducks/follower-actions";

function* fetchFollowersWatch(action) {
    try {
      const userLogin = action.payload;
      const userInfo = yield call(() => getUserFollowers(userLogin));
      yield put(getFollowersSuccess(userInfo));
    } catch (error) {
      yield put(getFollowersFailure(error));
    }
}

function* userFollowersWatch() {
  yield takeLatest(getFollowersRequest, fetchFollowersWatch);
}

export default userFollowersWatch;