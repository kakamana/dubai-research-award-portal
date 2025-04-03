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
import AboutAwardComponent from './AboutAward';
import DubaiResearchPortal from './DubaiResearchPortal';
import ResearchCriteriaComponent from './ResearchCriteria';
import RewardsComponent from './Reward';
// import ApplyNowComponent from './ApplyNow';

const MainNavigation = () => {
  const [activeTab, setActiveTab] = useState('about');
  
  const tabs = [
    { id: 'about', label: 'About the Award', icon: <Award size={20} /> },
    { id: 'topics', label: 'Topics of the Scientific Research', icon: <FileText size={20} /> },
    { id: 'criteria', label: 'Research Criteria', icon: <CheckSquare size={20} /> },
    { id: 'rewards', label: 'Rewards', icon: <Trophy size={20} /> },
    { id: 'apply', label: 'Apply Now', icon: <Send size={20} /> }
  ];
  
  // This function renders the appropriate component based on active tab
  const renderComponent = () => {
    switch (activeTab) {
      case 'about':
        // Return your About Award component
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">About the Award Component</h2>
            <p>Replace this with your AboutAwardComponent</p>
            <AboutAwardComponent />
          </div>
        );
      case 'topics':
        // Return your Dubai Research Portal component
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Research Topics Component</h2>
            <p>Replace this with your DubaiResearchPortal component</p>
            <DubaiResearchPortal />
          </div>
        );
      case 'criteria':
        // Return your Research Criteria component
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Research Criteria Component</h2>
            <p>Replace this with your ResearchCriteriaComponent</p>
            <ResearchCriteriaComponent /> 
          </div>
        );
      case 'rewards':
        // Return your Rewards component
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Rewards Component</h2>
            <p>Replace this with your RewardsComponent</p>
             <RewardsComponent />
          </div>
        );
      case 'apply':
        // Return your Apply Now component
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Apply Now Component</h2>
            <p>Replace this with your ApplyNowComponent</p>
            {/* <ApplyNowComponent /> */}
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      {/* Main Title */}
      <div className="bg-white shadow-sm py-4 px-6 border-b border-slate-200">
        <h1 className="text-2xl font-bold text-center text-blue-800">
          Dubai Scientific Research Portal
        </h1>
        <p className="text-center text-slate-600 mt-2 max-w-4xl mx-auto text-sm">
          Explore the priority research areas eligible for the Dubai Scientific Research Award. 
          Each topic represents a focus area for advancing knowledge and innovation.
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
                  <span className="mr-2">{tab.icon}</span>
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
                <Award size={24} className="text-yellow-400 mr-2" />
                <span className="font-bold text-white">Dubai Scientific Research Award</span>
              </div>
              <p className="text-sm mt-1">© 2025 Dubai Government HR Department</p>
            </div>
            <div className="flex space-x-4">
              <a href="mailto:ResearchAwards@dghr.gov.ae" className="text-slate-300 hover:text-white">
                Contact
              </a>
              <a href="#" className="text-slate-300 hover:text-white">
                Terms
              </a>
              <a href="#" className="text-slate-300 hover:text-white">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainNavigation;