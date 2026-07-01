import React from 'react';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
  return (
    <>
      <style>{`
        .landing-container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
        .landing-hero { display: flex; align-items: center; justify-content: space-between; padding: 80px 0; gap: 40px; flex-wrap: wrap; }
        .landing-hero-content { flex: 1 1 500px; min-width: 300px; }
        .landing-badge { display: inline-block; background: #e0f2fe; color: #0284c7; font-size: 13px; font-weight: 600; padding: 8px 16px; border-radius: 20px; margin-bottom: 24px; }
        .landing-hero-title { font-size: clamp(40px, 5vw, 64px); font-weight: 900; line-height: 1.1; color: #0f172a; margin: 0 0 24px 0; letter-spacing: -0.03em; }
        .landing-hero-title span { color: #0ea5e9; }
        .landing-hero-desc { font-size: 18px; color: #64748b; line-height: 1.6; margin: 0 0 40px 0; }
        .landing-buttons { display: flex; gap: 16px; margin-bottom: 60px; flex-wrap: wrap;}
        .landing-btn-outline { background: white; color: #0f172a; border: 1px solid #e2e8f0; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 15px; cursor: pointer; transition: all 0.2s; }
        .landing-btn-outline:hover { border-color: #cbd5e1; background: #f8fafc; }
        .landing-stats { display: flex; gap: 48px; flex-wrap: wrap; }
        .landing-stat-item h3 { font-size: 28px; font-weight: 800; margin: 0 0 4px 0; }
        .landing-stat-item p { font-size: 14px; color: #64748b; margin: 0; }
        .landing-hero-image { flex: 1 1 500px; min-width: 300px; display: flex; justify-content: center; }
        
        .landing-sec-header { text-align: center; margin-bottom: 64px; padding-top: 80px; }
        .landing-sec-title { font-size: 40px; font-weight: 800; color: #0f172a; margin: 0 0 16px 0; letter-spacing: -0.02em; }
        .landing-sec-subtitle { font-size: 18px; color: #64748b; max-width: 700px; margin: 0 auto; line-height: 1.5; }

        .landing-challenges-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; margin-bottom: 80px; }
        .landing-challenge-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 32px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02); }
        .landing-challenge-icon { width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; font-size: 24px; }
        .landing-challenge-card h3 { font-size: 20px; font-weight: 700; margin: 0 0 12px 0; color: #0f172a; }
        .landing-challenge-card p { font-size: 15px; color: #64748b; margin: 0; line-height: 1.6; }

        .landing-ecosystem-bg { background-color: #f8fafc; padding-bottom: 80px; margin-top: 64px;}
        .landing-ecosystem-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
        .landing-ecosystem-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 40px 32px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05); transition: transform 0.2s; }
        .landing-ecosystem-card:hover { transform: translateY(-4px); }
        .landing-eco-icon { width: 56px; height: 56px; background: linear-gradient(135deg, #2563eb, #10b981); border-radius: 14px; display: flex; align-items: center; justify-content: center; color: white; margin-bottom: 24px; }
        .landing-ecosystem-card h3 { font-size: 20px; font-weight: 700; margin: 0 0 12px 0; color: #0f172a; }
        .landing-ecosystem-card p { font-size: 15px; color: #64748b; margin: 0; line-height: 1.6; }

        .landing-steps-container { max-width: 800px; margin: 0 auto 80px; position: relative; }
        .landing-step-item { display: flex; gap: 32px; margin-bottom: 48px; position: relative; }
        .landing-step-number { width: 64px; height: 64px; background: linear-gradient(135deg, #0ea5e9, #10b981); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: 800; flex-shrink: 0; z-index: 2; position: relative; box-shadow: 0 10px 15px -3px rgba(14, 165, 233, 0.3); }
        .landing-step-content { padding-top: 10px; }
        .landing-step-content h3 { font-size: 24px; font-weight: 700; margin: 0 0 12px 0; color: #0f172a; }
        .landing-step-content p { font-size: 16px; color: #64748b; margin: 0; line-height: 1.6; }
        .landing-step-line { position: absolute; left: 31px; top: 64px; bottom: -48px; width: 2px; background: #e2e8f0; z-index: 1; }
        .landing-step-item:last-child .landing-step-line { display: none; }

        .landing-cta-section { background: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%); padding: 100px 0; color: white; text-align: center; }
        .landing-cta-title { font-size: 48px; font-weight: 800; margin: 0 0 16px 0; letter-spacing: -0.02em; }
        .landing-cta-subtitle { font-size: 18px; opacity: 0.9; margin: 0 0 64px 0; font-weight: 500; }
        .landing-cta-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px; max-width: 900px; margin: 0 auto; }
        .landing-cta-card { background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 24px; padding: 48px; backdrop-filter: blur(10px); }
        .landing-cta-icon { width: 64px; height: 64px; margin: 0 auto 24px; display: flex; align-items: center; justify-content: center; }
        .landing-cta-card h3 { font-size: 28px; font-weight: 700; margin: 0 0 16px 0; }
        .landing-cta-card p { font-size: 16px; opacity: 0.9; margin: 0 0 32px 0; line-height: 1.6; }
        .landing-btn-orange { background: #f97316; color: white; border: none; padding: 16px 32px; border-radius: 12px; font-weight: 600; font-size: 16px; cursor: pointer; width: 100%; transition: background 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px; }
        .landing-btn-orange:hover { background: #ea580c; }
      `}</style>

      <div className="landing-container">
        <section className="landing-hero">
          <div className="landing-hero-content">
            <div className="landing-badge">India's First Holistic Career Platform</div>
            <h1 className="landing-hero-title">Your Career, <span>Your Choice</span></h1>
            <p className="landing-hero-desc">Empowering students with AI-powered career guidance, communication skills, and confidence building. Make informed decisions, pursue your passion, and unlock your true potential.</p>
            <div className="landing-buttons">
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <button className="landing-btn-primary" style={{ padding: '16px 32px', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px', background: '#0ea5e9', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                  Get Started Free 
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </Link>
              <button className="landing-btn-outline">Explore Features</button>
            </div>
            <div className="landing-stats">
              <div className="landing-stat-item">
                <h3 style={{ color: '#2563eb' }}>10,000+</h3>
                <p>Students Guided</p>
              </div>
              <div className="landing-stat-item">
                <h3 style={{ color: '#f97316' }}>500+</h3>
                <p>Career Paths</p>
              </div>
              <div className="landing-stat-item">
                <h3 style={{ color: '#10b981' }}>98%</h3>
                <p>Satisfaction Rate</p>
              </div>
            </div>
          </div>
          <div className="landing-hero-image">
            <div style={{ width: '100%', maxWidth: '600px', height: '400px', background: '#e0f2fe', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #bae6fd', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Students collaborating" style={{width: '100%', height: '100%', objectFit: 'cover', opacity: '0.9'}} />
            </div>
          </div>
        </section>
      </div>

      <div className="landing-container">
        <div className="landing-sec-header">
          <h2 className="landing-sec-title">The Challenge We're Solving</h2>
          <p className="landing-sec-subtitle">India's education system faces critical challenges that affect millions of students every year</p>
        </div>
        <div className="landing-challenges-grid">
          <div className="landing-challenge-card">
            <div className="landing-challenge-icon" style={{ color: '#ef4444', background: '#fef2f2' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            </div>
            <h3>Lack of Guidance</h3>
            <p>Students forced to make life-defining career decisions without proper awareness or self-understanding.</p>
          </div>
          <div className="landing-challenge-card">
            <div className="landing-challenge-icon" style={{ color: '#f97316', background: '#fff7ed' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3>Societal Pressure</h3>
            <p>Parental expectations push students toward traditional careers, ignoring individual interests and aptitudes.</p>
          </div>
          <div className="landing-challenge-card">
            <div className="landing-challenge-icon" style={{ color: '#2563eb', background: '#eff6ff' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
            </div>
            <h3>Skill Gaps</h3>
            <p>Inadequate communication and confidence training creates barriers in professional and social environments.</p>
          </div>
          <div className="landing-challenge-card">
            <div className="landing-challenge-icon" style={{ color: '#10b981', background: '#f0fdf4' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </div>
            <h3>Limited Exposure</h3>
            <p>Cultural restrictions and lack of soft skills training limit employability and personal growth.</p>
          </div>
        </div>
      </div>

      <div className="landing-ecosystem-bg">
        <div className="landing-container">
          <div className="landing-sec-header" style={{ paddingTop: '64px' }}>
            <h2 className="landing-sec-title">Complete Career & Skill Development Ecosystem</h2>
            <p className="landing-sec-subtitle">Everything you need to make informed decisions and build essential life skills</p>
          </div>
          <div className="landing-ecosystem-grid">
            <div className="landing-ecosystem-card" style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)', borderColor: '#bfdbfe' }}>
              <div className="landing-eco-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path></svg>
              </div>
              <h3>AI-Powered Assessments</h3>
              <p>Advanced aptitude and personality tests to discover your unique strengths and ideal career paths.</p>
            </div>
            <div className="landing-ecosystem-card">
              <div className="landing-eco-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <h3>Personalized Roadmaps</h3>
              <p>Custom career plans across multiple streams with actionable steps and milestones.</p>
            </div>
            <div className="landing-ecosystem-card">
              <div className="landing-eco-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <h3>Communication Training</h3>
              <p>Structured programs for public speaking, group discussions, and professional communication.</p>
            </div>
            <div className="landing-ecosystem-card">
              <div className="landing-eco-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3>Expert Mentorship</h3>
              <p>Connect with industry professionals and senior students for real-world guidance and insights.</p>
            </div>
            <div className="landing-ecosystem-card">
              <div className="landing-eco-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              </div>
              <h3>Confidence Building</h3>
              <p>Interactive workshops and safe environments to develop social skills and self-assurance.</p>
            </div>
            <div className="landing-ecosystem-card">
              <div className="landing-eco-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              </div>
              <h3>Parent & Educator Tools</h3>
              <p>Resources and workshops to help parents and teachers effectively support student growth.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="landing-container">
        <div className="landing-sec-header">
          <h2 className="landing-sec-title">How CG Platform Works</h2>
          <p className="landing-sec-subtitle">A simple four-step journey to discover your ideal career path</p>
        </div>
        
        <div className="landing-steps-container">
          <div className="landing-step-item">
            <div className="landing-step-line"></div>
            <div className="landing-step-number">01</div>
            <div className="landing-step-content">
              <h3>Take Assessment</h3>
              <p>Complete our comprehensive AI-powered aptitude and personality tests to understand your strengths, interests, and potential.</p>
            </div>
          </div>
          <div className="landing-step-item">
            <div className="landing-step-line"></div>
            <div className="landing-step-number">02</div>
            <div className="landing-step-content">
              <h3>Get Your Roadmap</h3>
              <p>Receive a personalized career roadmap with multiple stream options, required skills, and step-by-step guidance.</p>
            </div>
          </div>
          <div className="landing-step-item">
            <div className="landing-step-line"></div>
            <div className="landing-step-number">03</div>
            <div className="landing-step-content">
              <h3>Develop Skills</h3>
              <p>Join communication workshops, confidence building programs, and connect with mentors for practical guidance.</p>
            </div>
          </div>
          <div className="landing-step-item">
            <div className="landing-step-line"></div>
            <div className="landing-step-number">04</div>
            <div className="landing-step-content">
              <h3>Achieve Success</h3>
              <p>Build confidence, make informed decisions, and pursue your passion with the skills and support you need.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="landing-cta-section">
        <div className="landing-container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '20px', marginBottom: '32px', fontSize: '14px', fontWeight: '600' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
            100% Free to Get Started
          </div>
          <h2 className="landing-cta-title">Ready to Shape Your Future?</h2>
          <p className="landing-cta-subtitle">Join thousands of students making informed career choices and building essential skills for success</p>
          
          <div className="landing-cta-grid">
            <div className="landing-cta-card">
              <div className="landing-cta-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3>For Students</h3>
              <p>Discover your passion, build confidence, and plan your career journey</p>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <button className="landing-btn-orange">
                  Start Free Assessment
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </Link>
            </div>
            
            <div className="landing-cta-card">
              <div className="landing-cta-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
              </div>
              <h3>For Parents</h3>
              <p>Access tools and resources to guide your child's educational journey</p>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <button className="landing-btn-orange">
                  Explore Parent Tools
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};