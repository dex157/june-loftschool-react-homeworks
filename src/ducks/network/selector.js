export const isNetworkError = state => state.network.error !== null;
export const getNetworkErrorText = state => state.network.message;
