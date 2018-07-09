export const getFollowers = state => {
  return state.followers.data.map(({ login, avatar_url }) => ({
    name: login,
    url: avatar_url,
  }));
};