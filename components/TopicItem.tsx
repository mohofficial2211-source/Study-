import React from 'react';
import { CheckCircle } from 'lucide-react';
import { CHECKBOX_TYPES } from '../constants';
import { CheckboxType } from '../types';

interface TopicItemProps {
  topic: string;
  idx: number;
  subject: string;
  category: string;
  checkedTypes: string[];
  themeColor: string;
  onToggle: (type: string) => void;
}

const TopicItem: React.FC<TopicItemProps> = ({ 
  topic, 
  idx, 
  checkedTypes, 
  themeColor, 
  onToggle 
}) => {
  const isDone = checkedTypes.length === 5;
  
  // Mapping full labels to short labels for mobile
  const getShortLabel = (type: CheckboxType) => {
    switch(type) {
      case "Heard": return "Hear";
      case "Studied": return "Study";
      case "Solved": return "Solve";
      default: return type;
    }
  };

  return (
    <div className={`p-4 transition-colors border-b border-slate-50 last:border-0 ${isDone ? 'bg-green-50/50' : 'bg-white'}`}>
      <div className="flex justify-between items-start mb-3">
        <span className={`font-medium text-sm leading-snug pr-2 ${isDone ? 'text-green-700 line-through decoration-green-300' : 'text-slate-700'}`}>
          {idx + 1}. {topic}
        </span>
        {isDone && <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5 animate-in zoom-in duration-300" />}
      </div>
      
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
        {CHECKBOX_TYPES.map((type) => {
          const isChecked = checkedTypes.includes(type);
          return (
            <button
              key={type}
              onClick={() => onToggle(type)}
              className={`
                group flex flex-col items-center justify-center p-1.5 rounded-lg transition-all duration-200
                active:scale-95 touch-manipulation
                ${isChecked 
                  ? `${themeColor} text-white shadow-sm ring-1 ring-black/5` 
                  : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}
              `}
              aria-label={`Mark ${type} as ${isChecked ? 'incomplete' : 'complete'}`}
            >
              <div className={`
                w-3 h-3 rounded-full mb-1 border-[1.5px] transition-colors
                ${isChecked ? 'border-white bg-white' : 'border-slate-300 group-hover:border-slate-400'}
              `} />
              <span className="text-[9px] font-bold uppercase tracking-tight">
                {getShortLabel(type)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TopicItem;