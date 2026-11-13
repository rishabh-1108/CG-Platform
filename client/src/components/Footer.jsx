import React from 'react';
import { Link } from 'react-router-dom';

const IconMail = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const IconPhone = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const IconMapPin = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;

export default function Footer() {
  return (
    <>
      <style>{`
        .footer { padding: 64px 0 40px; border-top: 1px solid rgba(226, 232, 240, 0.8); display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; margin-top: 64px; text-align: left; }
        .footer-heading { font-weight: 700; color: #1e293b; font-size: 16px; margin-bottom: 24px; }
        .footer-link { display: flex; align-items: center; gap: 8px; color: #64748b; text-decoration: none; margin-bottom: 16px; font-size: 14px; transition: color 0.2s; }
        .footer-link:hover { color: #0ea5e9; }
        @media (max-width: 1024px) {
          .footer { grid-template-columns: 1fr; }
        }
      `}</style>
      <footer className="footer">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '36px', height: '36px', backgroundColor: '#0ea5e9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', letterSpacing: '0.05em' }}>ASPIRE, SPEAK & SHINE</div>
              <div style={{ fontSize: '19px', color: '#10b981', fontWeight: '900', letterSpacing: '-0.02em' }}>CG PLATFORM</div>
            </div>
          </div>
          <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', maxWidth: '300px' }}>Empowering students with AI-powered career guidance, communication skills, and confidence building.</p>
        </div>
        
        <div>
          <div className="footer-heading">Quick Links</div>
          <Link to="/assessment" className="footer-link">Career Assessment</Link>
          <Link to="/skills" className="footer-link">Skills Development</Link>
          <Link to="/opportunities" className="footer-link">Career Opportunities</Link>
          <Link to="/tasks" className="footer-link">My Tasks</Link>
        </div>

        <div>
          <div className="footer-heading">Resources</div>
          <Link to="/about" className="footer-link">About Us</Link>
          <Link to="/how-it-works" className="footer-link">How It Works</Link>
          <Link to="/features" className="footer-link">Features</Link>
          <Link to="/settings" className="footer-link">Settings</Link>
        </div>

        <div>
          <div className="footer-heading">Contact Us</div>
          <a href="mailto:support@cgplatform.com" className="footer-link" style={{ gap: '8px' }}>{IconMail} support@cgplatform.com</a>
          <a href="tel:+911800XXXXXX" className="footer-link" style={{ gap: '8px' }}>{IconPhone} +91 1800-XXX-XXXX</a>
          <div className="footer-link" style={{ pointerEvents: 'none', gap: '8px' }}>{IconMapPin} India</div>
        </div>
      </footer>
    </>
  );
}
