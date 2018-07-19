import React from 'react';
import { shallow } from 'enzyme';
import { AppRouter } from './AppRouter'
import { Route, Switch } from "react-router-dom";

describe('Компонент AppRouter', () => {

  const wrapper = shallow(
    <AppRouter />
  );

  it('Содержит компонент <Switch/>', () => {
    expect(wrapper.find('Switch')).toHaveLength(1);
  });

  it('Содержит компонент <PrivateRoute/> для себя', () => {
    expect(wrapper.find('Connect(PrivateRoute)').first().prop("path")).toEqual("/user/me");
  });

  it('Содержит компонент <PrivateRoute/> для кастомного пользователя', () => {
    expect(wrapper.find('Connect(PrivateRoute)').last().prop("path")).toEqual("/user/:name");
  });

  it('Содержит компонент <Route/> с указателем на логин', () => {
    expect(wrapper.find('Route').prop("path")).toEqual("/login");
  });

});