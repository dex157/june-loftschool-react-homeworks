import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import PrivateRoute from 'components/PrivateRoute';

const wrapper = shallow(
  <AppRouter
    isAuthorized={false}
    isNetworkErrorPresent={false}
    logout={jest.fn()}
  />
);

describe('Компонент AppRouter', () => {
  it('Содержит компонент Switch', () => {
    expect(wrapper.find('Switch')).toHaveLength(1);
  });

  it('Содержит компонент `<Route path="/login" />`', () => {
    expect(
      wrapper.containsMatchingElement(<Route path="/login" />)
    ).toBeTruthy();
  });

  it('Содержит компонент <PrivateRoute path="/users/me" />', () => {
    expect(
      wrapper.containsMatchingElement(<PrivateRoute path="/users/me" />)
    ).toBeTruthy();
  });

  it('Содержит компонент <PrivateRoute path="/users/:name" />', () => {
    expect(
      wrapper.containsMatchingElement(<PrivateRoute path="/users/:name" />)
    ).toBeTruthy();
  });
});
