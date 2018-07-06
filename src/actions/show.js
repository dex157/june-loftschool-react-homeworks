import { createActions } from 'redux-actions';

const { showRequest, showSuccess, showFailure } = createActions('SHOW_REQUEST', 'SHOW_SUCCESS', 'SHOW_FAILURE');
export { showRequest, showSuccess, showFailure };