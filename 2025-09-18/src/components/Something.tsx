import React from 'react';
import { Link } from 'react-router-dom';

function Something() {
  return (
    <div>
      <h2>Something</h2>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/something">Something</Link>
      </nav>
      <p>Here is the Something page.</p>
    </div>
  );
}

export default Something;
