import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// SVG Icons
const IconCode = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
const IconBrain = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>;
const IconCpu = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>;
const IconCheckCircle = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
const IconSparkles = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>;
const IconFileText = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>;

// SVG Icons (Sidebar)
const NavIcon1 = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>;
const NavIcon2 = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
const NavIcon3 = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
const NavIcon4 = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>;
const NavIcon5 = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;

export const TasksPage = () => {
  const navigate = useNavigate();
  const tasksData = [
    { 
      id: 1, 
      type: "Coding Test", 
      title: "Advanced Data Structures & Algorithms", 
      desc: "AI has identified a need to strengthen core logic. Solve 5 problems using Python or Java.", 
      icon: <IconCode />, 
      status: "Pending",
      time: "45 mins",
      color: "#3b82f6"
    },
    { 
      id: 2, 
      type: "Aptitude (OMR)", 
      title: "Quantitative Aptitude & Logical Reasoning", 
      desc: "Simulated OMR sheet test for engineering placements. Covers probability, time/work, and spatial reasoning.", 
      icon: <IconBrain />, 
      status: "Pending",
      time: "60 mins",
      color: "#8b5cf6"
    },
    { 
      id: 3, 
      type: "Project Assignment", 
      title: "IoT Smart City Parking Framework", 
      desc: "Develop the software architecture for an ESP32 and ultrasonic sensor-based parking prototype.", 
      icon: <IconCpu />, 
      status: "In Progress",
      time: "2 Days",
      color: "#f59e0b"
    },
    { 
      id: 4, 
      type: "Extra Assessment", 
      title: "Spatial Awareness & Aviation Logic", 
      desc: "Specialized assessment measuring reaction time, spatial orientation, and basic aerodynamics logic.", 
      icon: <IconSparkles />, 
      status: "Pending",
      time: "30 mins",
      color: "#ec4899"
    },
    { 
      id: 5, 
      type: "Presentation", 
      title: "Staging", 
      desc: "Upload your final 2D Animation Staging document and team member details for AI review.", 
      icon: <IconFileText />, 
      status: "Completed",
      time: "Completed",
      color: "#10b981"
    }
  ];

  return (
    <div className="tasks-container">
      <style>{`
        /* Dynamic Animated Background */
        .tasks-container {
          min-height: 100vh;
          padding: 40px 20px;
          background: linear-gradient(-45deg, #f8fafc, #e0e7ff, #c7d2fe, #f1f5f9);
          background-size: 400% 400%;
          animation: gradientBG 15s ease infinite;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Ambient glowing orbs */
        .tasks-container::before, .tasks-container::after {
          content: ''; position: absolute; border-radius: 50%; filter: blur(90px); z-index: 0; opacity: 0.5;
        }
        .tasks-container::before { 
          top: -10%; left: -10%; width: 500px; height: 500px; background: rgba(99, 102, 241, 0.4); 
          animation: floatOrb 10s ease-in-out infinite; 
        }
        .tasks-container::after { 
          bottom: -10%; right: -10%; width: 600px; height: 600px; background: rgba(56, 189, 248, 0.3); 
          animation: floatOrb 12s ease-in-out infinite reverse; 
        }
        @keyframes floatOrb { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(30px, -50px); } }

        /* Glassmorphism Panel */
        .glass-panel {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 10px 40px 0 rgba(31, 38, 135, 0.07);
          border-radius: 16px;
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
        }
        .glass-panel:hover {
          background: rgba(255, 255, 255, 0.85);
          box-shadow: 0 15px 50px 0 rgba(31, 38, 135, 0.1);
          transform: translateY(-3px);
        }

        /* Glassmorphism Side Navigation */
        .side-nav {
          position: fixed;
          right: 32px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 16px;
          z-index: 100;
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
        .nav-icon:hover {
          background: rgba(255, 255, 255, 0.9);
          color: #0ea5e9;
          transform: scale(1.05);
        }
        .nav-icon.active {
          background: #0ea5e9;
          color: white;
          border: none;
          box-shadow: 0 8px 20px rgba(14, 165, 233, 0.4);
        }

        .content-wrapper { max-width: 1000px; margin: 0 auto; position: relative; z-index: 10; padding-right: 80px; }
        
        .page-header { text-align: center; margin-bottom: 40px; }
        .page-title { font-size: 32px; font-weight: 800; color: #1e293b; margin-bottom: 12px; }
        
        /* AI Banner */
        .ai-banner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: linear-gradient(90deg, rgba(99,102,241,0.1), rgba(168,85,247,0.1));
          border: 1px solid rgba(99,102,241,0.2);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 32px;
          color: #4338ca;
          font-weight: 600;
          font-size: 15px;
        }

        /* Stats Row */
        .stats-grid { 
          display: grid; 
          grid-template-columns: repeat(2, 1fr); 
          gap: 24px; 
          margin-bottom: 40px; 
        }
        .stat-card { 
          text-align: center; 
          padding: 30px; 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          justify-content: center; 
        }
        .stat-num { font-size: 48px; font-weight: 800; margin-bottom: 8px; color: #0f172a; line-height: 1; }
        .stat-label { color: #64748b; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }

        /* Task List */
        .task-list { display: flex; flex-direction: column; gap: 20px; }
        
        .task-card { 
          display: flex; 
          align-items: center; 
          padding: 24px 32px; 
          gap: 24px;
          width: 100%;
          box-sizing: border-box;
        }

        .task-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: white;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .task-content { flex-grow: 1; display: flex; flex-direction: column; gap: 6px; }
        
        .task-meta { display: flex; align-items: center; gap: 12px; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
        .task-title { font-size: 20px; font-weight: 700; color: #1e293b; margin: 0; }
        .task-desc { font-size: 15px; color: #64748b; line-height: 1.5; margin: 0; max-width: 90%; }

        .task-action { display: flex; flex-direction: column; align-items: flex-end; gap: 12px; min-width: 140px; }
        
        .status-badge {
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
        }
        .status-pending { background: rgba(245, 158, 11, 0.15); color: #d97706; }
        .status-progress { background: rgba(59, 130, 246, 0.15); color: #2563eb; }
        .status-completed { background: rgba(16, 185, 129, 0.15); color: #059669; }

        .action-btn {
          padding: 10px 24px;
          border-radius: 8px;
          border: none;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
          width: 100%;
        }
        .btn-primary { background: #1e293b; color: white; }
        .btn-primary:hover { background: #0f172a; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(15,23,42,0.2); }
        .btn-outline { background: transparent; border: 2px solid #e2e8f0; color: #64748b; }

        @media (max-width: 768px) {
          .task-card { flex-direction: column; align-items: flex-start; }
          .task-action { align-items: flex-start; width: 100%; margin-top: 12px; }
          .action-btn { width: 100%; }
          .side-nav { display: none; }
          .content-wrapper { padding-right: 0; }
        }
      `}</style>

      {/* Side Navigation Menu */}
      <div className="side-nav">
        <div className="nav-icon" onClick={() => navigate('/assessment')} title="Assessment"><NavIcon1 /></div>
        <div className="nav-icon" onClick={() => navigate('/skills')} title="Skills"><NavIcon2 /></div>
        <div className="nav-icon" onClick={() => navigate('/opportunities')} title="Opportunities"><NavIcon3 /></div>
        <div className="nav-icon active" onClick={() => navigate('/tasks')} title="Tasks"><NavIcon4 /></div>
        <div className="nav-icon" onClick={() => navigate('/articles')} title="Articles"><NavIcon5 /></div>
      </div>

      <div className="content-wrapper">
        <div className="page-header">
          <h1 className="page-title">My Tasks & Assessments</h1>
        </div>

        <div className="glass-panel ai-banner">
          <IconSparkles />
          <span>AI Profile Analysis Complete: Assigned 5 customized tests (Coding, Aptitude, OMR, and Projects) to bridge your skill gaps.</span>
        </div>

        <div className="stats-grid">
          <div className="glass-panel stat-card">
            <div className="stat-label">Pending Tasks</div>
            <div className="stat-num" style={{marginTop: '12px'}}>4</div>
          </div>
          <div className="glass-panel stat-card">
            <div className="stat-label">Completed</div>
            <div className="stat-num" style={{marginTop: '12px'}}>1</div>
          </div>
        </div>

        <div className="task-list">
          {tasksData.map(task => (
            <div key={task.id} className="glass-panel task-card">
              
              <div className="task-icon-wrapper" style={{ background: task.color }}>
                {task.icon}
              </div>
              
              <div className="task-content">
                <div className="task-meta" style={{ color: task.color }}>
                  <span>{task.type}</span>
                  <span style={{ color: '#cbd5e1' }}>•</span>
                  <span style={{ color: '#64748b' }}>{task.time}</span>
                </div>
                <h3 className="task-title">{task.title}</h3>
                <p className="task-desc">{task.desc}</p>
              </div>

              <div className="task-action">
                <span className={`status-badge ${
                  task.status === 'Pending' ? 'status-pending' : 
                  task.status === 'In Progress' ? 'status-progress' : 'status-completed'
                }`}>
                  {task.status}
                </span>
                
                {task.status === 'Completed' ? (
                  <button className="action-btn btn-outline" disabled>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'}}>
                      <IconCheckCircle /> Done
                    </div>
                  </button>
                ) : (
                  <button className="action-btn btn-primary">
                    {task.status === 'Pending' ? 'Start Test' : 'Continue'}
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TasksPage;