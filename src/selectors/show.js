export const getLoadingState = state => state.show.loadingState;
export const getSearchData = (state) => {
  state.show.result.map(element => {
    return {
      id: element.id,
      image: element.image.medium ? element.image : '',
      name: element.name,
      summary: element.summary
    };
  })
};

export const showIsLoaded = state =>
  getLoadingState(state) === 'SUCCES' && getLoadingState(state) !== 'LOADING';

export const showIsFailure = state =>
  getLoadingState(state) === 'FAILURE' && getLoadingState(state) !== 'LOADING';

export const showIsLoading = state => getLoadingState(state) === 'LOADING';
