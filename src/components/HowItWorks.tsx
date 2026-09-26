import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SparkleStarOutline } from './SparkleIcon';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3); // 3: Visualize is active by default as requested

  const steps = [
    {
      num: 1,
      title: 'Set Goals',
      desc: 'Tentukan tujuanmu dan buat rencana.',
    },
    {
      num: 2,
      title: 'Track',
      desc: 'Catat aktivitas dan kebiasaan harian.',
    },
    {
      num: 3,
      title: 'Visualize',
      desc: 'Lihat progres dan keseimbangan hidup.',
      highlight: true,
    },
    {
      num: 4,
      title: 'Reflect',
      hasDot: true,
      desc: 'Evaluasi dan temukan insight baru.',
    },
    {
      num: 5,
      title: 'Take Action',
      desc: 'Ambil langkah nyata menuju tujuanmu.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Handwriting Note */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E1EEFB] dark:bg-[#182C48] text-[#0E529F] dark:text-[#90CDF4] text-xs font-bold tracking-wide mb-4 border border-[#C5DCF5] dark:border-[#223E63]">
              <span>How It Works</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A4C] dark:text-white leading-tight tracking-tight">
              5 Langkah Menuju Hidup <br className="hidden sm:inline" />
              yang Lebih Terarah
            </h2>
          </div>

          {/* Handwritten Annotation top right: "Progress not perfection ✦" */}
          <div className="flex items-center gap-2 rotate-[-5deg] self-end md:self-auto select-none">
            <span className="font-handwriting text-2xl sm:text-3xl font-bold text-[#102A4C] dark:text-[#D5E5F7]">
              Progress not perfection
            </span>
            <div className="text-[#D97706] dark:text-[#FFDE70] rotate-12">
              <SparkleStarOutline size={22} />
            </div>
          </div>
        </div>

        {/* 5 Horizontal Steps with Connecting Arrows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => {
            const isHighlight = step.num === activeStep;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(step.num)}
                className={`group relative flex flex-col p-6 rounded-[28px] transition-all duration-300 cursor-pointer ${
                  isHighlight
                    ? 'bg-white dark:bg-[#13243B] border-2 border-[#FFDE70] shadow-xl -translate-y-2'
                    : 'bg-white dark:bg-[#102035]/70 hover:bg-white dark:hover:bg-[#13243B] border border-[#D5E5F7] dark:border-[#1E3656] shadow-xs hover:shadow-md'
                }`}
              >
                {/* Number Circle and Title */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-extrabold text-sm transition-all duration-300 ${
                      isHighlight
                        ? 'bg-[#FFDE70] text-[#102A4C] shadow-md ring-4 ring-[#FFDE70]/30'
                        : 'bg-[#E1EEFB] dark:bg-[#1A2F4C] text-[#102A4C] dark:text-[#A3C4EB]'
                    }`}
                  >
                    {step.num}
                  </div>

                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex text-[#8ABAF0] dark:text-[#385B87]">
                      <ArrowRight size={18} />
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-1.5 mb-2">
                  <h3 className="text-lg font-bold text-[#102A4C] dark:text-white">
                    {step.title}
                  </h3>
                  {step.hasDot && (
                    <span className="w-2 h-2 rounded-full bg-[#1D70E2] inline-block" />
                  )}
                </div>

                <p className="text-sm text-[#2B4769] dark:text-[#90A9C5] leading-relaxed font-medium">
                  {step.desc}
                </p>

                {isHighlight && (
                  <div className="mt-4 pt-3 border-t border-[#FFDE70]/40 flex items-center gap-1 text-[11px] font-bold text-[#B45309] dark:text-[#FFDE70]">
                    <span>✦ Langkah Utama</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
