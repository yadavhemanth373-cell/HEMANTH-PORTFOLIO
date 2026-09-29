import React, { useState } from 'react';
import { Award, ChevronDown, ChevronUp, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS, Certification } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="certifications" className="py-20 border-t border-slate-800/80 bg-[#080b12] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            06. Verified Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Certifications & Accreditations
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Industry and vendor certifications validating specialized proficiencies in Agentic AI, Google Gemini, CRM systems, and workflows.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => {
            const isExpanded = expandedId === cert.id;

            return (
              <div
                key={cert.id}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-lg group"
              >
                <div className="p-6 space-y-4">
                  {/* Category and Issuer Unboxed Metadata */}
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="text-cyan-400 font-semibold">{cert.issuer}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-slate-400">{cert.category}</span>
                  </div>

                  {/* Certification Title */}
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 shrink-0 group-hover:border-cyan-500/40 transition-colors">
                      <Award className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white font-display leading-snug group-hover:text-cyan-400 transition-colors">
                      {cert.title}
                    </h3>
                  </div>

                  {/* Summary / Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Expandable Skills Section */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-slate-800/80 space-y-2 animate-fadeIn">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        Competencies Validated:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skillsCovered.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center gap-1"
                          >
                            <CheckCircle className="w-2.5 h-2.5 text-cyan-400" />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Toggle Button */}
                <div className="p-4 border-t border-slate-800/70 bg-slate-900/40 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">
                    Verified Credential
                  </span>
                  <button
                    onClick={() => toggleExpand(cert.id)}
                    className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? 'Less Details' : 'View Skills'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
