import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="main">
      <div className="container">
        <h1 className="center">404</h1>
        <h2 className="center">Page Not Found</h2>
        <Link to="/" style={{ color: '#414141', fontSize: '24px' }}>
          {' '}
          Home{' '}
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
