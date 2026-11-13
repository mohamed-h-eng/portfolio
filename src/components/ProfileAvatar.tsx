import React, { useState } from 'react';
import { PROFILE } from '../data/portfolioData';

interface ProfileAvatarProps {
  size?: 'sm' | 'lg';
  className?: string;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ size = 'sm', className = '' }) => {
  const [srcIndex, setSrcIndex] = useState(0);
  const sources = [PROFILE.avatarUrl, PROFILE.avatarFallbackUrl];

  const handleError = () => {
    setSrcIndex((prev) => prev + 1);
  };

  if (srcIndex >= sources.length) {
    return (
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-[#0e4236] via-[#0b3128] to-[#081f1a] flex items-center justify-center select-none ${className}`}
      >
        <span
          className={`font-display font-bold tracking-tight text-[#d8f3e5] ${
            size === 'lg' ? 'text-4xl' : 'text-sm'
          }`}
        >
          MH
        </span>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-b from-[#11463a] to-[#0a2b23] ${className}`}
    >
      <img
        src={sources[srcIndex]}
        alt={PROFILE.name}
        onError={handleError}
        className="w-full h-full object-cover object-center contrast-[1.04]"
        loading="eager"
      />
    </div>
  );
};
