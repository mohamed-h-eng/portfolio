import React, { useEffect, useRef, useState } from 'react';

const LINE_HEIGHT_PX = 24;
const TOP_PADDING_PX = 20;

export const LineGutter: React.FC = () => {
  const gutterRef = useRef<HTMLDivElement | null>(null);
  const [lineCount, setLineCount] = useState<number>(60);

  useEffect(() => {
    const el = gutterRef.current;
    if (!el) return;

    const measure = () => {
      const h = el.clientHeight;
      const calculated = Math.max(20, Math.floor((h - TOP_PADDING_PX) / LINE_HEIGHT_PX));
      setLineCount((prev) => (prev === calculated ? prev : calculated));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={gutterRef}
      aria-hidden="true"
      className="relative hidden sm:block w-10 md:w-12 shrink-0 border-r border-[#212121] bg-[#161616] select-none overflow-hidden"
    >
      <div className="absolute inset-0 pt-5 pr-2.5 flex flex-col items-end text-[#4d4d4d] font-mono-code text-[10.5px] overflow-hidden">
        {Array.from({ length: lineCount }, (_, idx) => (
          <span
            key={idx + 1}
            style={{ height: `${LINE_HEIGHT_PX}px`, lineHeight: `${LINE_HEIGHT_PX}px` }}
            className="block shrink-0"
          >
            {idx + 1}
          </span>
        ))}
      </div>
    </div>
  );
};
