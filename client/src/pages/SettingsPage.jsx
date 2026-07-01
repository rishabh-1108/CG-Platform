import React, { useState } from 'react';

export const SettingsPage = () => {
  const [activeSub, setActiveSub] = useState('Account');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: 'Rishabh A M', email: 'rishabh2005@gmail.com' });

  const menuItems = ['Account', 'Security', 'Notifications', 'Appearance'];

  return (
    <main style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '40px' }}>
        
        {/* Sidebar */}
        <div style={{ background: '#ffffff', padding: '24px', borderRadius: '20px', border: '1px solid #e2e8f0', height: 'fit-content' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '20px' }}>Settings</h2>
          {menuItems.map(item => (
            <div key={item} onClick={() => setActiveSub(item)} style={{ padding: '12px 16px', borderRadius: '12px', cursor: 'pointer', fontWeight: '600', color: activeSub === item ? '#0ea5e9' : '#64748b', background: activeSub === item ? '#e0f2fe' : 'transparent', transition: 'all 0.2s' }}>
              {item}
            </div>
          ))}
        </div>

        {/* Content */}
        <div style={{ background: '#ffffff', padding: '40px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '800', margin: 0 }}>{activeSub} Settings</h2>
            {!isEditing && activeSub === 'Account' && (
              <button onClick={() => setIsEditing(true)} style={{ background: '#0ea5e9', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>
                Edit Profile
              </button>
            )}
          </div>

          {activeSub === 'Account' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>Full Name</label>
                <input 
                  type="text" 
                  value={formData.name} 
                  disabled={!isEditing}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', background: isEditing ? '#fff' : '#f8fafc', color: '#1e293b', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>Email Address</label>
                <input 
                  type="email" 
                  value={formData.email} 
                  disabled={!isEditing}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', background: isEditing ? '#fff' : '#f8fafc', color: '#1e293b', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
              
              {isEditing && (
                <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                  <button onClick={() => setIsEditing(false)} style={{ padding: '12px 24px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>Save Changes</button>
                  <button onClick={() => setIsEditing(false)} style={{ padding: '12px 24px', background: 'transparent', color: '#64748b', border: '1px solid #e2e8f0', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>Cancel</button>
                </div>
              )}
            </div>
          )}
          
          {activeSub !== 'Account' && (
            <p style={{ color: '#64748b' }}>{activeSub} preferences will be available soon.</p>
          )}
        </div>
      </div>
    </main>
  );
};