import React, { useState } from 'react';
import { 
  Brain, 
  Camera, 
  ShieldAlert, 
  Sparkles, 
  Database, 
  Code, 
  Check, 
  Layers
} from 'lucide-react';
import { SKILL_CATEGORIES, SkillCategory } from '../data/portfolioData';

export const SkillsVisualization: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('aiml');

  const selectedCategory: SkillCategory =
    SKILL_CATEGORIES.find((cat) => cat.id === activeCategory) || SKILL_CATEGORIES[0];

  const getCategoryIcon = (iconName: string, className = 'w-5 h-5') => {
    switch (iconName) {
      case 'Brain':
        return <Brain className={className} />;
      case 'Camera':
        return <Camera className={className} />;
      case 'ShieldAlert':
        return <ShieldAlert className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'Database':
        return <Database className={className} />;
      case 'Code':
      default:
        return <Code className={className} />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-800/80 bg-[#07090e] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            02. Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Interactive Skills Architecture
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Explore technical domains rooted directly in verified coursework, engineering projects, and certifications.
          </p>
        </div>

        {/* Central Hub & Node System Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Center Node Selector Map */}
          <div className="lg:col-span-6 bg-slate-900/40 p-6 sm:p-8 rounded-2xl border border-slate-800 relative overflow-hidden">
            
            {/* Background subtle connection web */}
            <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

            {/* Central Node: HEMANTH */}
            <div className="flex flex-col items-center justify-center my-4 relative z-10">
              <div className="px-5 py-2.5 rounded-xl bg-slate-950 border-2 border-cyan-400/80 text-white font-display font-bold text-sm tracking-wider shadow-lg shadow-cyan-500/10 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span>HEMANTH · TECH STACK</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono mt-1.5">
                Click any domain branch to inspect technologies
              </div>
            </div>

            {/* Connected Node Category Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 relative z-10 mt-6">
              {SKILL_CATEGORIES.map((category) => {
                const isSelected = category.id === activeCategory;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`p-3.5 rounded-xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between border ${
                      isSelected
                        ? 'bg-slate-800/90 border-cyan-400 shadow-md shadow-cyan-500/10 scale-102'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={isSelected ? 'text-cyan-400' : 'text-slate-400'}>
                        {getCategoryIcon(category.iconName, 'w-5 h-5')}
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 tabular-nums">
                        {category.skills.length} techs
                      </span>
                    </div>

                    <div className={`text-xs font-semibold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                      {category.name}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                6 Knowledge Clusters
              </span>
              <span>Zero Fabricated Scores</span>
            </div>
          </div>

          {/* Right: Detailed Technologies Inspector Panel */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl">
              
              {/* Category Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                    {getCategoryIcon(selectedCategory.iconName, 'w-6 h-6')}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">
                      {selectedCategory.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {selectedCategory.summary}
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies List (Anti-slop: clean, unboxed text or minimal tags with checkmarks, no arbitrary percentages) */}
              <div className="mt-6 space-y-2.5">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                  Verified Technologies & Competencies:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedCategory.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 flex items-center gap-2.5 hover:border-slate-700 transition-colors"
                    >
                      <div className="w-4 h-4 rounded-full bg-cyan-400/10 text-cyan-400 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-200">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural Context Footnote */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
                <span>Applied directly in verified projects & training</span>
                <span className="font-mono text-cyan-400 text-[11px]">Python & DSA Core</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
