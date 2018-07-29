import { createActions } from "redux-actions";

const { clearNetworkErrors, networkError } = createActions("CLEAR_NETWORK_ERRORS", "NETWORK_ERROR");

export { clearNetworkErrors, networkError };
