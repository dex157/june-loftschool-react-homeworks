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
    ids={[follower1, follower2]}
    fetchFollowersRequest={jest.fn()}
  />);

  describe('render', () => {
    it('содержит лоадер/спинер, если isFetcing === true', () => {
      expect(wrapper.find('.spinner')).toHaveLength(1);
    });

    it('содержит столько followers, сколько содержится в ids', () => {
      wrapper.setProps({ isFetching: false });
      expect(wrapper.find('.follower')).toHaveLength(2);
    });

    it('содержит аватары подписчиков(followers)', () => {
      expect(wrapper.find('.follower__avatar')).toHaveLength(2);
    });

    it('содержит логины подписчиков(followers)', () => {
      expect(wrapper.find('.follower__login')).toHaveLength(2);
    });

    it('ссылка с логина подписчика ведет на /user/{user.login}', () => {
      wrapper.find('.follower__link').forEach((node, i) => {
        expect(node.prop('to')).toEqual(`/user/${wrapper.instance().props.ids[i].login}`);
      });
    });
  });

  describe('Методы компоненты', () => {
    it('содержит метод класса componentDidMount', () => {
      expect(wrapper.instance().componentDidMount).toBeDefined();
    });
  });
});