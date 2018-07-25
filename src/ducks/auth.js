import { combineReducers } from 'redux';
import { createActions, handleActions } from 'redux-actions';

/* Start Actions */
export const { authorize, logout } = createActions('AUTHORIZE', 'LOGOUT');
/* End Actions */

/* Start Selectors */
export const getIsAuthorized = state => state.auth.isAuthorized;
/* End Selectors */

/* Start Reducers */
const isAuthorized = handleActions(
  {
    [authorize]: () => true,
    [logout]: () => false
  },
  false
);
/* End Reducers */

export default combineReducers({ isAuthorized });
