import React from 'react';
import { Target, BookOpen, Users, HelpCircle, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { AshokaChakra } from './AshokaChakra';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="space-y-6 scroll-mt-20">
      <div className="flex items-center gap-2.5 border-b border-slate-800/80 pb-3">
        <span className="text-xl">💁‍♂️</span>
        <h2 className="text-2xl font-bold text-white tracking-tight">About Me</h2>
        <div className="h-4 w-[1px] bg-slate-700 mx-1" />
        <span className="text-xs text-[#FF9933] font-medium tracking-wide flex items-center gap-1">
          <span>🇮🇳 Journey & Aspirations</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Looking For - Saffron Theme */}
        <div id="card-roles" className="p-5 rounded-xl bg-[#09152b]/80 border border-[#FF671F]/30 hover:border-[#FF671F]/60 transition-colors shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF671F]" />
          <div className="flex items-center gap-2.5 text-[#FF9933] font-semibold mb-3">
            <Target className="w-5 h-5 text-[#FF671F]" />
            <span className="text-white text-base">Looking For Roles</span>
          </div>
          <p className="text-sm text-slate-300 mb-3">Actively seeking full-time opportunities in:</p>
          <div className="flex flex-wrap gap-2">
            {portfolioData.seekingRoles.map((role, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#FF671F]/15 text-orange-200 border border-[#FF671F]/30"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Currently Learning - India Green Theme */}
        <div id="card-learning" className="p-5 rounded-xl bg-[#09152b]/80 border border-[#046A38]/40 hover:border-[#16A34A]/70 transition-colors shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#046A38]" />
          <div className="flex items-center gap-2.5 text-emerald-400 font-semibold mb-3">
            <BookOpen className="w-5 h-5 text-[#16A34A]" />
            <span className="text-white text-base">Currently Learning & Refining</span>
          </div>
          <p className="text-sm text-slate-300 mb-3">Deepening domain expertise in:</p>
          <div className="flex flex-wrap gap-2">
            {portfolioData.currentLearning.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#046A38]/20 text-emerald-200 border border-[#046A38]/50 flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Open to Collaborate - Ashoka Blue Theme */}
        <div id="card-collaborate" className="p-5 rounded-xl bg-[#09152b]/80 border border-blue-900/60 hover:border-blue-600/70 transition-colors shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#1D4ED8]" />
          <div className="flex items-center gap-2.5 text-blue-400 font-semibold mb-3">
            <Users className="w-5 h-5 text-blue-400" />
            <span className="text-white text-base">Collaboration & Projects</span>
          </div>
          <p className="text-sm text-slate-300 mb-3">Excited to collaborate on:</p>
          <ul className="space-y-2">
            {portfolioData.collaborationTopics.map((topic, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ask Me About - White / Saffron Accent */}
        <div id="card-expertise" className="p-5 rounded-xl bg-[#09152b]/80 border border-slate-700/60 hover:border-slate-500 transition-colors shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF671F] to-[#16A34A]" />
          <div className="flex items-center gap-2.5 text-amber-300 font-semibold mb-3">
            <HelpCircle className="w-5 h-5 text-amber-400" />
            <span className="text-white text-base">Ask Me About</span>
          </div>
          <p className="text-sm text-slate-300 mb-3">Happy to discuss and advise on:</p>
          <div className="flex flex-wrap gap-2">
            {portfolioData.expertiseAreas.map((skill, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/90 text-slate-200 border border-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Core Strengths Banner with Tricolor Styling */}
      <div id="card-strengths" className="p-5 rounded-xl bg-gradient-to-r from-[#0d1f3b] via-[#09172f] to-[#0a2318] border border-slate-700/70 flex flex-col md:flex-row items-start md:items-center gap-4 shadow-md">
        <div className="p-3 rounded-lg bg-[#000080]/40 border border-blue-600/40 text-blue-300 shrink-0">
          <AshokaChakra size={24} color="#60a5fa" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Work Philosophy & Strengths
            </h3>
            <span className="w-2 h-2 rounded-full bg-[#FF671F]" />
            <span className="w-2 h-2 rounded-full bg-white" />
            <span className="w-2 h-2 rounded-full bg-[#046A38]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-1">
            {portfolioData.keyStrengths.map((str, idx) => (
              <div key={idx} className="text-xs text-slate-200 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF9933] shrink-0" />
                <span>{str}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
