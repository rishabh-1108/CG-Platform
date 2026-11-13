import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// Existing Imports
import { LandingPage } from './pages/LandingPage';
import { AuthPage } from './pages/AuthPage';
import { DashboardHome } from './pages/DashboardHome';
import { AssessmentPage } from './pages/AssessmentPage';
import { SkillsPage } from './pages/SkillsPage';
import { OpportunitiesPage } from './pages/OpportunitiesPage';
import { TasksPage } from './pages/TasksPage';
import { ArticlesPage } from './pages/ArticlesPage';
import AdminPanel from './pages/AdminPanel'; 
import ProfilePage from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';
import FeaturesPage from './pages/FeaturesPage';

// --- THE REAL FIX: Looking in the same folder as App.jsx ---
import HowItWorksPage from './HowItWorksPage';
import AboutPage from './AboutPage';

// --- IMPORT THE NEW AI MENTOR ---
import AICareerMentor from './components/AICareerMentor';

// --- ICONS NEEDED FOR TOP NAV ---
const IconSearch = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const IconBell = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>;
const IconArrowLeft = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>;
const IconChat = <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const IconClose = <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;

// --- TOP NAV COMPONENT ---
const TopNav = () => {
  const location = useLocation();
  const publicPages = ['/', '/features', '/how-it-works', '/about'];
  const isLandingPage = publicPages.includes(location.pathname);
  const isApp = !publicPages.includes(location.pathname) && location.pathname !== '/login';
  const isDashboard = location.pathname === '/dashboard';

  return (
    <header className="navbar">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="nav-logo">
          <div className="logo-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          </div>
          <div>
            <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', letterSpacing: '0.05em' }}>ASPIRE, SPEAK & SHINE</div>
            <div style={{ fontSize: '19px', color: '#0ea5e9', fontWeight: '900', letterSpacing: '-0.02em' }}>CG PLATFORM</div>
          </div>
        </div>
      </Link>
      
      {isLandingPage && (
        <div className="nav-links" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '40px' }}>
          <Link to="/features" style={{ color: location.pathname === '/features' ? '#0ea5e9' : '#1e293b', fontSize: '15px', fontWeight: '600', textDecoration: 'none' }}>Features</Link>
          <Link to="/how-it-works" style={{ color: location.pathname === '/how-it-works' ? '#0ea5e9' : '#1e293b', fontSize: '15px', fontWeight: '600', textDecoration: 'none' }}>How It Works</Link>
          <Link to="/about" style={{ color: location.pathname === '/about' ? '#0ea5e9' : '#1e293b', fontSize: '15px', fontWeight: '600', textDecoration: 'none' }}>About</Link>
        </div>
      )}

      <div className="nav-actions">
        {isLandingPage && (
          <Link to="/login">
            <button className="btn-primary" style={{ padding: '10px 24px' }}>Get Started</button>
          </Link>
        )}

        {isApp && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ display: 'none', '@media(minWidth: 768px)': { display: 'flex' }, alignItems: 'center', background: '#f1f5f9', padding: '8px 16px', borderRadius: '20px', width: '250px' }}>
               <span style={{ color: '#94a3b8', marginRight: '8px', display: 'flex' }}>{IconSearch}</span>
               <input type="text" placeholder="Search..." style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '14px', width: '100%', color: '#1e293b', fontFamily: 'inherit' }} />
            </div>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', transition: 'color 0.2s' }}>
              {IconBell}
              <span style={{ position: 'absolute', top: '0px', right: '2px', width: '8px', height: '8px', background: '#ef4444', borderRadius: '50%', border: '2px solid #fff' }}></span>
            </button>
            {!isDashboard && (
              <div style={{ width: '1px', height: '24px', backgroundColor: '#e2e8f0', margin: '0 8px' }}></div>
            )}
          </div>
        )}

        {(isApp && !isDashboard) && (
          <Link to="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: '#1e293b', fontWeight: '600', fontSize: '14px' }}>
            {IconArrowLeft} Back to Dashboard
          </Link>
        )}
      </div>
    </header>
  );
};

// --- MAIN APP ROUTER ---
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMentorOpen, setIsMentorOpen] = useState(false); // <-- ADDED: Controls the chat window

  return (
    <Router>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        :root, body, html, #root {
          margin: 0 !important; padding: 0 !important; width: 100% !important; max-width: none !important; min-height: 100vh !important;
          background-color: #ffffff !important; color: #1e293b !important; box-sizing: border-box !important; font-family: 'Inter', sans-serif !important; display: block !important; scroll-behavior: smooth;
        }

        .navbar { display: flex; justify-content: space-between; align-items: center; padding: 16px 32px; background: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.03); position: sticky; top: 0; z-index: 100; width: 100%; box-sizing: border-box; }
        .nav-logo { display: flex; align-items: center; gap: 12px; }
        .logo-icon { width: 36px; height: 36px; background-color: #0ea5e9; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; }
        .nav-links a:hover { color: #0ea5e9 !important; transition: color 0.2s; }
        .nav-actions { display: flex; align-items: center; gap: 16px; }
        .btn-primary { background-color: #0ea5e9; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; font-size: 14px; cursor: pointer; transition: background 0.2s; }
        .btn-primary:hover { background-color: #0284c7; }
        
        .fab { position: fixed; bottom: 32px; right: 32px; width: 64px; height: 64px; background-color: #2563eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; border: none; cursor: pointer; box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.4); z-index: 10000; transition: all 0.2s; }
        .fab:hover { transform: scale(1.05); }
      `}</style>

      {/* TOP NAVIGATION ROUTING */}
      <Routes>
        <Route path="/*" element={<TopNav />} />
      </Routes>

      {/* PAGE CONTENT ROUTING */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/about" element={<AboutPage />} />
        
        <Route path="/login" element={<AuthPage onLogin={() => setIsAuthenticated(true)} />} />
        <Route path="/dashboard" element={<DashboardHome onLogout={() => setIsAuthenticated(false)} />} />
        <Route path="/assessment" element={<AssessmentPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/opportunities" element={<OpportunitiesPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>

      {/* FLOATING ACTION BUTTON & AI MENTOR ROUTING */}
      <Routes>
        {['/dashboard', '/assessment', '/skills', '/opportunities', '/tasks', '/articles', '/profile', '/settings'].map(path => (
          <Route key={path} path={path} element={
            <div style={{ position: 'fixed', bottom: '0', right: '0', zIndex: 9999 }}>
              {/* Show the chat window if open */}
              {isMentorOpen && (
                <div style={{ position: 'fixed', bottom: '110px', right: '32px', zIndex: 9999 }}>
                  <AICareerMentor />
                </div>
              )}
              {/* Toggle Button */}
              <button 
                className="fab" 
                onClick={() => setIsMentorOpen(!isMentorOpen)}
                style={{ backgroundColor: isMentorOpen ? '#ef4444' : '#2563eb' }}
              >
                {isMentorOpen ? IconClose : IconChat}
              </button>
            </div>
          } />
        ))}
      </Routes>
    </Router>
  );
}

export default App;