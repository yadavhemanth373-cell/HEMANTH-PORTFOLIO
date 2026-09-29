import React, { useEffect, useState } from 'react';
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, CERTIFICATIONS, RESEARCH_ITEM, EXPERIENCE_ITEM, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
${PERSONAL_INFO.name}
${PERSONAL_INFO.role} · ${PERSONAL_INFO.subheading}
Location: ${PERSONAL_INFO.location}
Phone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.summary}

EDUCATION
${PERSONAL_INFO.education.degree}
${PERSONAL_INFO.education.institution}, ${PERSONAL_INFO.education.location}
Expected Graduation: ${PERSONAL_INFO.education.expectedGraduation}

TECHNICAL SKILLS
${SKILL_CATEGORIES.map(c => `${c.name}: ${c.skills.join(', ')}`).join('\n')}

PROJECTS
${PROJECTS.map(p => `• ${p.name} (${p.type})
  Technologies: ${p.technologies.join(', ')}
  Description: ${p.shortDescription}
`).join('\n')}

RESEARCH
• ${RESEARCH_ITEM.title}
  ${RESEARCH_ITEM.description}

EXPERIENCE
• ${EXPERIENCE_ITEM.role} (${EXPERIENCE_ITEM.period})
  ${EXPERIENCE_ITEM.responsibilities.map(r => `  - ${r}`).join('\n')}

CERTIFICATIONS
${CERTIFICATIONS.map(c => `• ${c.title} — ${c.issuer}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-4xl my-6 bg-[#0f121d] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden text-slate-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar (Hidden in Print) */}
        <div className="flex items-center justify-between p-4 sm:px-6 border-b border-slate-800 bg-slate-900/80 no-print shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
              Resume Preview
            </span>
            <span className="text-xs text-slate-500">· Recruiter A4 Document Format</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
              title="Copy plain-text resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-md transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors ml-2 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable & Scrollable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-200 bg-[#0d101b] print:bg-white print:text-black print:p-0">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 print:border-slate-300">
            <h1 className="text-3xl font-extrabold text-white print:text-black font-display tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <div className="text-sm font-semibold text-cyan-400 print:text-slate-800 mt-1">
              {PERSONAL_INFO.role} · {PERSONAL_INFO.subheading}
            </div>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-mono text-slate-400 print:text-slate-700 mt-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {PERSONAL_INFO.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                {PERSONAL_INFO.phone}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                {PERSONAL_INFO.email}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-mono text-cyan-400 print:text-slate-800 mt-2">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline">
                {PERSONAL_INFO.githubDisplay}
              </a>
              <span>·</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                {PERSONAL_INFO.linkedinDisplay}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 border-b border-slate-800/80 print:border-slate-300 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 border-b border-slate-800/80 print:border-slate-300 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <span className="font-semibold text-slate-200 print:text-black">
                    {cat.name}:
                  </span>{' '}
                  <span className="text-slate-400 print:text-slate-700">
                    {cat.skills.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 border-b border-slate-800/80 print:border-slate-300 pb-1">
              Engineering Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-bold text-white print:text-black">
                      {proj.name}
                    </span>
                    <span className="text-[11px] font-mono text-cyan-400 print:text-slate-600">
                      {proj.type}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 print:text-slate-600">
                    Technologies: {proj.technologies.join(', ')}
                  </div>
                  <p className="text-xs text-slate-300 print:text-slate-800 leading-relaxed">
                    {proj.shortDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 border-b border-slate-800/80 print:border-slate-300 pb-1">
              Experience
            </h2>
            <div className="space-y-1.5">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-bold text-white print:text-black">
                  {EXPERIENCE_ITEM.role}
                </span>
                <span className="text-xs font-mono text-slate-400 print:text-slate-600">
                  {EXPERIENCE_ITEM.period}
                </span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 print:text-slate-800 space-y-1">
                {EXPERIENCE_ITEM.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 border-b border-slate-800/80 print:border-slate-300 pb-1">
              Education
            </h2>
            <div className="flex items-baseline justify-between text-xs">
              <div>
                <div className="font-bold text-white print:text-black">
                  {PERSONAL_INFO.education.degree}
                </div>
                <div className="text-slate-400 print:text-slate-700">
                  {PERSONAL_INFO.education.institution}
                </div>
              </div>
              <div className="font-mono text-slate-400 print:text-slate-600">
                Expected 2027
              </div>
            </div>
          </div>

          {/* Research */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 border-b border-slate-800/80 print:border-slate-300 pb-1">
              Research
            </h2>
            <div className="text-xs space-y-1">
              <div className="font-bold text-white print:text-black">
                {RESEARCH_ITEM.title}
              </div>
              <p className="text-slate-300 print:text-slate-800 leading-relaxed">
                {RESEARCH_ITEM.description}
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 border-b border-slate-800/80 print:border-slate-300 pb-1">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300 print:text-slate-800">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span>
                    <strong>{cert.title}</strong> — {cert.issuer}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
