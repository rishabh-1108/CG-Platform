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

export const OpportunitiesPage = () => {
  const [activeTab, setActiveTab] = useState('All Levels');
  const tabs = ['All Levels', 'High School', 'UG Students', 'Graduates', 'PG Students'];
  const opportunitiesData = [
    { id: 1, title: 'Data Entry Operator', type: 'Government', org: 'Ministry of Electronics', location: 'Multiple Cities', salary: '₹18,000/month', req: '10th/12th Pass' },
    { id: 2, title: 'Junior Software Developer', type: 'Private', org: 'Infosys', location: 'Bangalore', salary: '₹4 LPA', req: 'B.Tech CS' }
  ];

  return (
    <main className="main-wrapper" style={{ paddingTop: '32px', paddingBottom: '80px', maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px', gap: '40px' }}>
        <div>
          <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#1e293b', marginBottom: '32px' }}>Career Opportunities</h2>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '32px', background: '#f8fafc', padding: '8px', borderRadius: '12px' }}>
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: '12px 20px', borderRadius: '8px', border: 'none', background: activeTab === tab ? '#ffffff' : 'transparent', color: activeTab === tab ? '#1e293b' : '#64748b', fontWeight: '700' }}>
                {tab}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {opportunitiesData.map((job) => (
              <div key={job.id} style={{ padding: '32px', border: '1px solid #e2e8f0', borderRadius: '16px', background: 'white' }}>
                <h3 style={{ fontSize: '22px', fontWeight: '800', margin: '0 0 12px 0' }}>{job.title}</h3>
                <span style={{ background: job.type === 'Government' ? '#2563eb' : '#f97316', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>{job.type}</span>
                <p style={{ margin: '16px 0', color: '#64748b' }}>{job.org} • {job.location} • {job.salary}</p>
                <button style={{ padding: '12px 32px', background: '#10b981', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600' }}>Apply Now</button>
              </div>
            ))}
          </div>
        </div>
        <ModuleSidebar activePage="/opportunities" />
      </div>
    </main>
  );
};