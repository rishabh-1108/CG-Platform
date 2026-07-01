// AdminPanel.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.pageWrapper}>
      <style>{`
        .admin-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.03);
          transition: transform 0.2s ease;
        }
        .admin-card:hover {
          transform: translateY(-2px);
        }
        .gradient-text {
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .action-btn {
          padding: 8px 16px;
          border-radius: 12px;
          border: none;
          background: #f1f5f9;
          color: #334155;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .action-btn:hover {
          background: #e2e8f0;
        }
        .btn-primary {
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: white;
        }
        .btn-primary:hover {
          background: linear-gradient(135deg, #1d4ed8, #4338ca);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
        }
      `}</style>

      {/* Main Content (1fr) */}
      <main style={styles.mainContent}>
        <header style={styles.header}>
          <div>
            <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: '800' }} className="gradient-text">
              Platform Administration
            </h1>
            <p style={{ margin: '8px 0 0 0', color: '#64748b', fontSize: '1.1rem' }}>
              Manage users, AI configuration, and platform metrics.
            </p>
          </div>
          <button className="action-btn btn-primary" style={{ padding: '12px 24px' }}>
            Generate Report
          </button>
        </header>

        {/* Stats Grid */}
        <section style={styles.statsGrid}>
          {[
            { label: 'Total Students', value: '14,205', trend: '+12%', color: '#eff6ff' },
            { label: 'Active Assessments', value: '3,842', trend: '+5%', color: '#f5f3ff' },
            { label: 'AI Tasks Generated', value: '89,431', trend: '+24%', color: '#f0fdf4' },
          ].map((stat, i) => (
            <div key={i} className="admin-card" style={{ backgroundColor: stat.color }}>
              <h3 style={{ margin: '0 0 12px 0', color: '#475569', fontSize: '1rem', fontWeight: '500' }}>
                {stat.label}
              </h3>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: '700', color: '#0f172a', lineHeight: '1' }}>
                  {stat.value}
                </span>
                <span style={{ color: '#16a34a', fontWeight: '600', fontSize: '0.9rem', marginBottom: '4px' }}>
                  {stat.trend}
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Recent Activity Table */}
        <section className="admin-card" style={{ marginTop: '32px' }}>
          <h2 style={{ margin: '0 0 24px 0', fontSize: '1.5rem', color: '#0f172a' }}>Recent User Sign-ups</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #f1f5f9' }}>
                  <th style={styles.th}>Name</th>
                  <th style={styles.th}>Role</th>
                  <th style={styles.th}>Status</th>
                  <th style={styles.th}>Date</th>
                  <th style={styles.th}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Anjali Sharma', role: 'Student', status: 'Active', date: 'Today' },
                  { name: 'Rahul Desai', role: 'Student', status: 'Pending', date: 'Today' },
                  { name: 'Dr. S. Menon', role: 'Mentor', status: 'Active', date: 'Yesterday' },
                ].map((user, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={styles.td}>{user.name}</td>
                    <td style={styles.td}><span style={styles.badge}>{user.role}</span></td>
                    <td style={styles.td}>
                      <span style={{...styles.statusBadge, 
                        background: user.status === 'Active' ? '#dcfce7' : '#fef08a',
                        color: user.status === 'Active' ? '#166534' : '#854d0e'
                      }}>
                        {user.status}
                      </span>
                    </td>
                    <td style={styles.td}>{user.date}</td>
                    <td style={styles.td}>
                      <button className="action-btn" style={{ fontSize: '0.8rem', padding: '6px 12px' }}>Review</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* Sticky Module Sidebar (80px) */}
      <aside style={styles.sidebar}>
        <div style={styles.sidebarContent}>
          <div style={styles.iconWrapper} onClick={() => navigate('/dashboard')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          </div>
          <div style={styles.iconWrapper} onClick={() => navigate('/settings')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
          </div>
          <div style={styles.iconWrapper} onClick={() => navigate('/profile')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
        </div>
      </aside>
    </div>
  );
};

const styles = {
  pageWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 80px',
    gap: '40px',
    minHeight: '100vh',
    padding: '40px',
    backgroundColor: '#f8fafc',
    boxSizing: 'border-box',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '16px'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px'
  },
  th: {
    padding: '16px',
    color: '#64748b',
    fontWeight: '600',
    fontSize: '0.9rem'
  },
  td: {
    padding: '16px',
    color: '#334155',
    fontSize: '0.95rem'
  },
  badge: {
    background: '#f1f5f9',
    padding: '4px 10px',
    borderRadius: '12px',
    fontSize: '0.85rem',
    fontWeight: '500'
  },
  statusBadge: {
    padding: '4px 10px',
    borderRadius: '12px',
    fontSize: '0.85rem',
    fontWeight: '600'
  },
  sidebar: {
    position: 'relative'
  },
  sidebarContent: {
    position: 'sticky',
    top: '40px',
    background: '#ffffff',
    borderRadius: '24px',
    padding: '24px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '32px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
    height: 'fit-content'
  },
  iconWrapper: {
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '16px',
    cursor: 'pointer',
    transition: 'background 0.2s',
  }
};

export default AdminPanel;