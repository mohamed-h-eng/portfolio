import React from 'react';
import { INDEX_SECTIONS } from '../data/portfolioData';

interface RightSidebarProps {
  activeSection: string;
  activeTab: 'info' | 'work';
  onNavigateSection: (sectionId: string) => void;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({
  activeSection,
  activeTab,
  onNavigateSection,
}) => {
  return (
    <aside className="hidden xl:flex xl:w-[215px] shrink-0 border-l border-[#262626] bg-[#141414] flex-col sticky top-11 h-[calc(100vh-2.75rem)] p-6 select-none">
      <div className="pb-3 border-b border-[#262626]">
        <span className="font-mono-code text-[12px] text-[#9e9e9e]">Index</span>
      </div>

      <nav aria-label="Section index" className="mt-5 flex flex-col gap-3.5">
        {INDEX_SECTIONS.map((sec) => {
          const isActive =
            (activeTab === 'work' && sec.id === 'work') ||
            (activeTab === 'info' && activeSection === sec.id);

          return (
            <button
              key={sec.id}
              type="button"
              onClick={() => onNavigateSection(sec.id)}
              className={`text-left font-mono-code text-[13px] transition-colors cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'text-[#f5f5f5] font-medium'
                  : 'text-[#8e8e8e] hover:text-[#dedede]'
              }`}
            >
              <span>{sec.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
