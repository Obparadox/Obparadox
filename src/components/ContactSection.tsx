import React, { useState } from 'react';
import { Mail, Briefcase, Award, Code, MessageSquare, Copy, Check, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Linkedin':
        return <Briefcase className="w-5 h-5 text-[#0A66C2]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#20BEFF]" />;
      case 'Code':
        return <Code className="w-5 h-5 text-[#2EC866]" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-[#5865F2]" />;
      case 'Mail':
        return <Mail className="w-5 h-5 text-[#EA4335]" />;
      default:
        return <ExternalLink className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section id="contact-section" className="space-y-6 scroll-mt-20">
      <div className="flex items-center gap-2.5 border-b border-slate-800/80 pb-3">
        <span className="text-xl">🔗</span>
        <h2 className="text-2xl font-bold text-white tracking-tight">Connect with Me</h2>
        <div className="h-4 w-[1px] bg-slate-700 mx-1" />
        <span className="text-xs text-[#FF9933] font-medium">🇮🇳 Network & Channels</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolioData.socials.map((social) => (
          <div
            key={social.id}
            id={`social-card-${social.id}`}
            className="p-4 rounded-xl bg-[#09152b]/80 border border-blue-900/50 hover:border-[#FF671F]/50 hover:bg-[#0c1c38] transition-all flex flex-col justify-between gap-3 shadow-sm relative overflow-hidden"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#060D1A] border border-slate-800">
                  {getIcon(social.iconName)}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">{social.name}</h3>
                  <p className="text-xs text-slate-400 font-mono truncate max-w-[150px]">
                    {social.handle}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-700/50">
              <img
                src={social.badgeUrl}
                alt={`${social.name} badge`}
                className="h-5 rounded"
                referrerPolicy="no-referrer"
              />

              <div className="flex items-center gap-1.5">
                {social.id === 'email' ? (
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#060D1A] hover:bg-[#0e1d35] text-xs text-[#FF9933] font-medium transition-colors border border-[#FF671F]/30"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                ) : null}

                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FF671F]/15 hover:bg-[#FF671F]/25 text-xs text-orange-200 font-medium transition-colors border border-[#FF671F]/30"
                >
                  <span>Open</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
