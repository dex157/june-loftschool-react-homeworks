import { showRequest, showSuccess, showFailure } from '../actions/show';
import { show } from '../api';

const showMiddleware = store => next => action => {
  if (action.type === showRequest.toString()) {
    show(action.payload)
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
