import React from 'react';
import { shallow } from 'enzyme';
import { UserPage } from './UserPage';

const fn = jest.fn();
const wrapper = shallow(
  <UserPage
    match={{ params: {} }}
    fetchOwnerRequest={fn}
    fetchUserRequest={fn}
    user={null}
  />
);

describe('Компонент UserPage', () => {
  describe('Общее поведение', () => {
    it('Содержит метод componentDidUpdate', () => {
      expect(wrapper.instance().componentDidUpdate).toBeDefined();
    });

    it('Содержит Spinner если props.isFetching === true', () => {
      wrapper.setProps({ isFetching: true });
      expect(wrapper.find('.spinner')).toHaveLength(1);
    });

    it('Содержит сообщение об отсутствии пользователя если isFetching === false && user == null', () => {
      wrapper.setProps({ isFetching: false, user: null });

      expect(wrapper.contains('Пользователь не найден!')).toBeTruthy();
    });
  });

  describe('При наличии user содержит следующие элементы:', () => {
    beforeAll(() => {
      wrapper.setProps({
        isFetching: false,
        user: {
          login: 'mihailKuzmintsev',
          avatar_url: 'test_avatar',
          followers: 10,
          repos: 20
        }
      });
    });

    it('Аватар пользователя', () => {
      expect(wrapper.find('img').prop('src')).toEqual('test_avatar');
    });

    it('Логин пользователя', () => {
      expect(wrapper.contains('mihailKuzmintsev')).toBeTruthy();
    });

    it('Количество фолловеров', () => {
      expect(wrapper.find('[data-test-followers]').text()).toBe(
        'Followers: 10'
      );
    });

    it('Компонент <Followers /> c передачей login через props', () => {
      expect(wrapper.find('Connect(Followers)').prop('login')).toBe(
        'mihailKuzmintsev'
      );
    });
  });
});
