import { put, call, takeLatest } from "redux-saga/effects";
import { getUserFollowers } from "../api";
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from "../ducks/follower-actions";

function* fetchFollowersWatch(action) {
    try {
      const userLogin = action.payload;
      const userInfo = yield call(() => getUserFollowers(userLogin));
      yield put(fetchFollowersSuccess(userInfo));
    } catch (error) {
      yield put(fetchFollowersFailure(error));
    }
}

function* userFollowersWatch() {
  yield takeLatest(fetchFollowersRequest, fetchFollowersWatch);
}

export default userFollowersWatch;