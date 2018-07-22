import { shallow, mount } from 'enzyme'
import { UserPage } from './UserPage'
import React from 'react'



describe("Методы компоненты UserPage -> ", () => {
    const wrapper = shallow(<UserPage match={{params: {}}} isFetched={true} user={{}} fetchTokenOwnerRequest={jest.fn()}/>);

    it("содержит componentDidUpdate", () => {
        expect(wrapper.instance().componentDidUpdate).toBeDefined();
    })
})

describe("Компонента UserPage render ->", () => {
    const wrapper = shallow(<UserPage match={{params: {}}} isFetched={true} user={{}} fetchTokenOwnerRequest={jest.fn()}/>);
    it("содержит спиннер, если isFetched: false", () => {
       wrapper.setProps({isFetched: false});
       expect(wrapper.find('.spinner')).toHaveLength(1)
    });
})

describe("Верстка UserPage -> ", () => {
    const wrapper = shallow(<UserPage match={{params: {}}} isFetched={true} user={{}} fetchTokenOwnerRequest={jest.fn()} />);
    it('содержит аватар пользователя', () => {
        expect(wrapper.find('.avatar')).toHaveLength(1)
    });
    it('содержит логин пользователя', () => {
        expect(wrapper.find('.login')).toHaveLength(1);
    });
    it('содержит фолловеров', () => {
        expect(wrapper.find('.followers')).toHaveLength(1);
    });
    it('рендерит фолловеров через props login', () => {
        expect(wrapper.find('.followers_container').props('login')).toBeTruthy();
    })
})