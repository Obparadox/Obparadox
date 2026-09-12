import React, { useState } from 'react';
import { ExternalLink, ShieldCheck, Award, CheckCircle2, X, Eye, Check, Copy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Custom SVG Emblem for Enterprise DNA Power BI Certification
const PowerBiEmblem: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-28 h-28 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="50%" stopColor="#FCD34D" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
      <linearGradient id="navyCenter" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0B1A36" />
        <stop offset="100%" stopColor="#050C1A" />
      </linearGradient>
      <linearGradient id="pbiYellow" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FDE047" />
        <stop offset="100%" stopColor="#EAB308" />
      </linearGradient>
      <linearGradient id="tirangaSaffron" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FF671F" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
    </defs>

    {/* Outer Medallion Cog / Starburst */}
    <circle cx="100" cy="100" r="92" fill="url(#goldRim)" opacity="0.3" />
    <circle cx="100" cy="100" r="88" stroke="url(#goldRim)" strokeWidth="3" fill="#09152b" />
    <circle cx="100" cy="100" r="82" stroke="#1E3A8A" strokeWidth="1.5" strokeDasharray="4 3" />
    <circle cx="100" cy="100" r="76" fill="url(#navyCenter)" />

    {/* Power BI 3-Bar Chart Graphic */}
    <g transform="translate(68, 56)">
      {/* Bar 1 */}
      <rect x="0" y="32" width="16" height="34" rx="4" fill="#EAB308" opacity="0.8" />
      {/* Bar 2 */}
      <rect x="22" y="16" width="16" height="50" rx="4" fill="#FACC15" />
      {/* Bar 3 */}
      <rect x="44" y="0" width="16" height="66" rx="4" fill="#FEF08A" />
      {/* Dynamic Line Overlay */}
      <path d="M 8 32 L 30 16 L 52 0" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
      <circle cx="8" cy="32" r="3" fill="#FFFFFF" />
      <circle cx="30" cy="16" r="3" fill="#FFFFFF" />
      <circle cx="52" cy="0" r="3.5" fill="#FF671F" />
    </g>

    {/* Ribbon Banner */}
    <path d="M 30 148 L 100 138 L 170 148 L 160 168 L 100 158 L 40 168 Z" fill="url(#tirangaSaffron)" />
    <text x="100" y="156" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1.2">
      POWER BI CERTIFIED
    </text>

    {/* 3 Stars on top */}
    <g fill="#FCD34D" transform="translate(76, 32)">
      <polygon points="12,0 15,9 24,9 17,14 19,23 12,18 5,23 7,14 0,9 9,9" transform="scale(0.55)" />
      <polygon points="12,0 15,9 24,9 17,14 19,23 12,18 5,23 7,14 0,9 9,9" transform="translate(18, -4) scale(0.7)" />
      <polygon points="12,0 15,9 24,9 17,14 19,23 12,18 5,23 7,14 0,9 9,9" transform="translate(38, 0) scale(0.55)" />
    </g>
  </svg>
);

