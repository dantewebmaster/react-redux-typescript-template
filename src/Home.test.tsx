import React from 'react';
import { shallow } from 'enzyme';
import Home from './pages/HomePage';

it('renders welcome message', () => {
  const wrapper = shallow(<Home />);
  const welcome = <h1>Welcome to React</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
