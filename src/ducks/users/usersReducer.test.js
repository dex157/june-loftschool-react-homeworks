import users, {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from './index.js';

describe('Редьюсер users', () => {
  const INIT_STATE = {
    isFetching: false,
    userData: null,
    error: null
  };

  const testData = {
    data: {
      login: 'test-login',
      avatar_url: 'test-avatar',
      followers: 50
    }
  };

  const error = { error: 'test-error' };

  describe('экшн fetchUserRequest', () => {
    const state1 = users(
      INIT_STATE,
      fetchUserRequest(),
    );

    it('изменяет флаг isFetching на true', () => {
      expect(state1.isFetching).toBeTruthy();
    });

    it('очищают поле userData', () => {
      expect(state1.userData).toBeNull();
    });

    it('очищают поле error', () => {
      expect(state1.error).toBeNull();
    });
  });

  describe('экшн fetchUserSuccess', () => {
    const state2 = users(
      INIT_STATE,
      fetchUserSuccess(testData),
    );

    it('изменяет флаг isFetching на false', () => {
      expect(state2.isFetching).toBeFalsy();
    });
    
    it('наполняет данными поле userData', () => {
      expect(state2.userData).toEqual(testData.data);
    });

    it('очищают поле error', () => {
      expect(state2.error).toBeNull();
    });
  });

  describe('экшн fetchUserFailure', () => {
    const state3 = users(
      INIT_STATE,
      fetchUserFailure(error),
    );

    it('изменяет флаг isFetching на false', () => {
      expect(state3.isFetching).toBeFalsy();
    });

    it('наполняет данными поле error', () => {
      expect(state3.error).toEqual(error);
    });
  });
});