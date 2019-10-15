import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="home-page text-center">
      <h1>Welcome to RRTT</h1>
      <p>React. Redux. Typescript. Template.</p>
      <hr />
      <Link to="/repositories" className="btn btn-large bg-primary">
        Link to repositories container
      </Link>
      <Link to="/users" className="btn btn-large bg-primary">Link to users container</Link>
    </div>
  );
}
