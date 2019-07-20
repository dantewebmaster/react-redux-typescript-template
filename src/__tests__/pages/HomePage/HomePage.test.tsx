import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import HomePage from '../../../pages/HomePage';

describe('Home page init', () => {
  it('must renders welcome message', () => {
    const wrapper = shallow(<HomePage />);
    const welcome = <h1>Welcome to React</h1>;
    expect(wrapper.contains(welcome)).toBeTruthy();
  });

  it('must have a link to users and repositories page', () => {
    const wrapper = shallow(<HomePage />);
    const linkToUsers = (
      <Link to="/users">
        <h2>Link to users container</h2>
      </Link>
    );
    const linkToRepositories = (
      <Link to="/repositories">
        <h2>Link to repositories container</h2>
      </Link>
    );
    expect(wrapper.contains(linkToUsers)).toBeTruthy();
    expect(wrapper.contains(linkToRepositories)).toBeTruthy();
  });
});
