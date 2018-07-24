import users, {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from '../users';

const initState = {
  isFetching: false,
  isFetched: false,
  data: null,
  error: null
};

describe('Редьюсер users', () => {
  describe('Акшэн fetchUserRequest', () => {
    it('Изменяет флаг isFetching', () => {
      const state = users(initState, fetchUserRequest());
      expect(state.isFetching).toBeTruthy();
    });

    it('Очищает поле data', () => {
      const state = users({ ...initState, data: {} }, fetchUserRequest());
      expect(state.data).toBeNull();
    });

    it('Очищает поле error', () => {
      const state = users({ ...initState, error: true }, fetchUserRequest());
      expect(state.error).toBeNull();
    });
  });

  describe('Акшэн fetchUserSuccess', () => {
    it('Изменяет флаг isFetching', () => {
      const state = users(
        { ...initState, isFetching: true },
        fetchUserSuccess({ data: {} })
      );
      expect(state.isFetching).toBeFalsy();
    });

    it('Наполняет данными data', () => {
      const state = users(initState, fetchUserSuccess({ data: {} }));
      expect(state.data).toEqual({});
    });

    it('Очищает поле error', () => {
      const state = users(
        { ...initState, error: true },
        fetchUserSuccess({ data: {} })
      );
      expect(state.error).toBeNull();
    });
  });

  describe('Акшэн fetchUserFailure', () => {
    it('Изменяет флаг isFetching', () => {
      const state = users(
        { ...initState, isFetching: true },
        fetchUserFailure()
      );
      expect(state.isFetching).toBeFalsy();
    });

    it('Наполняет данными error', () => {
      const state = users(initState, {
        type: fetchUserFailure().type,
        error: true
      });
      expect(state.error).toBeTruthy();
    });
  });
});
