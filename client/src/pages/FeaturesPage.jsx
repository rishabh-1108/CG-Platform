// pages/FeaturesPage.jsx
import React from 'react';

export const FeaturesPage = () => {
  return (
    <div style={styles.pageContainer}>
      <style>{`
        .features-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 24px;
          font-family: 'Inter', sans-serif;
        }
        .text-center { text-align: center; }
        
        .badge {
          display: inline-block;
          background-color: #ffedd5;
          color: #f97316;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
        }
        
        .hero-title {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 800;
          color: #0284c7;
          line-height: 1.2;
          margin: 0 0 20px 0;
          max-width: 800px;
          margin-inline: auto;
        }
        
        .hero-subtitle {
          font-size: 18px;
          color: #64748b;
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto 64px auto;
        }
        
        .section-title {
          font-size: 32px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 48px;
          text-align: center;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          margin-bottom: 80px;
        }
        
        .feature-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 32px;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
        }
        
        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
          border-color: #cbd5e1;
        }
        
        .icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 24px;
        }
        
        .feature-title {
          font-size: 20px;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 12px 0;
        }
        
        .feature-desc {
          font-size: 15px;
          color: #64748b;
          line-height: 1.6;
          margin: 0 0 24px 0;
          flex-grow: 1;
        }
        
        .benefits-title {
          font-size: 14px;
          font-weight: 600;
          color: #475569;
          margin: 0 0 12px 0;
        }
        
        .benefits-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .benefits-list li {
          font-size: 14px;
          color: #0284c7;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .benefits-list li::before {
          content: "•";
          color: #0284c7;
          font-size: 18px;
        }

        .why-choose-section {
          background-color: #f0f9ff;
          border-radius: 32px;
          padding: 64px 40px;
          margin-bottom: 80px;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          text-align: center;
        }

        .why-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .why-icon {
          width: 56px;
          height: 56px;
          background: #e0f2fe;
          color: #0284c7;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 32px;
          margin-bottom: 80px;
          text-align: center;
        }
        
        .stat-card {
          padding: 32px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
        }

        .cta-section {
          background: linear-gradient(135deg, #2563eb, #10b981);
          border-radius: 32px;
          padding: 80px 40px;
          text-align: center;
          color: white;
        }
        
        .btn-orange {
          background-color: #f97316;
          color: white;
          border: none;
          padding: 16px 32px;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
          margin-top: 32px;
        }
        
        .btn-orange:hover {
          background-color: #ea580c;
        }
      `}</style>

      <div className="features-wrapper">
        
        {/* Header Section */}
        <div className="text-center">
          <div className="badge">✨ Comprehensive Career Development</div>
          <h1 className="hero-title">Everything You Need to Build Your Future</h1>
          <p className="hero-subtitle">
            Our platform combines cutting-edge AI technology with proven career development frameworks to provide you with a comprehensive ecosystem for discovering, planning, and achieving your dream career.
          </p>
        </div>

        <h2 className="section-title">Core Features</h2>

        {/* Features Grid */}
        <div className="features-grid">
          {featuresData.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="icon-box" style={{ backgroundColor: feature.color }}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
              <div>
                <p className="benefits-title">Key Benefits:</p>
                <ul className="benefits-list">
                  {feature.benefits.map((benefit, bIdx) => (
                    <li key={bIdx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Section */}
        <div className="why-choose-section">
          <h2 className="section-title" style={{ marginBottom: '64px' }}>Why Choose Our Platform?</h2>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2l4 4-4 4"></path><path d="M18 6H6a4 4 0 0 0-4 4v8"></path></svg>
              </div>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: '#1e293b' }}>Smart Recommendations</h3>
              <p style={{ margin: 0, color: '#64748b', lineHeight: '1.5' }}>AI continuously learns from your interactions to provide increasingly personalized suggestions</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              </div>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: '#1e293b' }}>Instant Feedback</h3>
              <p style={{ margin: 0, color: '#64748b', lineHeight: '1.5' }}>Receive immediate insights and actionable feedback on your assessments and progress</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </div>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: '#1e293b' }}>Student-Centric Design</h3>
              <p style={{ margin: 0, color: '#64748b', lineHeight: '1.5' }}>Built specifically for students with an intuitive, engaging interface that motivates learning</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-grid">
          <div className="stat-card">
            <h2 style={{ fontSize: '40px', fontWeight: '800', color: '#2563eb', margin: '0 0 8px 0' }}>50K+</h2>
            <p style={{ color: '#64748b', margin: 0, fontWeight: '500' }}>Active Students</p>
          </div>
          <div className="stat-card">
            <h2 style={{ fontSize: '40px', fontWeight: '800', color: '#2563eb', margin: '0 0 8px 0' }}>1M+</h2>
            <p style={{ color: '#64748b', margin: 0, fontWeight: '500' }}>Assessments Completed</p>
          </div>
          <div className="stat-card">
            <h2 style={{ fontSize: '40px', fontWeight: '800', color: '#2563eb', margin: '0 0 8px 0' }}>95%</h2>
            <p style={{ color: '#64748b', margin: 0, fontWeight: '500' }}>Satisfaction Rate</p>
          </div>
          <div className="stat-card">
            <h2 style={{ fontSize: '40px', fontWeight: '800', color: '#2563eb', margin: '0 0 8px 0' }}>500+</h2>
            <p style={{ color: '#64748b', margin: 0, fontWeight: '500' }}>Career Paths</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <svg style={{ margin: '0 auto 24px auto' }} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          <h2 style={{ fontSize: '40px', fontWeight: '800', margin: '0 0 20px 0' }}>Ready to Discover Your Path?</h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto' }}>
            Join thousands of students who have found their dream careers with our platform
          </p>
          <button className="btn-orange">Start Your Journey Today</button>
        </div>

      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: '#fafaf9',
    minHeight: '100vh',
  }
};

