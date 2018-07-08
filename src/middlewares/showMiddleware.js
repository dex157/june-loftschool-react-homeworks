import {
  getPageRequest,
  getPageFailure,
  getPageSuccess
} from 'components/ShowPage/pageActions';
import { show } from 'api';

const showMiddleware = store => next => action => {
  if (action.type === getPageRequest.toString()) {
    show(action.payload)
      .then(result => store.dispatch(getPageSuccess(result)))
      .catch(error => store.dispatch(getPageFailure(error)));
  }

  return next(action);
};

export default showMiddleware;
