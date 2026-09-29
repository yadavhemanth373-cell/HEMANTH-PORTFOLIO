import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Shield, Workflow, Lock } from 'lucide-react';
import { EXPERIENCE_ITEM } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-slate-800/80 bg-[#07090e] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            05. Professional Training
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Experience & CRM Administration
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Hands-on administration experience in enterprise data modeling, least-privilege access controls, and business process automation.
          </p>
        </div>

        {/* Interactive Timeline Layout */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-12">
          
          {/* Main Experience Node */}
          <div className="relative group">
            {/* Timeline indicator node */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#07090e] shadow-md shadow-cyan-500/50" />

            {/* Experience Card */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {EXPERIENCE_ITEM.role}
                  </h3>
                  <div className="text-sm text-cyan-400 font-medium">
                    {EXPERIENCE_ITEM.organization}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-950/80 px-3 py-1.5 rounded border border-slate-800 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{EXPERIENCE_ITEM.period}</span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {EXPERIENCE_ITEM.summary}
              </p>

              {/* Responsibilities List */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Workflow className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Key Responsibilities & Administrative Tasks</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  {EXPERIENCE_ITEM.responsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3 hover:border-slate-700 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300 leading-normal">
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Keynote Banner */}
              <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-900/40 flex items-start gap-3">
                <Lock className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <p className="text-xs text-indigo-200 leading-relaxed">
                  <strong>Security Rigor:</strong> {EXPERIENCE_ITEM.securityKeynote}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
