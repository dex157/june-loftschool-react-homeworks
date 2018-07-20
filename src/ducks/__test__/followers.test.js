import followers, {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from '../followers';

const initState = { isFetching: false, isFetched: false, ids: [], error: null };

describe('Редьюсер followers', () => {
  describe('Акшэн fetchFollowersRequest', () => {
    it('Изменяет флаг isFetching', () => {
      const state = followers(initState, fetchFollowersRequest());
      expect(state.isFetching).toBeTruthy();
    });

    it('Очищает поле ids', () => {
      const state = followers(
        { ...initState, ids: [{}, {}, {}] },
        fetchFollowersRequest()
      );
      expect(state.ids).toEqual([]);
    });

    it('Очищает поле error', () => {
      const state = followers(
        { ...initState, error: true },
        fetchFollowersRequest()
      );
      expect(state.error).toBeNull();
    });
  });

  describe('Акшэн fetchFollowersSuccess', () => {
    it('Изменяет флаг isFetching', () => {
      const state = followers(
        { ...initState, isFetching: true },
        fetchFollowersSuccess()
      );
      expect(state.isFetching).toBeFalsy();
    });

    it('Наполняет данными ids', () => {
      const state = followers(initState, fetchFollowersSuccess([{},{},{}]));
      expect(state.ids).toEqual([{},{},{}]);
    });

    it('Очищает поле error', () => {
      const state = followers(
        { ...initState, error: true },
        fetchFollowersSuccess()
      );
      expect(state.error).toBeNull();
    });
  });

  describe('Акшэн fetchFollowersFailure', () => {
    it('Изменяет флаг isFetching', () => {
      const state = followers(
        { ...initState, isFetching: true },
        fetchFollowersFailure()
      );
      expect(state.isFetching).toBeFalsy();
    });

    it('Наполняет данными error', () => {
      const state = followers(initState, {
        type: fetchFollowersFailure().type,
        error: true
      });
      expect(state.error).toBeTruthy();
    });
  });
});