// Data extracted from screenshots
const featuresData = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>,
    color: '#0ea5e9', // Blue
    title: 'AI-Powered Career Assessment',
    desc: 'Advanced artificial intelligence analyzes your interests, strengths, and goals to provide personalized career recommendations tailored specifically to you.',
    benefits: ['Personalized insights', 'Data-driven recommendations', 'Continuous learning algorithms']
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>,
    color: '#a855f7', // Purple
    title: 'Real-Time Progress Tracking',
    desc: 'Monitor your skill development journey with comprehensive analytics, visualizations, and milestone tracking to stay motivated and on track.',
    benefits: ['Visual progress charts', 'Skill mastery levels', 'Achievement milestones']
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>,
    color: '#f97316', // Orange
    title: 'Achievement System',
    desc: 'Earn badges, certificates, and recognition as you complete assessments, develop skills, and reach important career milestones.',
    benefits: ['Digital badges', 'Shareable certificates', 'Gamified learning']
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>,
    color: '#10b981', // Green
    title: 'Goal Setting & Planning',
    desc: 'Set SMART goals, create action plans, and receive step-by-step guidance to achieve your career aspirations with structured pathways.',
    benefits: ['SMART goal framework', 'Action plan templates', 'Progress reminders']
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
    color: '#6366f1', // Indigo
    title: 'Mentorship Matching',
    desc: 'Connect with industry professionals and mentors who can guide you through your career journey with personalized advice and support.',
    benefits: ['Industry experts', '1-on-1 guidance', 'Networking opportunities']
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>,
    color: '#ef4444', // Red
    title: 'Learning Resources',
    desc: 'Access curated courses, articles, videos, and tutorials aligned with your career goals and skill development needs.',
    benefits: ['Curated content', 'Multi-format learning', 'Skill-specific resources']
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>,
    color: '#14b8a6', // Teal
    title: 'Skills Gap Analysis',
    desc: 'Identify the gap between your current skills and your dream career requirements, with personalized learning paths to bridge them.',
    benefits: ['Skill assessments', 'Gap identification', 'Custom learning paths']
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
    color: '#8b5cf6', // Violet
    title: 'Industry Insights',
    desc: 'Stay updated with the latest industry trends, job market data, and emerging career opportunities in your field of interest.',
    benefits: ['Market trends', 'Salary insights', 'Future predictions']
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
    color: '#64748b', // Slate
    title: 'Privacy & Security',
    desc: 'Your data is protected with enterprise-grade security, encryption, and privacy controls. You own your information.',
    benefits: ['End-to-end encryption', 'GDPR compliant', 'Data ownership']
  }
];

export default FeaturesPage;