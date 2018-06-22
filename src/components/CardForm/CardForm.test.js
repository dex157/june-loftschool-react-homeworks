import React from 'react';
import CardForm from './CardForm';
import { shallow, mount } from 'enzyme';

describe('Компонент CardForm', () => {
  describe('Рендер', () => {
    const wrapper = shallow(<CardForm onChangeTimeOver={jest.fn()} />);

    describe('Должен присутствовать элемент с классом ', () => {
      it('.card-form', () => {
        expect(wrapper.find('.card-form')).toHaveLength(1);
      });
      it('.card-form input[name="cardNumber"]', () => {
        expect(wrapper.find('.card-form input[name="cardNumber"]')).toHaveLength(1);
      });

      it('onChange input[name="cardNumber"] должен вызывать handleChangeForm', () => {
        const onChangeFormMock = jest.fn();
        const wrapper = shallow(
          <CardForm onChangeTimeOver={jest.fn()} onChangeForm={onChangeFormMock} />,
        );

        wrapper.find('input[name="cardNumber"]').simulate('change', {
          target: { value: 'test-value', name: 'test-name' },
        });

        expect(onChangeFormMock).toHaveBeenCalledTimes(1);
        expect(onChangeFormMock).toHaveBeenLastCalledWith('test-name', 'test-value');
      });
    });

    describe('Методы класса', () => {
      const onChangeFormMock = jest.fn();
      const wrapper = mount(
        <CardForm onChangeTimeOver={jest.fn()} onChangeForm={onChangeFormMock} />,
      );

      describe('handleChangeForm', () => {
        it('Присутствует', () => {
          expect(wrapper.instance().handleChangeForm).toBeDefined();
        });
        it('При вызове вызывает функцию onChangeForm переданную через props, аргументами name и value становятся значения из event.target', () => {
          wrapper.instance().handleChangeForm({
            target: { name: 'test-name', value: 'test-value' },
          });
          expect(onChangeFormMock).toHaveBeenCalledTimes(1);
          expect(onChangeFormMock).toHaveBeenLastCalledWith('test-name', 'test-value');
        });
      });
      describe('componentWillUnmount', () => {
        it('Присутствует', () => {
          expect(wrapper.instance().componentWillUnmount).toBeDefined();
        });
      });
      describe('constructor', () => {
        it('Присутствует', () => {
          expect(wrapper.instance().constructor).toBeDefined();
        });
      });
    });
  });
});
