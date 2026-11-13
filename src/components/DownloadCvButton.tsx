import React from 'react';
import { Download } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const DownloadCvButton: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <a
      href={PROFILE.cvPath}
      download={PROFILE.cvDownloadName}
      className={`group inline-flex items-stretch border border-[#2c2c2c] bg-[#1a1a1a] hover:border-[#454545] transition-colors ${className}`}
    >
      <span className="px-4 py-2 text-[12px] font-mono-code font-medium text-[#efefef] tracking-tight flex items-center">
        Download CV
      </span>
      <span className="w-9 bg-[#252525] group-hover:bg-[#303030] border-l border-[#2e2e2e] flex items-center justify-center text-[#cfcfcf] group-hover:text-white transition-colors">
        <Download className="w-3.5 h-3.5" />
      </span>
    </a>
  );
};
