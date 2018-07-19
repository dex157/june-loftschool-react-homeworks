import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  getLoginSuccess,
  getLoginFailure,
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoFailure
} from "./user-actions";

const login = handleActions(
  {
    [getLoginSuccess]: (_state, action) => action.payload.data.login
  },
  ''
);

const userInfo = handleActions(
  {
    [getUserInfoSuccess]: (_state, action) => {
      return action.payload.data;
    }
  },
  {
    login : '',
    id: -1,
    avatar_url : '',
    followers: 0,
    public_repos: 0,
    isFetching: true
  }
);

const loginError = handleActions(
  {
    [getLoginFailure]: (_state, action) => action.payload
  },
  null
);

const userInfoError = handleActions(
  {
    [getUserInfoFailure]: (_state, action) => action.payload
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
    [getUserInfoRequest.toString()]: () => LOADING_STATE.loading,
    [getUserInfoSuccess.toString()]: () => LOADING_STATE.success,
    [getUserInfoFailure.toString()]: () => LOADING_STATE.failure,
  },
  LOADING_STATE.idle,
);

export const isFetching = state => {
  let currentState = state.login.loadingState;
  return currentState === LOADING_STATE.idle
    || currentState === LOADING_STATE.loading;
};

export default combineReducers({
  login,
  userInfo,
  loadingState,
  loginError,
  userInfoError
});