import { useState, useEffect } from 'react';
import { Bot, Plus, History, Send } from 'lucide-react';

export default function AICareerMentor() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! I'm your AI Career Mentor.\nAsk me about career paths, skills, job opportunities, or professional growth. I'm here to advise, not instruct!"
    }
  ]);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const response = await fetch('/api/chat/history/'); 
        
        // Prevents HTML/JSON parsing errors if the request is blocked (e.g., Codespaces 401)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.messages) {
          setMessages([{
            type: "bot",
            text: "Hi! I'm your AI Career Mentor.\nAsk me about career paths, skills, job opportunities, or professional growth. I'm here to advise, not instruct!"
          }, ...data.messages]);
        }
      } catch (error) {
        console.error("Failed to load history:", error);
      }
    };
    loadHistory();
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    
    // 1. Update the Chat UI
    setMessages(prev => [...prev, { type: "user", text: userMessage }]);
    setInput("");

    // 2. Push message to localStorage for the Admin Panel to read live
    try {
      const newChatEntry = {
        id: Date.now(),
        title: userMessage,
        email: "cgplatform110805@gmail.com", // Assuming current user email
        date: new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })
      };

      const existingAdminChats = JSON.parse(localStorage.getItem('cg_admin_chats')) || [];
      const updatedAdminChats = [newChatEntry, ...existingAdminChats];
      localStorage.setItem('cg_admin_chats', JSON.stringify(updatedAdminChats));
      
      // Dispatching an event so if the Admin Panel is open in the same window, it updates instantly
      window.dispatchEvent(new Event('storage'));
    } catch (e) {
      console.error("Failed to save to local storage for Admin Panel", e);
    }

    // 3. Send message to the Backend API
    try {
      const response = await fetch('/api/chat/', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-ms-bypass-warning': 'true'
        },
        body: JSON.stringify({ message: userMessage }),
      });

      // Protect against Bad Gateway / Unauthorized errors crashing the JSON parser
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.reply) {
        setMessages(prev => [...prev, { type: "bot", text: data.reply }]);
      } else {
        setMessages(prev => [...prev, { type: "bot", text: "Error: " + (data.error || "Something went wrong.") }]);
      }
    } catch (error) {
      console.error("Chat API Error:", error);
      setMessages(prev => [...prev, { type: "bot", text: "Failed to connect to the brain. Check the backend or ensure your port is Public!" }]);
    }
  };

  return (
    <div style={{
      width: '380px',
      background: '#ffffff',
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Inter, sans-serif',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 99999
    }}>
      
      {/* Header */}
      <div style={{
        padding: '16px 20px',
        borderBottom: '1px solid #f1f5f9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#f8fafc'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: '#e0e7ff', width: '36px', height: '36px', borderRadius: '50%', color: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Bot size={20} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h3 style={{ margin: 0, fontWeight: '600', color: '#1e293b', fontSize: '15px' }}>AI Career Mentor</h3>
            <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Your personal career advisor</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#64748b' }}>
          <Plus size={18} style={{ cursor: 'pointer' }} />
          <History size={18} style={{ cursor: 'pointer' }} />
        </div>
      </div>

      {/* Chat Body */}
      <div style={{
        padding: '24px 20px',
        height: '350px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        background: '#ffffff'
      }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: msg.type === 'bot' ? 'flex-start' : 'flex-end',
            width: '100%'
          }}>
            {msg.type === "bot" && idx === 0 ? (
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '8px', textAlign: 'center' }}>
                <div style={{ color: '#93c5fd', marginBottom: '16px' }}>
                  <Bot size={56} strokeWidth={1.5} />
                </div>
                <h2 style={{ color: '#64748b', fontWeight: '600', fontSize: '17px', margin: '0 0 12px 0' }}>Hi! I'm your AI Career Mentor.</h2>
                <p style={{ color: '#64748b', fontSize: '14px', margin: 0, lineHeight: '1.6', padding: '0 8px' }}>
                  Ask me about career paths, skills, job opportunities, or professional growth. I'm here to advise, not instruct!
                </p>
              </div>
            ) : (
              <div style={{
                fontSize: '14px',
                maxWidth: '85%',
                textAlign: 'left',
                lineHeight: '1.6',
                padding: msg.type === 'bot' ? '0' : '12px 16px',
                color: msg.type === 'bot' ? '#334155' : '#ffffff',
                background: msg.type === 'bot' ? 'transparent' : '#3b82f6',
                borderRadius: msg.type === 'bot' ? '0' : '16px 16px 4px 16px'
              }}>
                {msg.text.split('\n').map((line, i) => <p key={i} style={{ margin: 0, paddingBottom: i !== msg.text.split('\n').length - 1 ? '8px' : '0' }}>{line}</p>)}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div style={{ padding: '16px 20px', borderTop: '1px solid #f1f5f9', background: '#ffffff' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '6px 6px 6px 16px',
          background: '#ffffff'
        }}>
          <input
            type="text"
            placeholder="Ask your mentor..."
            style={{ flex: 1, outline: 'none', border: 'none', fontSize: '14px', background: 'transparent', color: '#1e293b' }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            style={{
              background: '#818cf8',
              color: 'white',
              border: 'none',
              padding: '8px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              width: '36px',
              height: '36px',
              marginLeft: '12px'
            }}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
      
    </div>
  );
}