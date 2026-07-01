import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const IconTarget = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const IconZap = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
const IconBriefcase = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const IconCheck = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>;
const IconFile = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>;
const IconShield = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IconGear = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
const IconLogoutDoor = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>;
const IconTargetLarge = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const IconMessageSquare = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const IconBookOpen = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
const IconLightbulb = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A6 6 0 1 0 7.5 11.5c.76.76 1.23 1.52 1.41 2.5z"/></svg>;
const IconTrophy = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>;
const IconBrain = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/></svg>;
const IconUsers = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconPlay = <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>;
const IconMail = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const IconPhone = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const IconMapPin = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;

const navItems = [
  { name: 'Assessment', icon: IconTarget, path: '/assessment' },
  { name: 'Skills', icon: IconZap, path: '/skills' },
  { name: 'Opportunities', icon: IconBriefcase, path: '/opportunities' },
  { name: 'Tasks', icon: IconCheck, path: '/tasks' },
  { name: 'Articles', icon: IconFile, path: '/articles' }
];

export const DashboardHome = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('Assessment');

  return (
    <main style={{ padding: '32px', maxWidth: '1440px', margin: '0 auto', boxSizing: 'border-box' }}>
      <style>{`
        .hero-card { background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%); border-radius: 24px; padding: 40px; box-shadow: 0 10px 30px -10px rgba(14, 165, 233, 0.15); margin-bottom: 48px; }
        .hero-content { display: flex; gap: 40px; align-items: center; }
        .hero-text-area { flex: 1.2; text-align: left; }
        .hero-image-box { flex: 1; height: 360px; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.15); }
        .hero-image-box img { width: 100%; height: 100%; object-fit: cover; }
        
        .stats-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 48px; }
        .stat-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 28px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02); transition: transform 0.2s; }
        .stat-card:hover { transform: translateY(-2px); box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05); }
        .stat-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .stat-title { font-size: 15px; color: #64748b; font-weight: 600; }
        .stat-icon { display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 8px; }
        .stat-value { font-size: 40px; font-weight: 800; color: #1e293b; }

        .actions-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-bottom: 64px; }
        .action-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; transition: all 0.2s; cursor: pointer; text-align: left; }
        .action-card:hover { box-shadow: 0 12px 20px -8px rgba(0, 0, 0, 0.08); border-color: #cbd5e1; }
        .action-icon { margin-bottom: 16px; }

        .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 80px; }
        .feature-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 32px; text-align: left; transition: box-shadow 0.2s; }
        .feature-card:hover { box-shadow: 0 12px 25px -8px rgba(0, 0, 0, 0.08); }

        .pillar-row { display: flex; align-items: center; gap: 48px; margin-top: 32px; background: #f8fafc; border-radius: 24px; overflow: hidden; border: 1px solid #e2e8f0; }
        .pillar-row.reverse { flex-direction: row-reverse; }
        .pillar-content { flex: 1; padding: 48px; text-align: left; }
        .pillar-image { flex: 1; min-height: 400px; display: flex; align-items: center; justify-content: center; padding: 24px; }
        .pillar-image img { width: 100%; height: 100%; object-fit: cover; border-radius: 16px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); }

        .video-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 32px; }
        .main-video-card { background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; display: flex; flex-direction: column; }
        .sub-video-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .video-card { background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; display: flex; flex-direction: column; }

        .footer { padding: 64px 0 40px; border-top: 1px solid #e2e8f0; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; margin-top: 64px; text-align: left; }
        .footer-heading { font-weight: 700; color: #1e293b; font-size: 16px; margin-bottom: 24px; }
        .footer-link { display: flex; align-items: center; gap: 8px; color: #64748b; text-decoration: none; margin-bottom: 16px; font-size: 14px; transition: color 0.2s; }
        .footer-link:hover { color: #0ea5e9; }

        .c-blue { color: #0ea5e9; } .c-orange { color: #f59e0b; } .c-green { color: #10b981; } .c-purple { color: #8b5cf6; } .c-red { color: #ef4444; } .c-yellow { color: #eab308; }
        .bg-yellow { background: #fef3c7; } .bg-purple { background: #ede9fe; } .bg-red { background: #ffe4e6; }
        
        .btn-primary { background-color: #0ea5e9; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px; cursor: pointer; transition: background 0.2s; }
        .btn-primary:hover { background-color: #0284c7; }

        @media (max-width: 1024px) {
          .hero-content { flex-direction: column; align-items: flex-start; }
          .hero-image-box { width: 100%; max-width: 100%; }
          .stats-row, .actions-grid, .features-grid, .pillar-row, .video-grid, .footer { grid-template-columns: 1fr; }
          .pillar-row.reverse { flex-direction: column; }
        }
      `}</style>

      <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, paddingBottom: '80px' }}>
        
        <div className="hero-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px', width: '100%' }}>
            <div style={{ display: 'flex', gap: '24px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
              {navItems.map(item => (
                <Link to={item.path} key={item.name} style={{ textDecoration: 'none' }}>
                  <div onClick={() => setActiveTab(item.name)} style={{ padding: '8px 12px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <span style={{ color: activeTab === item.name ? '#0ea5e9' : '#64748b' }}>{item.icon}</span>
                    <span style={{ color: activeTab === item.name ? '#1e293b' : '#64748b', fontWeight: '600', fontSize: '15px' }}>{item.name}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              <Link to="/admin" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontWeight: '600', fontSize: '14px', textDecoration: 'none' }}>
                {IconShield} Admin
              </Link>
              <Link to="/settings" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1e293b', fontWeight: '600', fontSize: '14px', textDecoration: 'none' }}>
                {IconGear} Settings
              </Link>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #0ea5e9, #10b981)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '16px', fontWeight: '800' }}>R</div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '14px', fontWeight: '800', color: '#1e293b' }}>CG PLATFROM</span>
                    <Link to="/profile" style={{ textDecoration: 'none' }}>
                      <span style={{ fontSize: '12px', color: '#64748b', cursor: 'pointer' }}>View Profile →</span>
                    </Link>
                  </div>
                </div>
                <Link to="/">
                  <button onClick={onLogout} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} title="Sign Out">
                    {IconLogoutDoor}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="hero-content">
            <div className="hero-text-area">
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#64748b', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>ASPIRE, SPEAK & SHINE</div>
              <h1 style={{ fontSize: '56px', fontWeight: '900', color: '#0ea5e9', margin: '0 0 12px 0', letterSpacing: '-0.02em', lineHeight: '1.1' }}>CG PLATFORM</h1>
              <div style={{ fontSize: '16px', fontWeight: '700', color: '#10b981', letterSpacing: '0.05em', marginBottom: '40px' }}>DISCOVER • COMMUNICATE • SUCCEED</div>
              <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#1e293b', margin: '0 0 12px 0' }}>Good Evening, CG PLATFROM! 👋</h2>
              <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.6', maxWidth: '80%', margin: 0 }}>Welcome back to your personalized career guidance journey. Let's make today count!</p>
            </div>
            <div className="hero-image-box">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" alt="Students collaborating" />
            </div>
          </div>
        </div>

        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-title">Assessments Completed</span>
              <span className="stat-icon c-yellow bg-yellow">{IconTarget}</span>
            </div>
            <div className="stat-value">0</div>
          </div>
          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-title">Skills Practiced</span>
              <span className="stat-icon c-purple bg-purple">{IconZap}</span>
            </div>
            <div className="stat-value">0</div>
          </div>
          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-title">Opportunities Viewed</span>
              <span className="stat-icon c-red bg-red">{IconBriefcase}</span>
            </div>
            <div className="stat-value">0</div>
          </div>
        </div>

        <div style={{ marginBottom: '24px', textAlign: 'left' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#1e293b' }}>Quick Actions</h2>
        </div>
        <div className="actions-grid">
          <Link to="/assessment" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="action-card">
              <div style={{ marginBottom: '16px', color: '#0ea5e9' }}>{IconTargetLarge}</div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>Career Assessment</h3>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>Discover your ideal career path</p>
            </div>
          </Link>
          <Link to="/skills" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="action-card">
              <div style={{ marginBottom: '16px', color: '#f59e0b' }}>{IconMessageSquare}</div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>Skills Development</h3>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>Improve communication skills</p>
            </div>
          </Link>
          <Link to="/opportunities" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="action-card">
              <div style={{ marginBottom: '16px', color: '#10b981' }}>{IconBriefcase}</div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>Career Opportunities</h3>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>Find government & private jobs</p>
            </div>
          </Link>
          <Link to="/tasks" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="action-card">
              <div style={{ marginBottom: '16px', color: '#10b981' }}>{IconBookOpen}</div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>My Tasks</h3>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>View and manage your tasks</p>
            </div>
          </Link>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#1e293b', margin: '0 0 12px 0' }}>Why Choose <span style={{ color: '#0ea5e9' }}>CG Platform</span>?</h2>
          <p style={{ fontSize: '16px', color: '#64748b', margin: 0 }}>Your complete career guidance ecosystem powered by AI, designed specifically for Indian students</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div style={{ marginBottom: '20px', color: '#eab308' }}>{IconLightbulb}</div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', marginBottom: '12px' }}>AI-Powered Career Discovery</h3>
            <p style={{ fontSize: '15px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>Get personalized career recommendations based on your interests, skills, and aspirations using advanced AI technology.</p>
          </div>
          <div className="feature-card">
            <div style={{ marginBottom: '20px', color: '#0ea5e9' }}>{IconMessageSquare}</div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', marginBottom: '12px' }}>Communication Skills Mastery</h3>
            <p style={{ fontSize: '15px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>Practice and improve your speaking, interview, and presentation skills with real-time AI feedback and voice analysis.</p>
          </div>
          <div className="feature-card">
            <div style={{ marginBottom: '20px', color: '#10b981' }}>{IconTrophy}</div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', marginBottom: '12px' }}>Track Your Progress</h3>
            <p style={{ fontSize: '15px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>Monitor your skill development, complete assessments, and celebrate milestones on your journey to success.</p>
          </div>
          <div className="feature-card">
            <div style={{ marginBottom: '20px', color: '#8b5cf6' }}>{IconBrain}</div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', marginBottom: '12px' }}>Personalized Learning Paths</h3>
            <p style={{ fontSize: '15px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>Receive customized tasks, assessments, and recommendations tailored to your education level and career goals.</p>
          </div>
          <div className="feature-card">
            <div style={{ marginBottom: '20px', color: '#ef4444' }}>{IconTargetLarge}</div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', marginBottom: '12px' }}>Government & Private Opportunities</h3>
            <p style={{ fontSize: '15px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>Explore thousands of job opportunities from both government and private sectors matched to your qualifications.</p>
          </div>
          <div className="feature-card">
            <div style={{ marginBottom: '20px', color: '#f59e0b' }}>{IconUsers}</div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', marginBottom: '12px' }}>Build Confidence</h3>
            <p style={{ fontSize: '15px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>Develop the self-assurance you need to succeed in interviews, group discussions, and your professional career.</p>
          </div>
        </div>

        <div style={{ padding: '40px 0 80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#1e293b', margin: '0 0 12px 0' }}>Our Three Pillars of Success</h2>
            <p style={{ fontSize: '16px', color: '#64748b', margin: 0 }}>The foundation of your journey: Discover your potential, Communicate with confidence, Succeed in your career</p>
          </div>

          <div className="pillar-row">
            <div className="pillar-content">
              <span style={{ background: '#e0f2fe', color: '#0284c7', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', display: 'inline-block', marginBottom: '16px', letterSpacing: '0.05em' }}>Discover</span>
              <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#1e293b', margin: '0 0 16px 0' }}>DISCOVER</h3>
              <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>Explore endless career possibilities tailored to your unique strengths and interests. Our AI-powered platform helps you uncover paths you never knew existed.</p>
            </div>
            <div className="pillar-image" style={{ background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)' }}>
               <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="Discover Career Paths" />
            </div>
          </div>

          <div className="pillar-row reverse">
            <div className="pillar-content">
              <span style={{ background: '#e0f2fe', color: '#0284c7', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', display: 'inline-block', marginBottom: '16px', letterSpacing: '0.05em' }}>Communicate</span>
              <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#1e293b', margin: '0 0 16px 0' }}>COMMUNICATE</h3>
              <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>Master the art of professional communication with AI-driven feedback. Practice interviews, presentations, and discussions to speak with confidence.</p>
            </div>
            <div className="pillar-image" style={{ background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)' }}>
               <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80" alt="Communicate Skills" />
            </div>
          </div>

          <div className="pillar-row">
            <div className="pillar-content">
              <span style={{ background: '#e0f2fe', color: '#0284c7', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', display: 'inline-block', marginBottom: '16px', letterSpacing: '0.05em' }}>Succeed</span>
              <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#1e293b', margin: '0 0 16px 0' }}>SUCCEED</h3>
              <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>Achieve your career dreams with personalized guidance, skill development, and access to thousands of opportunities. Your success story starts here.</p>
            </div>
            <div className="pillar-image" style={{ background: 'linear-gradient(135deg, #fef08a 0%, #fde047 100%)' }}>
               <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" alt="Succeed Careers" />
            </div>
          </div>
        </div>

        <div style={{ padding: '40px 0 80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '12px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#1e293b', margin: 0 }}>See CG Platform in <span style={{ color: '#0ea5e9' }}>Action</span></h2>
          </div>
          <p style={{ fontSize: '16px', color: '#64748b', textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px', lineHeight: '1.6' }}>Watch how our AI-powered platform helps students discover their potential, develop skills, and achieve career success</p>

          <div className="video-grid">
            <div className="main-video-card">
              <div style={{ background: '#94a3b8', width: '100%', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                 <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Platform Overview" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.8' }} />
                 <div style={{ width: '64px', height: '64px', background: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>{IconPlay}</div>
              </div>
              <div style={{ padding: '24px', textAlign: 'left' }}>
                <div style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>Complete Platform Walkthrough</div>
                <div style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.5' }}>Get a comprehensive tour of all features including AI assessments, skill development, and career opportunities.</div>
              </div>
            </div>

            <div className="sub-video-grid">
              <div className="video-card">
                <div style={{ background: '#94a3b8', width: '100%', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                   <div style={{ width: '48px', height: '48px', background: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', cursor: 'pointer' }}>{IconPlay}</div>
                </div>
                <div style={{ padding: '24px', textAlign: 'left' }}>
                  <div style={{ fontSize: '15px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>AI Career Assessment</div>
                  <div style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5' }}>See personalized recommendations</div>
                </div>
              </div>
              <div className="video-card">
                <div style={{ background: '#94a3b8', width: '100%', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                   <div style={{ width: '48px', height: '48px', background: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', cursor: 'pointer' }}>{IconPlay}</div>
                </div>
                <div style={{ padding: '24px', textAlign: 'left' }}>
                  <div style={{ fontSize: '15px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>Voice Skills Practice</div>
                  <div style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5' }}>Real-time feedback demo</div>
                </div>
              </div>
              <div className="video-card">
                <div style={{ background: '#94a3b8', width: '100%', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                   <div style={{ width: '48px', height: '48px', background: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', cursor: 'pointer' }}>{IconPlay}</div>
                </div>
                <div style={{ padding: '24px', textAlign: 'left' }}>
                  <div style={{ fontSize: '15px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>Job Matching</div>
                  <div style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5' }}>Smart opportunity discovery</div>
                </div>
              </div>
              <div className="video-card">
                <div style={{ background: '#94a3b8', width: '100%', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                   <div style={{ width: '48px', height: '48px', background: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', cursor: 'pointer' }}>{IconPlay}</div>
                </div>
                <div style={{ padding: '24px', textAlign: 'left' }}>
                  <div style={{ fontSize: '15px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>Progress Tracking</div>
                  <div style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5' }}>Monitor your growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ margin: '40px 0 80px' }}>
          <div style={{ fontStyle: 'italic', fontSize: '14px', color: '#64748b', textAlign: 'center', marginBottom: '24px', padding: '16px', background: '#f8fafc', borderRadius: '8px', border: '1px dashed #cbd5e1' }}>
            💡 <strong>Note:</strong> Demo videos with audio will be embedded here. The platform supports MP4, WebM, and other standard video formats with full audio playback.
          </div>
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '16px', padding: '64px', textAlign: 'center', background: '#ffffff', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b', marginBottom: '16px' }}>Recent Activity</h3>
            <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '24px' }}>No recent activity yet. Start by taking a career assessment!</p>
            <Link to="/assessment"><button className="btn-primary">Get Started</button></Link>
          </div>
        </div>

        <footer className="footer">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '36px', height: '36px', backgroundColor: '#0ea5e9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', letterSpacing: '0.05em' }}>ASPIRE, SPEAK & SHINE</div>
                <div style={{ fontSize: '19px', color: '#10b981', fontWeight: '900', letterSpacing: '-0.02em' }}>CG PLATFORM</div>
              </div>
            </div>
            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', maxWidth: '300px' }}>Empowering students with AI-powered career guidance, communication skills, and confidence building.</p>
          </div>
          
          <div>
            <div className="footer-heading">Quick Links</div>
            <Link to="/assessment" className="footer-link">Career Assessment</Link>
            <Link to="/skills" className="footer-link">Skills Development</Link>
            <Link to="/opportunities" className="footer-link">Career Opportunities</Link>
            <Link to="/tasks" className="footer-link">My Tasks</Link>
          </div>

          <div>
            <div className="footer-heading">Resources</div>
            <a href="#" className="footer-link">About Us</a>
            <a href="#" className="footer-link">How It Works</a>
            <a href="#" className="footer-link">Features</a>
            <a href="#" className="footer-link">Settings</a>
          </div>

          <div>
            <div className="footer-heading">Contact Us</div>
            <a href="#" className="footer-link" style={{ gap: '8px' }}>{IconMail} support@cgplatform.com</a>
            <a href="#" className="footer-link" style={{ gap: '8px' }}>{IconPhone} +91 1800-XXX-XXXX</a>
            <div className="footer-link" style={{ pointerEvents: 'none', gap: '8px' }}>{IconMapPin} India</div>
          </div>
        </footer>

      </div>
    </main>
  );
};