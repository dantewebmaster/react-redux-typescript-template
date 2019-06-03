import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h1>Welcome to React</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
