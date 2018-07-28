import { call, put, select } from 'redux-saga/effects';
import requestFlow from './request';
import {
  getIsNetworkErrorPresent,
  clearNetworkError,
  networkError
} from '../ducks/network';
import { logout } from '../ducks/auth';

describe('Сага request', () => {
  describe('Возвращает результат без ошибки', () => {
    const fn = jest.fn();
    const iterator = requestFlow(fn, 1, 2);

    it('Вызывает функцию fn с аргументами', () => {
      expect(iterator.next().value).toEqual(call(fn, 1, 2));
    });
    it('Проверяет наличие сетевой ошибки', () => {
      expect(iterator.next().value).toEqual(select(getIsNetworkErrorPresent));
    });
    it('Очищает network.error при наличии ошибки', () => {
      expect(iterator.next(true).value).toEqual(put(clearNetworkError()));
    });
  });

  describe('Возвращает результат с ошибокой', () => {
    const fn = jest.fn();
    const iterator = requestFlow(fn, 1, 2);
    const testError = { message: 'test-error', response: { status: 401 } };

    iterator.next();

    it('Отправляет экшен networkError', () => {
      expect(iterator.throw(testError).value).toEqual(
        put(networkError(testError))
      );
    });
    it('Отправляет экшен logout', () => {
      expect(iterator.next().value).toEqual(put(logout()));
    });
  });
});
