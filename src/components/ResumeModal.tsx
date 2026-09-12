import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Mail, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { AshokaChakra } from './AshokaChakra';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#09152b] border border-blue-900/80 rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden my-8 max-h-[92vh] overflow-y-auto">
        {/* Tricolor Header Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 flex">
          <div className="flex-1 bg-[#FF671F]" />
          <div className="flex-1 bg-white relative flex items-center justify-center">
            <div className="absolute -top-1 w-3 h-3 rounded-full bg-[#000080] flex items-center justify-center">
              <AshokaChakra size={10} color="#ffffff" />
            </div>
          </div>
          <div className="flex-1 bg-[#046A38]" />
        </div>

        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 pt-2">
          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-orange-500/15 text-[#FF9933] border border-[#FF671F]/30">
              Curriculum Vitae / Dossier
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">Data Analyst Profile</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Profile Header */}
        <div className="py-6 border-b border-slate-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {portfolioData.name}
            </h2>
            <p className="text-base font-semibold text-[#FF9933]">
              {portfolioData.title} • Business Intelligence & Statistical Analytics
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#FF671F]" />
                {portfolioData.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                {portfolioData.email}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-col gap-2">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#FF671F] to-[#ea580c] hover:from-[#f97316] hover:to-[#c2410c] text-white shadow-md shadow-orange-500/20 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied Email!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Contact</span>
                </>
              )}
            </button>
            <a
              href="https://www.linkedin.com/in/bikrampurkait/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[#0A66C2] hover:bg-blue-600 text-white transition-colors"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="py-5 border-b border-slate-800/80 space-y-2">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider">Professional Profile</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Analytical problem-solver equipped with rigorous expertise in SQL database architecture, Python data pipelines, Power BI interactive modeling, and statistical inference. Proven ability to translate raw multi-dimensional operational data into executive dashboards, cohort retention models, and quantifiable business optimizations.
          </p>
        </div>

        {/* Core Expertise Grid */}
        <div className="py-5 border-b border-slate-800/80 space-y-3">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider">Technical Competency Matrix</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-[#060D1A] border border-slate-800 space-y-1.5">
              <span className="font-bold text-[#FF9933]">Analytics & Visualization</span>
              <p className="text-slate-300">Power BI (DAX, Power Query M), Tableau, MS Excel (VLOOKUP, Pivot Tables), Matplotlib, Seaborn.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#060D1A] border border-slate-800 space-y-1.5">
              <span className="font-bold text-[#38BDF8]">Languages & Databases</span>
              <p className="text-slate-300">SQL (MySQL, Window Functions, CTEs, Indexing), Python (Pandas, NumPy), C++, Apps Script.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#060D1A] border border-slate-800 space-y-1.5">
              <span className="font-bold text-emerald-400">Statistical Frameworks</span>
              <p className="text-slate-300">Exploratory Data Analysis (EDA), Cohort Analysis, Hypothesis Testing, Risk Modeling, Outlier Handling.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#060D1A] border border-slate-800 space-y-1.5">
              <span className="font-bold text-amber-300">Environments & Tooling</span>
              <p className="text-slate-300">Jupyter Notebooks, Google Colab, Anaconda Conda, Git/GitHub, Spyder IDE.</p>
            </div>
          </div>
        </div>

        {/* Verified Accreditations */}
        <div className="py-5 border-b border-slate-800/80 space-y-3">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider">Verified Certifications</h3>
          <div className="space-y-2">
            {portfolioData.badges.map((b) => (
              <div key={b.id} className="flex items-center justify-between p-3 rounded-xl bg-[#060D1A] border border-slate-800 text-xs">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  <div>
                    <span className="font-bold text-white">{b.title}</span>
                    <span className="text-slate-400 block text-[11px]">{b.issuer}</span>
                  </div>
                </div>
                {b.verifyUrl && (
                  <a
                    href={b.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF9933] hover:text-orange-300 font-semibold inline-flex items-center gap-1"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Roles Sought */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Actively seeking roles in:</span>
            <div className="flex flex-wrap gap-1.5">
              {portfolioData.seekingRoles.map((role, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded-md bg-[#046A38]/20 text-emerald-300 border border-[#046A38]/40 font-medium">
                  {role}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
