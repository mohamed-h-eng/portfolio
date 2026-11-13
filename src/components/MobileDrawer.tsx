import React from 'react';
import { Briefcase, Globe, Mail, MapPin } from 'lucide-react';
import { INDEX_SECTIONS, PROFILE } from '../data/portfolioData';
import { ProfileAvatar } from './ProfileAvatar';
import { DownloadCvButton } from './DownloadCvButton';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
  onWorkWithMe: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  open,
  onClose,
  onNavigateSection,
  onWorkWithMe,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 top-11 z-40 lg:hidden flex">
      <div className="w-80 max-w-[86vw] bg-[#141414] border-r border-[#262626] h-full overflow-y-auto flex flex-col justify-between p-6 shadow-2xl">
        <div>
          <div className="flex items-center gap-3.5">
            <ProfileAvatar size="sm" className="w-11 h-11 shrink-0 border border-[#263e36]" />
            <div>
              <h2 className="font-mono-code font-semibold text-[14px] text-[#f3f3f3]">
                {PROFILE.name}
              </h2>
              <p className="font-mono-code text-[11.5px] text-[#8d8d8d]">{PROFILE.role}</p>
            </div>
          </div>

          <p className="mt-4 font-mono-code text-[12px] leading-relaxed text-[#c4c4c4]">
            {PROFILE.sidebarBio}
          </p>

          <ul className="mt-5 space-y-2.5 font-mono-code text-[12px] text-[#d1d1d1]">
            <li className="flex items-center gap-2.5">
              <Briefcase className="w-3.5 h-3.5 text-[#7c7c7c]" />
              <span>{PROFILE.experienceLabel}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-[#7c7c7c]" />
              <span>{PROFILE.location}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Globe className="w-3.5 h-3.5 text-[#7c7c7c]" />
              <span>{PROFILE.languagesLabel}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-3.5 h-3.5 text-[#7c7c7c]" />
              <a href={`mailto:${PROFILE.email}`} className="truncate">
                {PROFILE.email}
              </a>
            </li>
          </ul>

          <div className="mt-5">
            <DownloadCvButton />
          </div>

          <div className="mt-7 pt-5 border-t border-[#262626]">
            <p className="font-mono-code text-[11.5px] text-[#8e8e8e] mb-3">Index</p>
            <div className="grid grid-cols-2 gap-2.5">
              {INDEX_SECTIONS.map((sec) => (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => {
                    onNavigateSection(sec.id);
                    onClose();
                  }}
                  className="text-left font-mono-code text-[12.5px] text-[#d0d0d0] hover:text-white py-1"
                >
                  {sec.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#262626]">
          <button
            type="button"
            onClick={() => {
              onClose();
              onWorkWithMe();
            }}
            className="w-full py-2.5 px-4 bg-[#f2f2f2] text-[#121212] font-mono-code font-medium text-[12px]"
          >
            Work with me
          </button>
        </div>
      </div>

      <div className="flex-1 bg-black/60" onClick={onClose} />
    </div>
  );
};
