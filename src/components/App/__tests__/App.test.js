import React from 'react';
import App from 'components/App';
import Market from 'components/Market';
import Farm from 'components/Farm';
import Budget from 'components/Budget';
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
