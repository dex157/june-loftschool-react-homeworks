export const getShow = state => {
  const { entities } = state.shows;
  const name = entities && entities[0] && entities[0].name;
  const image = entities && entities[0] && entities[0].image;
  const cast =
    (entities &&
      entities[0] &&
      entities[0]._embedded &&
      entities[0]._embedded.cast) ||
    [];
  const summary = entities && entities[0] && entities[0].summary;
  return { name, image, cast, summary };
};
