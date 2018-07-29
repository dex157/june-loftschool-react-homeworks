import reducer, {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from './index';

const initialState = {
  data: null,
  error: null,
  isFetching: false
};

const data = {
  name: 'mihail',
  surname: 'kuzmintsev'
};

describe('Редьсер Users', () => {
  describe('Экшен fetchUserRequest', () => {
    const state = reducer(initialState, fetchUserRequest());

    it('Изменяет флаг isFetching', () => {
      expect(state.isFetching).toEqual(true);
    });

    it('Очищает поле data', () => {
      expect(state.data).toEqual(null);
    });

    it('Очищает поле error', () => {
      expect(state.error).toEqual(null);
    });
  });

  describe('Экшен fetchUserSuccess', () => {
    const state = reducer(initialState, fetchUserSuccess(data));

    it('Изменяет флаг isFetching', () => {
      expect(state.isFetching).toEqual(false);
    });

    it('Наполняет данными data', () => {
      expect(state.data).toEqual({
        name: 'mihail',
        surname: 'kuzmintsev'
      });
    });

    it('Очищают поле error', () => {
      expect(state.error).toEqual(null);
    });
  });

  describe('Экшен fetchUserFailure', () => {
    const state = reducer(initialState, fetchUserFailure('error'));

    it('Изменяет флаг isFetching', () => {
      expect(state.isFetching).toEqual(false);
    });

    it('Наполняет данными error', () => {
      expect(state.error).toEqual('error');
    });
  });
});
