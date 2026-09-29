import React, { useState } from 'react';
import { ArrowDown, FileText, Send, MapPin, Shield, Brain, Terminal, Eye, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

// User uploaded profile image
import portraitImage from '../assets/images/profile.png';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [imageError, setImageError] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Subtle background ambient glow (anti-slop: disciplined, cool slate & subtle indigo) */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-900/15 blur-[120px] rounded-full pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Information & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status & Location Pill-less Metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
              <span className="inline-flex items-center gap-1.5 text-cyan-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Seeking AI/ML Internship
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="inline-flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Main Name & Identity */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display text-balance">
                {PERSONAL_INFO.name}
              </h1>
              
              <div className="text-lg sm:text-xl font-semibold text-slate-200">
                <span>{PERSONAL_INFO.role}</span>
                <span className="text-cyan-400 font-normal ml-2">
                  (B.Tech AIML · Grad 2027)
                </span>
              </div>

              <div className="text-sm sm:text-base font-medium text-slate-400 flex flex-wrap items-center gap-x-2.5 gap-y-1">
                <span className="text-slate-200">Computer Vision</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-200">Cybersecurity</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-200">Agentic AI</span>
              </div>
            </div>

            {/* Professional Summary Intro */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.summary}
            </p>

            {/* Action Buttons: View Projects, Download Resume, Contact Me */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollTo('#projects')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-md transition-all duration-150 shadow-md shadow-cyan-500/20 cursor-pointer active:scale-98"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 hover:bg-slate-800 hover:border-slate-600 rounded-md transition-all duration-150 cursor-pointer active:scale-98"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Resume / CV</span>
              </button>

              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-900/60 rounded-md border border-transparent hover:border-slate-800 transition-all duration-150 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Verified Credentials Quick List */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400">
              <span className="text-slate-500 font-mono text-[11px]">CREDENTIALS:</span>
              <span className="inline-flex items-center gap-1 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Oracle Agentic AI Certified
              </span>
              <span className="text-slate-700">/</span>
              <span className="inline-flex items-center gap-1 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Google Gemini Certified
              </span>
              <span className="text-slate-700">/</span>
              <span className="inline-flex items-center gap-1 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Salesforce Admin Trainee
              </span>
            </div>

          </div>

          {/* Right Column: Sophisticated Portrait with Subtle Animated Technical Orbit */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 flex items-center justify-center">
              
              {/* Outer Decorative Technical Orbit Rings */}
              <div 
                className="absolute inset-0 rounded-full border border-dashed border-slate-700/60 animate-[spin_40s_linear_infinite] pointer-events-none" 
                aria-hidden="true" 
              />
              <div 
                className="absolute inset-3 rounded-full border border-slate-800/80 pointer-events-none" 
                aria-hidden="true" 
              />
              
              {/* Floating Technical Node Labels: Computer Vision, Cybersecurity, Python, TensorFlow */}
              <div className="absolute -top-2 left-6 z-20 px-3 py-1 bg-slate-900/90 border border-slate-700/80 rounded-md text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-lg backdrop-blur-sm animate-pulse">
                <Eye className="w-3 h-3 text-cyan-400" />
                <span>Computer Vision</span>
              </div>

              <div className="absolute top-1/4 -right-4 z-20 px-3 py-1 bg-slate-900/90 border border-slate-700/80 rounded-md text-[11px] font-mono text-indigo-300 flex items-center gap-1.5 shadow-lg backdrop-blur-sm">
                <Shield className="w-3 h-3 text-indigo-400" />
                <span>Cybersecurity</span>
              </div>

              <div className="absolute -bottom-2 right-8 z-20 px-3 py-1 bg-slate-900/90 border border-slate-700/80 rounded-md text-[11px] font-mono text-emerald-300 flex items-center gap-1.5 shadow-lg backdrop-blur-sm">
                <Terminal className="w-3 h-3 text-emerald-400" />
                <span>Python</span>
              </div>

              <div className="absolute bottom-1/3 -left-5 z-20 px-3 py-1 bg-slate-900/90 border border-slate-700/80 rounded-md text-[11px] font-mono text-violet-300 flex items-center gap-1.5 shadow-lg backdrop-blur-sm">
                <Brain className="w-3 h-3 text-violet-400" />
                <span>TensorFlow</span>
              </div>

              {/* Main Circular Portrait Container */}
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-b from-slate-700/50 via-slate-800/30 to-slate-900 border border-slate-700/70 shadow-2xl overflow-hidden group">
                {!imageError ? (
                  <img
                    src={portraitImage}
                    alt="Pothula Hemanth - AI & ML Engineer"
                    className="w-full h-full object-cover object-[center_18%] rounded-full group-hover:scale-105 transition-all duration-300 ease-out"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  // Zero-Broken-Image Policy Fallback Container
                  <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center text-center p-6 border border-slate-800">
                    <Brain className="w-12 h-12 text-cyan-400 mb-2 opacity-80" />
                    <span className="text-base font-bold text-white font-display">POTHULA HEMANTH</span>
                    <span className="text-xs text-slate-400 font-mono mt-1">AI & ML Engineer</span>
                  </div>
                )}

                {/* Subtle rim highlight */}
                <div 
                  className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 pointer-events-none" 
                  aria-hidden="true" 
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
