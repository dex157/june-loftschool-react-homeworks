import {followers, fetchFollowersRequest, fetchFollowersSuccess, fetchFollowersFailure } from './index'
  
  const initialState = {
    data: null,
    error: true,
    isFetching: false,
    isFetched: false
  }

  const fakeData = {
    name: 'Test',
    surname: 'Test1'
  }

describe('Экшен `fetchFollowersRequest`', () => {
    const stateOne = followers(initialState, fetchFollowersRequest());

  it('Изменяет флаг `isFetching`', () => {
    expect(stateOne.isFetching).toEqual(true);
  });

  it('Очищает поле `data`', () => {
    expect(stateOne.data).toEqual(null);
  });

  it('Очищает поле `error`', () => {
    expect(stateOne.error).toEqual(null);
  });
});

describe('Экшен `fetchFollowersSuccess`', () => {
  const stateTwo = followers(initialState, fetchFollowersSuccess(fakeData));

  it('Изменяет флаг `isFetching`', () => {
    expect(stateTwo.isFetching).toEqual(false);
  });

  it('Наполняет данными `data`', () => {
    expect(stateTwo.data).toEqual({
        name: 'Test',
        surname: 'Test1'
    });
  });

  it('Очищает поле `error`', () => {
    expect(stateTwo.error).toEqual(null);
  });
});

describe('Экшен `fetchFollowersFailure`', () => {
    const stateThree = followers(initialState, fetchFollowersFailure(fakeData));
  
    it('Изменяет флаг `isFetching`', () => {
      expect(stateThree.isFetching).toEqual(false);
    });
  
    it('Наполняет данными `error`', () => {
      expect(stateThree.error).toEqual({
          name: 'Test',
          surname: 'Test1'
      });
    });
  });