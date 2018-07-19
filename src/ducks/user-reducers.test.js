import React from 'react';
import { shallow } from 'enzyme';
import {
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoFailure,
} from "./user-actions";
import {LOADING_STATE} from './user-reducers'

describe('Редьюсер юзеров', () => {

  jest.mock('../api');
  const getUserInformation = require('../api').getUserInformation;
  getUserInformation.mockImplementation(() => new Promise(r => r(['test', 'data'])));

  const storeMock = {
    dispatch: jest.fn().mockImplementation(() => ''),
  };

  storeMock.dispatch(getUserInfoRequest);

  expect(LOADING_STATE).toEqual('AAA');



});