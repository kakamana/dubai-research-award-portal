import React, { useState } from 'react';
import MainNavigation from './MainNavigation';
import MainNavigationArabic from './MainNavigationArabic';


// Import your individual section components
import AboutAwardComponent from './AboutAward';
import AboutAwardArabic from './AboutAwardArabic';
import DubaiResearchPortal from './DubaiResearchPortal';
import DubaiResearchArabic from './DubaiResearchArabic';
import ResearchCriteriaComponent from './ResearchCriteria';
import ResearchCriteriaArabic from './ResearchCriteriaArabic';
import RewardsComponent from './Reward';
import RewardsComponentArabic from './RewardArabic';
// ... and any other components you need

const App = () => {
  const [language, setLanguage] = useState('en');
  
  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };
  
  return (
    <div className="App">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <button 
          onClick={toggleLanguage}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition-colors"
        >
          {language === 'en' ? 'عربي' : 'English'}
        </button>
      </div>
      
      {/* Render the appropriate main navigation based on language */}
      {language === 'en' ? (
        // English version
        // <MainNavigation />
        <div className="p-4 text-center">
          <h1 className="text-xl font-bold mb-4">English Version</h1>
          {/* <p>Replace this div with your MainNavigation component</p> */}
          <MainNavigation />
        </div>
      ) : (
        // Arabic version
        // <MainNavigationArabic />
        <div dir="rtl" className="p-4 text-center">
          <h1 className="text-xl font-bold mb-4">النسخة العربية</h1>
          {/* <p>استبدل هذا القسم بمكون MainNavigationArabic الخاص بك</p> */}
          <MainNavigationArabic />
        </div>
      )}
    </div>
  );
};

export default App;

// function App() {
//   const [language, setLanguage] = useState('en');

//   return (
//     <div className="App">
//       <div className="fixed top-4 right-4 z-50">
//         <button 
//           onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
//           className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition-colors"
//         >
//           {language === 'en' ? 'عربي' : 'English'}
//         </button>
//       </div>
      
//       {language === 'en' ? <DubaiResearchPortal /> : <DubaiResearchArabic />}
//     </div>
//   );
// }

// export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
