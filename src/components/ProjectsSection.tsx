import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle2, 
  Code2, 
  Copy, 
  Check, 
  X, 
  Eye, 
  BarChart3, 
  Sparkles,
  Database,
  LineChart,
  Binary
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ProjectItem } from '../types';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const projects = portfolioData.projects || [];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'power_bi', label: 'Power BI & BI Dashboards', count: projects.filter(p => p.category === 'power_bi').length },
    { id: 'python_eda', label: 'Python & Exploratory Data Analysis', count: projects.filter(p => p.category === 'python_eda').length },
    { id: 'sql', label: 'SQL & Database Optimization', count: projects.filter(p => p.category === 'sql').length },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'power_bi':
        return <BarChart3 className="w-4 h-4 text-[#FACC15]" />;
      case 'python_eda':
        return <LineChart className="w-4 h-4 text-[#38BDF8]" />;
      case 'sql':
        return <Database className="w-4 h-4 text-[#4479A1]" />;
      default:
        return <Binary className="w-4 h-4 text-[#FF671F]" />;
    }
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="projects-section" className="space-y-6 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-800/80 pb-4 gap-3">
        <div className="flex items-center gap-3">
          <span className="p-2 rounded-xl bg-orange-500/10 border border-[#FF671F]/30 text-xl">
            📊
          </span>
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              Featured Analytics Projects
              <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-[#FF671F]/15 text-[#FF9933] border border-[#FF671F]/30">
                Case Studies
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Production data models, exploratory pipelines, and SQL optimization
            </p>
          </div>
        </div>

        {/* Tiranga Accent Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#071120] border border-blue-900/60 text-slate-300">
          <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
          <span>Verified Code & Reports</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                isActive
                  ? 'bg-gradient-to-r from-[#FF671F] to-[#ea580c] text-white shadow-md shadow-orange-500/20'
                  : 'bg-[#09152b]/80 hover:bg-[#0c1e3d] text-slate-300 hover:text-white border border-blue-950/80'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-black/25 text-white' : 'bg-slate-800 text-slate-400'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            className="p-6 rounded-2xl bg-[#09152b]/90 border border-blue-900/50 hover:border-[#FF671F]/60 transition-all duration-300 flex flex-col justify-between gap-5 group shadow-xl relative overflow-hidden backdrop-blur-md hover:-translate-y-1"
          >
            {/* Top Tricolor Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 flex">
              <div className="flex-1 bg-[#FF671F]" />
              <div className="flex-1 bg-white" />
              <div className="flex-1 bg-[#046A38]" />
            </div>

            {/* Card Header & Category */}
            <div className="flex items-center justify-between text-xs">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#060D1A] border border-slate-800 text-slate-300 font-medium">
                {getCategoryIcon(project.category)}
                <span className="capitalize">{project.category.replace('_', ' ')}</span>
              </div>
              {project.featured && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#FF9933] bg-orange-500/10 px-2.5 py-0.5 rounded-full border border-[#FF671F]/30">
                  <Sparkles className="w-3 h-3" />
                  Featured
                </span>
              )}
            </div>

            {/* Title & Tagline */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white group-hover:text-[#FF9933] transition-colors leading-snug">
                {project.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#060D1A]/90 border border-slate-800/80">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="text-center space-y-0.5">
                  <div className="text-xs sm:text-sm font-extrabold text-white group-hover:text-amber-300 transition-colors">
                    {m.value}
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium leading-tight">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tools Stack Chips */}
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#060D1A] text-slate-300 border border-slate-800"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Card Footer Actions */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3 w-full text-xs">
              <button
                onClick={() => setSelectedProject(project)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-medium text-slate-200 hover:text-white bg-[#060D1A] hover:bg-slate-800 border border-slate-700/80 transition-colors"
              >
                <Eye className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Case Study & Code</span>
              </button>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#FF9933] hover:text-orange-300 transition-colors"
                >
                  <FolderGit2 className="w-3.5 h-3.5" />
                  <span>GitHub Repo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Detailed Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#09152b] border border-blue-900/80 rounded-2xl max-w-2xl w-full p-6 sm:p-7 shadow-2xl space-y-6 relative overflow-hidden my-8 max-h-[90vh] overflow-y-auto">
            {/* Modal Tricolor Header Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 flex">
              <div className="flex-1 bg-[#FF671F]" />
              <div className="flex-1 bg-white" />
              <div className="flex-1 bg-[#046A38]" />
            </div>

            {/* Top Bar */}
            <div className="flex items-center justify-between pt-1">
              <div className="inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-500/10 text-[#FF9933] border border-[#FF671F]/30">
                {getCategoryIcon(selectedProject.category)}
                <span>Analytics Case Study</span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#060D1A] border border-slate-800">
              {selectedProject.metrics.map((m, idx) => (
                <div key={idx} className="text-center space-y-1">
                  <div className="text-base sm:text-lg font-bold text-emerald-400">
                    {m.value}
                  </div>
                  <div className="text-xs text-slate-400">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Key Business Insights */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Key Analytical Findings & Impact
              </h4>
              <div className="space-y-2">
                {selectedProject.keyInsights.map((insight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <span>{insight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dataset Information */}
            <div className="p-3 rounded-xl bg-[#060D1A] border border-slate-800/80 text-xs flex items-center justify-between">
              <span className="text-slate-400 font-medium">Dataset Source:</span>
              <span className="text-amber-300 font-mono font-medium">{selectedProject.dataset}</span>
            </div>

            {/* Code Snippet Preview (DAX / Python / SQL) */}
            {selectedProject.codeSnippet && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-300 font-semibold">
                    <Code2 className="w-4 h-4 text-[#38BDF8]" />
                    <span>{selectedProject.codeSnippet.title}</span>
                  </div>
                  <button
                    onClick={() => handleCopyCode(selectedProject.codeSnippet!.code)}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800/60 hover:bg-slate-700 transition-colors"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy {selectedProject.codeSnippet.language}</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-3.5 rounded-xl bg-[#030712] border border-slate-800 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
                  <code>{selectedProject.codeSnippet.code}</code>
                </pre>
              </div>
            )}

            {/* Modal Actions */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Close Dossier
              </button>
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#FF671F] to-[#ea580c] hover:from-[#f97316] hover:to-[#c2410c] text-white shadow-md shadow-orange-500/20 transition-all"
                >
                  <span>Explore Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
