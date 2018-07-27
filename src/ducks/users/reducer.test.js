import users, {fetchUserRequest, fetchUserSuccess, fetchUserFailure } from './index'

  const initialState = {
    data: null,
    error: true,
    isFetching: false
  }

  const fakeData = {
     name: 'A',
     surname: 'B'
  }

describe('Action `fetchUserRequest`', () => {
  const state = users(initialState, fetchUserRequest());

  it('Changes `isFetching`', () => {
    expect(state.isFetching).toEqual(true);
  });

  it('Clears `data`', () => {
    expect(state.data).toEqual(null);
  });

  it('Clears `error`', () => {
    expect(state.error).toEqual(null);
  });
});

describe('Action `fetchUserSuccess`', () => {
  const state = users(initialState, fetchUserSuccess(fakeData));

  it('Changes `isFetching`', () => {
    expect(state.isFetching).toEqual(false);
  });

  it('Fills `data`', () => {
    expect(state.data).toEqual({
        name: 'A',
        surname: 'B'
    });
  });

  it('Clears `error`', () => {
    expect(state.error).toEqual(null);
  });
});

describe('Action `fetchUserFailure`', () => {
    const state = users(initialState, fetchUserFailure(fakeData));

    it('Changes `isFetching`', () => {
      expect(state.isFetching).toEqual(false);
    });

    it('Fills`error`', () => {
      expect(state.error).toEqual({
          name: 'A',
          surname: 'B'
      });
    });
  });
