import React, { useState, useEffect } from 'react';
import { ShieldAlert, Eye, Activity, Terminal, AlertTriangle, CheckCircle, Search } from 'lucide-react';

export const PhantomGuardVisual: React.FC = () => {
  const [analyzed, setAnalyzed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnalyzed((prev) => !prev);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-44 rounded-lg bg-[#07090e] border border-slate-800 p-3.5 font-mono text-xs flex flex-col justify-between overflow-hidden relative select-none">
      <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-slate-800/80">
        <span className="flex items-center gap-1.5 text-cyan-400">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>PHANTOM_GUARD :: INBOUND ANALYZER</span>
        </span>
        <span className="text-[10px] text-slate-500">ML Heuristic Active</span>
      </div>

      <div className="py-2 space-y-1.5 text-[11px]">
        <div className="text-slate-400 truncate">
          <span className="text-slate-600">INPUT: </span>
          &quot;Urgent: Verify your account credential at bit.ly/secure-auth-9x...&quot;
        </div>
        
        <div className="grid grid-cols-2 gap-2 pt-1 text-[10px]">
          <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800">
            <span className="text-slate-500">LEXICAL PATTERN: </span>
            <span className="text-amber-400">High Urgency Trap</span>
          </div>
          <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800">
            <span className="text-slate-500">URL DESTINATION: </span>
            <span className="text-rose-400">Obfuscated Redirect</span>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <AlertTriangle className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
          <span className="text-rose-300 font-semibold text-[11px]">
            {analyzed ? 'RISK DETECTED: Phishing Simulation Blocked' : 'SCANNING: Analyzing Communication...'}
          </span>
        </div>
        <span className="text-[10px] text-slate-500">Zero-Engagement Warning</span>
      </div>
    </div>
  );
};

export const FaceMaskVisual: React.FC = () => {
  const [activeBox, setActiveBox] = useState<'masked' | 'unmasked'>('masked');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBox((prev) => (prev === 'masked' ? 'unmasked' : 'masked'));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-44 rounded-lg bg-[#07090e] border border-slate-800 p-3.5 font-mono text-xs flex flex-col justify-between overflow-hidden relative select-none">
      {/* Top telemetry bar */}
      <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-slate-800/80">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <Eye className="w-3.5 h-3.5" />
          <span>OPENCV STREAM :: CNN INFERENCE</span>
        </span>
        <span className="text-[10px] text-slate-400">
          Sub-second real-time
        </span>
      </div>

      {/* Simulated camera viewport with dynamic bounding box */}
      <div className="relative flex-1 my-1.5 rounded bg-slate-950/80 border border-slate-900 flex items-center justify-center overflow-hidden">
        {/* Subtle grid mesh */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        {/* Dynamic Bounding Box */}
        <div
          className={`relative z-10 w-28 h-20 rounded border-2 transition-all duration-300 flex flex-col justify-between p-1.5 ${
            activeBox === 'masked'
              ? 'border-emerald-500 bg-emerald-500/10 shadow-lg shadow-emerald-500/20'
              : 'border-rose-500 bg-rose-500/10 shadow-lg shadow-rose-500/20'
          }`}
        >
          <div className="flex items-center justify-between text-[9px] font-bold">
            <span
              className={
                activeBox === 'masked' ? 'text-emerald-300' : 'text-rose-300'
              }
            >
              {activeBox === 'masked' ? 'MASK_ON' : 'NO_MASK'}
            </span>
            <span className="text-white/80 tabular-nums">CONF: 0.98</span>
          </div>

          <div className="text-[8px] text-slate-400 self-end">
            [x:142 y:98 w:112 h:80]
          </div>
        </div>
      </div>

      <div className="pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
        <span>Model: Keras CNN</span>
        <span className="text-cyan-400 font-mono">TensorFlow Augmentation</span>
      </div>
    </div>
  );
};

export const IDSVisual: React.FC = () => {
  return (
    <div className="w-full h-44 rounded-lg bg-[#07090e] border border-slate-800 p-3.5 font-mono text-xs flex flex-col justify-between overflow-hidden relative select-none">
      <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-slate-800/80">
        <span className="flex items-center gap-1.5 text-indigo-400">
          <Activity className="w-3.5 h-3.5" />
          <span>NETWORK IDS :: ML CLASSIFIER</span>
        </span>
        <span className="text-[10px] text-slate-500">Feature Encoding</span>
      </div>

      <div className="space-y-1.5 py-1 text-[11px]">
        <div className="flex items-center justify-between p-1.5 rounded bg-slate-900/60 border border-slate-800">
          <span className="text-slate-400">TCP · Port 443 · SYN/ACK</span>
          <span className="text-emerald-400 text-[10px] font-semibold flex items-center gap-1">
            <CheckCircle className="w-3 h-3" /> NORMAL TRAFFIC
          </span>
        </div>

        <div className="flex items-center justify-between p-1.5 rounded bg-slate-900/60 border border-rose-900/40">
          <span className="text-slate-400">TCP · Port 22 · Repeated Failures</span>
          <span className="text-rose-400 text-[10px] font-semibold flex items-center gap-1">
            <AlertTriangle className="w-3 h-3" /> INTRUSION ANOMALY
          </span>
        </div>
      </div>

      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
        <span>Metrics: Accuracy / Precision / Recall</span>
        <span className="text-indigo-400">False-Alarm Reduction</span>
      </div>
    </div>
  );
};

export const WebScannerVisual: React.FC = () => {
  return (
    <div className="w-full h-44 rounded-lg bg-[#07090e] border border-slate-800 p-3.5 font-mono text-xs flex flex-col justify-between overflow-hidden relative select-none">
      <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-slate-800/80">
        <span className="flex items-center gap-1.5 text-cyan-400">
          <Search className="w-3.5 h-3.5" />
          <span>WEB CRAWLER :: VULN AUDIT</span>
        </span>
        <span className="text-[10px] text-slate-500">Structured Report</span>
      </div>

      <div className="space-y-1.5 py-1 text-[11px]">
        <div className="flex items-center justify-between text-[10px] text-slate-300">
          <span className="text-slate-500 truncate">TARGET: http://target.app/login</span>
          <span className="text-cyan-400 shrink-0">STATUS: 200 OK</span>
        </div>

        <div className="p-2 rounded bg-slate-900/80 border border-slate-800 space-y-1 text-[10px]">
          <div className="flex items-center justify-between">
            <span className="text-slate-400">SQL Injection Probe:</span>
            <span className="text-amber-400">&apos; OR &apos;1&apos;=&apos;1</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-400">XSS Reflection Probe:</span>
            <span className="text-rose-400">&lt;script&gt;alert(1)&lt;/script&gt;</span>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
        <span className="flex items-center gap-1">
          <Terminal className="w-3 h-3 text-cyan-400" />
          <span>Automated Form Audit</span>
        </span>
        <span className="text-slate-500">Remediation Ready</span>
      </div>
    </div>
  );
};
