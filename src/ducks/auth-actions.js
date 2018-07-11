import { createAction, createActions } from "redux-actions";

/*const {
  auth: {
    request: authRequest,
    success: authSuccess,
    failure: authFailure,
  },
} = createActions({
  AUTH: {
    REQUEST: null,
    SUCCESS: null,
    FAILURE: null,
  },
}, { namespace: "_" });

export { authRequest, authSuccess, authFailure };*/

export const setToken = createAction("SET_TOKEN");
export const { authorize } = createActions("AUTHORIZE");
export const { logout } = createActions("LOGOUT");
