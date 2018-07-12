import {users, fetchUserRequest, fetchUserSuccess, fetchUserFailure } from './index'
  
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

describe('Экшен `fetchUserRequest`', () => {
  const state = users(initialState, fetchUserRequest());

  it('Изменяет флаг `isFetching`', () => {
    expect(state.isFetching).toEqual(true);
  });

  it('Очищают поле `data`', () => {
    expect(state.data).toEqual([]);
  });

  it('Очищают поле `error`', () => {
    expect(state.error).toEqual(null);
  });
});

describe('Экшен `fetchUserSuccess`', () => {
  const state = users(initialState, fetchUserSuccess(fakeData));

  it('Изменяет флаг `isFetching`', () => {
    expect(state.isFetching).toEqual(false);
  });

  it('Наполняют данными `data`', () => {
    expect(state.data).toEqual({
        name: 'Test',
        surname: 'Test1'
    });
  });

  it('Очищают поле `error`', () => {
    expect(state.error).toEqual(null);
  });
});

describe('Экшен `fetchUserFailure`', () => {
    const state = users(initialState, fetchUserFailure(fakeData));
  
    it('Изменяет флаг `isFetching`', () => {
      expect(state.isFetching).toEqual(false);
    });
  
    it('Наполняют данными `error`', () => {
      expect(state.error).toEqual({
          name: 'Test',
          surname: 'Test1'
      });
    });
  });