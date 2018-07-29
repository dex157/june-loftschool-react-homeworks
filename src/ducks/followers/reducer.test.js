import reducer, {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
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

describe('Редьсер Followers', () => {
  describe('Экшен fetchFollowersRequest', () => {
    const state = reducer(initialState, fetchFollowersRequest());

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

  describe('Экшен fetchFollowersSuccess', () => {
    const state = reducer(initialState, fetchFollowersSuccess(data));

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

  describe('Экшен fetchFollowersFailure', () => {
    const state = reducer(initialState, fetchFollowersFailure('error'));

    it('Изменяет флаг isFetching', () => {
      expect(state.isFetching).toEqual(false);
    });

    it('Наполняет данными error', () => {
      expect(state.error).toEqual('error');
    });
  });
});
