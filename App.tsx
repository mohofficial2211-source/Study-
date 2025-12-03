import React, { useState, useEffect, useCallback } from 'react';
import { Award, Save, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';
import { SUBJECT_DATA } from './constants';
import { ProgressState, SubjectMap } from './types';
import TopicItem from './components/TopicItem';
import CircularProgress from './components/CircularProgress';

const STORAGE_KEY = 'medTrackerProgress_v2';

const App: React.FC = () => {
  const [activeSubject, setActiveSubject] = useState<string>("Surgery");
  const [progress, setProgress] = useState<ProgressState>({});
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  // Initialize from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load progress", e);
      }
    }
    // Initialize all categories as expanded
    const initialExpanded: Record<string, boolean> = {};
    Object.values(SUBJECT_DATA).forEach(subject => {
        Object.keys(subject.categories).forEach(cat => {
            initialExpanded[cat] = true;
        });
    });
    setExpandedCategories(prev => ({...initialExpanded, ...prev}));
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    if (Object.keys(progress).length > 0) {
       localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }, [progress]);

  const toggleCheck = (subject: string, category: string, topic: string, type: string) => {
    const key = `${subject}-${category}-${topic}`;
    const currentChecks = progress[key] || [];
    let newChecks;
    
    if (currentChecks.includes(type)) {
      newChecks = currentChecks.filter(t => t !== type);
    } else {
      newChecks = [...currentChecks, type];
    }
    
    // Optimistic UI update
    setProgress(prev => ({
      ...prev,
      [key]: newChecks
    }));
  };

  const toggleExpand = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const getSubjectProgress = useCallback((subject: string) => {
    let totalItems = 0;
    let completedItems = 0;
    const data = SUBJECT_DATA[subject];
    
    Object.keys(data.categories).forEach(cat => {
      data.categories[cat].forEach(topic => {
        totalItems += 5; // 5 checkboxes per topic
        const key = `${subject}-${cat}-${topic}`;
        completedItems += (progress[key] || []).length;
      });
    });
    
    if (totalItems === 0) return 0;
    return (completedItems / totalItems) * 100;
  }, [progress]);

  const resetProgress = () => {
    if (window.confirm("Are you sure you want to clear all progress? This cannot be undone.")) {
      setProgress({});
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const currentTheme = SUBJECT_DATA[activeSubject].color;
  const currentLightTheme = SUBJECT_DATA[activeSubject].lightColor;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
      {/* Sticky Header */}
      <div className={`${currentTheme} text-white shadow-lg transition-colors duration-500 sticky top-0 z-30`}>
        <div className="max-w-xl mx-auto px-4 py-3 flex justify-between items-center">
          <div>
            <h1 className="text-lg font-bold flex items-center gap-2">
              <Award className="w-5 h-5 opacity-90" /> 
              <span>Semester 10</span>
            </h1>
            <p className="text-white/80 text-xs mt-0.5 font-medium">Academic Tracker</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-xs text-white/90 font-medium">{activeSubject}</p>
              <p className="text-[10px] text-white/70">Overall Progress</p>
            </div>
            <CircularProgress percentage={getSubjectProgress(activeSubject)} />
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto">
        
        {/* Subject Navigation Tabs */}
        <div className="bg-white shadow-sm border-b border-slate-200 sticky top-[60px] z-20">
          <div className="flex overflow-x-auto p-2 gap-2 scrollbar-hide snap-x">
            {Object.keys(SUBJECT_DATA).map(subject => {
              const isActive = activeSubject === subject;
              const subjectInfo = SUBJECT_DATA[subject];
              return (
                <button
                  key={subject}
                  onClick={() => setActiveSubject(subject)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-300 snap-center
                    ${isActive 
                      ? `${subjectInfo.color} text-white shadow-md transform scale-100` 
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200 scale-95 opacity-80 hover:opacity-100"}
                  `}
                >
                  <span className={isActive ? 'text-white' : `text-slate-400`}>
                    {subjectInfo.icon}
                  </span>
                  {subject}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-4 space-y-6 animate-in fade-in duration-500">
          {Object.entries(SUBJECT_DATA[activeSubject].categories).map(([category, topics]) => (
            <div key={category} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden ring-1 ring-black/5">
              {/* Category Header */}
              <button 
                onClick={() => toggleExpand(category)}
                className={`w-full flex justify-between items-center p-4 transition-colors border-b border-slate-50 ${expandedCategories[category] ? 'bg-slate-50/80' : 'bg-white hover:bg-slate-50'}`}
              >
                <h3 className="font-bold text-slate-700 uppercase tracking-wider text-sm flex items-center gap-2.5">
                  <span className={`w-2 h-8 rounded-full ${currentTheme}`}></span>
                  {category} 
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${currentLightTheme} text-slate-600`}>
                    {topics.length}
                  </span>
                </h3>
                {expandedCategories[category] 
                    ? <ChevronUp className="w-5 h-5 text-slate-400" /> 
                    : <ChevronDown className="w-5 h-5 text-slate-400" />
                }
              </button>

              {/* Topics List */}
              <div 
                className={`
                    divide-y divide-slate-50 transition-all duration-300 ease-in-out origin-top
                    ${expandedCategories[category] ? 'opacity-100 max-h-[5000px]' : 'opacity-0 max-h-0 overflow-hidden'}
                `}
              >
                {topics.map((topic, idx) => {
                  const key = `${activeSubject}-${category}-${topic}`;
                  return (
                    <TopicItem
                      key={key}
                      topic={topic}
                      idx={idx}
                      subject={activeSubject}
                      category={category}
                      checkedTypes={progress[key] || []}
                      themeColor={currentTheme}
                      onToggle={(type) => toggleCheck(activeSubject, category, topic, type)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer actions */}
        <div className="p-6 text-center space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/50 text-slate-500 text-xs font-medium">
            <Save className="w-3.5 h-3.5" /> 
            Auto-saving enabled
          </div>
          
          <div className="pt-2">
             <button 
                onClick={resetProgress} 
                className="text-red-400 text-xs flex items-center justify-center gap-1.5 mx-auto hover:text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition-all"
             >
              <RotateCcw className="w-3.5 h-3.5" /> 
              Reset All Progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;