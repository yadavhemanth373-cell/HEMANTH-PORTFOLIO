import React from 'react';
import { BookOpen, ShieldCheck, Cpu, ArrowUpRight, Binary } from 'lucide-react';
import { RESEARCH_ITEM } from '../data/portfolioData';

export const Research: React.FC = () => {
  return (
    <section id="research" className="py-20 border-t border-slate-800/80 bg-[#080b12] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            04. Academic & Technical Research
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            {RESEARCH_ITEM.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Investigation into image morphing techniques and critical vulnerabilities in biometric identity verification systems.
          </p>
        </div>

        {/* Technical Paper / Academic Style Showcase Card */}
        <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 space-y-8 shadow-xl">
          
          {/* Paper Header Metadata */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-cyan-400">RESEARCH INVESTIGATION</span>
              <h3 className="text-2xl font-bold text-white font-display">
                Biometric Vulnerability: Face-Morphing Attacks & Detection
              </h3>
              <div className="text-xs text-slate-400 font-mono">
                Domain: Computer Vision · Biometric Security · Digital Forensics
              </div>
            </div>

            <div className="flex items-center gap-2 self-start md:self-auto text-xs font-mono text-slate-400 bg-slate-950/80 px-3 py-1.5 rounded border border-slate-800">
              <Binary className="w-3.5 h-3.5 text-cyan-400" />
              <span>Independent Investigation</span>
            </div>
          </div>

          {/* Research Abstract & Description */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Abstract & Investigation Scope
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
              {RESEARCH_ITEM.description} Modern automated border control and passport issuance systems rely on facial recognition verification. Face morphing creates composite images by interpolating facial landmarks of two distinct individuals, yielding a synthetic image capable of spoofing verification against both identities.
            </p>
          </div>

          {/* 3 Core Pillars of the Research */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESEARCH_ITEM.focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2.5 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold">
                  <span className="w-5 h-5 rounded-full bg-cyan-400/10 flex items-center justify-center text-[10px]">
                    0{idx + 1}
                  </span>
                  <span>{area.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {area.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Technical Synthesis Box */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Key Defense Focus: High-frequency artifact analysis & facial landmark geometric disparity mapping.</span>
            </div>
            <span className="text-slate-500 shrink-0">Security Research</span>
          </div>

        </div>

      </div>
    </section>
  );
};
