import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- SIDEBAR ICONS ---
const IconTarget = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const IconZap = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
const IconBriefcase = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const IconCheck = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>;
const IconFile = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>;
// --- PAGE ICONS ---
const IconMessageSquare = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const IconUsers = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconType = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>;
const IconMic = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>;
const IconBrain = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/></svg>;

const navItems = [
  { name: 'Assessment', icon: IconTarget, path: '/assessment' },
  { name: 'Skills', icon: IconZap, path: '/skills' },
  { name: 'Opportunities', icon: IconBriefcase, path: '/opportunities' },
  { name: 'Tasks', icon: IconCheck, path: '/tasks' },
  { name: 'Articles', icon: IconFile, path: '/articles' }
];

const ModuleSidebar = ({ activePage }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', position: 'sticky', top: '100px', height: 'fit-content' }}>
    {navItems.map((mod) => {
      const isActive = activePage === mod.path;
      return (
        <Link to={mod.path} key={mod.name} style={{ textDecoration: 'none' }} title={mod.name}>
          <div style={{ width: '56px', height: '56px', backgroundColor: isActive ? '#0ea5e9' : '#ffffff', color: isActive ? 'white' : '#94a3b8', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: isActive ? '0 10px 15px -3px rgba(14, 165, 233, 0.3)' : '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: isActive ? 'none' : '1px solid #e2e8f0', transition: 'all 0.2s ease', cursor: 'pointer' }}>
            {mod.icon}
          </div>
        </Link>
      )
    })}
  </div>
);

export const SkillsPage = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [inputType, setInputType] = useState('text');
  const tabs = ['Overview', 'Interview Skills', 'Communication', 'Group Discussion'];

  return (
    <main className="main-wrapper" style={{ paddingTop: '32px', paddingBottom: '80px', maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px', gap: '40px' }}>
        <div>
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#1e293b', margin: '0 0 8px 0' }}>Skills Development</h2>
            <p style={{ color: '#64748b', margin: 0, fontSize: '16px' }}>Improve your interview, communication, and group discussion skills.</p>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', background: '#f8fafc', padding: '8px', borderRadius: '12px', width: 'fit-content' }}>
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', background: activeTab === tab ? '#ffffff' : 'transparent', color: activeTab === tab ? '#1e293b' : '#64748b', fontWeight: activeTab === tab ? '700' : '600', fontSize: '14px', cursor: 'pointer', boxShadow: activeTab === tab ? '0 2px 4px rgba(0,0,0,0.05)' : 'none' }}>
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'Overview' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              <div style={{ padding: '24px', background: 'white', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ color: '#0ea5e9' }}>{IconBriefcase}</div>
                  <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>Interview Skills</h3>
                </div>
                <div style={{ width: '100%', height: '12px', background: '#f1f5f9', borderRadius: '6px', overflow: 'hidden', marginBottom: '12px' }}>
                  <div style={{ height: '100%', background: '#0ea5e9', width: '45%' }}></div>
                </div>
              </div>
              <div style={{ padding: '24px', background: 'white', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ color: '#10b981' }}>{IconMessageSquare}</div>
                  <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>Communication</h3>
                </div>
                <div style={{ width: '100%', height: '12px', background: '#f1f5f9', borderRadius: '6px', overflow: 'hidden', marginBottom: '12px' }}>
                  <div style={{ height: '100%', background: '#10b981', width: '72%' }}></div>
                </div>
              </div>
            </div>
          )}

          {activeTab !== 'Overview' && (
            <div style={{ padding: '32px', background: 'white', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', margin: '0 0 8px 0' }}>{activeTab} Assessment</h3>
              <div style={{ display: 'flex', background: '#f8fafc', borderRadius: '12px', padding: '6px', marginBottom: '32px' }}>
                <button onClick={() => setInputType('text')} style={{ flex: 1, padding: '12px', border: 'none', borderRadius: '8px', background: inputType === 'text' ? '#ffffff' : 'transparent', color: inputType === 'text' ? '#0ea5e9' : '#64748b', fontWeight: '600' }}>Text Input</button>
                <button onClick={() => setInputType('voice')} style={{ flex: 1, padding: '12px', border: 'none', borderRadius: '8px', background: inputType === 'voice' ? '#ffffff' : 'transparent', color: inputType === 'voice' ? '#ef4444' : '#64748b', fontWeight: '600' }}>Voice Input</button>
              </div>
              <textarea placeholder="Type response..." style={{ width: '100%', height: '180px', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }} />
              <button style={{ width: '100%', padding: '16px', background: '#0ea5e9', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', marginTop: '20px' }}>Analyze Skills</button>
            </div>
          )}
        </div>
        <ModuleSidebar activePage="/skills" />
      </div>
    </main>
  );
};