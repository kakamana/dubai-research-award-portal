import React, { useState } from 'react';
import { 
  Award, 
  FileText, 
  CheckSquare, 
  Trophy, 
  Send
} from 'lucide-react';

// Import your components here
// These are just placeholders - replace with your actual component imports
import AboutAwardArabic from './AboutAwardArabic';
import DubaiResearchPortalArabic from './DubaiResearchArabic';
import ResearchCriteriaArabic from './ResearchCriteriaArabic';
import RewardsComponentArabic from './RewardArabic';
// import ApplyNowArabic from './ApplyNowArabic';

const MainNavigationArabic = () => {
  const [activeTab, setActiveTab] = useState('about');
  
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
      
      {/* Main Navigation */}
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <div className="mx-auto">
          <div className="flex overflow-x-auto scrollbar-hide">
            <div className="flex w-full bg-blue-800 text-white rounded-md">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-4 px-4 flex items-center justify-center transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-orange-500 text-white font-medium'
                      : 'hover:bg-blue-700'
                  }`}
                >
                  <span className="ml-2">{tab.icon}</span>
                  <span className="text-sm md:text-base">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
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

export default MainNavigationArabic;