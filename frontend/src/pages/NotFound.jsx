import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="auth-card">
    <h1>Page not found</h1>
    <p className="muted">The page you are looking for does not exist.</p>
    <Link className="primary-button" to="/login">
      Back to login
    </Link>
  </section>
);

export default NotFound;
