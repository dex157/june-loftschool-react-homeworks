import React from 'react';
import { shallow } from 'enzyme';
import { Route, Switch } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import  PrivateRoute   from '../PrivateRoute';

describe('Компонента AppRouter', () => {
    const wrapper = shallow(<AppRouter />);
    
    it('Cодержит <Switch />', () => {
      expect(wrapper.find(Switch)).toHaveLength(1);
    });

    it('Cодержит <Route path="/login" />', () => {
        expect(wrapper.containsMatchingElement(<Route path="/login" />)).toBeTruthy();
        
      });

    it('Cодержит <PrivateRoute path="/user/me" />', () => {
        console.log(wrapper.debug());
        expect(wrapper.containsMatchingElement(<PrivateRoute path="/user/me"/> )).toBeTruthy();
    });

    it('Cодержит <PrivateRoute path="/user/:name" />', () => {
        expect(wrapper.containsMatchingElement(<PrivateRoute path="/user/:name" />)).toBeTruthy();
        
    });
});
