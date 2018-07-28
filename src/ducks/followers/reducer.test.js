import folowers, {
  getFollowersRequest,
  getFollowersSuccess,
  getFollowersFailure
} from './';

describe('Редьюсер followers', () => {
  describe('Экшен getFollowersRequest', () => {
    const state = folowers(
      {
        isFetching: false,
        followers: [
          { login: 'test-login-1', avatar_url: 'test-avatar-url-1' },
          { login: 'test-login-2', avatar_url: 'test-avatar-url-2' },
          { login: 'test-login-3', avatar_url: 'test-avatar-url-3' }
        ],
        error: { message: 'test-error' }
      },
      getFollowersRequest()
    );

    it('Изменяет флаг isFetching на true', () => {
      expect(state.isFetching).toBeTruthy();
    });

    it('Очищает поле followers', () => {
      expect(state.followers).toBeNull();
    });

    it('Очищает поле error', () => {
      expect(state.error).toBeNull();
    });
  });

  describe('Экшен getFollowersSuccess', () => {
    const followersData = [
      { login: 'test-login-1', avatar_url: 'test-avatar-url-1' },
      { login: 'test-login-2', avatar_url: 'test-avatar-url-2' },
      { login: 'test-login-3', avatar_url: 'test-avatar-url-3' },
      { login: 'test-login-4', avatar_url: 'test-avatar-url-4' },
      { login: 'test-login-5', avatar_url: 'test-avatar-url-5' }
    ];
    const state = folowers(
      {
        isFetching: true,
        followers: null,
        error: { message: 'test-error' }
      },
      getFollowersSuccess(followersData)
    );

    it('Изменяет флаг isFetching на false', () => {
      expect(state.isFetching).toBeFalsy();
    });
    it('Очищает поле error', () => {
      expect(state.error).toBeNull();
    });
    it('Наполняет поле followers данными', () => {
      expect(state.followers.length).toEqual(followersData.length);
    });
  });

  describe('Экшен getFollowersFailure', () => {
    const state = folowers(
      {
        isFetching: true,
        followers: null,
        error: null
      },
      getFollowersFailure({ message: 'test-error' })
    );
    it('Изменяет флаг isFetching на false', () => {
      expect(state.isFetching).toBeFalsy();
    });
    it('Наполняет поле error данными', () => {
      expect(state.error).toEqual({ message: 'test-error' });
    });
  });
});
