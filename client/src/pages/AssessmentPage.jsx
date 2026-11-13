import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// General / Actions Icons
const IconRefresh = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>;
const IconBrain = () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/></svg>;
const IconSparkles = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>;

// Side Navigation Icons (Standardized)
const NavIcon1 = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>; // Assessment
const NavIcon2 = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>; // Skills
const NavIcon3 = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>; // Opportunities
const NavIcon4 = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>; // Tasks
const NavIcon5 = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>; // Articles

export const AssessmentPage = () => {
  const navigate = useNavigate();
  const [currentQ, setCurrentQ] = useState(0);
  const [answer, setAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);

  const questions = [
    "What subjects or activities do you enjoy the most?",
    "What are your key strengths or technical skills?",
    "How do you prefer to learn new concepts?",
    "What type of work environment appeals to you?",
    "What are your career goals for the next 5-10 years?",
    "What challenges are you facing in choosing a career path?"
  ];

  const handleNext = () => {
    if (currentQ < questions.length - 1) { 
      setCurrentQ(currentQ + 1); 
      setAnswer(""); 
    } else { 
      setShowResult(true); 
    }
  };

  return (
    <div className="assessment-container">
      <style>{`
        /* Dynamic Cosmic Glass Background */
        .assessment-container {
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
        }
        
        .animated-panel {
          animation: slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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
          max-width: 900px; 
          margin: 0 auto; 
          position: relative; 
          z-index: 10; 
          padding-right: 120px; 
          display: flex;
          flex-direction: column;
        }

        .header-title { font-size: 42px; font-weight: 800; color: #0f172a; margin-bottom: 12px; }
        .header-subtitle { color: #475569; font-size: 18px; max-width: 600px; margin-bottom: 40px; line-height: 1.5; }

        /* Progress Tracker */
        .progress-card {
          padding: 24px 32px;
          margin-bottom: 32px;
        }
        .progress-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          font-size: 14px;
          font-weight: 700;
        }
        .progress-bar-bg {
          width: 100%; height: 10px; background: rgba(0,0,0,0.06); border-radius: 10px; overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%; border-radius: 10px; transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Question Layout */
        .qa-layout {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }
        .ai-avatar {
          width: 56px; height: 56px; border-radius: 16px;
          background: linear-gradient(135deg, #0ea5e9, #2563eb);
          color: white; display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; box-shadow: 0 8px 20px rgba(14, 165, 233, 0.3);
        }
        
        .question-card {
          width: 100%; padding: 32px; display: flex; flex-direction: column;
        }
        .question-title { font-size: 16px; font-weight: 700; color: #0ea5e9; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 12px 0; }
        .question-text { font-size: 22px; font-weight: 700; color: #1e293b; line-height: 1.4; margin: 0 0 32px 0; }
        
        .answer-area {
          width: 100%; height: 180px; padding: 20px; border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.9); background: rgba(255,255,255,0.5);
          backdrop-filter: blur(10px); font-family: 'Inter', sans-serif; font-size: 16px; color: #334155;
          resize: none; outline: none; box-shadow: inset 0 2px 5px rgba(0,0,0,0.02);
          transition: all 0.3s; box-sizing: border-box; margin-bottom: 32px;
        }
        .answer-area:focus { background: rgba(255,255,255,0.9); border-color: #38bdf8; }

        .btn-row { display: flex; justify-content: space-between; gap: 16px; }
        .btn {
          padding: 14px 28px; border-radius: 12px; font-weight: 700; font-size: 15px;
          cursor: pointer; transition: all 0.2s; border: none;
        }
        .btn-back {
          background: rgba(255,255,255,0.6); border: 1px solid rgba(255,255,255,0.9); color: #64748b;
        }
        .btn-back:hover:not(:disabled) { background: #ffffff; color: #1e293b; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .btn-back:disabled { opacity: 0.5; cursor: not-allowed; }
        
        .btn-next {
          background: linear-gradient(135deg, #0ea5e9, #0284c7); color: white;
          box-shadow: 0 4px 15px rgba(14, 165, 233, 0.3);
        }
        .btn-next:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(14, 165, 233, 0.4); }

        /* Result View */
        .result-view {
          text-align: center; padding: 60px 40px; display: flex; flex-direction: column; align-items: center;
        }
        .result-icon-wrapper {
          width: 96px; height: 96px; background: linear-gradient(135deg, #dcfce7, #a7f3d0);
          color: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center;
          margin-bottom: 24px; box-shadow: 0 10px 25px rgba(16, 185, 129, 0.2);
        }
        .result-heading { font-size: 36px; color: #0f172a; font-weight: 800; margin: 0 0 16px 0; }
        .result-subheading { font-size: 18px; color: #64748b; margin-bottom: 40px; max-width: 500px; line-height: 1.6; }
        
        .result-highlight {
          background: rgba(255, 255, 255, 0.8); border: 1px solid rgba(255, 255, 255, 0.9);
          padding: 32px; border-radius: 20px; text-align: left; width: 100%; max-width: 600px;
          margin-bottom: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.03);
        }

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
        <div className="nav-icon active" onClick={() => navigate('/assessment')} title="Assessment"><NavIcon1 /></div>
        <div className="nav-icon" onClick={() => navigate('/skills')} title="Skills"><NavIcon2 /></div>
        <div className="nav-icon" onClick={() => navigate('/opportunities')} title="Opportunities"><NavIcon3 /></div>
        <div className="nav-icon" onClick={() => navigate('/tasks')} title="Tasks"><NavIcon4 /></div>
        <div className="nav-icon" onClick={() => navigate('/articles')} title="Articles"><NavIcon5 /></div>
      </div>

      <div className="content-wrapper">
        <h1 className="header-title">AI Career Assessment</h1>
        <p className="header-subtitle">Interact with our intelligence engine to identify your strengths and map out your optimal career trajectory.</p>

        {!showResult ? (
          <div className="animated-panel">
            <div className="glass-panel progress-card">
              <div className="progress-header">
                <span style={{ color: '#1e293b' }}>Core Assessment Phase</span>
                <span style={{ color: '#0ea5e9' }}>Question {currentQ + 1} of {questions.length}</span>
                <span style={{ color: '#64748b' }}>AI Analysis</span>
              </div>
              <div className="progress-bar-bg">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${((currentQ + 1) / questions.length) * 100}%`, background: 'linear-gradient(90deg, #38bdf8, #0284c7)' }}
                ></div>
              </div>
            </div>

            <div className="qa-layout">
              <div className="ai-avatar"><IconSparkles /></div>
              
              <div className="glass-panel question-card">
                <h3 className="question-title">AI Prompt</h3>
                <p className="question-text">{questions[currentQ]}</p>
                
                <textarea 
                  className="answer-area"
                  placeholder="Type your detailed response here..." 
                  value={answer} 
                  onChange={(e) => setAnswer(e.target.value)} 
                />
                
                <div className="btn-row">
                  <button 
                    className="btn btn-back"
                    onClick={() => setCurrentQ(Math.max(0, currentQ - 1))} 
                    disabled={currentQ === 0}
                  >
                    Previous
                  </button>
                  <button 
                    className="btn btn-next"
                    onClick={handleNext}
                  >
                    {currentQ === questions.length - 1 ? 'Analyze with AI' : 'Next Question'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="glass-panel result-view animated-panel">
            <div className="result-icon-wrapper">
              <IconBrain />
            </div>
            <h2 className="result-heading">Your AI Analysis is Ready</h2>
            <p className="result-subheading">Based on your specific interests and goals, our AI has processed your inputs and identified your most compatible career pathways.</p>
            
            <div className="result-highlight">
              <h3 style={{ color: '#0ea5e9', margin: '0 0 12px 0', fontSize: '22px', fontWeight: '800' }}>
                Top Match: Software Engineering & IoT Systems
              </h3>
              <p style={{ margin: 0, color: '#475569', lineHeight: '1.7', fontSize: '16px' }}>
                Your strong problem-solving logic in Python and Java, combined with your capability in hardware integration, aligns perfectly with advanced technology roles.
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '16px' }}>
              <button 
                className="btn btn-back"
                onClick={() => { setShowResult(false); setCurrentQ(0); setAnswer(""); }} 
              >
                Retake Assessment
              </button>
              <button 
                className="btn btn-next"
                onClick={() => navigate('/dashboard')}
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssessmentPage;