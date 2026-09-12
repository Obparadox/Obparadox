import React from 'react';
import { GraduationCap, Award, Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const TimelineSection: React.FC = () => {
  const timeline = portfolioData.timeline || [];

  const getIcon = (type: string) => {
    switch (type) {
      case 'certification':
        return <Award className="w-4 h-4 text-[#FF9933]" />;
      case 'education':
        return <GraduationCap className="w-4 h-4 text-[#38BDF8]" />;
      default:
        return <Briefcase className="w-4 h-4 text-[#16A34A]" />;
    }
  };

  return (
    <section id="experience-section" className="space-y-6 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-800/80 pb-4 gap-3">
        <div className="flex items-center gap-3">
          <span className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/30 text-xl">
            🎓
          </span>
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              Career & Education Trajectory
              <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30">
                Milestones
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Academic grounding, certifications, and continuous technical growth
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#071120] border border-blue-900/60 text-slate-300">
          <Calendar className="w-3.5 h-3.5 text-[#FF9933]" />
          <span>Timeline Record</span>
        </div>
      </div>

      {/* Timeline Node List */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800/90 space-y-8 ml-3 sm:ml-4">
        {timeline.map((item, idx) => {
          const isFirst = idx === 0;
          return (
            <div key={item.id} className="relative group">
              {/* Timeline Marker Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 ${
                  isFirst
                    ? 'bg-[#FF671F] border-amber-300 shadow-lg shadow-orange-500/40 text-white'
                    : 'bg-[#09152b] border-slate-700 text-slate-300 group-hover:border-[#FF671F]'
                }`}
              >
                {getIcon(item.type)}
              </div>

              {/* Node Card */}
              <div className="p-5 rounded-2xl bg-[#09152b]/85 border border-blue-900/40 hover:border-[#FF671F]/50 transition-all duration-300 backdrop-blur-md space-y-2.5 shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#FF9933] px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-[#FF671F]/30">
                      {item.year}
                    </span>
                    <span className="text-xs font-semibold text-emerald-400 inline-flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#16A34A]" />
                      {item.badgeText}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{item.institution}</span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
