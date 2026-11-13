import React from 'react';
import { Briefcase, Globe, Mail, MapPin } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { ProfileAvatar } from './ProfileAvatar';
import { DownloadCvButton } from './DownloadCvButton';

interface LeftSidebarProps {
  onWorkWithMe: () => void;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({ onWorkWithMe }) => {
  return (
    <aside className="hidden lg:flex lg:w-[290px] xl:w-[310px] shrink-0 border-r border-[#262626] bg-[#141414] flex-col justify-between sticky top-11 h-[calc(100vh-2.75rem)] overflow-y-auto">
      {/* Upper profile info */}
      <div className="p-6">
        <div className="flex items-center gap-3.5">
          <ProfileAvatar size="sm" className="w-11 h-11 shrink-0 border border-[#263e36]" />
          <div className="min-w-0">
            <h2 className="font-mono-code font-semibold text-[14px] text-[#f3f3f3] leading-tight truncate">
              {PROFILE.name}
            </h2>
            <p className="font-mono-code text-[11.5px] text-[#8d8d8d] mt-0.5 truncate">
              {PROFILE.role}
            </p>
          </div>
        </div>

        <p className="mt-5 font-mono-code text-[12px] leading-[1.68] text-[#c4c4c4]">
          {PROFILE.sidebarBio}
        </p>

        <ul className="mt-6 space-y-3.5 font-mono-code text-[12px] text-[#d1d1d1]">
          <li className="flex items-center gap-2.5">
            <Briefcase className="w-3.5 h-3.5 text-[#7c7c7c] shrink-0" />
            <span>{PROFILE.experienceLabel}</span>
          </li>
          <li className="flex items-center gap-2.5">
            <MapPin className="w-3.5 h-3.5 text-[#7c7c7c] shrink-0" />
            <span>{PROFILE.location}</span>
          </li>
          <li className="flex items-center gap-2.5">
            <Globe className="w-3.5 h-3.5 text-[#7c7c7c] shrink-0" />
            <span>{PROFILE.languagesLabel}</span>
          </li>
          <li className="flex items-center gap-2.5 min-w-0">
            <Mail className="w-3.5 h-3.5 text-[#7c7c7c] shrink-0" />
            <a
              href={`mailto:${PROFILE.email}`}
              className="hover:text-white transition-colors truncate"
              title={PROFILE.email}
            >
              {PROFILE.email}
            </a>
          </li>
        </ul>

        <div className="mt-6">
          <DownloadCvButton />
        </div>
      </div>

      {/* Bottom pinned Get in.touch CTA (single button — no schedule button) */}
      <div className="mt-6">
        <div className="px-6">
          <div className="inline-block pb-2.5 border-b-[1.5px] border-[#b8c96c] -mb-px relative z-10">
            <span className="font-mono-code text-[12.5px] font-medium text-[#efefef]">
              Get in.touch
            </span>
          </div>
        </div>
        <div className="border-t border-[#262626] p-6">
          <button
            type="button"
            onClick={onWorkWithMe}
            className="w-full py-2.5 px-4 bg-[#f2f2f2] hover:bg-white text-[#121212] font-mono-code font-medium text-[12px] tracking-tight transition-colors cursor-pointer"
          >
            Work with me
          </button>
        </div>
      </div>
    </aside>
  );
};
