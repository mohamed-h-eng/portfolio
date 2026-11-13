import React from 'react';

interface WatermarkBannerProps {
  topWord: string;
  bottomWord: string;
  invertColumns?: boolean;
}

export const WatermarkBanner: React.FC<WatermarkBannerProps> = ({
  topWord,
  bottomWord,
  invertColumns = false,
}) => {
  return (
    <div
      aria-hidden="true"
      className="my-16 sm:my-20 py-6 border-y border-[#212121] select-none overflow-hidden"
    >
      {!invertColumns ? (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-6 flex flex-col gap-3">
            <span className="font-display font-black text-[56px] sm:text-[78px] lg:text-[96px] leading-[0.86] tracking-[-0.04em] text-[#232323] uppercase">
              {topWord}
            </span>
            <div className="h-5 w-full max-w-[340px] diagonal-hatch opacity-85" />
          </div>
          <div className="md:col-span-6 flex flex-col md:items-end gap-3">
            <div className="h-5 w-full max-w-[340px] diagonal-hatch opacity-85" />
            <span className="font-display font-black text-[56px] sm:text-[78px] lg:text-[96px] leading-[0.86] tracking-[-0.04em] text-[#232323] uppercase">
              {bottomWord}
            </span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-6 flex flex-col gap-3 order-2 md:order-1">
            <div className="h-5 w-full max-w-[340px] diagonal-hatch opacity-85" />
            <span className="font-display font-black text-[56px] sm:text-[78px] lg:text-[96px] leading-[0.86] tracking-[-0.04em] text-[#232323] uppercase">
              {bottomWord}
            </span>
          </div>
          <div className="md:col-span-6 flex flex-col md:items-end gap-3 order-1 md:order-2">
            <span className="font-display font-black text-[56px] sm:text-[78px] lg:text-[96px] leading-[0.86] tracking-[-0.04em] text-[#232323] uppercase">
              {topWord}
            </span>
            <div className="h-5 w-full max-w-[340px] diagonal-hatch opacity-85" />
          </div>
        </div>
      )}
    </div>
  );
};
