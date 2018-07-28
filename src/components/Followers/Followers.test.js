import React from 'react';
import { shallow } from 'enzyme';
import { Followers } from './Followers';
import Loader from '../Loader';

const getShallowWrapper = () => {
  return shallow(
    <Followers
      login={'test-login'}
      isFetching={false}
      followers={[
        { login: 'test-login-1', avatar_url: 'test-avatar-url-1' },
        { login: 'test-login-2', avatar_url: 'test-avatar-url-2' },
        { login: 'test-login-3', avatar_url: 'test-avatar-url-3' }
      ]}
      getFollowersRequest={jest.fn()}
    />
  );
};

describe('Компонента Followers', () => {
  it('Cодержит метод componentDidMount', () => {
    const wrapper = getShallowWrapper();
    expect(wrapper.instance().componentDidMount).toBeDefined();
  });

  it('Cодержит <Loader /> при props.isFetching === true', () => {
    const wrapper = getShallowWrapper();
    wrapper.setProps({ isFetching: true });
    expect(wrapper.containsMatchingElement(<Loader />)).toBeTruthy();
  });

  it('Возвращаются компоненты Follower в том количестве, в  котором передаются в props.followers', () => {
    const wrapper = getShallowWrapper();
    expect(wrapper.find('Follower')).toHaveLength(3);
  });
});
