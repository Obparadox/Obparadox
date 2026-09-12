import React, { useState } from 'react';
import { Mail, Check, ExternalLink, MapPin, Database, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { AshokaChakra } from './AshokaChakra';
import { ResumeModal } from './ResumeModal';

export const Header: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header id="header-section" className="relative overflow-hidden rounded-2xl bg-[#0b162c]/90 border border-slate-700/60 p-6 md:p-8 backdrop-blur-md shadow-2xl scroll-mt-20">
      {/* Tricolor top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 flex">
        <div className="flex-1 bg-[#FF671F]" />
        <div className="flex-1 bg-white relative flex items-center justify-center">
          <div className="absolute -top-1 w-3 h-3 rounded-full bg-[#000080]/80 flex items-center justify-center">
            <AshokaChakra size={10} color="#ffffff" />
          </div>
        </div>
        <div className="flex-1 bg-[#046A38]" />
      </div>

      {/* Background ambient tricolor glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-[#FF671F]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -mb-20 w-72 h-72 bg-[#046A38]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Ashoka Chakra watermark in background */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none hidden lg:block">
        <AshokaChakra size={260} color="#38bdf8" animate />
      </div>

      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex-1 space-y-4">
          {/* Status badge with India Green & Saffron */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#046A38]/20 text-emerald-300 border border-[#046A38]/40 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse" />
            <span>Open to Work • Full-Time Analytics Roles</span>
            <span className="text-slate-400">|</span>
            <span className="inline-flex items-center gap-1 text-[#FF9933]">
              🇮🇳 India
            </span>
          </div>

          <div className="space-y-1.5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Hi 👋, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF671F] via-amber-200 to-[#16A34A]">
                {portfolioData.name}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 font-medium flex items-center gap-2.5">
              <span className="p-1 rounded bg-[#000080]/30 border border-blue-600/40">
                <AshokaChakra size={18} color="#60a5fa" />
              </span>
              <span className="text-slate-300">
                A passionate Data Analyst from <strong className="text-white font-semibold">{portfolioData.location}</strong>
              </span>
            </p>
          </div>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Specializing in transforming complex datasets into actionable business intelligence through
            SQL, Python, Power BI, and statistical visualization.
          </p>

          {/* Quick Metrics & Shields */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <img
              src="https://komarev.com/ghpvc/?username=Obparadox&label=Profile%20views&color=ff671f&style=flat"
              alt="Profile views"
              className="h-6 rounded shadow-sm"
              referrerPolicy="no-referrer"
            />
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#071120]/80 border border-[#FF671F]/30 text-xs text-amber-200 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#FF671F]" />
              <span>{portfolioData.location}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#071120]/80 border border-[#046A38]/40 text-xs text-emerald-200 font-medium">
              <Database className="w-3.5 h-3.5 text-[#16A34A]" />
              <span>GitHub: @{portfolioData.username}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons in Saffron and Navy */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 min-w-[210px]">
          <button
            id="copy-email-button"
            onClick={handleCopyEmail}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF671F] to-[#ea580c] hover:from-[#f97316] hover:to-[#c2410c] text-white font-semibold text-sm transition-all shadow-lg shadow-orange-500/25 active:scale-98"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-white stroke-[3]" />
                <span>Email Copied!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </>
            )}
          </button>

          <button
            id="view-resume-button"
            onClick={() => setResumeOpen(true)}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#07192f] hover:bg-[#0c2443] text-[#38BDF8] border border-blue-800/60 hover:border-blue-600 font-semibold text-sm transition-all shadow-md active:scale-98"
          >
            <FileText className="w-4 h-4" />
            <span>View CV & Dossier</span>
          </button>

          <a
            id="view-github-link"
            href={`https://github.com/${portfolioData.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#09152b] hover:bg-[#0f2142] text-slate-100 border border-blue-900/60 hover:border-blue-700 font-medium text-sm transition-colors shadow-md"
          >
            <AshokaChakra size={16} color="#60a5fa" />
            <span>Visit GitHub Profile</span>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </a>
        </div>
      </div>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </header>
  );
};
