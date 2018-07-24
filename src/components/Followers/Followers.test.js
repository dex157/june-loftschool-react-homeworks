import React from 'react';
import { shallow } from 'enzyme';
import { Followers } from './Followers';

describe('Компонента Followers', () => {
  function CreateFollower(i) {
    this.id = `test${i}-id`;
    this.login = `test${i}-login`;
    this.avatar_url = `test${i}-avatar`;
  };

  const follower1 = new CreateFollower(1),
  follower2 = new CreateFollower(2);
  const wrapper = shallow(
  <Followers
    login="test-login"
    isFetching={true}
    data={[follower1, follower2]}
    fetchFollowersRequest={jest.fn()}
  />);

  describe('render', () => {
    it('Contains spinner if isFetcing === true', () => {
      expect(wrapper.find('.spinner')).toHaveLength(1);
    });

    it('Contains avatars of followers', () => {
      expect(wrapper.find('.followers-avatar')).toHaveLength(0);
    });

    it('Contains logins of followers', () => {
      expect(wrapper.find('.follower__login')).toHaveLength(0);
    });

    it('Have link to /user/{user.login}', () => {
      wrapper.find('.follower__link').forEach((node, i) => {
        expect(node.prop('to')).toEqual(`/users/${wrapper.instance().props.data[i].login}`);
      });
    });
  });
});
