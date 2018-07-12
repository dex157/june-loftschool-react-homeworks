import {
  showRequest,
  showRequestSuccess,
  showRequestFailure
} from '../actions/show';
import { show } from '../api';

const showMiddleware = store => next => action => {
  if (action.type === showRequest.toString()) {
    show(action.payload)
      .then(result => {
        store.dispatch(showRequestSuccess([result]));
      })
      .catch(error => {
        store.dispatch(showRequestFailure(error));
      });
  }
  return next(action);
};

export default showMiddleware;
