import { takeEvery, call, put } from 'redux-saga/effects';
import { getTokenOwner, getUserInformation } from '../api';
import { fetchTokenOwnerRequest, fetchUserRequest, fetchUserSuccess, fetchUserFailure } from '../ducks/users';
import { logout } from '../ducks/auth';

function* fetchUserFlow(action) {
    try {
        let response;
        if (action.type === fetchTokenOwnerRequest.toString()) {
            response = yield call(getTokenOwner);
        }
        if (action.type === fetchUserRequest.toString()) {
            response = yield call(getUserInformation, action.payload);
        }
        yield put(fetchUserSuccess(response));
    } catch (error) {
        yield put(logout());
        yield put(fetchUserFailure(error));
    }
}

export function* fetchUserWatch() {
    yield takeEvery([fetchTokenOwnerRequest, fetchUserRequest], fetchUserFlow);
};
