import React, { useState } from 'react';
import { Trophy, ExternalLink, Award, Star, GitCommit, GitPullRequest, Code2, Sparkles, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { AshokaChakra } from './AshokaChakra';

interface TrophyItem {
  id: string;
  name: string;
  category: string;
  grade: string;
  tier: 'saffron' | 'white' | 'green' | 'navy';
  description: string;
  metric: string;
  icon: React.ReactNode;
}

export const TrophiesSection: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string>('all');

  const trophies: TrophyItem[] = [
    {
      id: 'multilang',
      name: 'Multi-Language Master',
      category: 'Languages & Stack',
      grade: 'AAA • Saffron Rank',
      tier: 'saffron',
      description: 'Mastered multi-paradigm data tools across Python, C++, MySQL, and DAX.',
      metric: '4+ Core Languages',
      icon: <Code2 className="w-5 h-5 text-[#FF671F]" />,
    },
    {
      id: 'analytics',
      name: 'Data Analytics Pioneer',
      category: 'Specialization',
      grade: 'AAA • Chakra Navy',
      tier: 'navy',
      description: 'Enterprise DNA Certified Analyst transforming raw tables into executive insights.',
      metric: 'Power BI Certified',
      icon: <Award className="w-5 h-5 text-blue-400" />,
    },
    {
      id: 'starstruck',
      name: 'Starstruck Repositories',
      category: 'Community',
      grade: 'AA • Tiranga Gold',
      tier: 'saffron',
      description: 'Featured data analytics notebooks, exploratory analysis, and scripts.',
      metric: 'Public Portfolios',
      icon: <Star className="w-5 h-5 text-amber-400" />,
    },
    {
      id: 'pullshark',
      name: 'Pull Shark Contributor',
      category: 'Collaboration',
      grade: 'A • India Green',
      tier: 'green',
      description: 'Active branch workflows, clean commits, and collaborative project repositories.',
      metric: 'Merged PRs',
      icon: <GitPullRequest className="w-5 h-5 text-[#16A34A]" />,
    },
    {
      id: 'streak',
      name: 'Commit Cadence Streak',
      category: 'Consistency',
      grade: 'AAA • Saffron Rank',
      tier: 'saffron',
      description: 'Continuous development of analysis models, data cleaning scripts, and dashboards.',
      metric: 'Consistent Cadence',
      icon: <GitCommit className="w-5 h-5 text-[#FF671F]" />,
    },
    {
      id: 'solver',
      name: 'Insights & Problem Solving',
      category: 'Data Science',
      grade: 'A • India Green',
      tier: 'green',
      description: 'Exploratory data analysis on Kaggle datasets and statistical modeling.',
      metric: 'Kaggle & HackerRank',
      icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
    },
  ];

  const filteredTrophies = selectedTier === 'all'
    ? trophies
    : trophies.filter((t) => t.tier === selectedTier);

  return (
    <section id="trophies-section" className="space-y-6 scroll-mt-20">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">🏆</span>
          <h2 className="text-2xl font-bold text-white tracking-tight">GitHub Achievements & Trophies</h2>
          <div className="h-4 w-[1px] bg-slate-700 mx-1" />
          <span className="text-xs text-[#FF9933] font-medium hidden sm:inline">🇮🇳 Tiranga Edition</span>
        </div>
        <a
          href={`https://github.com/${portfolioData.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#FF9933] transition-colors"
        >
          <AshokaChakra size={14} color="#60a5fa" />
          <span>@{portfolioData.username}</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Target card matching CSS selector */}
      <div className="p-6 rounded-2xl bg-[#09152b]/90 border border-blue-900/60 flex flex-col gap-6 relative overflow-hidden shadow-xl backdrop-blur-md">
        {/* Tricolor top header strip */}
        <div className="absolute top-0 left-0 right-0 h-1.5 flex">
          <div className="flex-1 bg-[#FF671F]" />
          <div className="flex-1 bg-white relative flex items-center justify-center">
            <div className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-[#000080]" />
          </div>
          <div className="flex-1 bg-[#046A38]" />
        </div>

        {/* Header bar of trophy container */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
          <div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-[#FF9933]" />
              <h3 className="text-base font-bold text-white">
                GitHub Activity & Milestones Showcase
              </h3>
            </div>
            <p className="text-xs text-slate-300 mt-1">
              Verified technical achievements styled in Indian National Flag tricolor ranks
            </p>
          </div>

          {/* Tier Filters */}
          <div className="flex items-center gap-1.5 bg-[#060D1A] p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setSelectedTier('all')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                selectedTier === 'all'
                  ? 'bg-gradient-to-r from-[#FF671F] to-[#ea580c] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({trophies.length})
            </button>
            <button
              onClick={() => setSelectedTier('saffron')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                selectedTier === 'saffron'
                  ? 'bg-[#FF671F]/20 text-[#FF9933] border border-[#FF671F]/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Saffron Tier
            </button>
            <button
              onClick={() => setSelectedTier('green')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                selectedTier === 'green'
                  ? 'bg-[#046A38]/30 text-emerald-300 border border-[#046A38]/50'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Green Tier
            </button>
            <button
              onClick={() => setSelectedTier('navy')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                selectedTier === 'navy'
                  ? 'bg-blue-900/40 text-blue-300 border border-blue-700/50'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Chakra Navy
            </button>
          </div>
        </div>

        {/* Trophies Grid in Indian National Flag theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTrophies.map((trophy) => {
            const isSaffron = trophy.tier === 'saffron';
            const isGreen = trophy.tier === 'green';

            return (
              <div
                key={trophy.id}
                id={`trophy-card-${trophy.id}`}
                className={`p-4 rounded-xl bg-[#060D1A]/90 border transition-all flex flex-col justify-between gap-3 shadow-md hover:-translate-y-0.5 ${
                  isSaffron
                    ? 'border-[#FF671F]/40 hover:border-[#FF671F] hover:shadow-orange-500/10'
                    : isGreen
                    ? 'border-[#046A38]/50 hover:border-[#16A34A] hover:shadow-emerald-500/10'
                    : 'border-blue-900/60 hover:border-blue-500 hover:shadow-blue-500/10'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`p-2.5 rounded-xl border ${
                      isSaffron
                        ? 'bg-[#FF671F]/10 border-[#FF671F]/30 text-[#FF9933]'
                        : isGreen
                        ? 'bg-[#046A38]/20 border-[#046A38]/40 text-emerald-400'
                        : 'bg-[#000080]/30 border-blue-700/40 text-blue-300'
                    }`}
                  >
                    {trophy.icon}
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase border ${
                      isSaffron
                        ? 'bg-[#FF671F]/15 text-orange-200 border-[#FF671F]/30'
                        : isGreen
                        ? 'bg-[#046A38]/20 text-emerald-200 border-[#046A38]/40'
                        : 'bg-blue-950/60 text-blue-200 border-blue-800/50'
                    }`}
                  >
                    {trophy.grade}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-white font-semibold text-sm tracking-tight">
                    {trophy.name}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {trophy.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">{trophy.category}</span>
                  <span
                    className={`font-semibold flex items-center gap-1 ${
                      isSaffron
                        ? 'text-[#FF9933]'
                        : isGreen
                        ? 'text-emerald-300'
                        : 'text-blue-300'
                    }`}
                  >
                    <Check className="w-3 h-3 stroke-[3]" />
                    {trophy.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom indicator with Ashoka Chakra */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <AshokaChakra size={16} color="#60a5fa" animate />
            <span>Tiranga Verified Milestones • All 6 Trophies Active</span>
          </div>
          <a
            href={`https://github.com/${portfolioData.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#FF9933] hover:text-orange-300 font-medium transition-colors"
          >
            <span>View on GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
