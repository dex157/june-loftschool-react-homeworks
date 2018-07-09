export const getLoadingState = state => state.show.loadingState;
export const getShowData = state => {
  const { id, image, name, summary, _embedded } = state.show.result;
  return {
    id: id,
    image: image ? image : null,
    name: name,
    summary: summary,
    persons: _embedded ? getPersons(_embedded) : ''
  };
};

const getPersons = persons => {
  return persons.cast.map(element => {
    return element.person;
  });
};

export const showIsLoaded = state =>
  getLoadingState(state) === 'SUCCESS' && getLoadingState(state) !== 'LOADING';

export const showIsFailure = state =>
  getLoadingState(state) === 'FAILURE' && getLoadingState(state) !== 'LOADING';

export const showIsLoading = state => getLoadingState(state) === 'LOADING';
