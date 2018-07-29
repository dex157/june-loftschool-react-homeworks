export const getIsNetworkErrorPresent = state => state.network.error !== null;
export const getNetworkError = state => {
  const error = state.network.error;
  if (error) return error.response.data.message;
};
