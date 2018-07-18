import { Followers } from './index'
import { shallow, mount } from 'enzyme'
import React from 'react'

describe("Компонент Followers", () => {
    const wrapper = shallow(<Followers fetchFollowersRequest={jest.fn()} isFetched={false}/>);
    it("имеет componentDidMount", () => {
        expect(wrapper.instance().componentDidMount).toBeDefined();
    });
    it('показывает спиннер при isFetched === false', () => {
        expect(wrapper.find('.spinner')).toHaveLength(1);
    });
})