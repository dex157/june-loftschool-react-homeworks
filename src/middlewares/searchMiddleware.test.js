import searchMiddleware from './searchMiddleware';

jest.mock('../api');

const search = require('../api').search;
search.mockImplementation(() => new Promise(r => r(['test', 'data'])));

describe('searchMiddleware', () => {
  it('Вызывается функция search из модуля ../api если приходит action с типом SEARCH_REQUEST', () => {
    const storeMock = {
      dispatch: jest.fn().mockImplementation(() => ''),
    };
    searchMiddleware(storeMock)(jest.fn())({ type: 'SEARCH_REQUEST', payload: {} });
    expect(search).toHaveBeenCalledTimes(1);
  });
  it('Если promise resolved то middleware отправляет экшен SEARCH_SUCCESS', done => {
    const dispatchMock = jest.fn();
    const storeMock = {
      dispatch: dispatchMock,
    };
    searchMiddleware(storeMock)(jest.fn())({ type: 'SEARCH_REQUEST', payload: {} });
    setTimeout(() => {
      expect(dispatchMock).toHaveBeenCalledTimes(1);
      done();
    }, 16);
  });
});
