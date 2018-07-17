import followers, {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from './index.js';

describe('Редьюсер followers', () => {
  const INIT_STATE = {
    isFetching: false,
    ids: null,
    error: null
  };

  const testIds = [
    {
      login: 'test1-login',
      avatar_url: 'test1-avatar'
    },
    {
      login: 'test2-login',
      avatar_url: 'test2-avatar'
    }
  ];

  const error = { error: 'test-error' };

  describe('экшн fetchFollowersRequest', () => {
    const state1 = followers(
      INIT_STATE,
      fetchFollowersRequest(),
    );

    it('изменяет флаг isFetching на true', () => {
      expect(state1.isFetching).toBeTruthy();
    });

    it('очищают поле ids', () => {
      expect(state1.ids).toBeNull();
    });

    it('очищают поле error', () => {
      expect(state1.error).toBeNull();
    });
  });

  describe('экшн fetchFollowersSuccess', () => {
    const state2 = followers(
      INIT_STATE,
      fetchFollowersSuccess(testIds),
    );

    it('изменяет флаг isFetching на false', () => {
      expect(state2.isFetching).toBeFalsy();
    });
    
    it('наполняет данными поле ids', () => {
      expect(state2.ids).toEqual(testIds);
    });

    it('очищают поле error', () => {
      expect(state2.error).toBeNull();
    });
  });

  describe('экшн fetchFollowersFailure', () => {
    const state3 = followers(
      INIT_STATE,
      fetchFollowersFailure(error),
    );

    it('изменяет флаг isFetching на false', () => {
      expect(state3.isFetching).toBeFalsy();
    });

    it('наполняет данными поле error', () => {
      expect(state3.error).toEqual(error);
    });
  });
});