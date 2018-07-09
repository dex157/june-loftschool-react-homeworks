import { show } from '../api';
import { showRequest, showSuccess, showFailure } from '../actions/show';

const showMiddleware = store => next => action => {
  if (action.type === showRequest.toString()) {
    show(action.payload)
      .then(ep => {
        const episode = {
          id: ep.id,
          name: ep.name,
          image: ep.image.medium,
          summary: ep.summary
        };
        store.dispatch(showSuccess(episode));
      })
      .catch(error => {
        store.dispatch(showFailure(error));
      });
  }

  return next(action);
};

export default showMiddleware;
