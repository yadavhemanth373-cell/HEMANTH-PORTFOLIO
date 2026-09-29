import React from 'react';
import { Compass, Bot, Eye, ShieldCheck, Cpu } from 'lucide-react';
import { CURRENTLY_EXPLORING } from '../data/portfolioData';

export const CurrentlyExploring: React.FC = () => {
  const getIcon = (title: string) => {
    switch (title) {
      case 'Agentic AI':
        return <Bot className="w-5 h-5 text-cyan-400" />;
      case 'Computer Vision':
        return <Eye className="w-5 h-5 text-emerald-400" />;
      case 'Cybersecurity':
        return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
      case 'Machine Learning':
      default:
        return <Cpu className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <section className="py-20 border-t border-slate-800/80 bg-[#07090e] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>07. Technical Horizon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Currently Exploring
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Active technical investigations and experimental directions rooted strictly in core coursework and certified domains.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CURRENTLY_EXPLORING.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/90 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between space-y-4 group shadow-lg"
            >
              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 w-fit group-hover:border-cyan-500/40 transition-colors">
                  {getIcon(item.title)}
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white font-display group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400">
                    {item.focus}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                <span>Active Research</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
