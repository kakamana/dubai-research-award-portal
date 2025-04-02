import React, { useState, useEffect } from 'react';
import { 
  Monitor, 
  BookOpen, 
  Users, 
  Building,
  TrendingUp, 
  Globe,
  Briefcase,
  Award,
  BarChart2,
  Bot,
  Database,
  FileText,
  Target,
  Heart,
  Brain,
  Smartphone,
  User,
  School,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const DubaiResearchPortal = () => {
  const [activeCategory, setActiveCategory] = useState('workplace');
  const [activeTopic, setActiveTopic] = useState('digital');
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if we're on mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // All research categories and topics
  const researchData = [
    {
      id: 'workplace',
      title: "Workplace Skills and Lifelong Learning",
      icon: <BookOpen size={24} />,
      color: "blue",
      topics: [
        {
          id: 'digital',
          title: "Digital and Technological Skills",
          icon: <Monitor size={24} />,
          description: "Essential competencies in digital tools, programming, data analysis, and emerging technologies that are increasingly crucial across all industries.",
          keyPoints: [
            "AI and automation literacy",
            "Data analysis and interpretation",
            "Cybersecurity awareness",
            "Digital collaboration tools"
          ],
          trend: {
            title: "Digital Transformation Acceleration",
            description: "Organizations are investing heavily in digital capabilities, with 89% pursuing digital-first business strategies."
          }
        },
        {
          id: 'continuous',
          title: "Continuous Learning and Professional Development",
          icon: <BookOpen size={24} />,
          description: "The ability to adapt to changing job requirements through ongoing education, upskilling, and reskilling throughout one's career.",
          keyPoints: [
            "Self-directed learning strategies",
            "Knowledge transfer methods",
            "Learning agility development",
            "Certification and credential pathways"
          ],
          trend: {
            title: "The Rise of Microlearning",
            description: "Short, focused learning modules are becoming the preferred way to deliver continuous professional development."
          }
        },
        {
          id: 'leadership',
          title: "Leadership and Management Skills",
          icon: <Users size={24} />,
          description: "Competencies needed to guide teams, manage resources, and drive organizational success in complex environments.",
          keyPoints: [
            "Remote team management",
            "Cross-functional collaboration",
            "Emotional intelligence",
            "Strategic decision-making"
          ],
          trend: {
            title: "Hybrid Workplace Leadership",
            description: "Leaders must now effectively manage teams split between in-office and remote working environments."
          }
        },
        {
          id: 'environment',
          title: "The Impact of Work Environment on Skills Development",
          icon: <Building size={24} />,
          description: "How workplace culture, physical spaces, and organizational policies influence skill acquisition and application.",
          keyPoints: [
            "Psychological safety",
            "Learning organizations",
            "Mentorship systems",
            "Knowledge sharing infrastructure"
          ],
          trend: {
            title: "Workspace Experience Design",
            description: "Companies are redesigning physical and digital workspaces to enhance collaboration and productivity."
          }
        },
        {
          id: 'future',
          title: "Skills Development for Future Jobs",
          icon: <TrendingUp size={24} />,
          description: "Preparing for emerging roles and industries through anticipatory skill building and adaptability.",
          keyPoints: [
            "Green economy competencies",
            "Human-AI collaboration",
            "Innovation and creativity",
            "Complex problem-solving"
          ],
          trend: {
            title: "Skills-Based Hiring Models",
            description: "Employers are shifting from credential-based to skills-based hiring to address talent shortages."
          }
        },
        {
          id: 'global',
          title: "Global Transformations and Their Role in Shaping Skills",
          icon: <Globe size={24} />,
          description: "How global trends like demographic shifts, geopolitical changes, and technological revolutions influence skill demand.",
          keyPoints: [
            "Cross-cultural communication",
            "Global supply chain understanding",
            "Socioeconomic awareness",
            "Sustainability practices"
          ],
          trend: {
            title: "Global Talent Mobility",
            description: "International experience and cross-cultural competencies are increasingly valued in leadership positions."
          }
        }
      ]
    },
    {
      id: 'hrm',
      title: "Human Resources Management: Reality, Challenges, and Future",
      icon: <Briefcase size={24} />,
      color: "indigo",
      topics: [
        {
          id: 'workforce',
          title: "Workforce Planning",
          icon: <Target size={24} />,
          description: "Strategic approaches to assess staffing needs, recruitment requirements, and role alignment across organizations.",
          keyPoints: [
            "Workforce analytics and forecasting",
            "Talent supply chain management",
            "Strategic workforce planning frameworks",
            "Job architecture and role definition"
          ],
          trend: {
            title: "Predictive Workforce Analytics",
            description: "Advanced analytics are being used to predict future talent needs with increasing accuracy."
          }
        },
        {
          id: 'recruitment',
          title: "Recruitment and Selection",
          icon: <Users size={24} />,
          description: "Methods and processes for attracting talent, conducting evaluations, and making optimal placement decisions.",
          keyPoints: [
            "Candidate experience optimization",
            "Assessment tool validation",
            "Bias reduction in hiring",
            "Talent pipeline development"
          ],
          trend: {
            title: "AI-Enhanced Candidate Screening",
            description: "Intelligent screening tools are revolutionizing how organizations identify qualified candidates."
          }
        },
        {
          id: 'compensation',
          title: "Compensation and Benefits",
          icon: <Award size={24} />,
          description: "Approaches to job evaluation, wage policy development, and incentive management for organizational success.",
          keyPoints: [
            "Total rewards frameworks",
            "Pay-for-performance systems",
            "Benefits administration",
            "Compensation structure design"
          ],
          trend: {
            title: "Flexible Benefits Packages",
            description: "Organizations are offering increasingly personalized benefits packages to attract diverse talent."
          }
        },
        {
          id: 'performance',
          title: "Performance Management",
          icon: <BarChart2 size={24} />,
          description: "Research and practices related to goal setting, employee evaluation, and development planning processes.",
          keyPoints: [
            "Continuous feedback mechanisms",
            "Performance metric design",
            "Development-focused reviews",
            "Team-based performance systems"
          ],
          trend: {
            title: "Real-time Performance Management",
            description: "Organizations are shifting from annual reviews to continuous performance dialogue models."
          }
        },
        {
          id: 'career',
          title: "Career Development",
          icon: <TrendingUp size={24} />,
          description: "Training programs, organizational commitment initiatives, and career growth strategies to retain talent.",
          keyPoints: [
            "Career pathing frameworks",
            "Skills development programs",
            "Talent mobility systems",
            "Leadership pipeline management"
          ],
          trend: {
            title: "Internal Talent Marketplaces",
            description: "Companies are creating internal platforms to match employee skills with project opportunities."
          }
        },
        {
          id: 'relations',
          title: "Employee Relations",
          icon: <Heart size={24} />,
          description: "Practices for ensuring workplace harmony, managing grievances, and ensuring compliance with labor laws.",
          keyPoints: [
            "Conflict resolution systems",
            "Labor compliance frameworks",
            "Employee voice mechanisms",
            "Workplace investigation protocols"
          ],
          trend: {
            title: "Proactive Conflict Management",
            description: "Organizations are implementing early intervention systems to address workplace tensions."
          }
        },
        {
          id: 'hpws',
          title: "High-Performance Work Systems (HPWS)",
          icon: <Target size={24} />,
          description: "Examining how coordinated HRM practices enhance institutional performance and organizational outcomes.",
          keyPoints: [
            "Integrated HRM system design",
            "Performance-enhancing HR bundles",
            "Organizational capability building",
            "Productivity measurement frameworks"
          ],
          trend: {
            title: "Holistic HR System Design",
            description: "Research shows organizations with aligned HR practices outperform those with fragmented approaches by 29%."
          }
        },
        {
          id: 'ai-hr',
          title: "AI in HR",
          icon: <Bot size={24} />,
          description: "Leveraging artificial intelligence technologies for workforce forecasting and skills assessment processes.",
          keyPoints: [
            "AI-enabled talent analytics",
            "Smart workforce planning",
            "Algorithmic skill matching",
            "Machine learning HR applications"
          ],
          trend: {
            title: "AI-Powered Decision Support",
            description: "HR leaders are increasingly using AI to augment strategic workforce decisions."
          }
        }
      ]
    },
    {
      id: 'dubai-hr',
      title: "Developing Human Resources Systems and Policies in Dubai Government",
      icon: <Database size={24} />,
      color: "emerald",
      topics: [
        {
          id: 'ai-recruitment',
          title: "AI-Automated Recruitment Process",
          icon: <Bot size={24} />,
          description: "Implementing data-driven candidate shortlisting techniques for unbiased hiring in government institutions.",
          keyPoints: [
            "Automated candidate screening",
            "CV parsing and skill extraction",
            "Bias detection and mitigation",
            "Interview scheduling automation"
          ],
          trend: {
            title: "Ethical AI in Government Hiring",
            description: "Dubai government entities are pioneering frameworks for fair, transparent AI-driven recruitment."
          }
        },
        {
          id: 'performance-monitoring',
          title: "Employee Performance Monitoring",
          icon: <BarChart2 size={24} />,
          description: "AI-based tools and methodologies for tracking daily tasks and performance metrics in public service roles.",
          keyPoints: [
            "Performance dashboard development",
            "Productivity measurement systems",
            "Real-time feedback mechanisms",
            "Balanced scorecard implementation"
          ],
          trend: {
            title: "Smart Performance Analytics",
            description: "Dubai government is implementing intelligent systems that measure both output and developmental metrics."
          }
        },
        {
          id: 'retention-analytics',
          title: "Predictive Analytics for Employee Retention",
          icon: <Database size={24} />,
          description: "Applying data science to identify key factors affecting workforce retention in government roles.",
          keyPoints: [
            "Turnover prediction modeling",
            "Engagement driver identification",
            "Retention risk assessment",
            "Targeted intervention design"
          ],
          trend: {
            title: "Retention Risk Forecasting",
            description: "Advanced models can now predict potential turnover 6-9 months before occurrence with 85% accuracy."
          }
        },
        {
          id: 'nlp-screening',
          title: "NLP for Resume Screening",
          icon: <FileText size={24} />,
          description: "Automating resume analysis through natural language processing technologies for government hiring.",
          keyPoints: [
            "Multilingual text analysis",
            "Semantic skill extraction",
            "Qualification matching algorithms",
            "Document classification systems"
          ],
          trend: {
            title: "Context-Aware Document Analysis",
            description: "Next-generation NLP systems understand nuanced professional terminology and context-specific language."
          }
        },
        {
          id: 'skill-gap',
          title: "Machine Learning for Skill Gap Analysis",
          icon: <Target size={24} />,
          description: "Utilizing AI models to identify workforce skill shortages for strategic planning in Dubai government.",
          keyPoints: [
            "Competency mapping frameworks",
            "Future skill forecasting",
            "Training needs assessment",
            "Capability development planning"
          ],
          trend: {
            title: "Dynamic Skill Ecosystem Mapping",
            description: "Dubai is developing sophisticated systems to map emerging skill requirements across government entities."
          }
        }
      ]
    },
    {
      id: 'wellbeing',
      title: "Employees' Well-being in the Work Environment",
      icon: <Heart size={24} />,
      color: "rose",
      topics: [
        {
          id: 'physical',
          title: "Physical Well-being",
          icon: <Heart size={24} />,
          description: "Research and implementation of workplace ergonomics and health-focused initiatives for employee wellness.",
          keyPoints: [
            "Ergonomic workspace design",
            "Preventative health programs",
            "Physical activity integration",
            "Occupational health infrastructure"
          ],
          trend: {
            title: "Integrated Health Management",
            description: "Organizations with comprehensive health programs see 28% reduction in sick leave and higher engagement."
          }
        },
        {
          id: 'mental',
          title: "Mental Well-being",
          icon: <Brain size={24} />,
          description: "Developing psychological safety frameworks and stress management programs for workforce mental health.",
          keyPoints: [
            "Stress reduction protocols",
            "Mental health resource access",
            "Psychological safety frameworks",
            "Burnout prevention strategies"
          ],
          trend: {
            title: "Mental Health Support Systems",
            description: "Leading organizations are implementing comprehensive mental wellness programs beyond EAP services."
          }
        },
        {
          id: 'digital',
          title: "Digital Well-being",
          icon: <Smartphone size={24} />,
          description: "Promoting healthy social media and technology use practices in government workplace environments.",
          keyPoints: [
            "Digital boundaries establishment",
            "Technology use guidelines",
            "Screen time management",
            "Digital distraction mitigation"
          ],
          trend: {
            title: "Workplace Digital Detox",
            description: "Organizations are implementing structured approaches to manage information overload and digital stress."
          }
        }
      ]
    },
    {
      id: 'target',
      title: "Target Groups",
      icon: <User size={24} />,
      color: "amber",
      topics: [
        {
          id: 'government',
          title: "Dubai Government Employees",
          icon: <Briefcase size={24} />,
          description: "Research aimed at serving the professional development needs of Dubai's public sector workforce.",
          keyPoints: [
            "Administrative and executive staff",
            "Technical specialists across departments",
            "Leadership and management personnel",
            "Front-line service personnel"
          ],
          trend: {
            title: "Public Sector Talent Development",
            description: "Dubai is investing in creating world-class development programs for government talent at all levels."
          }
        },
        {
          id: 'students',
          title: "Students at Universities and Colleges",
          icon: <School size={24} />,
          description: "Research supporting academic institutions with relevant programs and research focus in Dubai.",
          keyPoints: [
            "Hamdan Bin Mohammed Smart University",
            "Mohammed bin Rashid School of Government",
            "Mohammed Bin Rashid University of Medicine and Health Sciences",
            "The Rochester Institute of Technology of Dubai"
          ],
          trend: {
            title: "Academia-Government Partnerships",
            description: "Collaborative research initiatives between academic institutions and government entities are expanding."
          }
        }
      ]
    }
  ];

  // Get the active category and topic data
  const activeCategoryData = researchData.find(cat => cat.id === activeCategory);
  const activeTopicData = activeCategoryData?.topics.find(topic => topic.id === activeTopic) || activeCategoryData?.topics[0];

  // Handler functions
  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    // Set the first topic of the category as active
    const category = researchData.find(cat => cat.id === categoryId);
    if (category && category.topics.length > 0) {
      setActiveTopic(category.topics[0].id);
    }
  };

  const handleTopicClick = (topicId) => {
    setActiveTopic(topicId);
  };

  // Define color classes based on category color
  const getCategoryColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-100',
        bgDark: 'bg-blue-700',
        text: 'text-blue-700',
        border: 'border-blue-500',
        hover: 'hover:bg-blue-50',
        selectedBg: 'bg-blue-50'
      },
      indigo: {
        bg: 'bg-indigo-100',
        bgDark: 'bg-indigo-700',
        text: 'text-indigo-700',
        border: 'border-indigo-500',
        hover: 'hover:bg-indigo-50',
        selectedBg: 'bg-indigo-50'
      },
      emerald: {
        bg: 'bg-emerald-100',
        bgDark: 'bg-emerald-700',
        text: 'text-emerald-700',
        border: 'border-emerald-500',
        hover: 'hover:bg-emerald-50',
        selectedBg: 'bg-emerald-50'
      },
      rose: {
        bg: 'bg-rose-100',
        bgDark: 'bg-rose-700',
        text: 'text-rose-700',
        border: 'border-rose-500',
        hover: 'hover:bg-rose-50',
        selectedBg: 'bg-rose-50'
      },
      amber: {
        bg: 'bg-amber-100',
        bgDark: 'bg-amber-700',
        text: 'text-amber-700',
        border: 'border-amber-500',
        hover: 'hover:bg-amber-50',
        selectedBg: 'bg-amber-50'
      }
    };
    
    return colorMap[color] || colorMap.blue;
  };

  const activeColorClasses = getCategoryColorClasses(activeCategoryData?.color);

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 p-4 md:p-6 font-sans">
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <header className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Dubai Scientific Research Portal</h1>
        <p className="text-slate-600 max-w-3xl mx-auto">
          Explore the priority research areas eligible for the Dubai Scientific Research Award. Each topic represents a focus area for advancing knowledge and innovation.
        </p>
      </header>
      
      {/* Category navigation - Enhanced responsiveness */}
      <div className="mb-8">
        {isMobile ? (
          // Mobile view - scrollable categories with arrows
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 flex items-center z-10">
              <button className="h-full px-1 text-slate-400 hover:text-slate-700 bg-gradient-to-r from-slate-50 to-transparent">
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <div className="overflow-x-auto py-2 px-6 hide-scrollbar">
              <div className="flex gap-3 w-max">
                {researchData.map((category) => {
                  const colorClasses = getCategoryColorClasses(category.color);
                  return (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryClick(category.id)}
                      className={`flex items-center px-4 py-3 rounded-lg transition-colors whitespace-nowrap ${
                        activeCategory === category.id 
                          ? `${colorClasses.bgDark} text-white font-medium shadow-md`
                          : `bg-white ${colorClasses.text} hover:${colorClasses.bg} border border-slate-200`
                      }`}
                    >
                      <span className="mr-2">{category.icon}</span>
                      <span className="text-sm">{category.title.split(':')[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            
            <div className="absolute right-0 top-0 bottom-0 flex items-center z-10">
              <button className="h-full px-1 text-slate-400 hover:text-slate-700 bg-gradient-to-l from-slate-50 to-transparent">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        ) : (
          // Desktop view - grid layout
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {researchData.map((category) => {
              const colorClasses = getCategoryColorClasses(category.color);
              const titleParts = category.title.split(':');
              
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`relative flex flex-col items-center px-3 py-4 rounded-lg transition-all ${
                    activeCategory === category.id 
                      ? `${colorClasses.bgDark} text-white font-medium shadow-md transform scale-105`
                      : `bg-white ${colorClasses.text} hover:${colorClasses.bg} border border-slate-200 hover:shadow-sm`
                  }`}
                >
                  <div className={`p-3 rounded-full mb-2 ${
                    activeCategory === category.id 
                      ? 'bg-white/20' 
                      : colorClasses.bg
                  }`}>
                    {React.cloneElement(category.icon, { size: 28 })}
                  </div>
                  <span className="text-center font-medium">
                    {titleParts[0]}
                  </span>
                  {titleParts[1] && (
                    <span className={`text-xs text-center mt-1 ${
                      activeCategory === category.id 
                        ? 'text-white/80' 
                        : 'text-slate-500'
                    }`}>
                      {titleParts[1]}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        {/* Topic navigation sidebar */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-200">
              <h2 className="font-semibold text-lg text-slate-800">Focus Areas</h2>
              <p className="text-slate-500 text-sm">Select a research topic to explore</p>
            </div>
            
            {activeCategoryData?.topics.map((topic) => (
              <div 
                key={topic.id}
                className={`flex items-center p-4 cursor-pointer transition-colors ${
                  activeTopic === topic.id 
                    ? `${activeColorClasses.selectedBg} border-l-4 ${activeColorClasses.border}` 
                    : `hover:bg-slate-50 border-l-4 border-transparent`
                }`}
                onClick={() => handleTopicClick(topic.id)}
              >
                <div className={`p-2 rounded-full mr-3 ${
                  activeTopic === topic.id ? activeColorClasses.bg : 'bg-slate-100'
                }`}>
                  {topic.icon}
                </div>
                <h3 className="font-medium">{topic.title}</h3>
              </div>
            ))}
          </div>
        </div>
        
        {/* Topic content area */}
        <div className="lg:w-2/3">
          {activeTopicData && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200">
              <div className={`p-5 flex items-center border-b ${activeColorClasses.border}`}>
                <div className={`p-3 rounded-full ${activeColorClasses.bg} mr-4`}>
                  {activeTopicData.icon}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-800">{activeTopicData.title}</h2>
                  <p className="text-slate-500 text-sm">{activeCategoryData?.title}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-slate-800 mb-2">Overview</h3>
                  <p className="text-slate-700 leading-relaxed">
                    {activeTopicData.description}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-slate-800 mb-3">Key Research Components</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activeTopicData.keyPoints.map((point, index) => (
                      <li key={index} className={`flex items-start ${activeColorClasses.selectedBg} p-3 rounded-lg`}>
                        <div className={`${activeColorClasses.bg} ${activeColorClasses.text} p-1 rounded-full mr-3 mt-0.5`}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-slate-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Research trend insight */}
                <div className="mt-8">
                  <h3 className="text-sm uppercase tracking-wider font-semibold text-slate-500 mb-3">RESEARCH TREND INSIGHT</h3>
                  <div className={`${activeColorClasses.selectedBg} p-4 rounded-lg border ${activeColorClasses.border} relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                      {activeTopicData.icon && React.cloneElement(activeTopicData.icon, { size: 96 })}
                    </div>
                    <div className="relative z-10">
                      <h4 className={`font-semibold text-lg ${activeColorClasses.text} mb-2`}>
                        {activeTopicData.trend?.title}
                      </h4>
                      <p className="text-slate-700">
                        {activeTopicData.trend?.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Research application */}
                <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <h3 className="text-sm uppercase tracking-wider font-semibold text-slate-500 mb-3">PRACTICAL APPLICATION</h3>
                  <div className="flex items-start gap-4">
                    <div className={`${activeColorClasses.bgDark} text-white p-3 rounded-lg flex items-center justify-center w-14 h-14 shrink-0`}>
                      <Award size={28} />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-1">
                        Research Opportunity
                      </h4>
                      <p className="text-slate-600 text-sm mb-2">
                        This research area presents significant opportunities for academic exploration and practical application within Dubai's government framework.
                      </p>
                      <a href="#" className={`inline-flex items-center text-sm font-medium ${activeColorClasses.text}`}>
                        Apply for research grant
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <footer className="text-center text-sm text-slate-500 py-4 mt-auto border-t border-slate-200">
        <p>© 2025 Dubai Scientific Research Award | Advancing Knowledge and Innovation</p>
      </footer>
    </div>
  );
};

export default DubaiResearchPortal;