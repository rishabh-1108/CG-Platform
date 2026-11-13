import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// SVG Icons (Original)
const IconBuilding = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>;
const IconMapPin = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const IconDollar = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>;
const IconCalendar = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
const IconExternalLink = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>;
const IconBriefcase = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
const IconGraduation = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>;

// SVG Icons (Sidebar)
const NavIcon1 = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>;
const NavIcon2 = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
const NavIcon3 = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
const NavIcon4 = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>;
const NavIcon5 = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;

const jobsData = [
  { id: 1, title: "Data Entry Operator", sector: "Government", level: "High School", org: "Ministry of Electronics & IT", loc: "Multiple Cities, India", salary: "₹18,000 - ₹25,000/month", desc: "Responsible for entering and maintaining data in government databases. Requires basic computer skills and typing speed of 35 WPM.", qual: "10th/12th Pass", deadline: "April 30th, 2026", link: "https://www.ncs.gov.in/" },
  { id: 2, title: "Postal Assistant", sector: "Government", level: "High School", org: "Department of Posts", loc: "Pan India", salary: "₹25,500 - ₹81,100/month", desc: "Handle mail sorting, counter operations, and customer service at post offices across the country.", qual: "12th Pass with Mathematics", deadline: "May 15th, 2026", link: "https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx" },
  { id: 3, title: "Retail Sales Associate", sector: "Private", level: "High School", org: "Reliance Retail", loc: "Delhi, Mumbai, Bangalore", salary: "₹12,000 - ₹20,000/month", desc: "Assist customers, manage inventory, and process transactions in retail stores.", qual: "12th Pass", deadline: "June 1st, 2026", link: "https://careers.ril.com/" },
  { id: 4, title: "Customer Support Executive", sector: "Private", level: "High School", org: "Wipro BPO", loc: "Hyderabad, Pune, Noida", salary: "₹15,000 - ₹22,000/month", desc: "Handle inbound calls, resolve customer queries, and maintain service quality standards.", qual: "12th Pass with good communication", deadline: "May 30th, 2026", link: "https://careers.wipro.com/" },
  { id: 5, title: "Railway Clerk", sector: "Government", level: "High School", org: "Indian Railways", loc: "Pan India", salary: "₹19,900 - ₹63,200/month", desc: "Perform clerical duties including ticket booking, record maintenance, and public inquiry handling.", qual: "12th Pass", deadline: "April 20th, 2026", link: "https://indianrailways.gov.in/" },
  { id: 6, title: "SSC Combined Graduate Level (CGL)", sector: "Government", level: "UG Students", org: "Staff Selection Commission", loc: "Pan India", salary: "₹35,400 - ₹1,12,400/month", desc: "Various posts including Tax Assistant, Auditor, Inspector, and Sub-Inspector in central government departments.", qual: "Bachelor's Degree in any discipline", deadline: "June 30th, 2026", link: "https://ssc.nic.in/" },
  { id: 7, title: "Bank Probationary Officer", sector: "Government", level: "UG Students", org: "Institute of Banking Personnel Selection", loc: "Pan India", salary: "₹36,000 - ₹63,840/month", desc: "Manage branch operations, customer relationships, and financial services in nationalized banks.", qual: "Graduation in any stream", deadline: "July 15th, 2026", link: "https://www.ibps.in/" },
  { id: 8, title: "Junior Software Developer", sector: "Private", level: "UG Students", org: "Infosys", loc: "Bangalore, Hyderabad, Pune", salary: "₹3.5 - ₹6 LPA", desc: "Develop and maintain web applications, write clean code, and participate in agile development cycles.", qual: "B.Tech/BCA in Computer Science", deadline: "May 31st, 2026", link: "https://www.infosys.com/careers/" },
  { id: 9, title: "Marketing Executive", sector: "Private", level: "UG Students", org: "Hindustan Unilever", loc: "Mumbai, Delhi, Chennai", salary: "₹3 - ₹5 LPA", desc: "Plan and execute marketing campaigns, analyze market trends, and manage brand presence across channels.", qual: "BBA/B.Com with Marketing knowledge", deadline: "June 15th, 2026", link: "https://careers.unilever.com/india" },
  { id: 10, title: "Teaching Assistant", sector: "Government", level: "UG Students", org: "Ministry of Education", loc: "Pan India", salary: "₹25,000 - ₹40,000/month", desc: "Support lead teachers, help prepare materials, and assist students in Kendriya Vidyalayas.", qual: "Bachelor's Degree with B.Ed", deadline: "May 20th, 2026", link: "https://kvsangathan.nic.in/" },
  { id: 11, title: "UPSC Civil Services", sector: "Government", level: "Graduates", org: "Union Public Service Commission", loc: "Pan India", salary: "₹56,100 - ₹2,50,000/month", desc: "Prestigious positions including IAS, IPS, IFS officers serving in administrative, police, and foreign services.", qual: "Bachelor's Degree", deadline: "July 20th, 2026", link: "https://upsc.gov.in/" },
  { id: 12, title: "Vice President - Investment Banking", sector: "Private", level: "PG Students", org: "Goldman Sachs", loc: "Mumbai", salary: "₹50 - ₹1.2 Cr PA", desc: "Lead deal origination, financial modeling, and client relationship management for M&A transactions.", qual: "MBA Finance/CFA with 5+ years", deadline: "June 30th, 2026", link: "https://www.goldmansachs.com/careers/" },
  { id: 13, title: "Director of Public Policy", sector: "Government", level: "PG Students", org: "NITI Aayog", loc: "New Delhi", salary: "₹1,44,200 - ₹2,18,200/month", desc: "Shape regulatory frameworks, conduct policy research, and coordinate with government stakeholders.", qual: "Ph.D/Master's in Public Policy/Economics", deadline: "September 30th, 2026", link: "https://www.niti.gov.in/career" }
];

