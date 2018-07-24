import requestFlow from './request.js'
import { call, put, select } from 'redux-saga/effects';

import { logout } from 'ducks/auth';

  import {
    isNetworkError,
    clearNetworkErrors,
    networkError
  } from 'ducks/network';

const fn = jest.fn();
const testData = { id : 'notherpappa'}

describe('Redux-saga requestFlow', () => {
  describe('Отдает результат через экшен без ошибок', () => {
    const iterator = requestFlow(fn, testData);

    it('calls callback', () => {
      expect(iterator.next().value).toEqual(call(fn, testData));
    });
  });

  describe('handling 401 error', () => {
    const iterator = requestFlow(fn, testData);
    const error = new Error('error text');
    error.response = {
      status: 401
    };
    iterator.next();

    it('catching error', () => {
      expect(iterator.throw(error).value).toEqual(put(networkError(error)));
    });

    it('puts logout action', () => {
      expect(iterator.next().value).toEqual(put(logout()));
    });
  });
});
