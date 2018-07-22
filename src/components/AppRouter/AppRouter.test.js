import React from 'react';
import { shallow } from 'enzyme';
import { Route, Switch } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import PrivateRoute from '../PrivateRoute';

describe('Компонента AppRouter', () => {
  const wrapper = shallow(<AppRouter />);
  
  it('содержит компоненту Switch', () => {
    expect(wrapper.find(Switch)).toHaveLength(1);
  });

  it('содержит компоненту <PrivateRoute path="/user/me" />', () => {
    expect(wrapper.containsMatchingElement(<PrivateRoute path="/user/me" />)).toBeTruthy();
  });

  it('содержит компоненту <PrivateRoute path="/user/:name" />', () => {
    expect(wrapper.containsMatchingElement(<PrivateRoute path="/user/:name" />)).toBeTruthy();
  });

  it('содержит комполненту <Route path="/login" />', () => {
    expect(wrapper.containsMatchingElement(<Route path="/login" />)).toBeTruthy();
  });
});