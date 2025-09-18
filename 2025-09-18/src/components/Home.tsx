import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/something">Something</Link>
      </nav>
      <p>Welcome to the Home page!</p>
    </div>
  );
}

export default Home;
