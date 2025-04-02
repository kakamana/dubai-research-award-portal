import React, { useState } from 'react';
import DubaiResearchPortal from './DubaiResearchPortal';
import DubaiResearchArabic from './DubaiResearchArabic';

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <div className="App">
      <div className="fixed top-4 right-4 z-50">
        <button 
          onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition-colors"
        >
          {language === 'en' ? 'عربي' : 'English'}
        </button>
      </div>
      
      {language === 'en' ? <DubaiResearchPortal /> : <DubaiResearchArabic />}
    </div>
  );
}

export default App;


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
