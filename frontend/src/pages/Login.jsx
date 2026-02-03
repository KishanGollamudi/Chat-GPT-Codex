import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormState((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await api.post('/auth/login', formState);
      login(response.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to sign in.');
    }
  };

  return (
    <section className="auth-card">
      <h1>Welcome back</h1>
      <p className="muted">Sign in to access your DevOps dashboard.</p>
      <form onSubmit={handleSubmit} className="form-stack">
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="you@company.com"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formState.password}
            onChange={handleChange}
            required
          />
        </label>
        {error && <div className="form-error">{error}</div>}
        <button className="primary-button" type="submit">
          Sign in
        </button>
      </form>
      <p className="muted">
        New here? <Link to="/register">Create an account</Link>
      </p>
    </section>
  );
};

export default Login;
