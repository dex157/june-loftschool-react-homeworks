import { getImage } from '../utils';

export const getSeries = state =>
  state.search.series.map(({ id, name, image, summary }) => ({
    id,
    name,
    summary,
    image: getImage(image)
  }));

export const isLoading = state => state.search.loading;
export const error = state => state.search.error;