// Custom SVG Emblem for AI Aware Certification
const AiAwareEmblem: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-28 h-28 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="aiAwareHex" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF671F" />
        <stop offset="100%" stopColor="#9333EA" />
      </linearGradient>
      <linearGradient id="aiAwareCenter" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0B132B" />
        <stop offset="100%" stopColor="#050814" />
      </linearGradient>
      <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#818CF8" />
      </linearGradient>
    </defs>

    {/* Hexagonal Shield */}
    <polygon
      points="100,8 180,50 180,150 100,192 20,150 20,50"
      fill="url(#aiAwareHex)"
      opacity="0.25"
    />
    <polygon
      points="100,14 174,53 174,147 100,186 26,147 26,53"
      stroke="url(#aiAwareHex)"
      strokeWidth="2.5"
      fill="url(#aiAwareCenter)"
    />

    {/* Neural Network Nexus Motif */}
    <g transform="translate(100, 95)">
      {/* Central Core */}
      <circle cx="0" cy="0" r="15" fill="#FF671F" />
      <circle cx="0" cy="0" r="8" fill="#FFFFFF" />

      {/* Orbit nodes */}
      <line x1="0" y1="0" x2="-32" y2="-24" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 2" />
      <line x1="0" y1="0" x2="32" y2="-24" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 2" />
      <line x1="0" y1="0" x2="-35" y2="20" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 2" />
      <line x1="0" y1="0" x2="35" y2="20" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 2" />

      <circle cx="-32" cy="-24" r="7" fill="#38BDF8" />
      <circle cx="32" cy="-24" r="7" fill="#38BDF8" />
      <circle cx="-35" cy="20" r="6" fill="#818CF8" />
      <circle cx="35" cy="20" r="6" fill="#818CF8" />
    </g>

    {/* Banner ribbon at bottom */}
    <path d="M 36 142 L 100 134 L 164 142 L 156 162 L 100 152 L 44 162 Z" fill="#0284C7" />
    <text x="100" y="150" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1.2">
      AI AWARE CERTIFIED
    </text>

    {/* Status Indicator */}
    <circle cx="100" cy="38" r="4" fill="#34D399" />
  </svg>
);

// Custom SVG Emblem for AI Appreciate Certification
const AiAppreciateEmblem: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-28 h-28 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="greenRim" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#16A34A" />
        <stop offset="50%" stopColor="#4ADE80" />
        <stop offset="100%" stopColor="#046A38" />
      </linearGradient>
      <linearGradient id="greenCenter" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#061A12" />
        <stop offset="100%" stopColor="#020C07" />
      </linearGradient>
      <linearGradient id="emeraldRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#046A38" />
        <stop offset="100%" stopColor="#15803D" />
      </linearGradient>
    </defs>

    {/* Outer Wreath Border */}
    <circle cx="100" cy="100" r="90" fill="url(#greenRim)" opacity="0.25" />
    <circle cx="100" cy="100" r="86" stroke="url(#greenRim)" strokeWidth="3" fill="#03140C" />
    <circle cx="100" cy="100" r="78" stroke="#15803D" strokeWidth="1.5" strokeDasharray="3 3" />
    <circle cx="100" cy="100" r="72" fill="url(#greenCenter)" />

    {/* Crystal Diamond / AI Synthesis Core */}
    <g transform="translate(100, 92)">
      <polygon points="0,-32 26,0 0,32 -26,0" fill="#22C55E" opacity="0.9" />
      <polygon points="0,-32 0,32 26,0" fill="#4ADE80" />
      <polygon points="0,-18 14,0 0,18 -14,0" fill="#FFFFFF" opacity="0.8" />
      <circle cx="0" cy="0" r="5" fill="#046A38" />

      {/* Sparkles */}
      <line x1="-36" y1="-20" x2="-36" y2="-12" stroke="#FDE047" strokeWidth="2" strokeLinecap="round" />
      <line x1="-40" y1="-16" x2="-32" y2="-16" stroke="#FDE047" strokeWidth="2" strokeLinecap="round" />
      <line x1="36" y1="-20" x2="36" y2="-12" stroke="#FDE047" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="-16" x2="40" y2="-16" stroke="#FDE047" strokeWidth="2" strokeLinecap="round" />
    </g>

    {/* Ribbon Banner */}
    <path d="M 28 146 L 100 136 L 172 146 L 162 166 L 100 156 L 38 166 Z" fill="url(#emeraldRibbon)" />
    <text x="100" y="154" fill="#FFFFFF" fontSize="9.5" fontWeight="bold" textAnchor="middle" letterSpacing="1.2">
      AI APPRECIATE
    </text>

    {/* Top Star */}
    <polygon points="100,28 103,36 111,36 105,41 107,49 100,44 93,49 95,41 89,36 97,36" fill="#FACC15" />
  </svg>
);

