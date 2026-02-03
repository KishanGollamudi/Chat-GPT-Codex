import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [formState, setFormState] = useState({ name: '', email: '', password: '' });
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
      const response = await api.post('/auth/register', formState);
      login(response.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to create account.');
    }
  };

  return (
    <section className="auth-card">
      <h1>Create your account</h1>
      <p className="muted">Launch your production DevOps workspace.</p>
      <form onSubmit={handleSubmit} className="form-stack">
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Alex Morgan"
            value={formState.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="alex@company.com"
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
            placeholder="Create a password"
            value={formState.password}
            onChange={handleChange}
            required
          />
        </label>
        {error && <div className="form-error">{error}</div>}
        <button className="primary-button" type="submit">
          Create account
        </button>
      </form>
      <p className="muted">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </section>
  );
};

export default Register;
