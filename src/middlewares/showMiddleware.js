import { show } from '../api';
import {showRequest, showSuccess, showFailure} from '../actions/show';

export default store => next => action => {
  if (action.type === showRequest.toString()) {
    show(action.showId).then(showResult => {
        store.dispatch(showSuccess(showResult));
    }).catch(error => {
        store.dispatch(showFailure(error));
    });
  }

  return next(action);
};
