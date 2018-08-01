import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  getLoginSuccess,
  getLoginFailure,
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoFailure
} from "./actions";

const login = handleActions(
  {
    [getLoginSuccess]: (_state, action) => action.payload.data.login
  },
  ''
);

export const data = handleActions(
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

export const isFetched = handleActions(
  {
    [getUserInfoRequest]: () => false,
    [getUserInfoSuccess]: () => true,
    [getUserInfoFailure]: () => true
  },
  false
);

export const isFetching = state => {
  return !state.login.isFetched;
};

export default combineReducers({
  login,
  data,
  isFetched,
  loginError,
  userInfoError
});