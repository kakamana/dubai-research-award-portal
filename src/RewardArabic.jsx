import React from 'react';
import { 
  Award, 
  Trophy, 
  DollarSign, 
  BookOpen, 
  Mail, 
  Medal,
  FileText
} from 'lucide-react';

const RewardsComponentArabic = () => {
  const rewards = [
    {
      id: 'financial',
      title: '25,000 درهم',
      description: 'مكافأة مالية للفائز بالمركز الأول',
      icon: <Medal size={40} className="text-yellow-500" />,
      iconBg: 'bg-blue-700',
      color: 'blue'
    },
    {
      id: 'trophy',
      title: 'شهادة وكأس',
      description: 'سيتم منح الفائز بالمركز الأول شهادة وكأس',
      icon: <Trophy size={40} className="text-yellow-500" />,
      iconBg: 'bg-blue-700',
      color: 'indigo'
    },
    {
      id: 'publication',
      title: 'نشر البحث',
      description: 'في مجلة علمية أكاديمية',
      icon: <BookOpen size={40} className="text-yellow-500" />,
      iconBg: 'bg-blue-700',
      color: 'blue'
    }
  ];

  return (
    <div dir="rtl" className="flex flex-col w-full min-h-screen bg-slate-50 p-4 md:p-6 font-sans">
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
          الجوائز البحثية لدائرة الموارد البشرية لحكومة دبي
        </h1>
        <div className="w-24 h-1 bg-orange-500 my-4"></div>
      </div>

      {/* Financial Reward Header */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-10 gap-4">
        <h2 className="text-2xl font-bold text-slate-800">المكافأة المالية</h2>
        <div className="bg-blue-700 text-white px-6 py-2 rounded-full text-lg font-medium">
          سيتم منح الجائزة الأولى فقط
        </div>
      </div>
      
      {/* Rewards Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
        {rewards.map((reward) => (
          <div
            key={reward.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <div className="flex items-center p-6 border-b border-slate-200">
              <div className={`${reward.iconBg} p-4 rounded-md ml-4`}>
                {reward.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">{reward.title}</h3>
                <p className="text-slate-600">{reward.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Contact Information */}
      <div className="text-center max-w-3xl mx-auto mb-8 bg-slate-100 rounded-lg p-6">
        <div className="flex flex-wrap items-center justify-center gap-2 text-slate-700">
          <p>لمزيد من المعلومات حول مسابقة جائزة البحث العلمي، يمكنكم مراسلتنا على البريد الإلكتروني:</p>
          <a href="mailto:ResearchAwards@dghr.gov.ae" className="text-blue-600 hover:text-blue-800 font-medium">
            ResearchAwards@dghr.gov.ae
          </a>
        </div>
      </div>
      
      {/* CTA button */}
      <div className="text-center mt-4 mb-8">
        <a
          href="#"
          className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg shadow-sm hover:bg-orange-600 transition-colors font-medium"
        >
          التقدم للجائزة البحثية
        </a>
      </div>
    </div>
  );
};

export default RewardsComponentArabic;