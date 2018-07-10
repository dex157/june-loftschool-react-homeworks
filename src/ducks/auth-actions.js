import { createActions } from 'redux-actions';

const {
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

export { authRequest, authSuccess, authFailure };