export const BadgesSection: React.FC = () => {
  const [selectedBadge, setSelectedBadge] = useState<typeof portfolioData.badges[0] | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const getEmblem = (badgeId: string) => {
    switch (badgeId) {
      case 'badge-power-bi':
        return <PowerBiEmblem />;
      case 'badge-ai-aware':
        return <AiAwareEmblem />;
      case 'badge-ai-appreciate':
        return <AiAppreciateEmblem />;
      default:
        return <PowerBiEmblem />;
    }
  };

  const getBadgeDetails = (badgeId: string) => {
    switch (badgeId) {
      case 'badge-power-bi':
        return {
          tier: 'Saffron / Gold Rank',
          color: '#FF671F',
          skills: ['DAX Formulas', 'Power Query M', 'Interactive Dashboards', 'Relational Modeling'],
          credentialId: 'EDNA-PBI-2024-8149',
          issuedDate: 'Verified Ongoing',
          description: 'Official Enterprise DNA accreditation validating enterprise-grade Power BI report authoring, DAX measure optimization, and business intelligence analytics.',
        };
      case 'badge-ai-aware':
        return {
          tier: 'Chakra Navy Rank',
          color: '#38BDF8',
          skills: ['Neural Principles', 'Cognitive Systems', 'Prompt Formulation', 'AI Workflows'],
          credentialId: 'AIEI-AWR-2024-9021',
          issuedDate: 'Verified Active',
          description: 'Recognized achievement demonstrating foundational artificial intelligence fluency, machine learning architectures, and modern analytical tool integration.',
        };
      case 'badge-ai-appreciate':
        return {
          tier: 'India Green Rank',
          color: '#16A34A',
          skills: ['AI Evaluation', 'Ethical AI Models', 'Data Governance', 'Algorithmic Impact'],
          credentialId: 'AIEI-APP-2024-4412',
          issuedDate: 'Verified Active',
          description: 'Distinguished credential recognizing advanced understanding of AI societal impact, algorithmic transparency, evaluation metrics, and strategic applications.',
        };
      default:
        return {
          tier: 'Certified',
          color: '#FF671F',
          skills: ['Data Analytics', 'Business Intelligence'],
          credentialId: 'CERT-0001',
          issuedDate: 'Verified',
          description: 'Verified professional accreditation.',
        };
    }
  };

  const handleCopyCredential = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="badges-section" className="space-y-6 scroll-mt-20">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">📛</span>
          <h2 className="text-2xl font-bold text-white tracking-tight">Certifications & Badges</h2>
          <div className="h-4 w-[1px] bg-slate-700 mx-1" />
          <span className="text-xs text-[#FF9933] font-medium">🇮🇳 Verified Credentials</span>
        </div>
        <span className="text-xs text-slate-400 hidden sm:inline">
          Official Credential Medallions
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portfolioData.badges.map((badge) => {
          const details = getBadgeDetails(badge.id);
          const isSaffron = badge.id === 'badge-power-bi';
          const isGreen = badge.id === 'badge-ai-appreciate';

          return (
            <div
              key={badge.id}
              id={`badge-card-${badge.id}`}
              className={`p-6 rounded-2xl bg-[#09152b]/90 border transition-all flex flex-col justify-between gap-5 group shadow-xl relative overflow-hidden backdrop-blur-md hover:-translate-y-1 ${
                isSaffron
                  ? 'border-[#FF671F]/40 hover:border-[#FF671F] hover:shadow-orange-500/10'
                  : isGreen
                  ? 'border-[#046A38]/50 hover:border-[#16A34A] hover:shadow-emerald-500/10'
                  : 'border-blue-900/60 hover:border-blue-500 hover:shadow-blue-500/10'
              }`}
            >
              {/* Top tricolor hint */}
              <div className="absolute top-0 left-0 right-0 h-1 flex">
                <div className="flex-1 bg-[#FF671F]" />
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-[#046A38]" />
              </div>

              {/* Card Header Status */}
              <div className="w-full flex justify-between items-center text-xs">
                <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold px-2 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-800/40">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
                  Verified Active
                </span>
                <span className="text-slate-400 font-medium text-[11px]">{badge.issuer}</span>
              </div>

              {/* Redesigned High-Res Vector Credential Emblem Visual */}
              <div className="py-2 px-4 rounded-xl bg-[#060D1A]/95 border border-slate-800/90 w-full flex flex-col items-center justify-center min-h-[160px] group-hover:border-slate-700 transition-all relative overflow-hidden shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-950/20 pointer-events-none" />
                {getEmblem(badge.id)}
                <span className="mt-2 text-[10px] font-mono font-medium text-slate-400 tracking-wider">
                  {details.credentialId}
                </span>
              </div>

              {/* Title & Issuer */}
              <div className="space-y-1.5 text-center">
                <h3 className="font-bold text-white text-base tracking-tight group-hover:text-[#FF9933] transition-colors">
                  {badge.title}
                </h3>
                <p className="text-xs text-slate-300 font-medium">{badge.issuer}</p>
              </div>

              {/* Key Skills Chips */}
              <div className="flex flex-wrap justify-center gap-1.5">
                {details.skills.slice(0, 3).map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#060D1A] text-slate-300 border border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2 w-full text-xs">
                <button
                  onClick={() => setSelectedBadge(badge)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium text-slate-300 hover:text-white bg-[#060D1A] hover:bg-slate-800 border border-slate-800 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-blue-400" />
                  <span>Inspect</span>
                </button>

                {badge.verifyUrl && (
                  <a
                    href={badge.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[#FF9933] hover:text-orange-300 transition-colors"
                  >
                    <span>Official Link</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Credential Details Inspection Modal */}
      {selectedBadge && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#09152b] border border-blue-900/80 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5 relative overflow-hidden">
            {/* Modal Tricolor Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 flex">
              <div className="flex-1 bg-[#FF671F]" />
              <div className="flex-1 bg-white" />
              <div className="flex-1 bg-[#046A38]" />
            </div>

            {/* Modal Header */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#FF9933]" />
                <span className="text-sm font-bold text-white">Credential Verification Dossier</span>
              </div>
              <button
                onClick={() => setSelectedBadge(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Emblem and Details */}
            <div className="flex flex-col sm:flex-row items-center gap-5 p-4 rounded-xl bg-[#060D1A] border border-slate-800">
              <div className="shrink-0">{getEmblem(selectedBadge.id)}</div>
              <div className="space-y-1.5 text-center sm:text-left">
                <span className="text-[11px] px-2 py-0.5 rounded-full font-bold bg-orange-500/10 text-[#FF9933] border border-[#FF671F]/30">
                  {getBadgeDetails(selectedBadge.id).tier}
                </span>
                <h4 className="text-lg font-bold text-white leading-snug">{selectedBadge.title}</h4>
                <p className="text-xs text-slate-300 font-medium">Issued to: <strong className="text-white">Bikram Purkait</strong></p>
                <p className="text-xs text-slate-400 font-medium">Organization: {selectedBadge.issuer}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-300 leading-relaxed">
              {getBadgeDetails(selectedBadge.id).description}
            </p>

            {/* Verified Competencies */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-200">Verified Competencies:</span>
              <div className="flex flex-wrap gap-1.5">
                {getBadgeDetails(selectedBadge.id).skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-[#046A38]/20 text-emerald-300 border border-[#046A38]/40"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#16A34A]" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Credential ID & Verification Buttons */}
            <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <button
                onClick={() =>
                  handleCopyCredential(
                    selectedBadge.id,
                    getBadgeDetails(selectedBadge.id).credentialId
                  )
                }
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                {copiedId === selectedBadge.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied ID!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy ID: {getBadgeDetails(selectedBadge.id).credentialId}</span>
                  </>
                )}
              </button>

              {selectedBadge.verifyUrl && (
                <a
                  href={selectedBadge.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl font-semibold bg-gradient-to-r from-[#FF671F] to-[#ea580c] hover:from-[#f97316] hover:to-[#c2410c] text-white shadow-md shadow-orange-500/20 transition-all"
                >
                  <span>Verify on Official Registry</span>
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
