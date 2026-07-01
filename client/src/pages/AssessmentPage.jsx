import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- SIDEBAR ICONS ---
const IconTarget = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const IconZap = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
const IconBriefcase = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const IconCheck = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>;
const IconFile = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>;
// --- PAGE ICON ---
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

export const AssessmentPage = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answer, setAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);

  const questions = [
    "What subjects or activities do you enjoy the most?",
    "What are your key strengths or skills?",
    "How do you prefer to learn?",
    "What type of work environment appeals to you?",
    "What are your career goals for the next 5-10 years?",
    "What challenges are you facing in choosing a career?"
  ];

  const handleNext = () => {
    if (currentQ < questions.length - 1) { setCurrentQ(currentQ + 1); setAnswer(""); } 
    else { setShowResult(true); }
  };

  return (
    <main className="main-wrapper" style={{ paddingTop: '32px', paddingBottom: '80px', maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
      {/* THIS GRID PUTS CONTENT ON LEFT, SIDEBAR ON RIGHT */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px', gap: '40px' }}>
        
        <div>
          {!showResult ? (
            <>
              <div style={{ background: '#f8fafc', marginBottom: '32px', padding: '32px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', fontSize: '14px', fontWeight: '600' }}>
                  <span style={{ color: '#1e293b' }}>Basic Information</span>
                  <span style={{ color: '#0ea5e9' }}>Question {currentQ + 1} of 6</span>
                  <span style={{ color: '#94a3b8' }}>Analysis</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', background: '#0ea5e9', width: `${((currentQ + 1) / 6) * 100}%`, transition: 'width 0.3s ease' }}></div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: '#e0f2fe', color: '#0ea5e9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: '800', flexShrink: 0 }}>A</div>
                <div style={{ width: '100%', padding: '24px', background: 'white', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', margin: '0 0 8px 0' }}>AI Career Assessment</h3>
                  <p style={{ fontSize: '15px', color: '#64748b', margin: '0 0 24px 0' }}>{questions[currentQ]}</p>
                  <textarea placeholder="Type your answer here in detail..." value={answer} onChange={(e) => setAnswer(e.target.value)} style={{ width: '100%', height: '150px', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '15px', resize: 'none', outline: 'none', fontFamily: 'inherit', marginBottom: '24px', backgroundColor: '#f8fafc', color: '#1e293b', boxSizing: 'border-box' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button onClick={() => setCurrentQ(Math.max(0, currentQ - 1))} disabled={currentQ === 0} style={{ padding: '12px 24px', background: currentQ === 0 ? '#f1f5f9' : '#ffffff', color: currentQ === 0 ? '#94a3b8' : '#1e293b', border: '1px solid #e2e8f0', borderRadius: '8px', fontWeight: '600', cursor: currentQ === 0 ? 'not-allowed' : 'pointer' }}>Back</button>
                    <button onClick={handleNext} style={{ padding: '12px 32px', background: '#0ea5e9', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>{currentQ === 5 ? 'Analyze with AI' : 'Next Question'}</button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '64px 24px', background: 'white', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ width: '80px', height: '80px', background: '#dcfce7', color: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>{IconBrain}</div>
              <h2 style={{ fontSize: '32px', color: '#1e293b', margin: '0 0 16px 0', fontWeight: '800' }}>Your AI Analysis is Ready</h2>
              <p style={{ fontSize: '16px', color: '#64748b', marginBottom: '32px', lineHeight: '1.6' }}>Based on your specific interests and goals, our AI has identified your most compatible career pathways.</p>
              <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '12px', border: '1px dashed #cbd5e1', textAlign: 'left', marginBottom: '32px' }}>
                <h3 style={{ color: '#0ea5e9', margin: '0 0 8px 0', fontSize: '18px' }}>Top Match: Software Engineering</h3>
                <p style={{ margin: 0, color: '#475569', lineHeight: '1.6' }}>Your strong problem-solving skills align perfectly with technology roles.</p>
              </div>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                <button onClick={() => { setShowResult(false); setCurrentQ(0); setAnswer(""); }} style={{ padding: '12px 24px', background: '#ffffff', color: '#1e293b', border: '1px solid #e2e8f0', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>Retake Assessment</button>
                <Link to="/dashboard"><button style={{ padding: '12px 24px', background: '#0ea5e9', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>Return to Dashboard</button></Link>
              </div>
            </div>
          )}
        </div>
        
        {/* ADDING SIDEBAR AND PASSING THE ACTIVE PATH */}
        <ModuleSidebar activePage="/assessment" />
      </div>
    </main>
  );
};