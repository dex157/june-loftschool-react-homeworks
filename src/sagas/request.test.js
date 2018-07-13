import { requestFlow } from './request.js'
import { call, put, select } from 'redux-saga/effects';

import { logout } from 'ducks/auth';

  import {
    getIsNetworkErrorPresent,
    clearNetworkErrors,
    networkError
  } from 'ducks/network';
  
const fn = jest.fn();
const testData = { id : 'AntonLantukh'}

describe('Redux-saga requestFlow', () => {
  describe('Отдает результат через экшен без ошибок', () => {
    const iterator = requestFlow(fn, testData);

    it('Вызывает переданную функцию с переданными аргументами', () => {
      expect(iterator.next().value).toEqual(call(fn, testData));
    });

    it('Проверяет наличие ошибки через getIsNetworkErrorPresent', () => {
      expect(iterator.next().value).toEqual(select(getIsNetworkErrorPresent));
    });

    it('Очищает ошибки через clearNetworkErrors при их наличии', () => {
      expect(iterator.next(true).value).toEqual(put(clearNetworkErrors()));
    });

    it('Успешно завершает работу', () => {
      expect(iterator.next().done).toEqual(true);
    });
  });

  describe('Корректно работает с ошибкой 401', () => {
    const iterator = requestFlow(fn, testData);
    const error = new Error('message');
    error.response = {
      status: 401
    };
    iterator.next();

    it('Переход к блоку catch при наличии ошибки', () => {
      expect(iterator.throw(error).value).toEqual(put(networkError(error)));
    });

    it('После ошибки отправляет экшен logout', () => {
      expect(iterator.next().value).toEqual(put(logout()));
    });
  });
});