import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// General SVG Icons
const IconSearch = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const IconUser = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const IconClock = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const IconClose = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const IconBuilding = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>;
const IconMapPin = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const IconDollar = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>;
const IconBriefcase = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
const IconRefresh = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>;

// Side Navigation Icons
const NavIcon1 = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>; 
const NavIcon2 = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>; 
const NavIcon3 = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>; 
const NavIcon4 = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>; 
const NavIcon5 = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>; 

// Fully Populated Articles Data
const articlesData = [
  // --- COMMUNICATION ---
  { 
    id: 1, category: "Communication", title: "Goldman Sachs Expands Tech Division in Bengaluru, Seeks Software Engineers", 
    desc: "Goldman Sachs is significantly bolstering its technology capabilities in Bengaluru, announcing a fresh wave of hiring for...", 
    tags: ["Software Development", "Investment Banking", "FinTech"], author: "Goldman Sachs", readTime: "2 min read", date: "2024-06-01",
    locations: "Bengaluru", experience: "2-6 years", salary: "INR 30-80 LPA", openRoles: ["Full Stack Developer", "Backend Engineer", "Data Engineer"],
    fullTextParagraphs: [
      "Goldman Sachs is expanding its engineering footprint in India, focusing heavily on its Bengaluru tech hub. The firm is seeking top-tier software engineers with strong communication skills to collaborate with global financial teams.",
      "The roles demand proficiency in Java, Python, and scalable architecture design. Engineers will work directly with trading desks and asset management teams to build low-latency financial systems.",
      "Candidates must demonstrate excellent problem-solving abilities and the capacity to articulate complex technical concepts to non-technical stakeholders."
    ],
    hashtags: ["#FinTech", "#SoftwareEngineering", "#InvestmentBanking"]
  },
  { 
    id: 2, category: "Communication", title: "J.P. Morgan Chase & Co. Hiring for Investment Banking Analysts in Mumbai", 
    desc: "J.P. Morgan Chase & Co. is actively recruiting for Investment Banking Analysts in its Mumbai office. The roles offer an...", 
    tags: ["Investment Banking", "Entry Level", "Mumbai Jobs"], author: "J.P. Morgan Chase & Co.", readTime: "2 min read", date: "2024-05-28",
    locations: "Mumbai", experience: "0-2 years", salary: "INR 18-35 LPA", openRoles: ["IB Analyst", "Financial Modeler", "Client Relations"],
    fullTextParagraphs: [
      "J.P. Morgan is opening opportunities for driven graduates to join its prestigious Investment Banking division in Mumbai. This entry-level role is heavily focused on analytical rigor and impeccable corporate communication.",
      "Analysts will be responsible for building complex financial models, preparing pitch books, and assisting senior bankers in client presentations and deal negotiations.",
      "Exceptional written and verbal communication skills are mandatory, as analysts will interact with global teams and high-net-worth clients daily."
    ],
    hashtags: ["#InvestmentBanking", "#FinanceJobs", "#JPMorgan"]
  },
  { 
    id: 3, category: "Communication", title: "EY India Announces Graduate Program for Financial Services Audit in Chennai", 
    desc: "EY India is launching its highly anticipated Graduate Program for Financial Services Audit in Chennai, offering a launchpad...", 
    tags: ["Audit", "Financial Services", "Entry Level"], author: "EY", readTime: "2 min read", date: "2024-05-20",
    locations: "Chennai", experience: "Fresher", salary: "INR 8-12 LPA", openRoles: ["Audit Associate", "Financial Trainee"],
    fullTextParagraphs: [
      "EY India has officially opened applications for its Graduate Program targeting the Financial Services Audit sector. Based in Chennai, this program is designed for recent commerce and finance graduates.",
      "Trainees will receive world-class mentorship, working alongside seasoned auditors to evaluate the financial health of major banks and insurance firms.",
      "Clear communication, an eye for detail, and a foundational understanding of accounting principles are key prerequisites for applicants."
    ],
    hashtags: ["#AuditJobs", "#EYIndia", "#FresherHiring"]
  },

  // --- CAREER GUIDANCE ---
  { 
    id: 4, category: "Career Guidance", title: "Deloitte Bolsters Risk Advisory Practice, Seeks Senior Consultants in Hyderabad", 
    desc: "Deloitte, a leading global professional services firm, is aggressively expanding its Risk Advisory practice in Hyderabad...", 
    tags: ["Risk Management", "Consulting", "Cybersecurity"], author: "Deloitte", readTime: "2 min read", date: "2024-06-15",
    locations: "Hyderabad", experience: "4-8 years", salary: "INR 18-40 LPA", openRoles: ["Senior Risk Consultant", "Cybersecurity Auditor"],
    fullTextParagraphs: [
      "Deloitte is aggressively expanding its Risk Advisory practice in Hyderabad. The firm is looking for Senior Consultants capable of advising enterprise clients on IT audits, regulatory compliance, and cybersecurity frameworks.",
      "Professionals will lead client-facing engagements, identifying vulnerabilities in infrastructure and presenting strategic mitigation plans to C-suite stakeholders."
    ],
    hashtags: ["#RiskManagement", "#Consulting", "#Cybersecurity"]
  },
  { 
    id: 5, category: "Career Guidance", title: "KPMG India Seeks Experience Tax Consultants for Growing Practice in Pune", 
    desc: "KPMG India is expanding its tax and regulatory services in Pune and is on the lookout for experienced Tax Consultants...", 
    tags: ["Tax Consulting", "Accounting", "Pune Jobs"], author: "KPMG", readTime: "2 min read", date: "2024-06-05",
    locations: "Pune", experience: "3-7 years", salary: "INR 15-30 LPA", openRoles: ["Tax Consultant", "Regulatory Advisor"],
    fullTextParagraphs: [
      "KPMG is strengthening its tax advisory services in Pune, seeking professionals with deep expertise in direct and indirect taxation laws.",
      "Consultants will work closely with corporate clients to optimize their tax structures, manage compliance, and navigate complex cross-border transactions."
    ],
    hashtags: ["#TaxConsulting", "#KPMG", "#PuneCareers"]
  },
  { 
    id: 6, category: "Career Guidance", title: "PwC India Hiring for Consulting Roles in Banking & Capital Markets Practice", 
    desc: "PwC India is expanding its Banking & Capital Markets consulting practice in Gurgaon, actively seeking experienced...", 
    tags: ["Financial Consulting", "Banking", "Capital Markets"], author: "PwC", readTime: "2 min read", date: "2024-06-10",
    locations: "Gurgaon", experience: "6-10 years", salary: "INR 25-50 LPA", openRoles: ["Management Consultant", "Capital Markets Specialist"],
    fullTextParagraphs: [
      "PwC's Banking and Capital Markets division is looking for seasoned consultants to drive digital transformation and operational efficiency for top-tier financial institutions.",
      "The role requires a deep understanding of core banking systems, regulatory reporting, and capital market trends."
    ],
    hashtags: ["#FinancialConsulting", "#Banking", "#CapitalMarkets"]
  },
  { 
    id: 7, category: "Career Guidance", title: "McKinsey & Company Seeks Top Talent for Growing Digital Transformation...", 
    desc: "McKinsey & Company is actively recruiting experienced consultants to join its rapidly expanding Digital Transformatio...", 
    tags: ["Digital Transformation", "Management Consulting", "India Jobs"], author: "McKinsey & Company", readTime: "2 min read", date: "2024-06-25",
    locations: "Mumbai, Delhi", experience: "5-10 years", salary: "INR 40-90 LPA", openRoles: ["Digital Consultant", "Strategy Manager"],
    fullTextParagraphs: [
      "McKinsey & Company is actively recruiting experienced consultants to join its rapidly expanding Digital Transformation practice. Consultants will map out strategic digital journeys and oversee agile transformations.",
      "You will be tasked with implementing data-driven decision frameworks at the enterprise level. A strong MBA and hands-on experience in leading tech-driven change initiatives are highly desired."
    ],
    hashtags: ["#DigitalTransformation", "#ManagementConsulting", "#McKinsey"]
  },
  { 
    id: 8, category: "Career Guidance", title: "BCG Unleashes Talent Hunt for Climate & Sustainability Consultants in EMEA", 
    desc: "Boston Consulting Group (BCG) is launching a major recruitment drive for Climate and Sustainability consultants...", 
    tags: ["Sustainability", "Climate Change", "EMEA Jobs"], author: "Boston Consulting Group (BCG)", readTime: "2 min read", date: "2024-07-02",
    locations: "London, Dubai (EMEA)", experience: "3-8 years", salary: "Competitive EMEA Rates", openRoles: ["Sustainability Advisor", "Climate Strategist"],
    fullTextParagraphs: [
      "Boston Consulting Group (BCG) is launching a major recruitment drive for Climate and Sustainability consultants across EMEA. Consultants will help governments and corporations achieve net-zero targets.",
      "The role involves designing circular economy models and navigating evolving climate regulations. Deep industry knowledge in renewable energy or environmental policy is required."
    ],
    hashtags: ["#Sustainability", "#ClimateChange", "#BCG"]
  },
  { 
    id: 9, category: "Career Guidance", title: "Bain & Company Seeks Associate Consultants for Fast-Track Career Grow...", 
    desc: "Bain & Company is inviting recent graduates and young professionals to apply for its Associate Consultant program...", 
    tags: ["Graduate Jobs", "Entry Level", "Asia Careers"], author: "Bain & Company", readTime: "2 min read", date: "2024-06-28",
    locations: "Singapore, Tokyo, Mumbai", experience: "0-2 years", salary: "INR 18-28 LPA", openRoles: ["Associate Consultant"],
    fullTextParagraphs: [
      "Bain's Associate Consultant (AC) program is globally recognized as one of the best launchpads for a career in business strategy. The firm is actively seeking high-achieving graduates for its Asian offices.",
      "ACs are immediately integrated into case teams, tasked with conducting heavy data analysis, interviewing industry experts, and crafting presentation decks for C-level clients."
    ],
    hashtags: ["#Consulting", "#EntryLevel", "#BainAndCompany"]
  },
  { 
    id: 10, category: "Career Guidance", title: "McKinsey Digital: Hiring Product Managers & UX Designers for Global...", 
    desc: "McKinsey Digital is actively recruiting experienced Product Managers and UX Designers to enhance its practice in buildin...", 
    tags: ["Product Management", "UX Design", "Digital Products"], author: "McKinsey & Company", readTime: "2 min read", date: "2024-06-15",
    locations: "Bangalore", experience: "4-8 years", salary: "INR 35-70 LPA", openRoles: ["Product Manager", "Lead UX Designer"],
    fullTextParagraphs: [
      "McKinsey Digital is actively recruiting experienced Product Managers and UX Designers to enhance its practice in building user-centric digital products.",
      "Teams will work at the intersection of business strategy and design thinking to launch platforms that redefine customer experiences for global brands."
    ],
    hashtags: ["#ProductManagement", "#UXDesign", "#DigitalProducts"]
  },
  { 
    id: 11, category: "Career Guidance", title: "Bain & Company Seeks Experience Hire Consultants for Private Equity Practice", 
    desc: "Bain & Company's Private Equity practice is actively recruiting experienced professionals with a background in M&A, due...", 
    tags: ["Private Equity", "M&A", "Due Diligence"], author: "Bain & Company", readTime: "2 min read", date: "2024-07-05",
    locations: "Mumbai", experience: "4-9 years", salary: "INR 45-85 LPA", openRoles: ["PE Consultant", "Due Diligence Lead"],
    fullTextParagraphs: [
      "Bain & Company's Private Equity practice is actively recruiting experienced professionals with a background in M&A and due diligence.",
      "Consultants will perform rapid, deep-dive commercial due diligence for top-tier private equity firms, evaluating target companies' market positioning, technological leverage, and aggressive growth potential."
    ],
    hashtags: ["#PrivateEquity", "#MandA", "#DueDiligence"]
  },

  // --- INTERVIEW TIPS ---
  { 
    id: 12, category: "Interview Tips", title: "Accenture Accelerates Cloud Strategy & Engineering Hiring Amidst Enterprise...", 
    desc: "Accenture is significantly expanding its Cloud Strategy & Engineering capabilities, announcing a global recruitment dri...", 
    tags: ["Cloud Computing", "AWS", "Azure"], author: "Accenture", readTime: "2 min read", date: "2024-06-20",
    locations: "Pan India", experience: "4-10 years", salary: "INR 20-45 LPA", openRoles: ["Cloud Architect", "AWS Specialist", "Azure Lead"],
    fullTextParagraphs: [
      "Accenture is significantly expanding its Cloud Strategy & Engineering capabilities, announcing a global recruitment drive. The roles involve designing scalable multi-cloud architectures and implementing DevSecOps pipelines.",
      "Interview Tip: Candidates should prepare for deep-dive technical rounds focusing heavily on system design, microservices architecture, and real-world disaster recovery scenarios. Active AWS or Azure Expert certifications are highly scrutinized."
    ],
    hashtags: ["#CloudComputing", "#AWS", "#Azure"]
  },
  { 
    id: 13, category: "Interview Tips", title: "Capgemini Expands AI & Data Science Teams to Drive Intelligent Enterprise...", 
    desc: "Capgemini is intensifying its recruitment efforts for AI and Data Science professionals globally to enhance its capabilities in...", 
    tags: ["AI", "Data Science", "Machine Learning"], author: "Capgemini", readTime: "2 min read", date: "2024-06-22",
    locations: "Pune, Chennai", experience: "3-8 years", salary: "INR 18-40 LPA", openRoles: ["Data Scientist", "AI Engineer"],
    fullTextParagraphs: [
      "Capgemini is intensifying its recruitment efforts for AI and Data Science professionals globally to enhance its capabilities in predictive analytics and generative AI infrastructure.",
      "Interview Tip: Candidates will undergo strict live-coding tests assessing proficiency in Python, TensorFlow, and PyTorch. Be prepared to explain how you have previously deployed machine learning models into live production environments."
    ],
    hashtags: ["#AI", "#DataScience", "#MachineLearning"]
  },
  { 
    id: 14, category: "Interview Tips", title: "Capgemini Engineering Recruits Automotive Software Engineers for EV ...", 
    desc: "Capgemini Engineering is launching a major recruitment drive for Automotive Software Engineers specializing in electric...", 
    tags: ["Automotive", "EV", "Autonomous Driving"], author: "Capgemini", readTime: "2 min read", date: "2024-07-01",
    locations: "Bangalore, Pune", experience: "3-7 years", salary: "INR 15-35 LPA", openRoles: ["Automotive Systems Engineer", "EV Software Lead"],
    fullTextParagraphs: [
      "Capgemini Engineering is launching a major recruitment drive for Automotive Software Engineers specializing in electric vehicles (EV) and autonomous driving frameworks.",
      "Interview Tip: Technical interviews will be rigorous, heavily featuring embedded C/C++ memory management, RTOS concepts, and automotive standards like AUTOSAR and ISO 26262. Be ready to whiteboard architectures for Battery Management Systems (BMS)."
    ],
    hashtags: ["#Automotive", "#EV", "#AutonomousDriving"]
  }
];

