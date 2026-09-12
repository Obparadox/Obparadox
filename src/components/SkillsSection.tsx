import React, { useState, useMemo } from 'react';
import { Search, Code2, Wrench, Binary, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SkillItem } from '../types';

type CategoryFilter = 'all' | 'languages' | 'tools' | 'ml_libraries';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = useMemo(() => {
    return portfolioData.skills.filter((skill: SkillItem) => {
      const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const categories: { id: CategoryFilter; label: string; icon: React.ReactNode; count: number }[] = [
    {
      id: 'all',
      label: 'All Skills',
      icon: <Layers className="w-4 h-4" />,
      count: portfolioData.skills.length,
    },
    {
      id: 'languages',
      label: 'Languages',
      icon: <Code2 className="w-4 h-4" />,
      count: portfolioData.skills.filter((s) => s.category === 'languages').length,
    },
    {
      id: 'tools',
      label: 'Tools & IDEs',
      icon: <Wrench className="w-4 h-4" />,
      count: portfolioData.skills.filter((s) => s.category === 'tools').length,
    },
    {
      id: 'ml_libraries',
      label: 'ML Libraries',
      icon: <Binary className="w-4 h-4" />,
      count: portfolioData.skills.filter((s) => s.category === 'ml_libraries').length,
    },
  ];

  return (
    <section id="skills-section" className="space-y-6 scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">🧰</span>
          <h2 className="text-2xl font-bold text-white tracking-tight">Technical Skills & Toolkit</h2>
          <div className="h-4 w-[1px] bg-slate-700 mx-1" />
          <span className="text-xs text-emerald-400 font-medium">🇮🇳 Core Competencies</span>
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            id="search-skills-input"
            type="text"
            placeholder="Search skills, tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-[#071120] border border-blue-900/60 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#FF671F] focus:ring-1 focus:ring-[#FF671F]"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            id={`filter-${cat.id}`}
            onClick={() => setActiveCategory(cat.id)}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeCategory === cat.id
                ? 'bg-gradient-to-r from-[#FF671F] to-[#ea580c] text-white shadow-md shadow-orange-500/20'
                : 'bg-[#09152b] text-slate-300 hover:bg-[#0f2142] border border-blue-950 hover:border-blue-800'
            }`}
          >
            {cat.icon}
            <span>{cat.label}</span>
            <span
              className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                activeCategory === cat.id ? 'bg-black/25 text-white' : 'bg-[#060e1d] text-slate-400'
              }`}
            >
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      {filteredSkills.length === 0 ? (
        <div className="text-center py-12 rounded-xl bg-[#09152b]/40 border border-slate-800 text-slate-400">
          No skills matched "{searchQuery}". Try a different keyword.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              id={`skill-card-${skill.id}`}
              className="group p-4 rounded-xl bg-[#09152b]/80 border border-slate-700/60 hover:border-[#FF671F]/50 hover:bg-[#0c1c38] transition-all flex flex-col justify-between gap-3 shadow-sm relative overflow-hidden"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-white text-base group-hover:text-[#FF9933] transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#060D1A] text-slate-300 border border-slate-800">
                    {skill.category.replace('_', ' ')}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Original shield badge */}
              {skill.badgeUrl && (
                <div className="pt-2 border-t border-slate-700/50 flex items-center">
                  <img
                    src={skill.badgeUrl}
                    alt={`${skill.name} badge`}
                    className="h-6 object-contain rounded"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
