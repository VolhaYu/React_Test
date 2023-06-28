import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="main">
      <div className="container">
        <h1 className="center">404</h1>
        <h2 className="center">Page Not Found</h2>
        <Link to="/"> Home </Link>
      </div>
    </main>
  );
}

export default NotFound;
