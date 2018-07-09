import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from './action';
import users from './reducer';
import {getIsFetching, getIsFetched, getUserData } from './reducer';

export { fetchUserRequest, fetchUserSuccess, fetchUserFailure, users, getIsFetching, getIsFetched, getUserData };
