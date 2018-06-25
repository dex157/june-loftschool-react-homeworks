import React from 'react';
import CardNumberHolder from '../CardNumberHolder';
import {shallow} from 'enzyme';

describe('Компонент CardNumberHolder', () => {
  const wrapper = shallow(<CardNumberHolder />);
  describe('Методы класса', () => {
    describe('render', () => {
      it('Присутствует компонент CardNumberInput', () => {
        expect(wrapper.find('CardNumberInput')).toHaveLength(1);
      });

      it('Компоненту CardNumberInput передается метод CardNumberHolder.handleChange в props.onChange', () => {
        const el = wrapper.find('CardNumberInput');
        expect(el.props().onChange).toEqual(wrapper.instance().handleChange);
      });
    });
  });

  describe('state', () => {
    it('содержит поле cardNumber', () => {
      expect(wrapper.state().cardNumber).toBeDefined();
    });
    it(`поле cardNumber по умолчанию равно ''`, () => {
      expect(wrapper.state().cardNumber).toEqual('');
    });
  });
});
