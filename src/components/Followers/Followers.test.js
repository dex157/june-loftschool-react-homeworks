import React from 'react';
import { shallow } from 'enzyme';
import { Followers } from './Followers';
import Spinner from 'react-svg-spinner';

describe('Компонент Followers', () => {
  const wrapper = shallow(
    <Followers fetchFollowersRequest={jest.fn()} isFetching={true} />
  );
  it('имеет componentDidMount', () => {
    expect(wrapper.instance().componentDidMount).toBeDefined();
  });
  it('показывает спиннер при isFetching === true', () => {
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });
});
