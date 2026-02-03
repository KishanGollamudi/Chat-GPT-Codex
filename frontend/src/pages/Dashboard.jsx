import { useEffect, useState } from 'react';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

const metrics = [
  { label: 'Pipelines', value: '12 Active' },
  { label: 'Deployments', value: '4 Pending' },
  { label: 'Incidents', value: '0 Open' }
];

const Dashboard = () => {
  const { token } = useAuth();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await api.get('/users/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProfile(response.data.user);
      } catch (err) {
        setError(err.response?.data?.message || 'Unable to load profile.');
      }
    };

    if (token) {
      loadProfile();
    }
  }, [token]);

  return (
    <section className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Deployment command center</h1>
          <p className="muted">
            Monitor your production systems and keep deployments stable.
          </p>
        </div>
        <div className="status-pill">Production Healthy</div>
      </div>

      <div className="metric-grid">
        {metrics.map((metric) => (
          <div key={metric.label} className="metric-card">
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </div>
        ))}
      </div>

      <div className="profile-card">
        <h2>Profile</h2>
        {error && <p className="form-error">{error}</p>}
        {profile ? (
          <div className="profile-details">
            <div>
              <span>Name</span>
              <strong>{profile.name}</strong>
            </div>
            <div>
              <span>Email</span>
              <strong>{profile.email}</strong>
            </div>
          </div>
        ) : (
          <p className="muted">Loading profile...</p>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
