import { getImage } from '../utils';

export const getShow = state => {
  if (Object.keys(state.shows.show).length === 0) {
    return state.shows.show;
  }

  const { name, image, summary, _embedded } = state.shows.show;

  const cast = _embedded.cast.map(({ person }) => ({
    name: person.name,
    image: getImage(person.image)
  }));

  return { name, image: getImage(image), summary, cast: cast };
};

export const isLoading = state => state.shows.loading;
export const error = state => state.shows.error;
