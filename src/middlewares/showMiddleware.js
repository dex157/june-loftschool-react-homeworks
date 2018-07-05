import { showRequest, showSuccess, showFailure } from '../actions/show';

import { show } from '../api.js';

const showMiddleware = store => next => action => {
  if (action.type === showRequest.toString()) {
    const data = action.payload;
    show(data)
      .then(result => {
        store.dispatch(showSuccess(result));
      })
      .catch(error => {
        store.dispatch(showFailure(error));
      });
  }

  return next(action);
};

export default showMiddleware;
