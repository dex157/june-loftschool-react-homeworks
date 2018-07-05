export const getLoadingState = state => state.search.loadingState;
export const getSearchData = (state) => {
  return (
  state.search.result.map(element => ({
      id: element.id,
      image: element.image ? element.image : null,
      name: element.name,
      summary: element.summary
  })
)
)};

export const searchIsLoaded = state =>
  getLoadingState(state) === 'SUCCESS' && getLoadingState(state) !== 'LOADING';

export const searchIsFailure = state =>
  getLoadingState(state) === 'FAILURE' && getLoadingState(state) !== 'LOADING';

export const searchIsLoading = state => getLoadingState(state) === 'LOADING';

export const searchIsIdle = state => getLoadingState(state) === 'IDLE';
