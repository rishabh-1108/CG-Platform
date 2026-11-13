import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Side Navigation Icons (Standardized)
const NavIcon1 = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>; // Assessment
const NavIcon2 = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>; // Skills
const NavIcon3 = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>; // Opportunities
const NavIcon4 = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>; // Tasks
const NavIcon5 = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>; // Articles

// Page Specific Icons
const IconBriefcase = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const IconMessageSquare = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const IconUsers = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconCode = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
const IconType = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>;
const IconMic = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>;
const IconBrain = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>;
const IconRefresh = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>;

export const SkillsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Overview');
  const [inputType, setInputType] = useState('text');
  
  const tabs = ['Overview', 'Interview Skills', 'Communication', 'Group Discussion'];

  const getPromptsForTab = (tab) => {
    switch(tab) {
      case 'Interview Skills': return "AI Prompt: Tell me about a time you faced a significant technical challenge in a project and how you resolved it.";
      case 'Communication': return "AI Prompt: Explain the concept of 'Cloud Computing' as if you were speaking to a non-technical client.";
      case 'Group Discussion': return "AI Prompt: Share your perspective on the statement: 'Artificial Intelligence will create more jobs than it destroys.'";
      default: return "";
    }
  };

  return (
    <div className="skills-container">
      <style>{`
        /* Dynamic Cosmic Glass Background */
        .skills-container {
          min-height: 100vh;
          padding: 60px 20px;
          background: linear-gradient(135deg, #ccfbf1 0%, #d1fae5 40%, #bae6fd 70%, #e0f2fe 100%);
          background-size: 400% 400%;
          animation: cosmicGradient 15s ease infinite;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow-x: hidden;
        }
        @keyframes cosmicGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Top Right Refresh Action */
        .top-right-actions {
          position: absolute;
          top: 24px;
          right: 32px;
          z-index: 100;
        }
        .refresh-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.9);
          padding: 8px 16px;
          border-radius: 12px;
          font-weight: 600;
          color: #334155;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }
        .refresh-btn:hover {
          background: #ffffff;
          transform: translateY(-2px);
          color: #0284c7;
        }

        /* Glassmorphism Panels */
        .glass-panel {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.05);
          border-radius: 20px;
          position: relative;
          z-index: 1;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .glass-panel:hover {
          background: rgba(255, 255, 255, 0.85);
          box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.1);
        }

        /* Side Navigation (Icons Only) */
        .side-nav {
          position: fixed;
          right: 32px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 16px;
          z-index: 50;
        }
        .nav-icon {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .nav-icon:hover { background: rgba(255, 255, 255, 0.9); color: #0ea5e9; transform: scale(1.05); }
        .nav-icon.active { background: #0ea5e9; color: white; border: none; box-shadow: 0 8px 20px rgba(14, 165, 233, 0.4); }

        /* Content Layout */
        .content-wrapper { 
          max-width: 1000px; 
          margin: 0 auto; 
          position: relative; 
          z-index: 10; 
          padding-right: 120px; 
          display: flex;
          flex-direction: column;
        }
        
        .header-title { font-size: 42px; font-weight: 800; color: #0f172a; margin-bottom: 12px; }
        .header-subtitle { color: #475569; font-size: 18px; max-width: 600px; margin-bottom: 40px; line-height: 1.5; }

        /* Tabs Container */
        .tabs-container {
          display: flex; background: rgba(255, 255, 255, 0.4); backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.7); border-radius: 16px; padding: 8px; gap: 8px; margin-bottom: 40px; 
          flex-wrap: wrap; width: fit-content;
        }
        .tab-btn { 
          padding: 12px 24px; border: none; background: transparent; color: #475569; 
          font-weight: 700; font-size: 14px; border-radius: 12px; cursor: pointer; transition: all 0.3s; 
        }
        .tab-btn.active { background: #ffffff; color: #0284c7; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }

        /* Overview Grid */
        .overview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }
        .skill-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
        }
        .skill-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }
        .skill-icon {
          width: 48px; height: 48px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center; color: white;
        }
        .skill-title { font-size: 20px; font-weight: 700; color: #0f172a; margin: 0; }
        
        .progress-container { width: 100%; margin-bottom: 12px; }
        .progress-bar-bg { width: 100%; height: 10px; background: rgba(0,0,0,0.05); border-radius: 10px; overflow: hidden; }
        .progress-bar-fill { height: 100%; border-radius: 10px; transition: width 1s ease-in-out; }
        .progress-text { display: flex; justify-content: space-between; font-size: 14px; font-weight: 600; color: #64748b; margin-top: 8px; }

        /* AI Insights Banner */
        .ai-banner {
          display: flex; align-items: center; gap: 16px; padding: 20px 24px;
          background: linear-gradient(90deg, rgba(14, 165, 233, 0.1), rgba(168, 85, 247, 0.1));
          border: 1px solid rgba(14, 165, 233, 0.2); border-radius: 16px; margin-top: 16px;
        }
        .ai-banner-icon { color: #0ea5e9; flex-shrink: 0; }
        .ai-banner-text { color: #1e293b; font-size: 15px; font-weight: 500; line-height: 1.5; }

        /* Assessment Container */
        .assessment-container { padding: 40px; }
        .assessment-header { font-size: 24px; font-weight: 800; color: #0f172a; margin-bottom: 8px; }
        .assessment-prompt {
          padding: 16px 20px; background: rgba(255,255,255,0.8); border-left: 4px solid #0ea5e9;
          border-radius: 0 12px 12px 0; color: #334155; font-size: 16px; font-weight: 500; margin-bottom: 32px;
        }

        .input-toggle {
          display: flex; background: rgba(0,0,0,0.04); border-radius: 12px; padding: 6px; margin-bottom: 24px; width: fit-content;
        }
        .toggle-btn {
          display: flex; align-items: center; gap: 8px; padding: 10px 24px; border: none; border-radius: 8px;
          font-weight: 600; font-size: 14px; cursor: pointer; transition: all 0.2s;
        }
        .toggle-btn.text-active { background: white; color: #0ea5e9; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
        .toggle-btn.voice-active { background: white; color: #ef4444; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
        .toggle-btn.inactive { background: transparent; color: #64748b; }

        .text-area {
          width: 100%; height: 200px; padding: 20px; border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.9); background: rgba(255,255,255,0.5);
          backdrop-filter: blur(10px); font-family: 'Inter', sans-serif; font-size: 16px; color: #334155;
          resize: none; outline: none; box-shadow: inset 0 2px 5px rgba(0,0,0,0.02);
          transition: all 0.3s; box-sizing: border-box;
        }
        .text-area:focus { background: rgba(255,255,255,0.9); border-color: #38bdf8; }

        .voice-area {
          height: 200px; display: flex; flex-direction: column; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.5); border-radius: 16px; border: 2px dashed #cbd5e1; gap: 16px;
        }
        .mic-btn {
          width: 80px; height: 80px; border-radius: 50%; background: #fee2e2; color: #ef4444;
          display: flex; align-items: center; justify-content: center; border: none; cursor: pointer;
          transition: all 0.3s; box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4);
        }
        .mic-btn:hover { transform: scale(1.05); animation: pulse 1.5s infinite cubic-bezier(0.66, 0, 0, 1); }
        @keyframes pulse { to { box-shadow: 0 0 0 20px rgba(239, 68, 68, 0); } }

        .submit-btn {
          width: 100%; padding: 18px; margin-top: 32px; background: linear-gradient(to right, #0284c7, #0ea5e9);
          color: white; border: none; border-radius: 12px; font-weight: 700; font-size: 16px;
          cursor: pointer; transition: all 0.3s; box-shadow: 0 4px 15px rgba(2, 132, 199, 0.3);
        }
        .submit-btn:hover { opacity: 0.9; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(2, 132, 199, 0.4); }

        @media (max-width: 1024px) {
          .content-wrapper { padding-right: 0; }
          .side-nav, .top-right-actions { display: none; }
        }
      `}</style>

      {/* Top Right Refresh Button */}
      <div className="top-right-actions">
        <button className="refresh-btn" onClick={() => window.location.reload()}>
          <IconRefresh /> Refresh
        </button>
      </div>

      {/* Expanded Side Navigation Panel - ONLY ICONS */}
      <div className="side-nav">
        <div className="nav-icon" onClick={() => navigate('/assessment')} title="Assessment"><NavIcon1 /></div>
        <div className="nav-icon active" onClick={() => navigate('/skills')} title="Skills"><NavIcon2 /></div>
        <div className="nav-icon" onClick={() => navigate('/opportunities')} title="Opportunities"><NavIcon3 /></div>
        <div className="nav-icon" onClick={() => navigate('/tasks')} title="Tasks"><NavIcon4 /></div>
        <div className="nav-icon" onClick={() => navigate('/articles')} title="Articles"><NavIcon5 /></div>
      </div>

      <div className="content-wrapper">
        <h1 className="header-title">Skills Development</h1>
        <p className="header-subtitle">Analyze and improve your interview strategies, communication clarity, and group discussion techniques with real-time AI feedback.</p>

        <div className="tabs-container">
          {tabs.map(tab => (
            <button 
              key={tab} 
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`} 
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'Overview' ? (
          <>
            <div className="overview-grid">
              <div className="glass-panel skill-card">
                <div className="skill-header">
                  <div className="skill-icon" style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}><IconBriefcase /></div>
                  <h3 className="skill-title">Interview Skills</h3>
                </div>
                <div className="progress-container">
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill" style={{ width: '68%', background: '#3b82f6' }}></div>
                  </div>
                  <div className="progress-text"><span>Intermediate</span><span>68%</span></div>
                </div>
              </div>

              <div className="glass-panel skill-card">
                <div className="skill-header">
                  <div className="skill-icon" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}><IconMessageSquare /></div>
                  <h3 className="skill-title">Communication</h3>
                </div>
                <div className="progress-container">
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill" style={{ width: '82%', background: '#10b981' }}></div>
                  </div>
                  <div className="progress-text"><span>Advanced</span><span>82%</span></div>
                </div>
              </div>

              <div className="glass-panel skill-card">
                <div className="skill-header">
                  <div className="skill-icon" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}><IconUsers /></div>
                  <h3 className="skill-title">Group Discussion</h3>
                </div>
                <div className="progress-container">
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill" style={{ width: '55%', background: '#f59e0b' }}></div>
                  </div>
                  <div className="progress-text"><span>Developing</span><span>55%</span></div>
                </div>
              </div>

              <div className="glass-panel skill-card">
                <div className="skill-header">
                  <div className="skill-icon" style={{ background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)' }}><IconCode /></div>
                  <h3 className="skill-title">Technical Logic</h3>
                </div>
                <div className="progress-container">
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill" style={{ width: '90%', background: '#8b5cf6' }}></div>
                  </div>
                  <div className="progress-text"><span>Expert</span><span>90%</span></div>
                </div>
              </div>
            </div>

            <div className="glass-panel ai-banner">
              <div className="ai-banner-icon"><IconBrain /></div>
              <div className="ai-banner-text">
                <strong>AI Profile Analysis:</strong> You demonstrate excellent technical logic and strong verbal communication. However, your group discussion metrics show a need to improve active listening and consensus-building. We recommend trying the Group Discussion simulator next.
              </div>
            </div>
          </>
        ) : (
          <div className="glass-panel assessment-container">
            <h2 className="assessment-header">{activeTab} Assessment</h2>
            <div className="assessment-prompt">{getPromptsForTab(activeTab)}</div>

            <div className="input-toggle">
              <button 
                className={`toggle-btn ${inputType === 'text' ? 'text-active' : 'inactive'}`}
                onClick={() => setInputType('text')}
              >
                <IconType /> Text Input
              </button>
              <button 
                className={`toggle-btn ${inputType === 'voice' ? 'voice-active' : 'inactive'}`}
                onClick={() => setInputType('voice')}
              >
                <IconMic /> Voice Input
              </button>
            </div>

            {inputType === 'text' ? (
              <textarea 
                className="text-area" 
                placeholder="Type your complete response here. The AI will analyze your vocabulary, structure, and relevance..."
              />
            ) : (
              <div className="voice-area">
                <button className="mic-btn"><IconMic /></button>
                <span style={{ color: '#64748b', fontWeight: '500' }}>Click to start recording your response</span>
              </div>
            )}

            <button className="submit-btn">Run AI Analysis</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsPage;