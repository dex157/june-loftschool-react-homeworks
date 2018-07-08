import searchMiddleware from './searchMiddleware.js';

jest.mock('../api');

const search = require('../api').search;
search.mockImplementation(() => new Promise(r => r(['test', 'data'])));

describe('searchMiddleware', () => {
  it('Вызывается функция search из модуля ../api если приходит action с типом SEARCH/GET_REQUEST', () => {
    const storeMock = {
      dispatch: jest.fn().mockImplementation(() => ''),
    };
    searchMiddleware(storeMock)(jest.fn())({ type: 'SEARCH/GET_REQUEST', payload: {} });
    expect(search).toHaveBeenCalledTimes(1);
  });
  it('Если promise resolved то middleware отправляет экшен SEARCH/GET_SUCCESS', done => {
    const dispatchMock = jest.fn();
    const storeMock = {
      dispatch: dispatchMock,
    };
    searchMiddleware(storeMock)(jest.fn())({ type: 'SEARCH/GET_SUCCESS', payload: {} });
    setTimeout(() => {
      expect(dispatchMock).toHaveBeenCalledTimes(1);
      done();
    }, 5000);
  });
});
