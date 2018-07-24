import followers, {fetchFollowersRequest, fetchFollowersSuccess, fetchFollowersFailure } from './index'

  const initialState = {
    data: null,
    error: true,
    isFetching: false
  }

  const fakeData = {
    name: 'A',
    surname: 'B'
  }

describe('Action `fetchFollowersRequest`', () => {
    const stateOne = followers(initialState, fetchFollowersRequest());

  it('Changes `isFetching` to true', () => {
    expect(stateOne.isFetching).toEqual(true);
  });

  it('Clears `data`', () => {
    expect(stateOne.data).toEqual(null);
  });

  it('Clears `error`', () => {
    expect(stateOne.error).toEqual(null);
  });
});

describe('Action `fetchFollowersSuccess`', () => {
  const stateTwo = followers(initialState, fetchFollowersSuccess(fakeData));

  it('Changes `isFetching`', () => {
    expect(stateTwo.isFetching).toEqual(false);
  });

  it('Fills `data`', () => {
    expect(stateTwo.data).toEqual({
        name: 'A',
        surname: 'B'
    });
  });

  it('Clears `error`', () => {
    expect(stateTwo.error).toEqual(null);
  });
});

describe('Action `fetchFollowersFailure`', () => {
    const stateThree = followers(initialState, fetchFollowersFailure(fakeData));

    it('Changes `isFetching` flag', () => {
      expect(stateThree.isFetching).toEqual(false);
    });

    it('Fills `error`', () => {
      expect(stateThree.error).toEqual({
          name: 'A',
          surname: 'B'
      });
    });
  });
