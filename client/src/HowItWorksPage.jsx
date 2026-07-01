import React from 'react';

const HowItWorksPage = () => {
  return (
    <div style={{ backgroundColor: '#fafaf9', minHeight: '100vh' }}>
      <style>{`
        .hiw-wrapper { max-width: 1000px; margin: 0 auto; padding: 60px 24px; font-family: 'Inter', sans-serif; }
        .text-center { text-align: center; }
        
        .badge-orange { display: inline-block; background-color: #ffedd5; color: #f97316; padding: 6px 16px; border-radius: 20px; font-size: 14px; font-weight: 600; margin-bottom: 24px; }
        
        .hero-title { font-size: clamp(32px, 5vw, 48px); font-weight: 800; color: #0284c7; line-height: 1.2; margin: 0 0 20px 0; }
        .hero-subtitle { font-size: 18px; color: #64748b; line-height: 1.6; max-width: 700px; margin: 0 auto 64px auto; }
        .section-title { font-size: 28px; font-weight: 800; color: #0f172a; margin-bottom: 40px; text-align: center; }

        .step-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 32px; margin-bottom: 24px; display: flex; gap: 32px; align-items: flex-start; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02); transition: transform 0.2s, box-shadow 0.2s; }
        .step-card:hover { transform: translateY(-2px); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05); }
        
        .step-icon-wrapper { position: relative; flex-shrink: 0; }
        .step-icon { width: 64px; height: 64px; border-radius: 16px; display: flex; align-items: center; justify-content: center; color: white; }
        .step-number { position: absolute; top: -8px; right: -8px; width: 28px; height: 28px; background: white; border: 2px solid; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; }
        
        .step-content { flex: 1; }
        .step-title { font-size: 22px; font-weight: 700; color: #1e293b; margin: 0 0 12px 0; }
        .step-desc { font-size: 16px; color: #64748b; margin: 0 0 20px 0; line-height: 1.5; }
        
        .step-checks { display: flex; flex-wrap: wrap; gap: 24px; }
        .check-item { display: flex; align-items: center; gap: 8px; font-size: 14px; color: #475569; }
        .check-icon { color: #0284c7; width: 16px; height: 16px; }

        .workflows-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px; margin: 80px 0; }
        .workflow-card { background: white; border: 1px solid #e2e8f0; border-radius: 24px; padding: 40px; }
        .workflow-card h3 { font-size: 24px; color: #1e293b; margin: 0 0 8px 0; }
        .workflow-card p { color: #64748b; margin: 0 0 32px 0; }
        
        .workflow-list { display: flex; flex-direction: column; gap: 16px; }
        .workflow-list-item { display: flex; align-items: center; gap: 16px; color: #334155; font-size: 15px; }
        .workflow-num { width: 28px; height: 28px; background: #e0f2fe; color: #0284c7; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 13px; flex-shrink: 0; }

        .timeline-section { background: #f0f9ff; border-radius: 32px; padding: 60px 40px; margin-bottom: 80px; }
        .timeline-list { max-width: 600px; margin: 0 auto; display: flex; flex-direction: column; gap: 24px; }
        .timeline-item { display: flex; align-items: center; gap: 24px; }
        .timeline-badge { background: #f97316; color: white; padding: 6px 16px; border-radius: 20px; font-size: 13px; font-weight: 600; min-width: 80px; text-align: center; }
        .timeline-arrow { color: #0284c7; }
        .timeline-text { color: #1e293b; font-weight: 500; font-size: 15px; }

        .cta-section { background: linear-gradient(135deg, #2563eb, #10b981); border-radius: 32px; padding: 80px 40px; text-align: center; color: white; }
        .btn-orange { background-color: #f97316; color: white; border: none; padding: 16px 32px; border-radius: 12px; font-size: 18px; font-weight: 600; cursor: pointer; transition: background-color 0.2s; margin-top: 32px; }
        .btn-orange:hover { background-color: #ea580c; }
        
        @media (max-width: 768px) {
          .step-card { flex-direction: column; gap: 20px; padding: 24px; }
          .step-checks { flex-direction: column; gap: 12px; }
          .timeline-item { flex-direction: column; align-items: flex-start; gap: 12px; }
          .timeline-arrow { display: none; }
        }
      `}</style>

      <div className="hiw-wrapper">
        <div className="text-center">
          <div className="badge-orange">Simple & Effective Process</div>
          <h1 className="hero-title">Your Journey to Career Success</h1>
          <p className="hero-subtitle">
            We've designed a straightforward, proven process that guides you from career discovery to skill development and achievement. Here's how it works, step by step.
          </p>
        </div>

        <h2 className="section-title">8 Simple Steps to Success</h2>
        
        <div>
          {stepsData.map((step, idx) => (
            <div key={idx} className="step-card">
              <div className="step-icon-wrapper">
                <div className="step-icon" style={{ backgroundColor: step.color }}>{step.icon}</div>
                <div className="step-number" style={{ borderColor: step.color, color: step.color }}>
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
                <div className="step-checks">
                  {step.checks.map((check, cIdx) => (
                    <div key={cIdx} className="check-item">
                      <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                      {check}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-title" style={{ marginTop: '80px' }}>Tailored Workflows</h2>
        
        <div className="workflows-container">
          <div className="workflow-card">
            <h3>For Students</h3>
            <p>Your personal journey to career discovery</p>
            <div className="workflow-list">
              {['Sign up and complete profile', 'Take comprehensive career assessment', 'Review personalized career matches', 'Set goals and create action plan', 'Access learning resources', 'Track progress and earn achievements', 'Connect with mentors', 'Build your career portfolio'].map((item, i) => (
                <div key={i} className="workflow-list-item">
                  <div className="workflow-num">{i + 1}</div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="workflow-card">
            <h3>For Parents</h3>
            <p>Support your child's career development</p>
            <div className="workflow-list">
              {['Create parent account', 'Monitor child\'s progress', 'Review career recommendations', 'Access guidance resources', 'Track skill development', 'Celebrate achievements together', 'Connect with educators', 'Support goal setting'].map((item, i) => (
                <div key={i} className="workflow-list-item">
                  <div className="workflow-num">{i + 1}</div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="timeline-section">
          <h2 className="section-title">Your Timeline</h2>
          <div className="timeline-list">
            {[
              { time: 'Day 1', text: 'Sign up and complete first assessment' },
              { time: 'Week 1', text: 'Explore career recommendations and set goals' },
              { time: 'Month 1', text: 'Complete learning resources and track progress' },
              { time: 'Month 3', text: 'Earn first achievements and connect with mentors' },
              { time: 'Month 6', text: 'Develop key skills and build portfolio' },
              { time: 'Year 1', text: 'Launch career journey with confidence' }
            ].map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-badge">{item.time}</div>
                <svg className="timeline-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                <div className="timeline-text">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-section">
          <svg style={{ margin: '0 auto 24px auto' }} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.5 10.5 21 3"></path><path d="M16 3h5v5"></path><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"></path></svg>
          <h2 style={{ fontSize: '40px', fontWeight: '800', margin: '0 0 20px 0' }}>Ready to Start Your Journey?</h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto' }}>
            Join thousands of students discovering their dream careers today
          </p>
          <button className="btn-orange">Begin Step 1: Sign Up Free</button>
        </div>
      </div>
    </div>
  );
};

const stepsData = [
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="19" y2="14"></line><line x1="22" y1="11" x2="16" y2="11"></line></svg>,
    color: '#0ea5e9',
    title: 'Create Your Account',
    desc: "Sign up in seconds with just your email. Choose whether you're a student or parent to get a personalized experience.",
    checks: ['Quick 30-second registration', 'Secure authentication', 'Customized dashboard based on your role']
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
    color: '#d946ef',
    title: 'Complete Your Profile',
    desc: 'Tell us about yourself - your interests, current grade level, and what subjects excite you the most.',
    checks: ['Basic information setup', 'Interest selection', 'Goal preferences']
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>,
    color: '#10b981',
    title: 'Take AI Assessment',
    desc: 'Answer thoughtful questions about your interests, strengths, challenges, and aspirations. Our AI analyzes your responses.',
    checks: ['Comprehensive questionnaire', 'AI-powered analysis', 'Personalized insights generation']
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>,
    color: '#f97316',
    title: 'Get Career Recommendations',
    desc: 'Receive detailed career paths matched to your unique profile, complete with required skills and education pathways.',
    checks: ['Multiple career options', 'Skill requirements', 'Education paths']
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>,
    color: '#6366f1',
    title: 'Access Learning Resources',
    desc: 'Explore curated courses, articles, and tutorials specifically chosen to help you develop the skills you need.',
    checks: ['Personalized content', 'Multi-format resources', 'Skill-building materials']
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>,
    color: '#ef4444',
    title: 'Track Your Progress',
    desc: 'Monitor your skill development, complete milestones, and watch your career readiness score improve over time.',
    checks: ['Visual progress charts', 'Milestone tracking', 'Skill mastery levels']
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>,
    color: '#14b8a6',
    title: 'Earn Achievements',
    desc: 'Collect badges and certificates as you complete assessments, develop skills, and reach important career milestones.',
    checks: ['Digital badges', 'Shareable certificates', 'Recognition system']
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.5 10.5 21 3"></path><path d="M16 3h5v5"></path><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"></path></svg>,
    color: '#a855f7',
    title: 'Launch Your Career',
    desc: "With a clear path, developed skills, and a strong foundation, you're ready to pursue your dream career with confidence.",
    checks: ['Career roadmap', 'Skill portfolio', 'Confidence building']
  }
];

export default HowItWorksPage;