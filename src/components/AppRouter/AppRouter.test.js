import React from 'react';
import {AppRouter} from './AppRouter';
import { Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import { shallow } from 'enzyme';

describe('Компонент AppRouter', () => {
  const wrapper = shallow(<AppRouter />);
  it('Содержит компоненту <PrivateRoute path="/user/me" />', () => {
    expect(wrapper.containsMatchingElement(<PrivateRoute path="/user/me" />)).toBeTruthy();
  });
  it('Содержит компоненту <PrivateRoute path="/user/:name" />', () => {
    expect(wrapper.containsMatchingElement(<PrivateRoute path="/user/:name" />)).toBeTruthy();
  });
  it('Содержит компоненту <Route path="/login" />', () => {
    expect(wrapper.containsMatchingElement(<Route path="/login" />)).toBeTruthy();
  });
});