import React from 'react';

interface LivingHeadlineProps {
  pointerOffset?: { x: number; y: number };
  isReducedMotion?: boolean;
}

interface WordChunk {
  word: string;
  isAccent?: boolean;
}

export const LivingHeadline: React.FC<LivingHeadlineProps> = ({
  pointerOffset = { x: 0, y: 0 },
  isReducedMotion = false,
}) => {
  const words: WordChunk[] = [
    { word: 'Your' },
    { word: 'Goals' },
    { word: 'Deserve' },
    { word: 'More' },
    { word: 'Than' },
    { word: 'a' },
    { word: 'To-Do', isAccent: true },
    { word: 'List.', isAccent: true },
  ];

  // Optical depth response: max 2px horizontal, 1px vertical, 0.15deg rotation
  const opticalX = isReducedMotion ? 0 : pointerOffset.x * 2;
  const opticalY = isReducedMotion ? 0 : pointerOffset.y * 1;
  const opticalRotate = isReducedMotion ? 0 : pointerOffset.x * 0.15;

  let globalCharIndex = 0;

  return (
    <h1
      aria-label="Your Goals Deserve More Than a To-Do List."
      className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#102A4C] dark:text-white leading-[1.15] tracking-tight mb-6 text-balance select-none"
      style={{
        transform: `translate3d(${opticalX.toFixed(2)}px, ${opticalY.toFixed(
          2
        )}px, 0) rotate(${opticalRotate.toFixed(3)}deg)`,
        willChange: 'transform',
      }}
    >
      {words.map((chunk, wordIdx) => {
        const letters = Array.from(chunk.word);
        const startIndex = globalCharIndex;
        globalCharIndex += letters.length;

        return (
          <span
            key={wordIdx}
            className={`inline-block whitespace-nowrap mr-[0.27em] last:mr-0 ${
              chunk.isAccent ? 'text-[#1D70E2] dark:text-[#60A5FA]' : ''
            }`}
          >
            {letters.map((char, charIdx) => {
              const charNum = startIndex + charIdx;
              // 450ms base delay, 22ms per character stagger
              const delayMs = isReducedMotion ? 0 : 450 + charNum * 22;

              return (
                <span
                  key={charIdx}
                  className="inline-block"
                  style={
                    isReducedMotion
                      ? undefined
                      : {
                          opacity: 0,
                          transform: 'translateY(11px)',
                          animation: `char-settle 550ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                          animationDelay: `${delayMs}ms`,
                        }
                  }
                >
                  {char}
                </span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
};
