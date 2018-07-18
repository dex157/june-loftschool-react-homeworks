import React from 'react';
import Step from './Step';
import { shallow } from 'enzyme';

describe('Компонент Step', () => {
  const onClickMock = jest.fn();
  const wrapper = shallow(
    <Step number={1} onClick={onClickMock} clickable>
      test string
    </Step>,
  );
  describe('Рендер', () => {
    describe('Должен присутствовать элемент с классом ', () => {
      it('step', () => {
        expect(wrapper.find('.step')).toHaveLength(1);
      });

      it('step__number', () => {
        expect(wrapper.find('.step__number')).toHaveLength(1);
      });

      it('step__title', () => {
        expect(wrapper.find('.step__title')).toHaveLength(1);
      });
    });

    it('Если props isSelected=true должен присутствовать элемент с классом step-selected', () => {
      const wrapper = shallow(
        <Step isSelected number={1} onClick={onClickMock}>
          test string
        </Step>,
      );
      expect(wrapper.find('.step.step-selected')).toHaveLength(1);
    });

    it('Если props isClickable=true, должен присутствовать класс step-clickable вместе с классом step', () => {
      const wrapper = shallow(
        <Step isSelected={false} isClickable number={1} onClick={onClickMock}>
          test string
        </Step>,
      );
      expect(wrapper.find('.step.step-clickable')).toHaveLength(1);
    });

    it('Тег с классом step__number должен содержать номер переданный через props number', () => {
      expect(wrapper.find('.step__number').text()).toEqual('1');
    });

    it('Тег с классом step__title должен содержать текст переданный через children', () => {
      expect(wrapper.find('.step__title').text()).toEqual('test string');
    });
  });

  describe('Методы класса', () => {
    describe('handleClick', () => {
      it('Должен присутствовать метод handleClick', () => {
        expect(wrapper.instance().handleClick).toBeDefined();
      });
      describe('При вызове', () => {
        it('Если isClickable=true, должен вызываться метод onClick переданный через props', () => {
          const onClickMock = jest.fn();
          const wrapper = shallow(
            <Step number={1} onClick={onClickMock} isClickable>
              test string
            </Step>,
          );
          wrapper.instance().handleClick();
          expect(onClickMock).toHaveBeenCalledTimes(1);
        });

        it('Если isClickable=false, метод onClick переданный через props не должен вызываться', () => {
          const onClickMock = jest.fn();
          const wrapper = shallow(
            <Step number={1} onClick={onClickMock} isClickable={false}>
              test string
            </Step>,
          );
          wrapper.instance().handleClick();
          expect(onClickMock).toHaveBeenCalledTimes(0);
        });

        it('Если isClickable=true, должен вызываться метод onClick переданный через props c аргументом равным number переданным через props', () => {
          const onClickMock = jest.fn();
          const wrapper = shallow(
            <Step number={999} onClick={onClickMock} isClickable>
              test string
            </Step>,
          );
          wrapper.instance().handleClick();
          expect(onClickMock).toBeCalledWith(999);
        });
      });
    });
  });
});
