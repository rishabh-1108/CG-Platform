// ProfilePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.pageWrapper}>
      <style>{`
        .profile-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.03);
        }
        .gradient-text {
          background: linear-gradient(135deg, #10b981, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .skill-tag {
          background: #f1f5f9;
          color: #334155;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          display: inline-block;
          border: 1px solid #e2e8f0;
          transition: all 0.2s;
        }
        .skill-tag:hover {
          background: #e0f2fe;
          border-color: #7dd3fc;
          color: #0369a1;
        }
        .progress-bar {
          height: 8px;
          background: #f1f5f9;
          border-radius: 4px;
          overflow: hidden;
          margin-top: 8px;
        }
        .progress-fill {
          height: '100%';
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }
      `}</style>

      {/* Main Content (1fr) */}
      <main style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        
        {/* Profile Header */}
        <section className="profile-card" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <div style={{
            width: '120px', 
            height: '120px', 
            borderRadius: '50%', 
            background: 'linear-gradient(135deg, #e0e7ff, #dbeafe)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            color: '#3b82f6',
            fontWeight: 'bold',
            boxShadow: 'inset 0 4px 10px rgba(0,0,0,0.05)'
          }}>
            R
          </div>
          <div style={{ flex: 1 }}>
            <h1 style={{ margin: '0 0 8px 0', fontSize: '2.2rem', color: '#0f172a' }}>Rishabh A M</h1>
            <p style={{ margin: '0 0 16px 0', color: '#64748b', fontSize: '1.1rem' }}>
              3rd Year B.E. Computer Science and Engineering
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button style={styles.primaryBtn}>Edit Profile</button>
              <button style={styles.secondaryBtn}>Share Resume</button>
            </div>
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
          {/* Left Column: Skills & Assessments */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <section className="profile-card">
              <h2 style={{ margin: '0 0 20px 0', fontSize: '1.3rem', color: '#0f172a' }}>Core Skills</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">C Programming</span>
                <span className="skill-tag">Data Structures</span>
                <span className="skill-tag">Algorithms</span>
                <span className="skill-tag">IoT Development</span>
              </div>
            </section>

            <section className="profile-card">
              <h2 style={{ margin: '0 0 20px 0', fontSize: '1.3rem', color: '#0f172a' }}>AI Career Assessment</h2>
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', fontWeight: '600' }}>
                  <span style={{ color: '#334155' }}>Software Engineering Readiness</span>
                  <span className="gradient-text">85%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', fontWeight: '600' }}>
                  <span style={{ color: '#334155' }}>Problem Solving (Logic)</span>
                  <span className="gradient-text">92%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '92%' }}></div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Projects & Activity */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
             <section className="profile-card">
              <h2 style={{ margin: '0 0 20px 0', fontSize: '1.3rem', color: '#0f172a' }}>Recent Projects</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={styles.projectItem}>
                  <div style={styles.projectIcon}>💻</div>
                  <div>
                    <h4 style={{ margin: '0 0 4px 0', color: '#1e293b' }}>Smart City Parking (IoT)</h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>ESP32 & Ultrasonic Sensors</p>
                  </div>
                </li>
                <li style={styles.projectItem}>
                  <div style={styles.projectIcon}>🎬</div>
                  <div>
                    <h4 style={{ margin: '0 0 4px 0', color: '#1e293b' }}>Staging</h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>2D Animation Project</p>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      {/* Sticky Module Sidebar (80px) */}
      <aside style={{ position: 'relative' }}>
        <div style={styles.sidebarContent}>
          <div style={styles.iconWrapper} onClick={() => navigate('/dashboard')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          </div>
          <div style={{...styles.iconWrapper, background: '#eff6ff'}} onClick={() => navigate('/profile')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
          <div style={styles.iconWrapper} onClick={() => navigate('/settings')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
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
  primaryBtn: {
    background: 'linear-gradient(135deg, #10b981, #059669)',
    color: 'white',
    border: 'none',
    padding: '10px 24px',
    borderRadius: '12px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)'
  },
  secondaryBtn: {
    background: '#ffffff',
    color: '#334155',
    border: '1px solid #e2e8f0',
    padding: '10px 24px',
    borderRadius: '12px',
    fontWeight: '600',
    cursor: 'pointer'
  },
  projectItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px',
    background: '#f8fafc',
    borderRadius: '16px',
    border: '1px solid #f1f5f9'
  },
  projectIcon: {
    width: '40px',
    height: '40px',
    background: '#ffffff',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    fontSize: '1.2rem'
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

export default ProfilePage;