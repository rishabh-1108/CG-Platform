import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// --- ICONS ---
const IconUsers = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconBriefcase = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const IconTarget = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const IconBookOpen = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
const IconMessageSquare = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const IconEdit = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
const IconTrash = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>;
const IconSearch = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const IconUser = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const IconCheckSquare = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>;
const IconBot = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>;
const IconChevronRight = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>;

// --- LIVE DATA REPLICATED FROM SCREENSHOTS ---

const opportunitiesData = [
  { id: 1, title: "Data Entry Operator", type: "Government", company: "Ministry of Electronics & IT", loc: "Multiple Cities, India" },
  { id: 2, title: "Postal Assistant", type: "Government", company: "Department of Posts", loc: "Pan India" },
  { id: 3, title: "Retail Sales Associate", type: "Private", company: "Reliance Retail", loc: "Delhi, Mumbai, Bangalore" },
  { id: 4, title: "Customer Support Executive", type: "Private", company: "Wipro BPO", loc: "Hyderabad, Pune, Noida" },
  { id: 5, title: "Railway Clerk", type: "Government", company: "Indian Railways", loc: "Pan India" }
];

const usersData = [
  { id: 1, name: "Rishabh A M", email: "rishabh2005@gmail.com", joined: "May 11, 2026" },
  { id: 2, name: "Rishabh A M", email: "rishirishabh48@gmail.com", joined: "Feb 24, 2026" },
  { id: 3, name: "Ramprasad", email: "saravananramprasad776@gmail.com", joined: "Feb 20, 2026" }
];

const activityData = [
  { id: 1, title: "Begin an Introductory Skill-Building Course", category: "Task", status: "pending", email: "cgplatform110805@gmail.com", date: "Jun 22, 2026 at 10:13 PM" },
  { id: 2, title: "Skills: interview", category: "Skill", score: "85", email: "rishabh2005@gmail.com", date: "May 12, 2026 at 12:57 AM" },
  { id: 3, title: "Career Assessment: comprehensive", category: "Assessment", email: "rishabh2005@gmail.com", date: "May 12, 2026 at 12:50 AM" }
];

const defaultChatData = [
  { id: 1, title: "hii", email: "cgplatform110805@gmail.com", date: "Jul 2, 09:24 PM" },
  { id: 2, title: "how to become an pilot", email: "cgplatform110805@gmail.com", date: "Jun 16, 03:38 PM" },
  { id: 3, title: "I want to become a full stack developer", email: "cgplatform110805@gmail.com", date: "Mar 16, 10:41 PM" }
];

