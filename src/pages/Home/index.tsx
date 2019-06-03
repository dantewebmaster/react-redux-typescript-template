import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
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
