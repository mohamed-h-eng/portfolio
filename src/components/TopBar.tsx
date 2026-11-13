import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface TopBarProps {
  activeTab: 'info' | 'work';
  onTabChange: (tab: 'info' | 'work') => void;
  mobileDrawerOpen: boolean;
  onToggleMobileDrawer: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  activeTab,
  onTabChange,
  mobileDrawerOpen,
  onToggleMobileDrawer,
}) => {
  const [cairoTime, setCairoTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatted = new Intl.DateTimeFormat('en-US', {
          timeZone: PROFILE.timezone,
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }).format(new Date());
        setCairoTime(formatted);
      } catch {
        setCairoTime('');
      }
    };
    updateClock();
    const timer = setInterval(updateClock, 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-40 h-11 bg-[#131313] border-b border-[#262626] flex items-center text-[12px] font-mono-code select-none">
      {/* Left welcome segment aligned with left sidebar on desktop */}
      <div className="lg:w-[290px] xl:w-[310px] shrink-0 px-4 lg:px-6 flex items-center gap-3 h-full lg:border-r lg:border-[#262626]">
        <button
          type="button"
          onClick={onToggleMobileDrawer}
          aria-label="Toggle profile and navigation drawer"
          className="lg:hidden p-1 text-[#b5b5b5] hover:text-white transition-colors"
        >
          {mobileDrawerOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
        <span className="hidden sm:inline text-[#cccccc] tracking-tight truncate">
          {PROFILE.welcomeText}
        </span>
      </div>

      {/* Center IDE open-file tabs */}
      <nav aria-label="Editor tabs" className="flex items-center h-full px-3 sm:px-6 lg:px-10 gap-5 sm:gap-7">
        <button
          type="button"
          onClick={() => onTabChange('info')}
          className={`relative h-full flex items-center text-[12px] transition-colors cursor-pointer ${
            activeTab === 'info'
              ? 'text-[#f5f5f5] font-medium'
              : 'text-[#858585] hover:text-[#d0d0d0]'
          }`}
        >
          {PROFILE.tabInfo}
          {activeTab === 'info' && (
            <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#e5e5e5]" />
          )}
        </button>

        <button
          type="button"
          onClick={() => onTabChange('work')}
          className={`relative h-full flex items-center text-[12px] transition-colors cursor-pointer ${
            activeTab === 'work'
              ? 'text-[#f5f5f5] font-medium'
              : 'text-[#858585] hover:text-[#d0d0d0]'
          }`}
        >
          {PROFILE.tabWork}
          {activeTab === 'work' && (
            <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#e5e5e5]" />
          )}
        </button>
      </nav>

      {/* Right availability + live Cairo time */}
      <div className="ml-auto px-4 lg:px-6 flex items-center gap-3 text-[11.5px]">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#13291b] text-[#5ce085] border border-[#1d3f29] rounded-[2px] whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
          {PROFILE.statusText}
        </span>

        <span className="hidden md:inline text-[#b0b0b0] whitespace-nowrap">
          {PROFILE.location}
          {cairoTime ? ` • My time: ${cairoTime}` : ''}
        </span>
      </div>
    </header>
  );
};
