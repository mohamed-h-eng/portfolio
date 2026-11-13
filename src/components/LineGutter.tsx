import React, { useEffect, useState } from 'react';

interface LineGutterProps {
  contentRef: React.RefObject<HTMLDivElement | null>;
}

const LINE_HEIGHT_PX = 24;

export const LineGutter: React.FC<LineGutterProps> = ({ contentRef }) => {
  const [lineCount, setLineCount] = useState<number>(120);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const measure = () => {
      const h = el.offsetHeight;
      const calculated = Math.max(45, Math.ceil(h / LINE_HEIGHT_PX));
      setLineCount(calculated);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    window.addEventListener('resize', measure);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [contentRef]);

  return (
    <div
      aria-hidden="true"
      className="hidden sm:flex flex-col items-end w-10 md:w-12 shrink-0 pt-5 pr-2.5 border-r border-[#212121] bg-[#161616] text-[#4d4d4d] font-mono-code text-[10.5px] select-none overflow-hidden"
    >
      {Array.from({ length: lineCount }, (_, idx) => (
        <span
          key={idx + 1}
          style={{ height: `${LINE_HEIGHT_PX}px`, lineHeight: `${LINE_HEIGHT_PX}px` }}
          className="block"
        >
          {idx + 1}
        </span>
      ))}
    </div>
  );
};
