import React from 'react';
import { AuthorizeProvider } from './AuthorizeProvider';
import { shallow } from 'enzyme';

describe('компонента AuthorizeProvider', () => {
  describe('Компонента при создании', () => {
    const wrapper = shallow(<AuthorizeProvider />);

    it('Стейт содержит только поле isAuthorized: false', () => {
      expect(wrapper.state()).toEqual({ isAuthorized: false });
    });

    it('Компонента имеет метод authorzeUser', () => {
      expect(wrapper.instance().authorizeUser).toBeDefined();
    });
  });

  describe('поведение метода autorizeUser', () => {
    const wrapper = shallow(<AuthorizeProvider />);

    it('С аргументами ("student", "123") возвращает true', () => {
      expect(wrapper.instance().authorizeUser('student', '123')).toBeTruthy();
    });

    it('С отличными от правильных аргументов например ("student", "124") возвращает false', () => {
      expect(wrapper.instance().authorizeUser('student', '124')).toBeFalsy();
    });

    it('С аргументами ("student", "123") устанавливает state в {isAuthorized: true}', () => {
      wrapper.instance().authorizeUser('student', '123');
      expect(wrapper.state()).toEqual({ isAuthorized: true });
    });
  });
});
