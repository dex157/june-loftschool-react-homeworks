export const getLoadingState = state => state.search.loadingState;
export const getSearchData = state => {
  return state.search.result.map(({ id, image, name, summary }) => ({
    id: id,
    image: image ? image : null,
    name: name,
    summary: summary
  }));
};

export const searchIsLoaded = state =>
  getLoadingState(state) === 'SUCCESS' && getLoadingState(state) !== 'LOADING';

export const searchIsFailure = state =>
  getLoadingState(state) === 'FAILURE' && getLoadingState(state) !== 'LOADING';

export const searchIsLoading = state => getLoadingState(state) === 'LOADING';

export const searchIsIdle = state => getLoadingState(state) === 'IDLE';
