import React from 'react';

export const TechIcon: React.FC<{ id: string }> = ({ id }) => {
  switch (id) {
    case 'react':
      return (
        <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
          <circle cx="20" cy="20" r="3.2" fill="#61DAFB" />
          <ellipse cx="20" cy="20" rx="15" ry="5.8" stroke="#61DAFB" strokeWidth="1.7" />
          <ellipse
            cx="20"
            cy="20"
            rx="15"
            ry="5.8"
            stroke="#61DAFB"
            strokeWidth="1.7"
            transform="rotate(60 20 20)"
          />
          <ellipse
            cx="20"
            cy="20"
            rx="15"
            ry="5.8"
            stroke="#61DAFB"
            strokeWidth="1.7"
            transform="rotate(120 20 20)"
          />
        </svg>
      );
    case 'typescript':
      return (
        <div className="w-9 h-9 rounded-md bg-[#3178C6] flex items-end justify-end p-1.5 shadow-inner">
          <span className="font-display font-extrabold text-[13px] leading-none text-white tracking-tight">
            TS
          </span>
        </div>
      );
    case 'javascript':
      return (
        <div className="w-9 h-9 rounded-md bg-[#F7DF1E] flex items-end justify-end p-1.5">
          <span className="font-display font-extrabold text-[13px] leading-none text-[#141414] tracking-tight">
            JS
          </span>
        </div>
      );
    case 'nodejs':
      return (
        <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
          <path
            d="M20 4L33.5 11.8V27.4L20 35.2L6.5 27.4V11.8L20 4Z"
            fill="#539E43"
            fillOpacity="0.18"
            stroke="#68A063"
            strokeWidth="1.8"
          />
          <text
            x="20"
            y="23.5"
            textAnchor="middle"
            fill="#83CD29"
            fontSize="10.5"
            fontWeight="700"
            fontFamily="Inter, sans-serif"
          >
            JS
          </text>
        </svg>
      );
    case 'express':
      return (
        <div className="w-9 h-9 rounded-md bg-[#252525] border border-[#383838] flex items-center justify-center">
          <span className="font-display font-semibold text-[15px] tracking-tight text-[#f0f0f0]">
            ex
          </span>
        </div>
      );
    case 'mongodb':
      return (
        <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
          <path
            d="M20 5C20 5 11.5 13 11.5 22C11.5 28.5 16.2 32.8 20 34.5C23.8 32.8 28.5 28.5 28.5 22C28.5 13 20 5 20 5Z"
            fill="#00ED64"
            fillOpacity="0.2"
            stroke="#00ED64"
            strokeWidth="1.8"
          />
          <path d="M20 11V35.5" stroke="#00ED64" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'mysql':
      return (
        <div className="w-9 h-9 rounded-md bg-[#00758F]/20 border border-[#00758F]/60 flex flex-col items-center justify-center">
          <span className="font-mono-code font-bold text-[10px] leading-none text-[#5bc0de]">
            SQL
          </span>
          <span className="w-4 h-[2px] bg-[#F29111] mt-1 rounded-full" />
        </div>
      );
    case 'tailwind':
      return (
        <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
          <path
            d="M20 12C16 12 13.5 14 12.5 18C14 16 15.8 15.2 17.8 15.7C19 16 19.8 16.9 20.8 17.9C22.3 19.4 24 21 27.5 21C31.5 21 34 19 35 15C33.5 17 31.7 17.8 29.7 17.3C28.5 17 27.7 16.1 26.7 15.1C25.2 13.6 23.5 12 20 12ZM12.5 21C8.5 21 6 23 5 27C6.5 25 8.3 24.2 10.3 24.7C11.5 25 12.3 25.9 13.3 26.9C14.8 28.4 16.5 30 20 30C24 30 26.5 28 27.5 24C26 26 24.2 26.8 22.2 26.3C21 26 20.2 25.1 19.2 24.1C17.7 22.6 16 21 12.5 21Z"
            fill="#38BDF8"
          />
        </svg>
      );
    case 'aws':
      return (
        <div className="w-9 h-9 rounded-md bg-[#232F3E] border border-[#36475d] flex flex-col items-center justify-center px-1">
          <span className="font-display font-bold text-[11px] leading-none text-white tracking-tight">
            aws
          </span>
          <svg viewBox="0 0 28 7" className="w-6 h-2 mt-0.5" fill="none">
            <path
              d="M2 2C8.5 6 19.5 6 26 2"
              stroke="#FF9900"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path d="M23.5 1.3L26.3 1.9L25.2 4.5" stroke="#FF9900" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </div>
      );
    case 'git':
      return (
        <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
          <rect
            x="20"
            y="6"
            width="19.8"
            height="19.8"
            rx="3"
            transform="rotate(45 20 6)"
            fill="#F05032"
          />
          <circle cx="20" cy="15" r="2.1" fill="white" />
          <circle cx="20" cy="25" r="2.1" fill="white" />
          <circle cx="25" cy="20" r="2.1" fill="white" />
          <path d="M20 15V25M20 15L25 20" stroke="white" strokeWidth="1.8" />
        </svg>
      );
    case 'n8n':
      return (
        <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
          <circle cx="10" cy="20" r="3.2" stroke="#EA4B71" strokeWidth="2" fill="#1b1b1b" />
          <circle cx="21" cy="14" r="3.2" stroke="#EA4B71" strokeWidth="2" fill="#1b1b1b" />
          <circle cx="21" cy="26" r="3.2" stroke="#EA4B71" strokeWidth="2" fill="#1b1b1b" />
          <circle cx="31" cy="20" r="3.2" fill="#EA4B71" />
          <path
            d="M13.2 19L17.8 15.2M13.2 21L17.8 24.8M24.2 15.2L28 18.5M24.2 24.8L28 21.5"
            stroke="#EA4B71"
            strokeWidth="1.8"
          />
        </svg>
      );
    case 'security':
      return (
        <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
          <path
            d="M20 6L31 10.5V19.5C31 26.8 26.2 32.3 20 34.5C13.8 32.3 9 26.8 9 19.5V10.5L20 6Z"
            fill="#b8c96c"
            fillOpacity="0.16"
            stroke="#b8c96c"
            strokeWidth="1.8"
          />
          <path
            d="M15.5 20.2L18.6 23.2L24.8 17"
            stroke="#d9e893"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
};
