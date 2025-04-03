import React, { useState, useEffect } from 'react';
import { 
  Award, 
  FileText, 
  CheckSquare, 
  Trophy, 
  Send,
  Menu,
  X
} from 'lucide-react';

// Import your components here
// These are just placeholders - replace with your actual component imports
import AboutAwardArabic from './AboutAwardArabic';
import DubaiResearchPortalArabic from './DubaiResearchArabic';
import ResearchCriteriaArabic from './ResearchCriteriaArabic';
import RewardsComponentArabic from './RewardArabic';
// import ApplyNowArabic from './ApplyNowArabic';

const MainNavigationArabicResponsive = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Check screen size for responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const tabs = [
    { id: 'about', label: 'حول الجائزة', icon: <Award size={20} /> },
    { id: 'topics', label: 'مجالات البحوث العلمية', icon: <FileText size={20} /> },
    { id: 'criteria', label: 'شروط المشاركة', icon: <CheckSquare size={20} /> },
    { id: 'rewards', label: 'الجوائز', icon: <Trophy size={20} /> },
    { id: 'apply', label: 'التقدم الآن', icon: <Send size={20} /> }
  ];
  
  // This function renders the appropriate component based on active tab
  const renderComponent = () => {
    switch (activeTab) {
      case 'about':
        // Return your About Award component in Arabic
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">مكون حول الجائزة</h2>
            <p>قم باستبدال هذا بمكون AboutAwardArabic الخاص بك</p>
            <AboutAwardArabic />
          </div>
        );
      case 'topics':
        // Return your Dubai Research Portal component in Arabic
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">مكون مجالات البحوث</h2>
            <p>قم باستبدال هذا بمكون DubaiResearchPortalArabic الخاص بك</p>
            <DubaiResearchPortalArabic />
          </div>
        );
      case 'criteria':
        // Return your Research Criteria component in Arabic
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">مكون شروط المشاركة</h2>
            <p>قم باستبدال هذا بمكون ResearchCriteriaArabic الخاص بك</p>
            <ResearchCriteriaArabic />
          </div>
        );
      case 'rewards':
        // Return your Rewards component in Arabic
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">مكون الجوائز</h2>
            <p>قم باستبدال هذا بمكون RewardsComponentArabic الخاص بك</p>
            <RewardsComponentArabic />
          </div>
        );
      case 'apply':
        // Return your Apply Now component in Arabic
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">مكون التقدم الآن</h2>
            <p>قم باستبدال هذا بمكون ApplyNowArabic الخاص بك</p>
            {/* <ApplyNowArabic /> */}
          </div>
        );
      default:
        return null;
    }
  };
  
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false); // Close mobile menu when tab is clicked
  };
  
  return (
    <div dir="rtl" className="flex flex-col min-h-screen bg-slate-50 font-sans">
      {/* Main Title */}
      <div className="bg-white shadow-sm py-4 px-6 border-b border-slate-200">
        <h1 className="text-2xl font-bold text-center text-blue-800">
          بوابة البحث العلمي في دبي
        </h1>
        <p className="text-center text-slate-600 mt-2 max-w-4xl mx-auto text-sm">
          استكشف مجالات البحث ذات الأولوية المؤهلة للحصول على جائزة دبي للبحث العلمي.
          يمثل كل موضوع مجال تركيز لتعزيز المعرفة والابتكار.
        </p>
      </div>
      
      {/* Main Navigation - Desktop Version */}
      {!isMobile && (
        <div className="sticky top-0 z-10 bg-white shadow-md">
          <div className="flex w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex-1 py-4 px-2 flex items-center justify-center transition-colors ${
                  activeTab === tab.id
                    ? 'bg-orange-500 text-white font-medium'
                    : 'bg-blue-800 text-white hover:bg-blue-700'
                }`}
              >
                <span className="ml-2">{tab.icon}</span>
                <span className="text-sm whitespace-normal text-center">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Main Navigation - Mobile Version with Dropdown */}
      {isMobile && (
        <div className="sticky top-0 z-10 bg-white shadow-md">
          <div className="flex items-center bg-blue-800 text-white p-3">
            {/* Menu Toggle Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Active Tab Display */}
            <div className="flex-1 flex items-center justify-center">
              <span className="ml-2 font-medium">
                {tabs.find(tab => tab.id === activeTab)?.label}
              </span>
              {tabs.find(tab => tab.id === activeTab)?.icon}
            </div>
          </div>
          
          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="absolute w-full bg-white shadow-lg z-20 animate-slideDown">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`w-full py-3 px-4 flex items-center text-right ${
                    activeTab === tab.id
                      ? 'bg-orange-500 text-white'
                      : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
                  }`}
                >
                  <span className="ml-3">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
      
      {/* Content Area */}
      <div className="flex-grow">
        {renderComponent()}
      </div>
      
      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <Award size={24} className="text-yellow-400 ml-2" />
                <span className="font-bold text-white">جائزة دبي للبحث العلمي</span>
              </div>
              <p className="text-sm mt-1">© 2025 دائرة الموارد البشرية لحكومة دبي</p>
            </div>
            <div className="flex space-x-4">
              <a href="mailto:ResearchAwards@dghr.gov.ae" className="text-slate-300 hover:text-white">
                اتصل بنا
              </a>
              <a href="#" className="text-slate-300 hover:text-white">
                الشروط
              </a>
              <a href="#" className="text-slate-300 hover:text-white">
                الخصوصية
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainNavigationArabicResponsive;