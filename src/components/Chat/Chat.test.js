import React from 'react';
import Chat from '../Chat';
import Message from '../Message';
import { shallow } from 'enzyme';

describe('Компонента Chat', () => {
  const wrapper = shallow(<Chat />);

  describe('render', () => {
    it('Содержит div с классом chat', () => {
      expect(wrapper.find('div.chat')).toHaveLength(1);
    });
    it('Содержит input с классом input-message', () => {
      expect(
        wrapper.find('input.input-message'),
      ).toHaveLength(1);
    });
  });

  describe('Методы компоненты', () => {
    const wrapper = shallow(<Chat />);
    it('Содержит метод changeInputMessage', () => {
      expect(
        wrapper.instance().changeInputMessage,
      ).toBeDefined();
    });

    it('Содержит метод sendMessageOnEnter', () => {
      expect(
        wrapper.instance().sendMessageOnEnter,
      ).toBeDefined();
    });
  });

  describe('Стейт компоненты', () => {
    const wrapper = shallow(<Chat />);
    it('Содержит пустой массив messages', () => {
      expect(wrapper.state().messages).toEqual([]);
    });
    it("Содержит поле messageInput со значением ''", () => {
      expect(wrapper.state().messageInput).toEqual('');
    });
  });

  describe('Поведение компоненты', () => {
    it('При вводе значения в input, оно сохраняется в state.messageInput', () => {
      const wrapper = shallow(<Chat />);

      wrapper
        .find('input')
        .simulate('change', { target: { value: 10 } });

      expect(wrapper.state().messageInput).toEqual(10);
    });

    it('При нажатии Enter в input, значение в state.messages станет содержать [{text: значение_из_messageInput}], а state.messageInput станет пустой строкой ""', () => {
      const wrapper = shallow(<Chat />);

      wrapper
        .find('input')
        .simulate('change', { target: { value: 10 } });

      wrapper
        .find('input')
        .simulate('keyPress', { key: 'Enter' });

      expect(wrapper.state().messages).toEqual([
        { text: 10 },
      ]);
    });
  });

  describe('проверка рендера компонент Messages', () => {
    it('Содержимое state.messages рендерится в список компонент Message', () => {
      const wrapper = shallow(<Chat />);
      wrapper
        .find('input')
        .simulate('change', { target: { value: 10 } });
      wrapper
        .find('input')
        .simulate('keyPress', { key: 'Enter' });

      expect(
        wrapper.contains(<Message text={10} />),
      ).toBeTruthy();
    });
  });
});
