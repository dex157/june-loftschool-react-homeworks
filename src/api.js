export const search = query =>
  fetch(`http://api.tvmaze.com/search/shows?q=${query}`, {
    method: 'GET',
    mode: 'cors'
  })
    .then(response => {
      let result = response.json();
      return result;
    })
    .then(shows => shows.map(show => show.show));

export const show = showId =>
  fetch(`http://api.tvmaze.com/shows/${showId}?embed=cast`, {
    method: 'GET',
    mode: 'cors'
  }).then(response => {
    let result = response.json();
    return result;
  });
