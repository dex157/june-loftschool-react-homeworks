export { default } from './reducer';
export * from './actions';
export const getIsNetworkErrorPresent = state => !!state.network.message;
export const getNetworkErrorMessage = state => state.network.message;
