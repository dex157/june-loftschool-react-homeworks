import user, { getUserRequest, getUserSuccess, getUserFailure } from './';

describe('Редьюсер user', () => {
  describe('Экшен getUserRequest', () => {
    const state = user(
      {
        isFetching: false,
        data: { name: 'test-name' },
        error: { message: 'test-error' }
      },
      getUserRequest()
    );

    it('Изменяет флаг isFetching на true', () => {
      expect(state.isFetching).toBeTruthy();
    });

    it('Очищает поле data', () => {
      expect(state.data).toBeNull();
    });

    it('Очищает поле error', () => {
      expect(state.error).toBeNull();
    });
  });

  describe('Экшен getUserSuccess', () => {
    const state = user(
      {
        isFetching: true,
        data: null,
        error: { message: 'test-error' }
      },
      getUserSuccess({ testData: '1123' })
    );

    it('Изменяет флаг isFetching на false', () => {
      expect(state.isFetching).toBeFalsy();
    });

    it('Очищает поле error', () => {
      expect(state.error).toBeFalsy();
    });

    it('Наполняет поле data данными', () => {
      expect(state.data).toEqual({ testData: '1123' });
    });
  });
  describe('Экшен getUserFailure', () => {
    const state = user(
      {
        isFetching: true,
        data: null,
        error: null
      },
      getUserFailure({ message: 'test-error' })
    );

    it('Изменяет флаг isFetching на false', () => {
      expect(state.isFetching).toBeFalsy();
    });

    it('Наполняет поле error данными', () => {
      expect(state.error).toEqual({ message: 'test-error' });
    });
  });
});
