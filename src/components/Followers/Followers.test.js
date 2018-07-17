import React from 'react';
import { Followers } from './Followers';
import  Follower  from '../Follower';
import { shallow } from 'enzyme';

describe('Компонент Followers', () => {
  const wrapper = shallow(
  <Followers
      isFetching={false}
      fetchFollowersRequest={jest.fn()}
      followers={ 
        [
          {
            name: "Test1",
            url: 'Test1'
          },
          {
            name: 'Test2',
            url: 'Test2'
          }
        ]
      }
  />);

  it('Содержит метода класса `componentDidMount`', () => {
    expect(wrapper.instance().componentDidMount).toBeDefined();
  });

  it('Содержит спинер/лоадер если props.isFetching === true', () => {
    wrapper.setProps({ isFetching: true });
    expect(wrapper.find('.spinner')).toHaveLength(1);
  });

  it('Компоненты `Follower` в том количестве, в котором передаются в props.followers.', () => {
    wrapper.setProps({ isFetching: false });
    expect(wrapper.find(Follower)).toHaveLength(2);
  });
});