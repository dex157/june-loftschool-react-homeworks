import { createActions } from 'redux-actions';

const {
  login: {
    getRequest: getLoginRequest,
    getSuccess: getLoginSuccess,
    getFailure: getLoginFailure
  }
} = createActions({
  LOGIN: {
    GET_REQUEST: null,
    GET_SUCCESS: null,
    GET_FAILURE: null
  }
});


const {
  userInfo: {
    getRequest: getUserInfoRequest,
    getSuccess: getUserInfoSuccess,
    getFailure: getUserInfoFailure
  }
} = createActions({
  USER_INFO: {
    GET_REQUEST: null,
    GET_SUCCESS: null,
    GET_FAILURE: null
  }
});

export { getLoginRequest, getLoginSuccess, getLoginFailure,
  getUserInfoRequest, getUserInfoSuccess, getUserInfoFailure };