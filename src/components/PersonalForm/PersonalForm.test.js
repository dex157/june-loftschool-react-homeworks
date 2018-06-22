import React from 'react';
import PersonalForm from './PersonalForm';
import { shallow } from 'enzyme';

describe('Компонент PersonalForm', () => {
  describe('Рендер', () => {
    const wrapper = shallow(<PersonalForm />);

    describe('Должен присутствовать элемент с классом ', () => {
      it('.personal-form', () => {
        expect(wrapper.find('.personal-form')).toHaveLength(1);
      });
      it('.personal-form input[name="firstName"]', () => {
        expect(wrapper.find('.personal-form input[name="firstName"]')).toHaveLength(1);
      });
      it('.personal-form input[name="lastName"]', () => {
        expect(wrapper.find('.personal-form input[name="lastName"]')).toHaveLength(1);
      });
      it('.personal-form input[name="email"]', () => {
        expect(wrapper.find('.personal-form input[name="email"]')).toHaveLength(1);
      });

      it('onChange input[name="firstName"] должен вызывать handleChangeForm', () => {
        const onChangeFormMock = jest.fn();
        const wrapper = shallow(<PersonalForm onChangeForm={onChangeFormMock} />);

        wrapper.find('input[name="firstName"]').simulate('change', {
          target: { value: 'test-value', name: 'test-name' },
        });

        expect(onChangeFormMock).toHaveBeenCalledTimes(1);
        expect(onChangeFormMock).toHaveBeenLastCalledWith('test-name', 'test-value');
      });
      it('onChange input[name="lastName"] должен вызывать handleChangeForm', () => {
        const onChangeFormMock = jest.fn();
        const wrapper = shallow(<PersonalForm onChangeForm={onChangeFormMock} />);

        wrapper.find('input[name="lastName"]').simulate('change', {
          target: { value: 'test-value', name: 'test-name' },
        });

        expect(onChangeFormMock).toHaveBeenCalledTimes(1);
        expect(onChangeFormMock).toHaveBeenLastCalledWith('test-name', 'test-value');
      });
      it('onChange input[name="email"] должен вызывать handleChangeForm', () => {
        const onChangeFormMock = jest.fn();
        const wrapper = shallow(<PersonalForm onChangeForm={onChangeFormMock} />);

        wrapper.find('input[name="email"]').simulate('change', {
          target: { value: 'test-value', name: 'test-name' },
        });

        expect(onChangeFormMock).toHaveBeenCalledTimes(1);
        expect(onChangeFormMock).toHaveBeenLastCalledWith('test-name', 'test-value');
      });
    });

    describe('Методы класса', () => {
      const onChangeFormMock = jest.fn();
      const wrapper = shallow(<PersonalForm onChangeForm={onChangeFormMock} />);

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
    });
  });
});
