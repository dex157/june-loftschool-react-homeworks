import { show } from '../api';
import {showRequest, showSuccess, showFailure} from '../actions/show';

export const showMiddleware = store => next => action => {
  console.log('showMiddleware');
  console.log('action =', action);
  console.log('searchRequest =', searchRequest);
  console.log('searchRequest.toString() =', searchRequest.toString());

  if (action.type === showRequest.toString()) {
    show(action.showId).then(showResult => {
        store.dispatch(showSuccess(showResult));
    }).catch(error => {
        store.dispatch(showFailure(error));
    });
  }

  return next(action);
};
