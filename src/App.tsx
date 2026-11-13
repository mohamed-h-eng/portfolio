import React, { useCallback, useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { INDEX_SECTIONS, PROFILE, ProjectItem } from './data/portfolioData';
import { TopBar } from './components/TopBar';
import { LeftSidebar } from './components/LeftSidebar';
import { RightSidebar } from './components/RightSidebar';
import { LineGutter } from './components/LineGutter';
import { InfoTabView } from './components/InfoTabView';
import { WorkTabView } from './components/WorkTabView';
import { ProjectModal } from './components/ProjectModal';
import { MobileDrawer } from './components/MobileDrawer';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'info' | 'work'>('info');
  const [activeSection, setActiveSection] = useState<string>('work');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);

  // Scroll-spy for RightSidebar Index
  useEffect(() => {
    if (activeTab !== 'info') return;

    const handleScroll = () => {
      const offset = 160;
      let current: string = INDEX_SECTIONS[0].id;

      for (const sec of INDEX_SECTIONS) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            current = sec.id;
          }
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 40
      ) {
        current = 'contact';
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  const scrollToSection = useCallback(
    (sectionId: string, focusContactInput = false) => {
      const performScroll = () => {
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveSection(sectionId);
          if (focusContactInput) {
            setTimeout(() => {
              document.getElementById('firstName')?.focus({ preventScroll: true });
            }, 500);
          }
        }
      };

      if (activeTab !== 'info') {
        setActiveTab('info');
        requestAnimationFrame(() => {
          setTimeout(performScroll, 60);
        });
      } else {
        performScroll();
      }
    },
    [activeTab]
  );

  const handleTabChange = (tab: 'info' | 'work') => {
    setActiveTab(tab);
    setMobileDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#161616] text-[#e8e8e8]">
      {/* Sticky IDE Top Bar */}
      <TopBar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        mobileDrawerOpen={mobileDrawerOpen}
        onToggleMobileDrawer={() => setMobileDrawerOpen((prev) => !prev)}
      />

      {/* Mobile Profile + Index Drawer */}
      <MobileDrawer
        open={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
        onNavigateSection={(id) => scrollToSection(id)}
        onWorkWithMe={() => scrollToSection('contact', true)}
      />

      {/* Three-Pane IDE Workspace */}
      <div className="flex-1 flex items-stretch min-w-0">
        {/* Sticky Left Profile Sidebar */}
        <LeftSidebar onWorkWithMe={() => scrollToSection('contact', true)} />

        {/* Center Editor Canvas + Continuous Line Numbers */}
        <main className="flex-1 flex min-w-0 bg-[#171717]">
          <LineGutter />

          <div className="flex-1 min-w-0 self-start">
            {activeTab === 'info' ? (
              <InfoTabView
                onSelectProject={setSelectedProject}
                onOpenWorkTab={() => handleTabChange('work')}
              />
            ) : (
              <WorkTabView
                onSelectProject={setSelectedProject}
                onBackToInfo={() => handleTabChange('info')}
              />
            )}
          </div>
        </main>

        {/* Sticky Right Index Sidebar */}
        <RightSidebar
          activeSection={activeSection}
          activeTab={activeTab}
          onNavigateSection={(id) => scrollToSection(id)}
        />
      </div>

      {/* Bottom IDE Status Footer matching Image 3 */}
      <footer className="border-t border-[#262626] bg-[#121212] px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 font-mono-code text-[11px] text-[#767676]">
        <span>
          {PROFILE.location} • 39 public repositories on GitHub (@mohamed-h-eng)
        </span>

        <div className="flex items-center gap-4">
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[#e5e5e5] transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#e5e5e5] transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email"
            className="hover:text-[#e5e5e5] transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
          </a>
        </div>
      </footer>

      {/* Case Study / Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
