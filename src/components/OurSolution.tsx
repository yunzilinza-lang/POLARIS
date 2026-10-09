import React, { useState } from 'react';
import { Target, CheckSquare, Sparkles, ArrowRight } from 'lucide-react';
import { SparkleIcon } from './SparkleIcon';

import { PixelRobotAvatar } from './PixelRobotAvatar';

interface OurSolutionProps {
  onExploreClick: () => void;
}

export const OurSolution: React.FC<OurSolutionProps> = ({ onExploreClick }) => {
  const [activeNode, setActiveNode] = useState<string>('goal');

  const nodes = [
    {
      id: 'goal',
      title: 'Goal Setting',
      icon: <Target size={22} className="text-[#0E529F] dark:text-[#90CDF4]" />,
      desc: 'Tetapkan sasaran semester, OKR pribadi, dan milestones jangka panjang.',
    },
    {
      id: 'activity',
      title: 'Activity Tracking',
      icon: <CheckSquare size={22} className="text-[#0E529F] dark:text-[#90CDF4]" />,
      desc: 'Log aktivitas belajar, gym, istirahat, dan tugas harian tanpa ribet.',
    },
    {
      id: 'reflection',
      title: 'Reflection',
      icon: <Sparkles size={22} className="text-[#0E529F] dark:text-[#90CDF4]" />,
      desc: 'Evaluasi mingguan berbasis AI untuk memahami apa yang benar-benar bermakna.',
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EAF2FC] dark:bg-[#0D1E33] rounded-[36px] md:rounded-[44px] p-8 sm:p-12 lg:p-16 border border-[#CFE1F5] dark:border-[#1C3555] transition-colors duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#162B46] text-[#0E529F] dark:text-[#90CDF4] text-xs font-bold tracking-wide mb-5 border border-[#BED6F3] dark:border-[#203D62] shadow-2xs">
                <span>Our Solution</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A4C] dark:text-white leading-[1.2] tracking-tight mb-6 text-balance">
                Satu Ekosistem, <br />
                Banyak Kemungkinan
              </h2>

              <p className="text-base sm:text-lg text-[#2B4769] dark:text-[#A1B8D4] leading-relaxed mb-8 max-w-xl font-normal">
                Polaris adalah ekosistem manajemen hidup berbasis tujuan yang
                menggabungkan goal-setting, activity tracking, dan refleksi.
                Semua dalam satu tempat, untuk membantu kamu hidup lebih seimbang
                dan bermakna.
              </p>

              <button
                type="button"
                onClick={onExploreClick}
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FFDE70] hover:bg-[#FCD34D] text-[#102A4C] font-bold text-base transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Explore Polaris</span>
                <ArrowRight size={18} />
              </button>

              {/* Active node explanation box */}
              <div className="mt-8 p-4 rounded-2xl bg-white dark:bg-[#12233B]/90 border border-[#BED6F3] dark:border-[#1E3758] max-w-md shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-[#102A4C] dark:text-white mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1D70E2]" />
                  <span>
                    {nodes.find((n) => n.id === activeNode)?.title}
                  </span>
                </div>
                <p className="text-xs text-[#3B5A7E] dark:text-[#95AFD0] font-medium leading-relaxed">
                  {nodes.find((n) => n.id === activeNode)?.desc}
                </p>
              </div>
            </div>

            {/* Right Column: Circular Diagram with central smartwatch & orbiting nodes */}
            <div className="lg:col-span-6 relative flex items-center justify-center py-8 overflow-hidden sm:overflow-visible">
              {/* Outer circular constellation container */}
              <div className="relative w-[290px] sm:w-[380px] h-[290px] sm:h-[380px] max-w-full flex items-center justify-center">
                {/* SVG connection arrows */}
                <svg
                  viewBox="0 0 400 400"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                >
                  <circle
                    cx="200"
                    cy="200"
                    r="125"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="text-[#ADCFF5] dark:text-[#25436B]"
                  />
                  {/* Subtle directional arcs */}
                  <path
                    d="M 200 75 A 125 125 0 0 1 315 240"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-[#8ABAF0] dark:text-[#386299]"
                    markerEnd="url(#arrowhead)"
                  />
                  <path
                    d="M 305 255 A 125 125 0 0 1 95 255"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-[#8ABAF0] dark:text-[#386299]"
                  />
                  <path
                    d="M 85 240 A 125 125 0 0 1 200 75"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-[#8ABAF0] dark:text-[#386299]"
                  />
                </svg>

                {/* Center Polaris Band Companion Hub */}
                <div className="relative w-[125px] sm:w-[155px] h-[125px] sm:h-[155px] rounded-full bg-[#0E1A2D] shadow-2xl border-4 border-[#FFDE70]/30 dark:border-[#223B5C] flex flex-col items-center justify-center text-center p-2 sm:p-2.5 text-white z-10 transition-transform duration-300 hover:scale-105">
                  <div className="mb-0.5">
                    <PixelRobotAvatar emotion="happy" size={30} />
                  </div>
                  <span className="text-[11px] sm:text-xs font-extrabold tracking-tight text-[#FFDE70] leading-tight">
                    Polaris Band
                  </span>
                  <span className="text-[8.5px] sm:text-[9px] text-[#A0B8D4] leading-tight mt-0.5 max-w-[85px] sm:max-w-[90px] font-medium">
                    You're closer than you think!
                  </span>
                </div>

                {/* Node 1: Top (Goal Setting) */}
                <button
                  type="button"
                  onClick={() => setActiveNode('goal')}
                  className={`absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer transition-all duration-300 z-10 ${
                    activeNode === 'goal' ? 'scale-110' : 'hover:scale-105'
                  }`}
                >
                  <div
                    className={`w-13 h-13 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                      activeNode === 'goal'
                        ? 'bg-white dark:bg-[#1A3456] ring-4 ring-[#1D70E2]/40 shadow-xl'
                        : 'bg-white dark:bg-[#152943] border border-[#BED6F3] dark:border-[#213D62]'
                    }`}
                  >
                    <Target size={22} className="text-[#0E529F] dark:text-[#90CDF4]" />
                  </div>
                  <span className="mt-1 text-[11px] sm:text-xs font-bold text-[#102A4C] dark:text-white whitespace-nowrap bg-white dark:bg-[#12233B]/90 px-2 sm:px-2.5 py-0.5 rounded-full shadow-2xs border border-[#BED6F3] dark:border-transparent">
                    Goal Setting
                  </span>
                </button>

                {/* Node 2: Bottom-Left (Activity Tracking) */}
                <button
                  type="button"
                  onClick={() => setActiveNode('activity')}
                  className={`absolute bottom-3 left-1 sm:left-6 flex flex-col items-center group cursor-pointer transition-all duration-300 z-10 ${
                    activeNode === 'activity' ? 'scale-110' : 'hover:scale-105'
                  }`}
                >
                  <div
                    className={`w-13 h-13 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                      activeNode === 'activity'
                        ? 'bg-white dark:bg-[#1A3456] ring-4 ring-[#1D70E2]/40 shadow-xl'
                        : 'bg-white dark:bg-[#152943] border border-[#BED6F3] dark:border-[#213D62]'
                    }`}
                  >
                    <CheckSquare size={22} className="text-[#0E529F] dark:text-[#90CDF4]" />
                  </div>
                  <span className="mt-1 text-[11px] sm:text-xs font-bold text-[#102A4C] dark:text-white whitespace-nowrap bg-white dark:bg-[#12233B]/90 px-2 sm:px-2.5 py-0.5 rounded-full shadow-2xs border border-[#BED6F3] dark:border-transparent">
                    Activity Tracking
                  </span>
                </button>

                {/* Node 3: Bottom-Right (Reflection) */}
                <button
                  type="button"
                  onClick={() => setActiveNode('reflection')}
                  className={`absolute bottom-3 right-1 sm:right-6 flex flex-col items-center group cursor-pointer transition-all duration-300 z-10 ${
                    activeNode === 'reflection' ? 'scale-110' : 'hover:scale-105'
                  }`}
                >
                  <div
                    className={`w-13 h-13 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                      activeNode === 'reflection'
                        ? 'bg-white dark:bg-[#1A3456] ring-4 ring-[#1D70E2]/40 shadow-xl'
                        : 'bg-white dark:bg-[#152943] border border-[#BED6F3] dark:border-[#213D62]'
                    }`}
                  >
                    <Sparkles size={22} className="text-[#0E529F] dark:text-[#90CDF4]" />
                  </div>
                  <span className="mt-1 text-[11px] sm:text-xs font-bold text-[#102A4C] dark:text-white whitespace-nowrap bg-white dark:bg-[#12233B]/90 px-2 sm:px-2.5 py-0.5 rounded-full shadow-2xs border border-[#BED6F3] dark:border-transparent">
                    Reflection
                  </span>
                </button>

                {/* Handwritten note placed cleanly on the left side next to Goal Setting (Desktop only to prevent mobile overflow) */}
                <div className="hidden sm:flex absolute -top-6 -left-4 sm:-left-10 lg:-left-16 z-20 flex-col items-center rotate-[-6deg] pointer-events-none select-none">
                  <span className="font-handwriting text-2xl sm:text-3xl font-bold text-[#102A4C] dark:text-[#D5E5F7] tracking-wide whitespace-nowrap">
                    Your goals, <br />
                    our compass
                  </span>
                  <svg
                    viewBox="0 0 70 35"
                    fill="none"
                    className="w-14 h-7 text-[#102A4C] dark:text-[#D5E5F7] stroke-current -mt-1 ml-6"
                  >
                    <path
                      d="M 10 10 C 25 25, 45 28, 58 18"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 50 14 L 60 18 L 54 26"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
