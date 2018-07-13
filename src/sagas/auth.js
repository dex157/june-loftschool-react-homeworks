import { take, put, call, select } from 'redux-saga/effects';
import { setTokenApi, clearTokenApi, getTokenOwner } from '../api';
import { authorize, logout, getIsAuthorized } from '../ducks/auth';
import {
    getTokenFromLocalStorage,
    setTokenToLocalStorage,
    removeTokenFromLocalStorage
} from '../localStorage';

export function* authFlow() {
    while (true) {
    const isAuthorized = yield select(getIsAuthorized);
    console.log(`isAuthorized ${isAuthorized}`);
    const localStorageToken = yield call(getTokenFromLocalStorage);
    console.log(`localStorageToken ${localStorageToken}`);
    let token;

    if (!isAuthorized && localStorageToken) {
        token = localStorageToken;
        
        yield put(authorize());
    } else {
        const action = yield take(authorize);
        console.log(action);
        token = action.payload;
        console.log(token);
    };
    
    console.log('прошло дальше');
    yield call(setTokenApi, token);
    try {
        const response = yield call(getTokenOwner);
        console.log(response.data);
        if (response) {
            yield call(setTokenToLocalStorage, token);
        }
    } catch (error) {
        yield put(logout());
    }

    yield take(logout);

    yield call(removeTokenFromLocalStorage);
    yield call(clearTokenApi);
    }
};


