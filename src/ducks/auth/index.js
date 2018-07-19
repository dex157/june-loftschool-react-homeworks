export { default } from './reducer';
export { logout, authorize } from './action';
export const getIsAuthorized = state => state.auth.isAuthorized;

