import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h2>About</h2>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/something">Something</Link>
      </nav>
      <p>This is the About page.</p>
    </div>
  );
}

export default About;
