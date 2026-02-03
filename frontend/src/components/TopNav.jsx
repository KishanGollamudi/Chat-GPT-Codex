import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const TopNav = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="top-nav">
      <div className="brand">Fullstack DevOps</div>
      <nav>
        {token ? (
          <button className="ghost-button" type="button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <div className="nav-links">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default TopNav;
