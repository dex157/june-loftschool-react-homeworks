export const getIsFetching = state => state.users.isFetching;
export const getIsFetched = state => state.users.isFetched;

export const getUserData = state => {
 return state.users.data.map(({ login, avatar_url, followers, public_repos }) => ({
   name: login,
   url: avatar_url,
   followersCount: followers,
   reposCount: public_repos
    }));
  };
