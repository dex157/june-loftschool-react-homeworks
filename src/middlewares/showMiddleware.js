import { showRequest, showSuccess, showFailure } from '../ducks/shows';

import { show } from '../api.js';

export default store => next => action => {
  if (action.type === showRequest.toString()) {
    show(action.payload)
      .then(show => {
        store.dispatch(showSuccess(show));
      })
      .catch(err => {
        store.dispatch(showFailure(err));
      });
  }

  return next(action);
};
