import React from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from '../../helpers/isEmpty';

export default function HomePage() {
  const test: any = {};

  console.log('Testing isEmpty helper:', isEmpty(test));

  return (
    <div className="home-page">
      <h1>Welcome to React</h1>
      <hr />
      <Link to="/repositories">
        <h2>Link to repositories container</h2>
      </Link>
      <Link to="/users">
        <h2>Link to users container</h2>
      </Link>
    </div>
  );
}
