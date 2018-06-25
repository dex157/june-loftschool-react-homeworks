import React from 'react';
import CardNumberInput from './CardNumberInput';
import {mount} from 'enzyme';

describe('Компонент CardNumberInput', () => {
  describe('Методы класса', () => {
    const wrapper = mount(<CardNumberInput onChange={jest.fn()} />);

    describe('format', () => {
      it('Присутствует', () => {
        expect(wrapper.instance().format).toBeDefined();
      });

      describe('Добавляет пробелы после каждого 4 символа', () => {
        [
          ['12345', '1234 5'],
          ['123456789123456789', '1234 5678 9123 4567 89'],
          ['', ''],
          [null, '']
        ].forEach(pair => {
          it(`'${pair[0]}' -> '${pair[1]}'`, () => {
            expect(wrapper.instance().format(pair[0])).toEqual(pair[1]);
          });
        });

        it(`12345 -> '1234 5'`, () => {
          expect(wrapper.instance().format(12345)).toEqual('1234 5');
        });
      });
    });

    describe('normalize', () => {
      it('Присутствует', () => {
        expect(wrapper.instance().normalize).toBeDefined();
      });

      describe('Убирает пробелы из строки', () => {
        [
          ['1234 5', '12345'],
          ['1234 5678 9123 4567 89', '123456789123456789']
        ].forEach(pair => {
          it(`'${pair[0]}' -> '${pair[1]}'`, () => {
            expect(wrapper.instance().normalize(pair[0])).toEqual(pair[1]);
          });
        });
      });
    });

    describe('componentWillReceiveProps', () => {
      const wrapper = mount(
        <CardNumberInput cardNumber="" onChange={jest.fn()} />
      );

      it('Присутствует', () => {
        expect(wrapper.instance().componentWillReceiveProps).toBeDefined();
      });

      it(`При получении новых props '12345' меняет state компоненты state.number на '1234 5'`, () => {
        wrapper.setProps({cardNumber: '12345'});
        expect(wrapper.state().number).toEqual('1234 5');
      });
    });

    describe('render', () => {
      const onChangeMock = jest.fn();
      const wrapper = mount(
        <CardNumberInput cardNumber="" onChange={onChangeMock} />
      );

      it('Присутствует', () => {
        expect(wrapper.instance().render).toBeDefined();
      });

      it(`Присутствует input`, () => {
        expect(wrapper.find('input')).toHaveLength(1);
      });

      it(`При монтировании с props.cardNumber '12345', value у state.number должно быть '1234 5'`, () => {
        const onChangeMock = jest.fn();
        const wrapper = mount(
          <CardNumberInput cardNumber="12345" onChange={onChangeMock} />
        );

        expect(wrapper.state().number).toEqual('1234 5');
      });
    });
  });
});