export const ArticlesPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("All Articles");
  const [selectedArticle, setSelectedArticle] = useState(null);
  
  const tabs = ["All Articles", "Interview Tips", "Communication", "Career Guidance"];

  const filteredArticles = articlesData.filter(article => {
    const matchesTab = activeTab === "All Articles" || article.category === activeTab;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          article.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedArticle]);

  return (
    <div className="articles-container">
      <style>{`
        /* Dynamic Cosmic Glass Background */
        .articles-container {
          min-height: 100vh;
          padding: 60px 20px;
          background: linear-gradient(135deg, #ccfbf1 0%, #d1fae5 40%, #bae6fd 70%, #e0f2fe 100%);
          background-size: 400% 400%;
          animation: cosmicGradient 15s ease infinite;
          font-family: 'Inter', sans-serif;
          position: relative;
        }
        @keyframes cosmicGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Top Right Refresh Action */
        .top-right-actions {
          position: absolute;
          top: 24px;
          right: 32px;
          z-index: 100;
        }
        .refresh-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.9);
          padding: 8px 16px;
          border-radius: 12px;
          font-weight: 600;
          color: #334155;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }
        .refresh-btn:hover {
          background: #ffffff;
          transform: translateY(-2px);
          color: #0284c7;
        }

        /* Glassmorphism Cards */
        .glass-panel {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.05);
          border-radius: 16px;
          position: relative;
          z-index: 1;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .glass-panel:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: translateY(-5px);
          box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.1);
        }

        /* Side Navigation (Icons Only) */
        .side-nav {
          position: fixed;
          right: 32px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 16px;
          z-index: 50;
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
        .nav-icon:hover { background: rgba(255, 255, 255, 0.9); color: #0ea5e9; transform: scale(1.05); }
        .nav-icon.active { background: #0ea5e9; color: white; border: none; box-shadow: 0 8px 20px rgba(14, 165, 233, 0.4); }

        /* Content Layout */
        .content-wrapper { 
          max-width: 1100px; 
          margin: 0 auto; 
          position: relative; 
          z-index: 10; 
          padding-right: 120px; 
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .header-title { font-size: 42px; font-weight: 800; color: #0f172a; margin-bottom: 12px; text-align: center; }
        .header-subtitle { color: #475569; font-size: 18px; text-align: center; max-width: 600px; margin-bottom: 40px; }

        /* Search Bar & Tabs */
        .search-container { width: 100%; max-width: 700px; position: relative; margin-bottom: 30px; }
        .search-input {
          width: 100%; padding: 16px 20px 16px 50px; border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.8); background: rgba(255,255,255,0.7);
          backdrop-filter: blur(12px); font-size: 16px; color: #334155; box-sizing: border-box; outline: none;
        }
        .search-input:focus { background: #ffffff; border-color: #38bdf8; }
        .search-icon { position: absolute; left: 20px; top: 50%; transform: translateY(-50%); color: #64748b; }

        .tabs-container {
          display: flex; background: rgba(255, 255, 255, 0.5); backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.7); border-radius: 12px; padding: 6px; gap: 6px; margin-bottom: 50px; flex-wrap: wrap; justify-content: center;
        }
        .tab-btn { padding: 12px 24px; border: none; background: transparent; color: #475569; font-weight: 600; font-size: 14px; border-radius: 8px; cursor: pointer; transition: all 0.3s; }
        .tab-btn.active { background: #ffffff; color: #0f172a; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }

        /* Articles Grid */
        .articles-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; width: 100%; }
        .article-card { padding: 24px; display: flex; flex-direction: column; }
        
        .category-badge {
          display: inline-block; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: 700; color: white; margin-bottom: 16px; align-self: flex-start;
        }
        .bg-interview { background: #2563eb; }
        .bg-communication { background: #0ea5e9; }
        .bg-career { background: #0369a1; }

        .article-title { font-size: 18px; font-weight: 800; color: #0f172a; line-height: 1.4; margin-bottom: 12px; }
        .article-desc { color: #475569; font-size: 14px; line-height: 1.6; margin-bottom: 20px; flex-grow: 1; }
        
        .tags-container { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
        .tag-pill { padding: 4px 12px; border-radius: 16px; border: 1px solid #cbd5e1; color: #475569; font-size: 11px; font-weight: 500; background: rgba(255,255,255,0.5); }
        
        .article-meta { display: flex; justify-content: space-between; align-items: center; color: #64748b; font-size: 12px; font-weight: 500; margin-bottom: 20px; }
        .meta-item { display: flex; align-items: center; gap: 6px; }
        
        .read-btn { width: 100%; padding: 12px 0; border-radius: 8px; background: transparent; border: 1px solid #cbd5e1; color: #0f172a; font-weight: 700; font-size: 14px; cursor: pointer; transition: all 0.2s; }
        .read-btn:hover { background: #f8fafc; border-color: #94a3b8; }

        /* MODAL STYLES */
        .modal-overlay {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(8px); display: flex; justify-content: center; align-items: center; z-index: 1000; padding: 20px;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        .modal-content {
          background: #ffffff; border-radius: 20px; max-width: 800px; width: 100%; max-height: 90vh; overflow-y: auto;
          padding: 40px; position: relative; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }

        .modal-close {
          position: absolute; top: 24px; right: 24px; background: transparent; border: 1px solid #cbd5e1;
          border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #64748b; transition: all 0.2s;
        }
        .modal-close:hover { background: #f1f5f9; color: #0f172a; border-color: #94a3b8; }

        .modal-header-row { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; }
        .modal-date { color: #64748b; font-size: 14px; font-weight: 500; }
        .modal-title { font-size: 28px; font-weight: 800; color: #0f172a; line-height: 1.3; margin-bottom: 24px; }
        
        .modal-meta-row { display: flex; flex-wrap: wrap; gap: 24px; color: #64748b; font-size: 15px; font-weight: 500; margin-bottom: 32px; padding-bottom: 24px; border-bottom: 1px solid #e2e8f0; }
        .modal-meta-item { display: flex; align-items: center; gap: 8px; }

        .roles-heading { font-size: 18px; font-weight: 700; color: #0f172a; margin-bottom: 12px; }
        .roles-container { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 32px; }
        .role-pill { background: #f97316; color: white; padding: 6px 16px; border-radius: 20px; font-size: 14px; font-weight: 600; }

        .modal-body-text p { color: #334155; font-size: 16px; line-height: 1.7; margin-bottom: 16px; }
        
        .modal-hashtags { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 40px; padding-top: 24px; border-top: 1px solid #e2e8f0; }
        .hashtag { color: #64748b; font-size: 14px; font-weight: 500; }

        @media (max-width: 1024px) {
          .content-wrapper { padding-right: 0; }
          .side-nav, .top-right-actions { display: none; }
        }
        @media (max-width: 600px) {
          .modal-content { padding: 24px; }
          .modal-title { font-size: 22px; }
          .modal-meta-row { gap: 16px; flex-direction: column; }
        }
      `}</style>

      {/* Top Right Refresh Button */}
      <div className="top-right-actions">
        <button className="refresh-btn" onClick={() => window.location.reload()}>
          <IconRefresh /> Refresh
        </button>
      </div>

      {/* Expanded Side Navigation Panel - ONLY ICONS */}
      <div className="side-nav">
        <div className="nav-icon" onClick={() => navigate('/assessment')} title="Assessment"><NavIcon1 /></div>
        <div className="nav-icon" onClick={() => navigate('/skills')} title="Skills"><NavIcon2 /></div>
        <div className="nav-icon" onClick={() => navigate('/opportunities')} title="Opportunities"><NavIcon3 /></div>
        <div className="nav-icon" onClick={() => navigate('/tasks')} title="Tasks"><NavIcon4 /></div>
        <div className="nav-icon active" onClick={() => navigate('/articles')} title="Articles"><NavIcon5 /></div>
      </div>

      <div className="content-wrapper">
        <h1 className="header-title">Resources & Learning Hub</h1>
        <p className="header-subtitle">Discover articles, tips, and guides to accelerate your career growth and communication skills</p>

        <div className="search-container">
          <div className="search-icon"><IconSearch /></div>
          <input type="text" className="search-input" placeholder="Search articles..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>

        <div className="tabs-container">
          {tabs.map(tab => (
            <button key={tab} className={`tab-btn ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
              {tab}
            </button>
          ))}
        </div>

        <div className="articles-grid">
          {filteredArticles.map(article => (
            <div key={article.id} className="glass-panel article-card">
              <span className={`category-badge ${article.category === 'Interview Tips' ? 'bg-interview' : article.category === 'Communication' ? 'bg-communication' : 'bg-career'}`}>
                {article.category}
              </span>
              <h2 className="article-title">{article.title}</h2>
              <p className="article-desc">{article.desc}</p>
              <div className="tags-container">
                {article.tags.map(tag => <span key={tag} className="tag-pill">{tag}</span>)}
              </div>
              <div className="article-meta">
                <div className="meta-item"><IconUser /> {article.author}</div>
                <div className="meta-item"><IconClock /> {article.readTime}</div>
              </div>
              <button className="read-btn" onClick={() => setSelectedArticle(article)}>Read More</button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup overlay */}
      {selectedArticle && (
        <div className="modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedArticle(null)}>
              <IconClose />
            </button>

            <div className="modal-header-row">
              <span className={`category-badge ${selectedArticle.category === 'Interview Tips' ? 'bg-interview' : selectedArticle.category === 'Communication' ? 'bg-communication' : 'bg-career'}`} style={{marginBottom: 0}}>
                {selectedArticle.category}
              </span>
              <span className="modal-date">{selectedArticle.date}</span>
            </div>

            <h1 className="modal-title">{selectedArticle.title}</h1>

            <div className="modal-meta-row">
              <div className="modal-meta-item"><IconBuilding /> {selectedArticle.author}</div>
              <div className="modal-meta-item"><IconMapPin /> {selectedArticle.locations}</div>
              <div className="modal-meta-item"><IconBriefcase /> {selectedArticle.experience}</div>
              <div className="modal-meta-item"><IconDollar /> {selectedArticle.salary}</div>
            </div>

            <h3 className="roles-heading">Open Roles</h3>
            <div className="roles-container">
              {selectedArticle.openRoles.map(role => (
                <span key={role} className="role-pill">{role}</span>
              ))}
            </div>

            <div className="modal-body-text">
              {selectedArticle.fullTextParagraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            <div className="modal-hashtags">
              {selectedArticle.hashtags.map(tag => (
                <span key={tag} className="hashtag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticlesPage;