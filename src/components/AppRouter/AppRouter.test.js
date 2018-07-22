import React from 'react'
import { shallow } from 'enzyme'
import { Route, Switch } from 'react-router-dom'
import { AppRouter } from './AppRouter'
import PrivateRoute from '../PrivateRoute'

describe("AppRouter ->", () => {
    const wrapper = shallow(<AppRouter />);

    it('содержит Switch', () => {
        expect(wrapper.find(Switch)).toHaveLength(1);
    });
    it("содержит PrivateRoute с path='/users/me'", () => {
        expect(wrapper.containsMatchingElement(<PrivateRoute path='/users/me' />)).toBeTruthy()
    });
    it("содержит PrivateRoute с path='/users/:name'", () =>{
        expect(wrapper.containsMatchingElement(<PrivateRoute path='/users/:name' />)).toBeTruthy()
    });
    it("содержит компоненту Route path='/login'", () => {
        expect(wrapper.containsMatchingElement(<Route path='/login' />)).toBeTruthy()
    })
})