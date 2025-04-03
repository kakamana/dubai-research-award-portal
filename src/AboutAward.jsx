import React from 'react';
import { 
  Award, 
  Trophy, 
  Users, 
  Briefcase, 
  BookOpen, 
  Target, 
  Lightbulb, 
  GraduationCap, 
  Mail, 
  ChevronRight, 
  ExternalLink
} from 'lucide-react';

const AboutAwardComponent = () => {
  // University logos
  const universities = [
    {
      id: 'hamdan',
      name: 'Hamdan Bin Mohammed Smart University',
      logo: 'https://newdghrqa.dubai.gov.ae/_catalogs/masterpage/images/hamdan-university-logo.png',
      placeholder: 'University logo with blue text'
    },
    {
      id: 'rashid',
      name: 'Mohammed bin Rashid School of Government',
      logo: 'https://newdghrqa.dubai.gov.ae/_catalogs/masterpage/images/mohammed-bin-rashid-school-logo.png',
      placeholder: 'University logo with shield'
    },
    {
      id: 'mbruni',
      name: 'Mohammed Bin Rashid University of Medicine and Health Sciences',
      logo: 'https://newdghrqa.dubai.gov.ae/_catalogs/masterpage/images/mohammed-bin-rashid-university-logo.png',
      placeholder: 'Medical university logo'
    },
    {
      id: 'rit',
      name: 'Rochester Institute of Technology of Dubai',
      logo: 'https://newdghrqa.dubai.gov.ae/_catalogs/masterpage/images/rochester-institute-logo.png',
      placeholder: 'RIT logo in orange'
    }
  ];

  // Award objectives
  const objectives = [
    {
      id: 'support',
      title: 'Supporting Research',
      description: 'Supporting scientific research and enriching the cultural life in the Dubai government.',
      icon: <BookOpen size={24} />,
      color: 'blue'
    },
    {
      id: 'motivate',
      title: 'Motivating Employees',
      description: 'Motivating Dubai Government employees to develop government work through scientific research.',
      icon: <Briefcase size={24} />,
      color: 'indigo'
    },
    {
      id: 'study',
      title: 'Studying Work Reality',
      description: 'Study the reality of work, its challenges, and the future of human resources.',
      icon: <Target size={24} />,
      color: 'purple'
    },
    {
      id: 'learning',
      title: 'Promoting Self-Development',
      description: 'Learning and self-development to develop human capital and create an innovative work environment.',
      icon: <Lightbulb size={24} />,
      color: 'rose'
    },
    {
      id: 'encouraging',
      title: 'Encouraging Participation',
      description: 'Encouraging university and college students to actively participate in designing the future of work.',
      icon: <GraduationCap size={24} />,
      color: 'amber'
    }
  ];

  // Function to get color classes based on color name
  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200', dark: 'bg-blue-700' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-700', border: 'border-indigo-200', dark: 'bg-indigo-700' },
      violet: { bg: 'bg-violet-100', text: 'text-violet-700', border: 'border-violet-200', dark: 'bg-violet-700' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200', dark: 'bg-purple-700' },
      rose: { bg: 'bg-rose-100', text: 'text-rose-700', border: 'border-rose-200', dark: 'bg-rose-700' },
      amber: { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-200', dark: 'bg-amber-700' }
    };
    
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 p-4 md:p-6 font-sans">
      {/* Award Logo and Title */}
      <div className="flex flex-col items-center justify-center mb-12">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-end">
            <span className="text-6xl font-bold text-blue-700">2</span>
            <span className="text-6xl font-bold text-orange-500">0</span>
          </div>
          <div className="flex items-start">
            <span className="text-6xl font-bold text-blue-700">2</span>
            <span className="text-6xl font-bold text-orange-500">5</span>
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2 text-center">
          Dubai Government HR Department Research Awards
        </h1>
        <div className="w-24 h-1 bg-orange-500 my-4"></div>
      </div>

      {/* About the Award Section */}
      <div className="mb-16">
        <div className="flex items-center mb-6">
          <Trophy size={28} className="text-orange-500 mr-3" />
          <h2 className="text-2xl font-bold text-slate-800">About the Award</h2>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden p-6 mb-8">
          <p className="text-slate-700 text-lg mb-6 leading-relaxed">
            Dubai Government Human Resources Department launches the first cycle of the Dubai Government Human Resources 
            Department Research Awards 2025, in cooperation with four universities:
          </p>
          
          {/* University logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {universities.map((university) => (
              <div key={university.id} className="flex items-center justify-center p-4 bg-white rounded-lg border border-slate-200 h-32">
                {university.logo ? (
                  <img src={university.logo} alt={university.name} className="max-h-full max-w-full object-contain" />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center text-slate-400 text-xs">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-2">
                      <GraduationCap size={32} />
                    </div>
                    {university.placeholder}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="space-y-4">
            <div className="flex">
              <ChevronRight size={24} className="text-orange-500 flex-shrink-0 mt-0.5 mr-2" />
              <p className="text-slate-700">
                An annual competition in preparing studies and research related to developing human capital in 
                Dubai government and creating an innovative work environment.
              </p>
            </div>
            
            <div className="flex">
              <ChevronRight size={24} className="text-orange-500 flex-shrink-0 mt-0.5 mr-2" />
              <p className="text-slate-700">
                The target group is students in universities and colleges and Dubai government employees 
                within the fields of human resources.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Award Objectives Section */}
      <div className="mb-16">
        <div className="flex items-center mb-6">
          <Target size={28} className="text-orange-500 mr-3" />
          <h2 className="text-2xl font-bold text-slate-800">Award Objectives</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {objectives.map((objective) => {
            const colorClasses = getColorClasses(objective.color);
            return (
              <div
                key={objective.id}
                className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className={`p-4 flex items-center ${colorClasses.bg} border-b ${colorClasses.border}`}>
                  <div className={`p-2 rounded-full mr-3 bg-white ${colorClasses.text}`}>
                    {objective.icon}
                  </div>
                  <h3 className="font-semibold text-slate-800">{objective.title}</h3>
                </div>
                <div className="p-4">
                  <p className="text-slate-600">{objective.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="mb-8">
        <div className="flex items-center mb-6">
          <Mail size={28} className="text-orange-500 mr-3" />
          <h2 className="text-2xl font-bold text-slate-800">Contact Us</h2>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-4">
              <Mail size={20} className="text-amber-700" />
            </div>
            <a href="mailto:ResearchAwards@dghr.gov.ae" className="text-blue-600 hover:text-blue-800 flex items-center">
              ResearchAwards@dghr.gov.ae
              <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
      
      {/* CTA button */}
      <div className="text-center mt-6 mb-8">
        <a
          href="#"
          className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg shadow-sm hover:bg-orange-600 transition-colors font-medium"
        >
          Apply for the Research Award
          <ChevronRight className="ml-2" size={20} />
        </a>
      </div>
    </div>
  );
};

export default AboutAwardComponent;