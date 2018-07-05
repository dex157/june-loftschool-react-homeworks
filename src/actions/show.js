import { createActions } from 'redux-actions';

const { showRequest, showSuccess, showFailure } = createActions(
  'SHOW_REQUEST',
  'SHOW_SUCCESS',
  'HOW_FAILURE'
);

export { showRequest, showSuccess, showFailure };
