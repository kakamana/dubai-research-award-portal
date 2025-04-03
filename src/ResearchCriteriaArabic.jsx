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
  ChevronLeft,
  Bookmark,
  Languages,
  ThumbsUp,
  AlertTriangle,
  GraduationCap
} from 'lucide-react';

const ResearchCriteriaArabic = () => {
  const [activeSection, setActiveSection] = useState('criteria');
  
  const sections = [
    { id: 'criteria', title: 'شروط المشاركة', icon: <FileCheck size={24} /> },
    { id: 'timeline', title: 'الفترة الزمنية', icon: <Calendar size={24} /> }
  ];
  
  const criteriaItems = [
    {
      id: 'participant',
      title: 'المشاركون المؤهلون',
      icon: <User size={24} />,
      description: 'أن يكون المشارك من موظفي حكومة دبي أو طلبة الجامعات والكليات',
      color: 'blue'
    },
    {
      id: 'originality',
      title: 'الأصالة',
      icon: <Bookmark size={24} />,
      description: 'أن يكون البحث متسماً بالأصالة والدقة',
      color: 'indigo'
    },
    {
      id: 'topic',
      title: 'موضوع البحث',
      icon: <BookOpen size={24} />,
      description: 'أن يكون نطاق البحث مرتبطاً بأحد مجالات المسابقة',
      color: 'violet'
    },
    {
      id: 'elements',
      title: 'هيكل البحث',
      icon: <FileText size={24} />,
      description: 'أن يتم ترتيب عناصر البحث كما يلي: المقدمة، مشكلة البحث وأسئلتها، الأهداف، الأهمية، الإطار النظري والدراسات السابقة، المنهجية والإجراءات، النتائج ومناقشتها، الخاتمة والتوصيات وقائمة المراجع.',
      color: 'purple'
    },
    {
      id: 'length',
      title: 'طول البحث',
      icon: <FileCheck size={24} />,
      description: 'أن تتراوح كلمات البحث بين 5000-7000 كلمة',
      color: 'fuchsia'
    },
    {
      id: 'language',
      title: 'خيارات اللغة',
      icon: <Languages size={24} />,
      description: 'يتم تقديم البحث بأحدى اللغتين (العربية أو الإنجليزية) متضمناً ملخص البحث ولا يتجاوز 300 كلمة.',
      color: 'pink'
    },
    {
      id: 'publish',
      title: 'حالة النشر',
      icon: <AlertCircle size={24} />,
      description: 'لم يسبق نشر البحث المقدم وأن لايكون قد سبق الفوز به في أي مسابقة أخرى',
      color: 'rose'
    },
    {
      id: 'post-publish',
      title: 'النشر بعد المسابقة',
      icon: <ThumbsUp size={24} />,
      description: 'لا مانع من نشر البحوث المقدمة في المجلات العلمية بعد الإعلان عن الفائزين',
      color: 'red'
    },
    {
      id: 'researchers',
      title: 'عدد الباحثين',
      icon: <AlertTriangle size={24} />,
      description: 'لايجوز اشتراك أكثر من باحث في البحث',
      color: 'orange'
    },
    {
      id: 'submissions',
      title: 'حد التقديم',
      icon: <CheckCircle size={24} />,
      description: 'يحــق لــكل باحث التقــدم ببحــث واحــد فقــط للمشــاركة فــي المسـابقة.',
      color: 'amber'
    },
    {
      id: 'cv',
      title: 'المستندات المطلوبة',
      icon: <GraduationCap size={24} />,
      description: 'السيرة الذاتية للباحث',
      color: 'yellow'
    }
  ];
  
  const timelineItems = [
    {
      id: 'announcement',
      title: 'الإعلان عن الجائزة',
      date: '17 فبراير 2025',
      icon: <Award size={24} />,
      color: 'emerald'
    },
    {
      id: 'submission-open',
      title: 'بدء استلام البحوث',
      date: 'فبراير - أغسطس 2025 (6 أشهر)',
      icon: <Clock size={24} />,
      color: 'teal'
    },
    {
      id: 'submission-close',
      title: 'آخر موعد لاستلام البحوث',
      date: '8 أغسطس 2025',
      icon: <AlertCircle size={24} />,
      color: 'cyan'
    },
    {
      id: 'winners',
      title: 'الإعلان عن الفائزين',
      date: '29 أكتوبر 2025',
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
    <div dir="rtl" className="flex flex-col w-full min-h-screen bg-slate-50 p-4 md:p-6 font-sans">
      <header className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">شروط المشاركة في الجائزة</h1>
        <p className="text-slate-600 max-w-3xl mx-auto">
          الإرشادات والمتطلبات للمشاركة في جائزة دبي للبحث العلمي
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
              <span className="ml-2">{section.icon}</span>
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
                  <div className={`p-2 rounded-full ml-3 bg-white ${colorClasses.text}`}>
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
                <Clock className="ml-2" size={24} />
                الفترة الزمنية لتقديم البحوث
              </h2>
            </div>
            
            <div className="p-6">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute top-0 right-8 bottom-0 w-0.5 bg-slate-200"></div>
                
                {/* Timeline items */}
                <div className="space-y-8">
                  {timelineItems.map((item, index) => {
                    const colorClasses = getColorClasses(item.color);
                    const isLast = index === timelineItems.length - 1;
                    
                    return (
                      <div key={item.id} className="relative pr-16">
                        {/* Timeline dot */}
                        <div className={`absolute right-0 p-2 rounded-full ${colorClasses.bg} ${colorClasses.text} border-4 border-white z-10`}>
                          {item.icon}
                        </div>
                        
                        {/* Content */}
                        <div className={`bg-white rounded-lg p-4 border ${colorClasses.border}`}>
                          <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                          <p className={`font-medium ${colorClasses.text}`}>{item.date}</p>
                          
                          {/* Connector for non-last items */}
                          {!isLast && (
                            <div className="absolute right-8 top-12 h-8 w-0.5 bg-slate-200"></div>
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
          التقدم للجائزة
          <ChevronLeft className="mr-2" size={20} />
        </a>
      </div>
    </div>
  );
};

export default ResearchCriteriaArabic;