export const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [chatData, setChatData] = useState([]);
  const tabs = ['Overview', 'Opportunities', 'Users', 'Activity', 'Chat History'];

  // This loads the chats from localStorage when the Admin Panel opens
  useEffect(() => {
    const savedChats = localStorage.getItem('cg_admin_chats');
    if (savedChats) {
      setChatData(JSON.parse(savedChats));
    } else {
      setChatData(defaultChatData);
      localStorage.setItem('cg_admin_chats', JSON.stringify(defaultChatData));
    }

    // Optional: Add a listener so it updates automatically if both tabs are open
    const handleStorageChange = () => {
      const updatedChats = localStorage.getItem('cg_admin_chats');
      if (updatedChats) setChatData(JSON.parse(updatedChats));
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <div className="admin-container">
      <style>{`
        .admin-container {
          min-height: 100vh;
          background-color: #f8fafc;
          font-family: 'Inter', sans-serif;
        }

        .admin-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 32px 24px 80px;
        }

        .back-link {
          display: flex; align-items: center; gap: 8px;
          color: #0f172a; font-weight: 600; font-size: 14px;
          text-decoration: none; margin-bottom: 24px;
        }

        .admin-header { margin-bottom: 32px; }
        .admin-title { font-size: 36px; font-weight: 800; color: #2563eb; margin: 0 0 8px 0; }
        .admin-subtitle { font-size: 16px; color: #64748b; margin: 0; }

        /* TABS */
        .tabs-container {
          display: flex; background: #f1f5f9; border-radius: 12px;
          padding: 6px; margin-bottom: 32px;
        }
        .tab-button {
          flex: 1; padding: 12px; border: none; border-radius: 8px;
          font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s;
        }
        .tab-button.active { background: #ffffff; color: #0f172a; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        .tab-button.inactive { background: transparent; color: #64748b; }

        /* CARDS */
        .card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; }
        
        .overview-grid-top { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-bottom: 24px; }
        .overview-grid-bottom { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        
        .stat-card-title { font-size: 14px; color: #64748b; font-weight: 600; display: flex; justify-content: space-between; margin-bottom: 16px; }
        .stat-card-val { font-size: 32px; font-weight: 800; color: #0f172a; margin-bottom: 8px; }
        .stat-card-sub { font-size: 12px; color: #94a3b8; }

        .list-row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #f1f5f9; }
        .list-row:last-child { border-bottom: none; }
        .list-key { font-weight: 600; color: #1e293b; font-size: 14px; }
        .list-val { color: #64748b; font-size: 14px; }

        /* LIST ITEMS */
        .data-list-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
        .data-list-title { font-size: 20px; font-weight: 700; color: #0f172a; display: flex; align-items: center; gap: 8px;}
        .orange-badge { background: #f97316; color: white; padding: 2px 10px; border-radius: 12px; font-size: 12px; font-weight: 600; }
        
        .search-bar { 
          display: flex; align-items: center; gap: 8px; padding: 10px 16px; 
          border: 1px solid #e2e8f0; border-radius: 8px; background: white; min-width: 250px;
        }
        .search-bar input { border: none; outline: none; font-size: 14px; color: #334155; width: 100%; }

        .btn-add { background: #2563eb; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 8px; }

        .list-item { 
          background: white; border: 1px solid #e2e8f0; border-radius: 12px; 
          padding: 20px 24px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center;
        }
        
        .badge-active { background: #2563eb; color: white; padding: 2px 10px; border-radius: 12px; font-size: 12px; font-weight: 600; }
        .badge-outline { border: 1px solid #e2e8f0; color: #475569; padding: 2px 10px; border-radius: 12px; font-size: 12px; font-weight: 600; }
        .badge-pending { border: 1px solid #e2e8f0; background: #f8fafc; color: #64748b; padding: 2px 10px; border-radius: 12px; font-size: 12px; font-weight: 600; }
        .badge-completed { border: 1px solid #e2e8f0; background: #ffffff; color: #1e293b; padding: 2px 10px; border-radius: 12px; font-size: 12px; font-weight: 600; }
        
        .icon-circle { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .bg-blue-light { background: #eff6ff; color: #2563eb; }
        .bg-green-light { background: #ecfdf5; color: #10b981; }
        .bg-orange-light { background: #fff7ed; color: #f59e0b; }

        .text-main { font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 4px; display: flex; align-items: center; gap: 12px; }
        .text-sub { font-size: 13px; color: #64748b; }
        .text-right { text-align: right; font-size: 13px; color: #64748b; }

        .actions { display: flex; gap: 16px; color: #64748b; }
        .action-icon { cursor: pointer; transition: color 0.2s; }
        .action-icon:hover { color: #0f172a; }
      `}</style>

      <div className="admin-wrapper">
        <Link to="/dashboard" className="back-link">
          ← Back to Dashboard
        </Link>

        <div className="admin-header">
          <h1 className="admin-title">Admin Panel</h1>
          <p className="admin-subtitle">Manage opportunities, monitor users, and track platform usage</p>
        </div>

        <div className="tabs-container">
          {tabs.map(tab => (
            <button 
              key={tab} 
              className={`tab-button ${activeTab === tab ? 'active' : 'inactive'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === 'Overview' && (
          <>
            <div className="overview-grid-top">
              <div className="card">
                <div className="stat-card-title">Total Users <span style={{color: '#2563eb'}}><IconUsers /></span></div>
                <div className="stat-card-val">18</div>
                <div className="stat-card-sub">0 new this week</div>
              </div>
              <div className="card">
                <div className="stat-card-title">Opportunities <span style={{color: '#10b981'}}><IconBriefcase /></span></div>
                <div className="stat-card-val">20</div>
                <div className="stat-card-sub">Active listings</div>
              </div>
              <div className="card">
                <div className="stat-card-title">Assessments <span style={{color: '#f97316'}}><IconTarget /></span></div>
                <div className="stat-card-val">8</div>
                <div className="stat-card-sub">Career assessments taken</div>
              </div>
              <div className="card">
                <div className="stat-card-title">Skills Sessions <span style={{color: '#2563eb'}}><IconBookOpen /></span></div>
                <div className="stat-card-val">6</div>
                <div className="stat-card-sub">Skills practiced</div>
              </div>
            </div>

            <div className="overview-grid-bottom">
              <div className="card">
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '20px' }}>Users by Role</h3>
                <div className="list-row"><span className="list-key">Student</span><span className="list-val">15</span></div>
                <div className="list-row"><span className="list-key">Parent</span><span className="list-val">3</span></div>
                <div className="list-row"><span className="list-key">Admin</span><span className="list-val">1</span></div>
              </div>
              <div className="card">
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '20px' }}>Platform Activity</h3>
                <div className="list-row"><span className="list-key">Total Tasks Created</span><span className="list-val">35</span></div>
                <div className="list-row"><span className="list-key">Career Assessments</span><span className="list-val">8</span></div>
                <div className="list-row"><span className="list-key">Skills Assessments</span><span className="list-val">6</span></div>
              </div>
            </div>
          </>
        )}

        {/* OPPORTUNITIES TAB */}
        {activeTab === 'Opportunities' && (
          <>
            <div className="data-list-header">
              <h2 className="data-list-title">Manage Opportunities (20)</h2>
              <button className="btn-add">+ Add Opportunity</button>
            </div>
            <div>
              {opportunitiesData.map(job => (
                <div key={job.id} className="list-item">
                  <div>
                    <div className="text-main">
                      {job.title} 
                      <span className="badge-active">Active</span> 
                      <span className="badge-outline">{job.type}</span>
                    </div>
                    <div className="text-sub">{job.company} • {job.loc}</div>
                  </div>
                  <div className="actions">
                    <span className="action-icon"><IconEdit /></span>
                    <span className="action-icon"><IconTrash /></span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* USERS TAB */}
        {activeTab === 'Users' && (
          <>
            <div className="data-list-header">
              <h2 className="data-list-title">Users (18)</h2>
              <div className="search-bar">
                <span style={{color: '#94a3b8'}}><IconSearch /></span>
                <input type="text" placeholder="Search users..." />
              </div>
            </div>
            <div>
              {usersData.map(user => (
                <div key={user.id} className="list-item">
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div className="icon-circle bg-blue-light"><IconUser /></div>
                    <div>
                      <div className="text-main">{user.name} <span className="badge-outline">Student</span></div>
                      <div className="text-sub">{user.email}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div>Joined {user.joined}</div>
                    {user.lastActive && <div style={{marginTop: '4px'}}>Last active {user.lastActive}</div>}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ACTIVITY TAB */}
        {activeTab === 'Activity' && (
          <>
            <div className="data-list-header">
              <h2 className="data-list-title">Recent Platform Activity</h2>
            </div>
            <div>
              {activityData.map(act => (
                <div key={act.id} className="list-item">
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    
                    {act.category === 'Task' && <div className="icon-circle bg-blue-light"><IconCheckSquare /></div>}
                    {act.category === 'Skill' && <div className="icon-circle bg-green-light"><IconBookOpen /></div>}
                    {act.category === 'Assessment' && <div className="icon-circle bg-orange-light"><IconTarget /></div>}

                    <div>
                      <div className="text-main">
                        {act.title} 
                        {act.category === 'Task' && <span className="badge-outline">Task</span>}
                        {act.category === 'Task' && <span className={`badge-${act.status}`}>{act.status}</span>}
                        
                        {act.category === 'Skill' && <span className="badge-active" style={{background: '#2563eb'}}>Skill</span>}
                        {act.category === 'Skill' && <span className="badge-completed">Score: {act.score}</span>}

                        {act.category === 'Assessment' && <span className="orange-badge">Assessment</span>}
                      </div>
                      <div className="text-sub">{act.email} • {act.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* CHAT HISTORY TAB */}
        {activeTab === 'Chat History' && (
          <>
            <div className="data-list-header">
              <h2 className="data-list-title">
                <span style={{color: '#2563eb'}}><IconMessageSquare /></span> Chat History 
                <span className="orange-badge" style={{marginLeft: '8px'}}>{chatData.length} conversations</span>
              </h2>
              <div className="search-bar">
                <span style={{color: '#94a3b8'}}><IconSearch /></span>
                <input type="text" placeholder="Search by title or user..." />
              </div>
            </div>
            <div>
              {chatData.map(chat => (
                <div key={chat.id} className="list-item" style={{ cursor: 'pointer' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div className="icon-circle bg-blue-light"><IconBot /></div>
                    <div>
                      <div className="text-main">{chat.title}</div>
                      <div className="text-sub">{chat.email} • {chat.date}</div>
                    </div>
                  </div>
                  <div style={{ color: '#94a3b8' }}>
                    <IconChevronRight />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default AdminPanel;