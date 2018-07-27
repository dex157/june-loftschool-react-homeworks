import React from 'react';
import {AppRouter} from './AppRouter';
import { Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import { shallow } from 'enzyme';

describe('Компонент AppRouter', () => {
  const wrapper = shallow(<AppRouter />);
  it('Содержит компоненту <PrivateRoute path="/users/me" />', () => {
    expect(wrapper.containsMatchingElement(<PrivateRoute path="/users/me" />)).toBeTruthy();
  });
  it('Содержит компоненту <PrivateRoute path="/users/:login" />', () => {
    expect(wrapper.containsMatchingElement(<PrivateRoute path="/users/:login" />)).toBeTruthy();
  });
  it('Содержит компоненту <Route path="/login" />', () => {
    expect(wrapper.containsMatchingElement(<Route path="/login" />)).toBeTruthy();
  });
});
