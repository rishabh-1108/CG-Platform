import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const IconGradCap = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>;

export const AuthPage = ({ onLogin = () => {} }) => {
  const [authMode, setAuthMode] = useState('signIn');
  const navigate = useNavigate();

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    onLogin();
    navigate('/dashboard');
  };

  return (
    <div className="auth-wrapper">
      <style>{`
        .auth-wrapper { background-color: #f8fafc; width: 100%; min-height: 100vh; display: flex; align-items: center; justify-content: center; margin: 0; padding: 0; }
        .auth-card { background: #ffffff; width: 100%; max-width: 440px; border-radius: 16px; padding: 40px 32px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05); border: 1px solid #f1f5f9; }
        .auth-header { display: flex; flex-direction: column; align-items: center; text-align: center; margin-bottom: 32px; }
        .auth-logo { width: 48px; height: 48px; background: linear-gradient(135deg, #0ea5e9, #10b981); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; margin-bottom: 20px; box-shadow: 0 4px 12px rgba(14, 165, 233, 0.2); }
        .auth-title { font-size: 22px; font-weight: 700; color: #0f172a; margin-bottom: 8px; }
        .auth-subtitle { font-size: 13px; color: #64748b; }
        .auth-toggle { display: flex; background-color: #f1f5f9; border-radius: 10px; padding: 4px; margin-bottom: 32px; }
        .toggle-btn { flex: 1; padding: 10px 0; border: none; background: transparent; font-size: 14px; font-weight: 600; color: #64748b; border-radius: 8px; cursor: pointer; transition: all 0.2s ease; }
        .toggle-btn.active { background: #ffffff; color: #0f172a; box-shadow: 0 2px 4px rgba(0,0,0,0.04); }
        .input-group { margin-bottom: 20px; text-align: left; }
        .input-label { display: block; font-size: 13px; font-weight: 600; color: #1e293b; margin-bottom: 8px; }
        .form-input { width: 100%; padding: 12px 16px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 14px; color: #1e293b; transition: border-color 0.2s; outline: none; box-sizing: border-box; }
        .form-input:focus { border-color: #0ea5e9; box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.15); }
        .submit-btn { width: 100%; padding: 14px; border: none; border-radius: 8px; font-size: 14px; font-weight: 600; color: white; cursor: pointer; margin-top: 12px; }
        .btn-signin { background-color: #2563eb; } .btn-signup { background: linear-gradient(to right, #0ea5e9, #10b981); }
      `}</style>
      
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">{IconGradCap}</div>
          <h1 className="auth-title">Welcome to CG Platform</h1>
          <p className="auth-subtitle">Your journey to the perfect career starts here</p>
        </div>
        <div className="auth-toggle">
          <button type="button" className={`toggle-btn ${authMode === 'signIn' ? 'active' : ''}`} onClick={() => setAuthMode('signIn')}>Sign In</button>
          <button type="button" className={`toggle-btn ${authMode === 'signUp' ? 'active' : ''}`} onClick={() => setAuthMode('signUp')}>Sign Up</button>
        </div>
        <form onSubmit={handleAuthSubmit}>
          {authMode === 'signUp' && (
            <>
              <div className="input-group">
                <label className="input-label">Full Name</label>
                <input type="text" className="form-input" placeholder="Your full name" required />
              </div>
            </>
          )}
          <div className="input-group">
            <label className="input-label">Email</label>
            <input type="email" className="form-input" placeholder="your.email@example.com" required />
          </div>
          <div className="input-group">
            <label className="input-label">Password</label>
            <input type="password" className="form-input" placeholder="••••••••" required />
          </div>
          <button type="submit" className={`submit-btn ${authMode === 'signIn' ? 'btn-signin' : 'btn-signup'}`}>
            {authMode === 'signIn' ? 'Sign In' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
};