import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../pages/HomePage';

it('renders welcome message', () => {
  const wrapper = shallow(<HomePage />);
  const welcome = <h1>Welcome to React</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
