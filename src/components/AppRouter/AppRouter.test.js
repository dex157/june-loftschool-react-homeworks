import React from 'react';
import { Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import { AppRouter } from './AppRouter';
import PrivateRoute from '../PrivateRoute';
import UserPage from '../UserPage';
import Login from '../Login';

describe('Компонент <AppRouter />', () => {
  const wrapper = shallow(<AppRouter />);

  it('Наличие <Switch>', () => {
    expect(wrapper.find('Switch')).toHaveLength(1);
  });

  it('Наличие <PrivateRoute path="/user/me" />', () => {
    expect(
      wrapper.contains(<PrivateRoute path="/user/me" component={UserPage} />)
    ).toBeTruthy();
  });

  it('Наличие <PrivateRoute path="/user/:name" />', () => {
    expect(
      wrapper.contains(<PrivateRoute path="/user/:name" component={UserPage} />)
    ).toBeTruthy();
  });

  it('Наличие <Route path="/login" />', () => {
    expect(
      wrapper.contains(<Route path="/login" component={Login} />)
    ).toBeTruthy();
  });
});
