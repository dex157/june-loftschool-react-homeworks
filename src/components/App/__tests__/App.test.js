import React from 'react';
import App from '../App';
import Market from '../../Market';
import Farm from '../../Farm';
import Budget from '../../Budget';
import { shallow } from 'enzyme';

describe('Компонент App', () => {
  const wrapper = shallow(<App />);
  it('Содержит компонент <Market/>', () => {
    expect(wrapper.contains(<Market />)).toBeTruthy();
  });
  it('Содержит компонент <Farm/>', () => {
    expect(wrapper.contains(<Farm />)).toBeTruthy();
  });
  it('Содержит компонент <Budget/>', () => {
    expect(wrapper.contains(<Budget />)).toBeTruthy();
  });
});
