import React from 'react';
import { shallow } from 'enzyme';
import { Followers } from './Followers'

describe('Компонент Followers', () => {

  let getFollowersMock = () => 'o_0';

  it('Компонента имеет метод componentDidMount', () => {

    const wrapper = shallow(
      <Followers isFetching={false} followers={{followers : []}} getFollowersRequest={getFollowersMock}/>
    );

    expect(wrapper.instance().componentDidMount).toBeDefined();
  });

  it('Компонента имеет Spinner при соответствующем флаге', () => {

    const wrapper = shallow(
      <Followers isFetching={true} getFollowersRequest={getFollowersMock}/>
    );

    expect(wrapper.find('i')).toHaveLength(1);
  });

  it('Возвращаются компоненты Followers в том количестве, в котором передаются в props.followers', () => {

    const followerData = {followers : [{id : 1, login: 'a', avatar_url: ''}, {id : 2, login: 'b', avatar_url: ''}]};

    const wrapper = shallow(
      <Followers isFetching={false} followers={followerData} getFollowersRequest={getFollowersMock}/>
    );

    expect(wrapper.find('Follower')).toHaveLength(2);
  });

});
