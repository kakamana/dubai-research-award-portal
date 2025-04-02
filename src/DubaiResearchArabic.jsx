import React, { useState } from 'react';
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
  School
} from 'lucide-react';

const DubaiResearchArabic = () => {
  const [activeCategory, setActiveCategory] = useState('workplace');
  const [activeTopic, setActiveTopic] = useState('digital');

  // Research categories
  const categories = [
    { id: 'workplace', title: 'المهارات الوظيفية والتعلم مدى الحياة', icon: <BookOpen size={24} />, color: 'blue' },
    { id: 'hrm', title: 'إدارة الموارد البشرية: الواقع والتحديات والمستقبل', icon: <Briefcase size={24} />, color: 'indigo' },
    { id: 'dubai-hr', title: 'تطوير أنظمة وسياسات الموارد البشرية في حكومة دبي', icon: <Database size={24} />, color: 'emerald' },
    { id: 'wellbeing', title: 'جودة حياة الموظف في بيئة العمل', icon: <Heart size={24} />, color: 'rose' },
    { id: 'target', title: 'الفئة المستهدفة', icon: <User size={24} />, color: 'amber' }
  ];

  // Topics for each category
  const topicsByCategory = {
    'workplace': [
      { id: 'digital', title: 'المهارات الرقمية والتكنولوجية', icon: <Monitor size={24} /> },
      { id: 'continuous', title: 'التعلم المستمر والتطوير المهني', icon: <BookOpen size={24} /> },
      { id: 'leadership', title: 'المهارات القيادية والإدارية', icon: <Users size={24} /> },
      { id: 'environment', title: 'تأثير بيئة العمل ودورها في تطوير المهارات', icon: <Building size={24} /> },
      { id: 'future', title: 'تنمية المهارات للوظائف المستقبلية', icon: <TrendingUp size={24} /> },
      { id: 'global', title: 'التحولات العالمية ودورها في صياغة المهارات', icon: <Globe size={24} /> }
    ],
    'hrm': [
      { id: 'workforce', title: 'تخطيط القوى العاملة', icon: <Target size={24} /> },
      { id: 'recruitment', title: 'الاستقطاب والاختيار والتعيين', icon: <Users size={24} /> },
      { id: 'compensation', title: 'الأجور والحوافز', icon: <Award size={24} /> },
      { id: 'performance', title: 'منظومة إدارة الأداء', icon: <BarChart2 size={24} /> }
    ],
    'dubai-hr': [
      { id: 'ai-recruitment', title: 'عملية التوظيف الآلية بالذكاء الاصطناعي', icon: <Bot size={24} /> },
      { id: 'performance-monitoring', title: 'مراقبة أداء الموظفين', icon: <BarChart2 size={24} /> }
    ],
    'wellbeing': [
      { id: 'physical', title: 'الصحة البدنية', icon: <Heart size={24} /> },
      { id: 'mental', title: 'الصحة النفسية', icon: <Brain size={24} /> },
      { id: 'digital', title: 'الصحة الرقمية', icon: <Smartphone size={24} /> }
    ],
    'target': [
      { id: 'government', title: 'موظفي حكومة دبي', icon: <Briefcase size={24} /> },
      { id: 'students', title: 'طلاب الجامعات والكليات', icon: <School size={24} /> }
    ]
  };

  // Topic details
  const topicDetails = {
    'digital': {
      description: 'الكفاءات الأساسية في الأدوات الرقمية والبرمجة وتحليل البيانات والتقنيات الناشئة التي تعتبر ضرورية بشكل متزايد في جميع الصناعات.',
      keyPoints: [
        'الإلمام بالذكاء الاصطناعي والأتمتة',
        'تحليل البيانات وتفسيرها',
        'الوعي بالأمن السيبراني',
        'أدوات التعاون الرقمي'
      ],
      trend: 'تستثمر المؤسسات بشكل كبير في القدرات الرقمية، حيث تتبع 89% منها استراتيجيات رقمية.'
    },
    'physical': {
      description: 'البحث والتنفيذ في بيئة العمل المريحة والمبادرات التي تركز على الصحة لرفاهية الموظفين.',
      keyPoints: [
        'تصميم مساحة العمل المريحة',
        'برامج الصحة الوقائية',
        'دمج النشاط البدني',
        'البنية التحتية للصحة المهنية'
      ],
      trend: 'تشهد المؤسسات ذات برامج الصحة الشاملة انخفاضًا بنسبة 28٪ في الإجازات المرضية ومشاركة أعلى.'
    }
  };

  // Get current topics based on active category
  const currentTopics = topicsByCategory[activeCategory] || [];
  
  // Get details of active topic (default to first topic if not found)
  const activeTopicDetails = topicDetails[activeTopic] || topicDetails['digital'];

  // Function to get color classes based on category
  const getColorClasses = (categoryId) => {
    const colorMap = {
      'workplace': { light: 'bg-blue-100', dark: 'bg-blue-700', text: 'text-blue-700', border: 'border-blue-500' },
      'hrm': { light: 'bg-indigo-100', dark: 'bg-indigo-700', text: 'text-indigo-700', border: 'border-indigo-500' },
      'dubai-hr': { light: 'bg-emerald-100', dark: 'bg-emerald-700', text: 'text-emerald-700', border: 'border-emerald-500' },
      'wellbeing': { light: 'bg-rose-100', dark: 'bg-rose-700', text: 'text-rose-700', border: 'border-rose-500' },
      'target': { light: 'bg-amber-100', dark: 'bg-amber-700', text: 'text-amber-700', border: 'border-amber-500' }
    };
    
    return colorMap[categoryId] || colorMap['workplace'];
  };

  const colorClasses = getColorClasses(activeCategory);

  return (
    <div dir="rtl" className="flex flex-col w-full min-h-screen bg-slate-50 p-4 md:p-6 font-sans">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">بوابة البحث العلمي في دبي</h1>
        <p className="text-slate-600 max-w-3xl mx-auto">
          استكشف مجالات البحث ذات الأولوية المؤهلة للحصول على جائزة دبي للبحث العلمي. يمثل كل موضوع مجال تركيز لتعزيز المعرفة والابتكار.
        </p>
      </header>

      {/* Category Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
        {categories.map((category) => {
          const colors = getColorClasses(category.id);
          return (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setActiveTopic(topicsByCategory[category.id][0].id);
              }}
              className={`flex flex-col items-center p-4 rounded-lg transition-all ${
                activeCategory === category.id
                  ? `${colors.dark} text-white shadow-md`
                  : `bg-white ${colors.text} hover:${colors.light} border border-slate-200`
              }`}
            >
              <div className={`p-2 rounded-full mb-2 ${
                activeCategory === category.id ? 'bg-white/20' : colors.light
              }`}>
                {category.icon}
              </div>
              <span className="text-center text-sm font-medium">{category.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-200">
              <h2 className="font-semibold text-lg">مجالات التركيز</h2>
            </div>
            {currentTopics.map((topic) => (
              <div
                key={topic.id}
                onClick={() => setActiveTopic(topic.id)}
                className={`flex items-center p-4 cursor-pointer border-r-4 ${
                  activeTopic === topic.id
                    ? `${colorClasses.light} ${colorClasses.border}`
                    : 'border-transparent hover:bg-slate-50'
                }`}
              >
                <div className={`p-2 rounded-full ml-3 ${
                  activeTopic === topic.id ? colorClasses.light : 'bg-slate-100'
                }`}>
                  {topic.icon}
                </div>
                <span>{topic.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <div className="flex items-center mb-6">
              <div className={`p-3 rounded-full ${colorClasses.light} ml-4`}>
                {currentTopics.find(t => t.id === activeTopic)?.icon}
              </div>
              <h2 className="text-xl font-semibold">
                {currentTopics.find(t => t.id === activeTopic)?.title}
              </h2>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">نظرة عامة</h3>
              <p className="text-slate-700">{activeTopicDetails.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">مكونات البحث الرئيسية</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeTopicDetails.keyPoints.map((point, index) => (
                  <div key={index} className={`flex items-start p-3 rounded-lg ${colorClasses.light}`}>
                    <div className={`${colorClasses.dark} text-white p-1 rounded-full ml-3`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h3 className="text-sm font-semibold text-slate-500 mb-2">رؤية بحثية</h3>
              <p className="text-slate-700">{activeTopicDetails.trend}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-slate-500 mt-8 pt-6 border-t border-slate-200">
        <p>© 2025 جائزة دبي للبحث العلمي | تعزيز المعرفة والابتكار</p>
      </footer>
    </div>
  );
};

export default DubaiResearchArabic;