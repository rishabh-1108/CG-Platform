import React from 'react';

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: '#fafaf9', minHeight: '100vh' }}>
      <style>{`
        .about-wrapper { max-width: 1100px; margin: 0 auto; padding: 60px 24px; font-family: 'Inter', sans-serif; }
        .text-center { text-align: center; }
        
        .badge-orange { display: inline-block; background-color: #ffedd5; color: #f97316; padding: 6px 16px; border-radius: 20px; font-size: 14px; font-weight: 600; margin-bottom: 24px; }
        
        .hero-title { font-size: clamp(32px, 5vw, 48px); font-weight: 800; color: #0284c7; line-height: 1.2; margin: 0 0 20px 0; max-width: 800px; margin-inline: auto; }
        .hero-subtitle { font-size: 18px; color: #64748b; line-height: 1.6; max-width: 800px; margin: 0 auto 64px auto; }
        .section-title { font-size: 32px; font-weight: 800; color: #0f172a; margin-bottom: 20px; text-align: center; }
        .section-subtitle { font-size: 16px; color: #64748b; text-align: center; max-width: 700px; margin: 0 auto 48px auto; line-height: 1.6; }

        .pillars-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px; margin-bottom: 100px; }
        .pillar-card { background: white; border: 1px solid #e2e8f0; border-radius: 24px; padding: 40px 32px; text-align: center; transition: transform 0.2s, box-shadow 0.2s; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02); }
        .pillar-card:hover { transform: translateY(-4px); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05); }
        
        .pillar-icon { width: 64px; height: 64px; border-radius: 50%; margin: 0 auto 24px auto; display: flex; align-items: center; justify-content: center; color: white; background: linear-gradient(135deg, #2563eb, #10b981); }
        .pillar-title { font-size: 24px; font-weight: 700; color: #1e293b; margin: 0 0 16px 0; }
        .pillar-desc { font-size: 15px; color: #64748b; line-height: 1.6; margin: 0; }

        .grid-2x2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 24px; margin-bottom: 100px; }
        
        /* Challenge Cards (Red theme) */
        .challenge-card { background: white; border: 1px solid #fecaca; border-radius: 16px; padding: 32px; display: flex; gap: 24px; align-items: flex-start; transition: all 0.2s; }
        .challenge-card:hover { border-color: #ef4444; background: #fef2f2; }
        .challenge-icon { width: 48px; height: 48px; background: #fee2e2; color: #ef4444; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .card-tag-red { background: #ef4444; color: white; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 700; }
        
        /* Solution Cards (Blue theme) */
        .solution-card { background: white; border: 1px solid #bfdbfe; border-radius: 16px; padding: 32px; display: flex; gap: 24px; align-items: flex-start; transition: all 0.2s; }
        .solution-card:hover { border-color: #3b82f6; background: #eff6ff; }
        .solution-icon { width: 48px; height: 48px; background: #dbeafe; color: #3b82f6; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .card-tag-blue { background: #3b82f6; color: white; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 700; }

        .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; width: 100%; }
        .card-title { font-size: 18px; font-weight: 700; color: #1e293b; margin: 0; }
        .card-desc { font-size: 14px; color: #64748b; line-height: 1.6; margin: 0; }
        
        .impact-section { background: linear-gradient(135deg, #eff6ff, #ecfdf5); border-radius: 32px; padding: 64px 40px; margin-bottom: 60px; text-align: center; }
        .impact-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 32px; margin-top: 48px; }
        .impact-stat h2 { font-size: 48px; font-weight: 800; color: #2563eb; margin: 0 0 8px 0; }
        .impact-stat h4 { font-size: 18px; font-weight: 600; color: #1e293b; margin: 0 0 8px 0; }
        .impact-stat p { font-size: 14px; color: #64748b; margin: 0; }

        @media (max-width: 768px) {
          .grid-2x2 { grid-template-columns: 1fr; }
          .challenge-card, .solution-card { flex-direction: column; gap: 16px; padding: 24px; }
          .card-header { flex-direction: column; align-items: flex-start; gap: 12px; }
        }
      `}</style>

      <div className="about-wrapper">
        <div className="text-center">
          <div className="badge-orange">Solving Real Problems</div>
          <h1 className="hero-title">Transforming Career Guidance for the Next Generation</h1>
          <p className="hero-subtitle">
            We're on a mission to solve the career guidance crisis by combining cutting-edge AI technology with proven educational frameworks to help every student discover and achieve their dream career.
          </p>
        </div>

        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </div>
            <h3 className="pillar-title">Our Mission</h3>
            <p className="pillar-desc">Empower every student to discover their passion and purpose through personalized career guidance and skill development.</p>
          </div>
          <div className="pillar-card">
            <div className="pillar-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <h3 className="pillar-title">Our Vision</h3>
            <p className="pillar-desc">Create a world where every student has access to the tools, resources, and support needed to build their dream career.</p>
          </div>
          <div className="pillar-card">
            <div className="pillar-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </div>
            <h3 className="pillar-title">Our Values</h3>
            <p className="pillar-desc">Innovation, personalization, accessibility, and student success drive everything we do.</p>
          </div>
        </div>

        <h2 className="section-title">The Challenges We're Solving</h2>
        <p className="section-subtitle">
          Traditional career guidance systems are broken. Students face multiple barriers that prevent them from discovering and pursuing their ideal career paths.
        </p>

        <div className="grid-2x2">
          {[
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>, title: 'Career Confusion', tag: '70% uncertain', desc: "70% of students feel uncertain about their career path and don't know where to start their journey." },
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>, title: 'Limited Guidance', tag: '1 counselor per 500 students', desc: "Traditional career counseling is often generic, infrequent, and doesn't account for individual strengths and interests." },
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>, title: 'Skills Gap', tag: '65% skills mismatch', desc: "Students lack awareness of the skills required for their dream careers and how to develop them effectively." },
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, title: 'No Personalization', tag: 'Generic advice for all', desc: "One-size-fits-all career advice fails to consider unique personalities, passions, and learning styles." }
          ].map((item, i) => (
            <div key={i} className="challenge-card">
              <div className="challenge-icon">{item.icon}</div>
              <div style={{ flex: 1 }}>
                <div className="card-header">
                  <h4 className="card-title">{item.title}</h4>
                  <span className="card-tag-red">{item.tag}</span>
                </div>
                <p className="card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-title">Our Comprehensive Solution</h2>
        <p className="section-subtitle">
          We've built a complete career and skill development ecosystem that addresses each of these challenges with innovative, proven solutions.
        </p>

        <div className="grid-2x2">
          {[
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>, title: 'AI-Powered Personalization', tag: '95% match accuracy', desc: 'Our advanced AI analyzes your unique profile to provide tailored career recommendations that match your interests, strengths, and goals.' },
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>, title: 'Skills Development Roadmap', tag: 'Clear learning paths', desc: 'Get clear, actionable pathways showing exactly what skills you need and how to develop them for your chosen career.' },
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>, title: 'Continuous Progress Tracking', tag: '3x faster progress', desc: 'Monitor your growth with real-time analytics, skill assessments, and milestone achievements that keep you motivated.' },
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, title: 'Mentorship & Community', tag: '1000+ mentors', desc: 'Connect with industry professionals, career mentors, and peers who can guide and support your journey.' }
          ].map((item, i) => (
            <div key={i} className="solution-card">
              <div className="solution-icon">{item.icon}</div>
              <div style={{ flex: 1 }}>
                <div className="card-header">
                  <h4 className="card-title">{item.title}</h4>
                  <span className="card-tag-blue">{item.tag}</span>
                </div>
                <p className="card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="impact-section">
          <h2 className="section-title" style={{ margin: 0 }}>Our Impact</h2>
          <div className="impact-grid">
            <div className="impact-stat">
              <h2>50,000+</h2>
              <h4>Students Guided</h4>
              <p>Helping students worldwide</p>
            </div>
            <div className="impact-stat">
              <h2>1M+</h2>
              <h4>Assessments</h4>
              <p>Personalized career insights</p>
            </div>
            <div className="impact-stat">
              <h2>500+</h2>
              <h4>Career Paths</h4>
              <p>Diverse opportunities</p>
            </div>
            <div className="impact-stat">
              <h2>95%</h2>
              <h4>Success Rate</h4>
              <p>Students find their path</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;