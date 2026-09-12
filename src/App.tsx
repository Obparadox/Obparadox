import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AnalyticsPreviewSection } from './components/AnalyticsPreviewSection';
import { SkillsSection } from './components/SkillsSection';
import { BadgesSection } from './components/BadgesSection';
import { TimelineSection } from './components/TimelineSection';
import { TrophiesSection } from './components/TrophiesSection';
import { ContactSection } from './components/ContactSection';
import { Heart, Mail } from 'lucide-react';
import { portfolioData } from './data/portfolioData';
import { AshokaChakra } from './components/AshokaChakra';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('header-section');
  const [isFooterLinkVisible, setIsFooterLinkVisible] = useState<boolean>(false);
  const footerLinkRef = useRef<HTMLAnchorElement>(null);

  const navItems = [
    { id: 'about-section', label: 'About', icon: '💁‍♂️' },
    { id: 'projects-section', label: 'Projects', icon: '📊' },
    { id: 'insights-section', label: 'Insights', icon: '📈' },
    { id: 'skills-section', label: 'Skills', icon: '🧰' },
    { id: 'badges-section', label: 'Certifications', icon: '📛' },
    { id: 'experience-section', label: 'Trajectory', icon: '🎓' },
    { id: 'trophies-section', label: 'Achievements', icon: '🏆' },
    { id: 'contact-section', label: 'Connect', icon: '🔗' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 85; // accounts for the sticky navbar height
      const targetPosition = element.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: 'smooth',
      });
      setActiveSection(targetId);
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  // Scroll listener to update active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      const allSections = ['header-section', ...navItems.map((item) => item.id)];

      for (let i = allSections.length - 1; i >= 0; i--) {
        const sectionId = allSections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to trigger fade-in animation when the footer link appears on screen
  useEffect(() => {
    const targetElement = footerLinkRef.current;
    if (!targetElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFooterLinkVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(targetElement);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#060D1A] text-slate-100 flex flex-col selection:bg-[#FF671F] selection:text-white">
      {/* Indian National Flag Topmost Tricolor Banner Strip */}
      <div className="w-full h-1 flex shadow-sm">
        <div className="flex-1 bg-[#FF671F]" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-[#046A38]" />
      </div>

      {/* Top ambient navigation bar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#071120]/95 border-b border-slate-800/90 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-2.5 flex items-center justify-between gap-4">
          {/* Brand / Logo */}
          <a
            href="#header-section"
            onClick={(e) => handleSmoothScroll(e, 'header-section')}
            className="flex items-center gap-3 group shrink-0"
          >
            <div className="relative w-9 h-9 rounded-lg bg-gradient-to-b from-[#FF671F] via-white to-[#046A38] p-[1.5px] shadow-sm">
              <div className="w-full h-full rounded-[7px] bg-[#09152b] flex items-center justify-center font-bold text-xs text-white">
                <AshokaChakra size={22} color="#60a5fa" animate />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm sm:text-base tracking-tight group-hover:text-[#FF9933] transition-colors">
                  {portfolioData.name}
                </span>
                <span className="hidden sm:inline-block text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider bg-orange-500/10 text-[#FF9933] border border-[#FF671F]/30">
                  Data Analyst
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <span>@{portfolioData.username}</span>
                <span>•</span>
                <span className="text-emerald-400 font-sans">🇮🇳 India</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-[#050C17]/80 p-1 rounded-xl border border-slate-800/80">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  href={`#${item.id}`}
                  onClick={(e) => handleSmoothScroll(e, item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FF671F] to-[#ea580c] text-white shadow-md shadow-orange-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <span className="text-xs">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="#contact-section"
              onClick={(e) => handleSmoothScroll(e, 'contact-section')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#0d1c38] hover:bg-[#14284d] text-slate-200 border border-blue-900/50 hover:border-blue-700 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#FF9933]" />
              <span className="hidden sm:inline">Connect</span>
            </a>
            <a
              href={`https://github.com/${portfolioData.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-[#FF671F] to-[#ea580c] hover:from-[#f97316] hover:to-[#c2410c] text-white transition-all shadow-md shadow-orange-500/20"
            >
              <AshokaChakra size={13} color="#ffffff" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Mobile Horizontal Scrollable Navigation Strip */}
        <div className="md:hidden flex items-center gap-1 px-4 py-1.5 border-t border-slate-800/80 overflow-x-auto no-scrollbar bg-[#050C17]/60">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                href={`#${item.id}`}
                onClick={(e) => handleSmoothScroll(e, item.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1 shrink-0 ${
                  isActive
                    ? 'bg-[#FF671F] text-white'
                    : 'text-slate-300 hover:text-white bg-slate-900/60 border border-slate-800'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-8 py-8 space-y-12">
        <Header />
        <AboutSection />
        <ProjectsSection />
        <AnalyticsPreviewSection />
        <SkillsSection />
        <BadgesSection />
        <TimelineSection />
        <TrophiesSection />
        <ContactSection />
      </main>

      {/* Footer with Tiranga Motif */}
      <footer className="border-t border-slate-800/80 bg-[#050A14] py-8 px-4 text-center text-xs text-slate-400 space-y-3">
        <div className="flex items-center justify-center gap-2">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#FF671F]" />
          <AshokaChakra size={18} color="#3b82f6" />
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#046A38]" />
        </div>
        <div className="flex items-center justify-center gap-1.5">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-[#FF671F] fill-[#FF671F]" />
          <span>for Bikram Purkait ({portfolioData.username})</span>
        </div>
        <p className="text-slate-400 flex flex-wrap items-center justify-center gap-1.5">
          <span>That's an overview about me. For more, visit my portfolio website like this</span>
          <a
            id="footer-github-link"
            ref={footerLinkRef}
            href={`https://github.com/${portfolioData.username}/${portfolioData.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-1.5 font-mono font-medium px-2.5 py-0.5 rounded-md text-[#FF9933] bg-[#FF671F]/10 hover:bg-gradient-to-r hover:from-[#FF671F] hover:via-amber-500 hover:to-[#046A38] hover:text-white border border-[#FF671F]/30 hover:border-transparent transform hover:scale-105 active:scale-95 hover:shadow-md hover:shadow-orange-500/20 ml-1 transition-all duration-700 ease-out ${
              isFooterLinkVisible
                ? 'opacity-100 translate-y-0 animate-fade-in'
                : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            <span>{portfolioData.username}/{portfolioData.username}</span>
            <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[10px]">
              ↗
            </span>
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
