import React from 'react';
import { GraduationCap, MapPin, Target, Sparkles, ShieldCheck, Eye, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-800/80 bg-[#080b12] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            01. Background & Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Undergraduate engineer working at the convergence of deep learning, real-time computer vision, and defensive cybersecurity.
          </p>
        </div>

        {/* 2-Column Architectural Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Prose / Engineering Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 space-y-4 leading-relaxed text-sm sm:text-base">
              <p>
                I am an <strong className="text-white font-semibold">Artificial Intelligence and Machine Learning undergraduate</strong> based in Bengaluru, Karnataka. My technical focus centers on constructing robust, secure machine learning pipelines in Python — bridging the gap between theoretical neural network models and real-time production deployment.
              </p>

              <p>
                In <strong className="text-slate-100 font-semibold">Computer Vision</strong>, I train end-to-end Convolutional Neural Networks (CNNs) using TensorFlow and Keras, employing data augmentation strategies to build models that perform reliably under dynamic real-world conditions, paired with sub-second OpenCV inference for live camera feeds.
              </p>

              <p>
                In <strong className="text-slate-100 font-semibold">Cybersecurity</strong>, I develop defensive mechanisms against modern digital threats — ranging from machine-learning-driven intrusion detection systems that isolate malicious network anomalies with minimal false alarms, to proactive platforms defending users against manipulative phishing and social engineering attacks.
              </p>

              <p>
                Certified by <strong className="text-cyan-400 font-medium">Oracle in Agentic AI foundations</strong> and hands-on trained in <strong className="text-cyan-400 font-medium">Salesforce administration</strong>, I am actively seeking an <strong className="text-white font-medium">AI/ML Internship</strong> where I can contribute to building practical, resilient, and secure machine learning solutions.
              </p>
            </div>

            {/* Quick Core Strengths Grid (Affordance-only, no fake score percentages) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/80">
                <div className="flex items-center gap-2 mb-2 text-cyan-400">
                  <Eye className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase font-mono tracking-wider">Vision</span>
                </div>
                <div className="text-sm font-semibold text-white">Real-Time OpenCV</div>
                <div className="text-xs text-slate-400 mt-1">CNNs, augmentation, bounding boxes</div>
              </div>

              <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/80">
                <div className="flex items-center gap-2 mb-2 text-indigo-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase font-mono tracking-wider">Security</span>
                </div>
                <div className="text-sm font-semibold text-white">Intrusion & Phishing</div>
                <div className="text-xs text-slate-400 mt-1">Network traffic analysis & audit tools</div>
              </div>

              <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/80">
                <div className="flex items-center gap-2 mb-2 text-violet-400">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase font-mono tracking-wider">Agentic</span>
                </div>
                <div className="text-sm font-semibold text-white">Autonomous Logic</div>
                <div className="text-xs text-slate-400 mt-1">Oracle certified, LLM workflows</div>
              </div>
            </div>
          </div>

          {/* Right Column: Academic & Formal Information */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2.5 text-white font-semibold text-base font-display">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                  <span>Education</span>
                </div>
                <span className="text-xs font-mono text-cyan-400">2023 – 2027</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-semibold text-white">
                  {PERSONAL_INFO.education.degree}
                </h3>
                <div className="text-sm text-slate-300 font-medium">
                  {PERSONAL_INFO.education.institution}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{PERSONAL_INFO.education.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>Expected Graduation: {PERSONAL_INFO.education.expectedGraduation}</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400 leading-normal border-t border-slate-800/60">
                Rigorous curriculum covering Artificial Intelligence, Machine Learning, Data Structures & Algorithms, Object-Oriented Programming, and Advanced Problem Solving.
              </div>
            </div>

            {/* Target Role Card */}
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-white font-semibold text-base font-display">
                <Target className="w-5 h-5 text-indigo-400" />
                <span>Internship Objective</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Seeking an <strong className="text-white font-medium">AI/ML Internship</strong> role to apply hands-on experience in computer vision, deep learning models, and security-aware machine learning pipelines to high-impact production initiatives.
              </p>
              <div className="text-xs font-mono text-slate-400 pt-1 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Available immediately for remote & on-site (Bengaluru)</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
