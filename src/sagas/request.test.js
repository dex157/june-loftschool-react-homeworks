import requestSaga from './request';
import { call, put, select } from 'redux-saga/effects';
import {
  getIsNetworkErrorPresent,
  clearNetworkErrors,
  networkError
} from 'ducks/network';
import { logout } from 'ducks/auth';

describe('Сага request', () => {
  describe('Сценарий успешного выполнения', () => {
    const fn = jest.fn();
    const iterator = requestSaga(fn, 1, 2);

    it('Вызывает переданную функцию с переданнами аргументами', () => {
      expect(iterator.next().value).toEqual(call(fn, 1, 2));
    });

    it('Проверяет наличии ошибки через getIsNetworkErrorPresent', () => {
      expect(iterator.next().value).toEqual(select(getIsNetworkErrorPresent));
    });

    it('Вызывает очистку ошибок при наличии', () => {
      expect(iterator.next(true).value).toEqual(put(clearNetworkErrors()));
    });
  });

  describe('Сценарий ошибки', () => {
    const fn = jest.fn();
    const error = new Error('error');
    error.response = { status: 401 };
    const iterator = requestSaga(fn, 1, 2);

    it('Ловит и передает в экшен networkError ошибку', () => {
      iterator.next();

      expect(iterator.throw(error).value).toEqual(put(networkError(error)));
    });

    it('Вызывает logout при получении кода 401', () => {
      expect(iterator.next().value).toEqual(put(logout()));
    });
  });
});
