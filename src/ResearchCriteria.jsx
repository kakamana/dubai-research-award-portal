import React, { useState } from 'react';
import { 
  FileText,
  Calendar,
  CheckCircle,
  Clock,
  Award,
  User,
  FileCheck,
  AlertCircle,
  BookOpen,
  ChevronRight,
  Bookmark,
  Languages,
  ThumbsUp,
  AlertTriangle,
  GraduationCap
} from 'lucide-react';

const ResearchCriteriaInfographic = () => {
  const [activeSection, setActiveSection] = useState('criteria');
  
  const sections = [
    { id: 'criteria', title: 'Research Criteria', icon: <FileCheck size={24} /> },
    { id: 'timeline', title: 'Time Frame', icon: <Calendar size={24} /> }
  ];
  
  const criteriaItems = [
    {
      id: 'participant',
      title: 'Eligible Participants',
      icon: <User size={24} />,
      description: 'The participant must be a Dubai government employee or a university and college student.',
      color: 'blue'
    },
    {
      id: 'originality',
      title: 'Originality',
      icon: <Bookmark size={24} />,
      description: 'The research must be characterized by originality and accuracy.',
      color: 'indigo'
    },
    {
      id: 'topic',
      title: 'Research Topic',
      icon: <BookOpen size={24} />,
      description: 'The research topic should be related to one of the competition domains.',
      color: 'violet'
    },
    {
      id: 'elements',
      title: 'Research Structure',
      icon: <FileText size={24} />,
      description: 'The research elements should be arranged as follows: Title, Abstract, Introduction, Research Problem & Objectives, Research Importance, Literature Review, Methodology, Results/Findings, Discussion, Conclusion and References.',
      color: 'purple'
    },
    {
      id: 'length',
      title: 'Paper Length',
      icon: <FileCheck size={24} />,
      description: 'Full Research Paper/Manuscript: (between 5000-7000 words).',
      color: 'fuchsia'
    },
    {
      id: 'language',
      title: 'Language Options',
      icon: <Languages size={24} />,
      description: 'Research projects can be conducted in Arabic or English, including the Abstract (not exceeding 300 words).',
      color: 'pink'
    },
    {
      id: 'publish',
      title: 'Publication Status',
      icon: <AlertCircle size={24} />,
      description: 'The submitted research cannot be published or participated in a different research award.',
      color: 'rose'
    },
    {
      id: 'post-publish',
      title: 'Post-Competition Publishing',
      icon: <ThumbsUp size={24} />,
      description: 'There is no objection to publishing the submitted research in academic journals after announcing the winners.',
      color: 'red'
    },
    {
      id: 'researchers',
      title: 'Number of Researchers',
      icon: <AlertTriangle size={24} />,
      description: 'It is not permissible for more than one researcher to participate in the research.',
      color: 'orange'
    },
    {
      id: 'submissions',
      title: 'Submission Limit',
      icon: <CheckCircle size={24} />,
      description: 'Each researcher has the right to submit only one research.',
      color: 'amber'
    },
    {
      id: 'cv',
      title: 'Required Documents',
      icon: <GraduationCap size={24} />,
      description: 'Curriculum Vitae (CV) of the researcher must be submitted.',
      color: 'yellow'
    }
  ];
  
  const timelineItems = [
    {
      id: 'announcement',
      title: 'Award Announcement',
      date: 'February 17, 2025',
      icon: <Award size={24} />,
      color: 'emerald'
    },
    {
      id: 'submission-open',
      title: 'Open Award Submission',
      date: 'February - August 2025 (6 months)',
      icon: <Clock size={24} />,
      color: 'teal'
    },
    {
      id: 'submission-close',
      title: 'Close Award Submission',
      date: 'August 8, 2025',
      icon: <AlertCircle size={24} />,
      color: 'cyan'
    },
    {
      id: 'winners',
      title: 'Announcing the Winners',
      date: 'October 29, 2025',
      icon: <Award size={24} />,
      color: 'sky'
    }
  ];
  
  // Function to get color classes based on color name
  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-700', border: 'border-indigo-200' },
      violet: { bg: 'bg-violet-100', text: 'text-violet-700', border: 'border-violet-200' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200' },
      fuchsia: { bg: 'bg-fuchsia-100', text: 'text-fuchsia-700', border: 'border-fuchsia-200' },
      pink: { bg: 'bg-pink-100', text: 'text-pink-700', border: 'border-pink-200' },
      rose: { bg: 'bg-rose-100', text: 'text-rose-700', border: 'border-rose-200' },
      red: { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-200' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200' },
      amber: { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-200' },
      yellow: { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-200' },
      lime: { bg: 'bg-lime-100', text: 'text-lime-700', border: 'border-lime-200' },
      green: { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200' },
      emerald: { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-200' },
      teal: { bg: 'bg-teal-100', text: 'text-teal-700', border: 'border-teal-200' },
      cyan: { bg: 'bg-cyan-100', text: 'text-cyan-700', border: 'border-cyan-200' },
      sky: { bg: 'bg-sky-100', text: 'text-sky-700', border: 'border-sky-200' }
    };
    
    return colorMap[color] || colorMap.blue;
  };
  
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 p-4 md:p-6 font-sans">
      <header className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">Research Criteria</h1>
        <p className="text-slate-600 max-w-3xl mx-auto">
          Guidelines and requirements for participating in the Dubai Scientific Research Award
        </p>
      </header>
      
      {/* Section tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-white rounded-lg p-1 shadow-sm border border-slate-200">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                activeSection === section.id
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span className="mr-2">{section.icon}</span>
              <span className="font-medium">{section.title}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Criteria cards */}
      {activeSection === 'criteria' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {criteriaItems.map((item) => {
            const colorClasses = getColorClasses(item.color);
            return (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className={`p-4 flex items-center ${colorClasses.bg} border-b ${colorClasses.border}`}>
                  <div className={`p-2 rounded-full mr-3 bg-white ${colorClasses.text}`}>
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-slate-800">{item.title}</h3>
                </div>
                <div className="p-4">
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      
      {/* Timeline */}
      {activeSection === 'timeline' && (
        <div className="max-w-4xl mx-auto w-full mb-10">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-4 bg-blue-600 text-white">
              <h2 className="text-xl font-semibold flex items-center">
                <Clock className="mr-2" size={24} />
                Time Frame for Research Submissions
              </h2>
            </div>
            
            <div className="p-6">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute top-0 left-8 bottom-0 w-0.5 bg-slate-200"></div>
                
                {/* Timeline items */}
                <div className="space-y-8">
                  {timelineItems.map((item, index) => {
                    const colorClasses = getColorClasses(item.color);
                    const isLast = index === timelineItems.length - 1;
                    
                    return (
                      <div key={item.id} className="relative pl-16">
                        {/* Timeline dot */}
                        <div className={`absolute left-0 p-2 rounded-full ${colorClasses.bg} ${colorClasses.text} border-4 border-white z-10`}>
                          {item.icon}
                        </div>
                        
                        {/* Content */}
                        <div className={`bg-white rounded-lg p-4 border ${colorClasses.border}`}>
                          <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                          <p className={`font-medium ${colorClasses.text}`}>{item.date}</p>
                          
                          {/* Connector for non-last items */}
                          {!isLast && (
                            <div className="absolute left-8 top-12 h-8 w-0.5 bg-slate-200"></div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* CTA button */}
      <div className="text-center mt-4 mb-8">
        <a
          href="#"
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg shadow-sm hover:bg-blue-700 transition-colors font-medium"
        >
          Apply for the Research Award
          <ChevronRight className="ml-2" size={20} />
        </a>
      </div>
    </div>
  );
};

export default ResearchCriteriaInfographic;