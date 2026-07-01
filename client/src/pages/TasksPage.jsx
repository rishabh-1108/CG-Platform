import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const IconTarget = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const IconZap = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
const IconBriefcase = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const IconCheck = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>;
const IconFile = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>;

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

export const TasksPage = () => {
  const [tasksGenerated, setTasksGenerated] = useState(false);
  const handleGenerate = () => setTasksGenerated(true);

  return (
    <main className="main-wrapper" style={{ paddingTop: '32px', paddingBottom: '80px', maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px', gap: '40px' }}>
        <div>
          <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#1e293b', margin: '0 0 32px 0' }}>My Tasks</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '32px' }}>
            <div style={{ padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', background: 'white' }}>
              <div style={{ fontSize: '16px', fontWeight: '600' }}>Pending</div>
              <div style={{ fontSize: '32px', fontWeight: '800' }}>{tasksGenerated ? 5 : 0}</div>
            </div>
            <div style={{ padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', background: 'white' }}>
              <div style={{ fontSize: '16px', fontWeight: '600' }}>Completed</div>
              <div style={{ fontSize: '32px', fontWeight: '800' }}>0</div>
            </div>
          </div>

          {!tasksGenerated ? (
            <div style={{ padding: '64px', border: '1px solid #e2e8f0', borderRadius: '12px', background: 'white', textAlign: 'center' }}>
              <p style={{ color: '#64748b', marginBottom: '24px' }}>No tasks yet. Generate personalized tasks with AI!</p>
              <button onClick={handleGenerate} style={{ padding: '12px 24px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>
                Generate AI Tasks
              </button>
            </div>
          ) : (
            <div style={{ padding: '24px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <h4 style={{ margin: 0 }}>Identify Core Career Interests</h4>
              <p style={{ color: '#64748b' }}>Spend 30 minutes writing down three career paths.</p>
            </div>
          )}
        </div>
        <ModuleSidebar activePage="/tasks" />
      </div>
    </main>
  );
};