import React from 'react';
import { shallow } from 'enzyme';
import { Follower } from './Follower'

describe('Компонент Follower', () => {

  const wrapper = shallow(
    <Follower name="Vasya" avaUrl="http://nowhere.com/nobody.jpeg"/>
  );

  it('Компонент имеет переданный через props урл на картинку', () => {
    expect(wrapper.find('img').prop("src")).toEqual("http://nowhere.com/nobody.jpeg");
  });

  it('Компонент имеет переданный через props логин', () => {
    expect(wrapper.find('h3').text()).toEqual("Vasya");
  });

  it('ссылка с логина пользователя ведет на /user/{user.login}', () => {
    expect(wrapper.find('a').prop("href")).toEqual("/user/Vasya");
  });


});