export const OpportunitiesPage = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All Levels");
  const filters = ["All Levels", "High School", "UG Students", "Graduates", "PG Students"];

  const filteredJobs = activeFilter === "All Levels" 
    ? jobsData 
    : jobsData.filter(job => job.level === activeFilter);

  const totalJobs = filteredJobs.length;
  const govtJobs = filteredJobs.filter(j => j.sector === "Government").length;
  const privateJobs = filteredJobs.filter(j => j.sector === "Private").length;

  return (
    <div className="opportunities-container">
      <style>{`
        /* Dynamic Animated Background */
        .opportunities-container {
          min-height: 100vh;
          padding: 40px 20px;
          background: linear-gradient(-45deg, #f0f9ff, #e0f2fe, #bae6fd, #e2e8f0);
          background-size: 400% 400%;
          animation: gradientBG 15s ease infinite;
          font-family: 'Inter', sans-serif;
          position: relative;
        }
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Ambient glowing orbs behind the glass */
        .opportunities-container::before, .opportunities-container::after {
          content: ''; position: absolute; border-radius: 50%; filter: blur(80px); z-index: 0; opacity: 0.6;
        }
        .opportunities-container::before { top: 10%; left: 10%; width: 400px; height: 400px; background: rgba(56, 189, 248, 0.4); animation: float 8s ease-in-out infinite; }
        .opportunities-container::after { bottom: 10%; right: 10%; width: 500px; height: 500px; background: rgba(16, 185, 129, 0.3); animation: float 10s ease-in-out infinite reverse; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-40px); } }

        /* Glassmorphism Classes */
        .glass-panel {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.05);
          border-radius: 16px;
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
        }
        .glass-panel:hover {
          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
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

        .content-wrapper { max-width: 1200px; margin: 0 auto; position: relative; z-index: 10; padding-right: 80px; }
        
        .header-text { color: #64748b; font-size: 18px; margin-bottom: 30px; line-height: 1.6; }
        .filter-title { font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 16px; }
        
        /* Filter Tabs */
        .filter-tabs-container {
          display: flex; background: rgba(255, 255, 255, 0.4); border-radius: 12px; padding: 6px; margin-bottom: 30px;
          backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.6); gap: 4px; overflow-x: auto;
        }
        .filter-btn {
          flex: 1; min-width: 120px; padding: 12px 20px; border: none; border-radius: 8px; font-weight: 600; font-size: 14px;
          cursor: pointer; transition: all 0.3s; color: #64748b; background: transparent; white-space: nowrap;
        }
        .filter-btn.active { background: #ffffff; color: #0ea5e9; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
        .filter-btn:hover:not(.active) { background: rgba(255,255,255,0.5); }

        /* Stats Grid */
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-bottom: 40px; }
        .stat-card { text-align: center; padding: 24px; display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .stat-num { font-size: 36px; font-weight: 800; margin-bottom: 8px; }
        .stat-num.blue { color: #0ea5e9; } .stat-num.green { color: #10b981; } .stat-num.orange { color: #f97316; }
        .stat-label { color: #64748b; font-size: 15px; font-weight: 500; }

        /* Job Cards */
        .jobs-list { display: flex; flex-direction: column; gap: 24px; }
        .job-card { padding: 32px; display: flex; flex-direction: column; gap: 20px; width: 100%; box-sizing: border-box; }
        .job-header { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; }
        .job-title { font-size: 24px; font-weight: 700; color: #1e293b; margin: 0 0 12px 0; }
        
        .badges { display: flex; gap: 12px; }
        .badge { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
        .badge-govt { background: rgba(37, 99, 235, 0.1); color: #2563eb; border: 1px solid rgba(37, 99, 235, 0.2); }
        .badge-private { background: rgba(249, 115, 22, 0.1); color: #f97316; border: 1px solid rgba(249, 115, 22, 0.2); }
        .badge-edu { background: rgba(255, 255, 255, 0.7); color: #475569; border: 1px solid #e2e8f0; }

        .job-details { display: flex; flex-direction: column; gap: 12px; }
        .detail-row { display: flex; align-items: center; gap: 10px; color: #64748b; font-size: 15px; }
        .detail-icon { color: #94a3b8; display: flex; }
        .salary-text { color: #2563eb; font-weight: 600; }

        .job-desc { color: #475569; font-size: 15px; line-height: 1.6; margin-top: 8px; }
        
        .qual-box { background: rgba(248, 250, 252, 0.6); border-radius: 12px; padding: 16px 20px; border: 1px solid rgba(226, 232, 240, 0.8); }
        .qual-title { font-weight: 700; color: #1e293b; font-size: 14px; margin-bottom: 4px; }
        .qual-text { color: #64748b; font-size: 14px; }

        .apply-row { display: flex; justify-content: space-between; align-items: center; margin-top: 8px; flex-wrap: wrap; gap: 16px; border-top: 1px solid rgba(226, 232, 240, 0.5); padding-top: 24px; }
        .deadline { display: flex; align-items: center; gap: 8px; color: #64748b; font-size: 14px; }
        
        .apply-btn { 
          background: linear-gradient(to right, #2563eb, #10b981); color: white; border: none; padding: 14px 0; width: 100%; border-radius: 8px; 
          font-weight: 600; font-size: 15px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3); text-decoration: none; box-sizing: border-box;
        }
        .apply-btn:hover { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4); color: white; }
        
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: 1fr; }
          .apply-btn { width: 100%; }
          .side-nav { display: none; }
          .content-wrapper { padding-right: 0; }
        }
      `}</style>

      {/* Side Navigation Menu */}
      <div className="side-nav">
        <div className="nav-icon" onClick={() => navigate('/assessment')} title="Assessment"><NavIcon1 /></div>
        <div className="nav-icon" onClick={() => navigate('/skills')} title="Skills"><NavIcon2 /></div>
        <div className="nav-icon active" onClick={() => navigate('/opportunities')} title="Opportunities"><NavIcon3 /></div>
        <div className="nav-icon" onClick={() => navigate('/tasks')} title="Tasks"><NavIcon4 /></div>
        <div className="nav-icon" onClick={() => navigate('/articles')} title="Articles"><NavIcon5 /></div>
      </div>

      <div className="content-wrapper">
        <h2 style={{ fontSize: '22px', fontWeight: '500', color: '#64748b', marginBottom: '32px' }}>
          Discover government and private sector jobs tailored for students, undergraduates, and graduates
        </h2>

        <h3 className="filter-title">Filter by Education Level</h3>
        <div className="filter-tabs-container">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="stats-grid">
          <div className="glass-panel stat-card">
            <div className="stat-num blue">{totalJobs}</div>
            <div className="stat-label">Total Opportunities</div>
          </div>
          <div className="glass-panel stat-card">
            <div className="stat-num green">{govtJobs}</div>
            <div className="stat-label">Government Jobs</div>
          </div>
          <div className="glass-panel stat-card">
            <div className="stat-num orange">{privateJobs}</div>
            <div className="stat-label">Private Sector</div>
          </div>
        </div>

        <div className="jobs-list">
          {filteredJobs.map(job => (
            <div key={job.id} className="glass-panel job-card">
              
              <div>
                <h3 className="job-title">{job.title}</h3>
                <div className="badges">
                  <span className={`badge ${job.sector === 'Government' ? 'badge-govt' : 'badge-private'}`}>
                    <IconBriefcase /> {job.sector}
                  </span>
                  <span className="badge badge-edu">
                    <IconGraduation /> {job.level}
                  </span>
                </div>
              </div>

              <div className="job-details">
                <div className="detail-row">
                  <span className="detail-icon"><IconBuilding /></span> {job.org}
                </div>
                <div className="detail-row">
                  <span className="detail-icon"><IconMapPin /></span> {job.loc}
                </div>
                <div className="detail-row salary-text">
                  <span className="detail-icon"><IconDollar /></span> {job.salary}
                </div>
              </div>

              <div className="job-desc">{job.desc}</div>

              <div className="qual-box glass-panel" style={{boxShadow: 'none'}}>
                <div className="qual-title">Required Qualification:</div>
                <div className="qual-text">{job.qual}</div>
              </div>

              <div className="apply-row">
                <div className="deadline">
                  <IconCalendar /> Apply by: {job.deadline}
                </div>
              </div>
              
              <a href={job.link} target="_blank" rel="noopener noreferrer" className="apply-btn">
                <IconExternalLink /> Apply Now
              </a>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesPage;