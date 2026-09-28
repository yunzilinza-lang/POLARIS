import React, { useState } from 'react';
import { ArrowRight, Check, Sun, User, Users } from 'lucide-react';
import { PolarisLogo } from './PolarisLogo';
import { SparkleIcon, CurvedArrowDownRight } from './SparkleIcon';
import smartBraceletHeroImg from '../assets/images/polaris_smart_bracelet_main_1790587875571.jpg';

interface HeroProps {
  onOpenResearch: () => void;
  onExploreClick: () => void;
}

interface ScheduleItem {
  id: string;
  title: string;
  time: string;
  color: string;
  done: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenResearch,
  onExploreClick,
}) => {
  const [schedule, setSchedule] = useState<ScheduleItem[]>([
    {
      id: '1',
      title: 'Study for exam',
      time: '08:00 - 10:00',
      color: 'bg-amber-400',
      done: false,
    },
    {
      id: '2',
      title: 'Gym',
      time: '16:00 - 17:00',
      color: 'bg-orange-400',
      done: false,
    },
    {
      id: '3',
      title: 'Team meeting',
      time: '19:00 - 20:00',
      color: 'bg-blue-500',
      done: false,
    },
  ]);

  const toggleScheduleItem = (id: string) => {
    setSchedule((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );
  };

  return (
    <section
      id="home"
      className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden"
    >
      {/* Playful Floating Sparkles */}
      <div className="absolute top-10 left-[8%] text-[#A3C4EB] dark:text-[#385B87] pointer-events-none animate-pulse-subtle">
        <PolarisLogo size={24} />
      </div>
      <div className="absolute top-1/2 left-[48%] text-[#FFDE70] opacity-80 pointer-events-none animate-float-slow">
        <SparkleIcon size={18} />
      </div>
      <div className="absolute bottom-12 right-[10%] text-[#A3C4EB] dark:text-[#385B87] pointer-events-none animate-float-gentle">
        <PolarisLogo size={22} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy, CTAs, Proof */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1EEFB] dark:bg-[#182C48] text-[#0E529F] dark:text-[#90CDF4] text-xs font-bold tracking-wide mb-6 border border-[#C5DCF5] dark:border-[#223E63]">
              <PolarisLogo size={14} />
              <span>Your Goals. Our Compass.</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#102A4C] dark:text-white leading-[1.15] tracking-tight mb-6 text-balance">
              Your Goals Deserve More Than a{' '}
              <span className="text-[#1D70E2] dark:text-[#60A5FA]">
                To-Do List.
              </span>
            </h1>

            {/* Subtitle description */}
            <p className="text-base sm:text-lg text-[#2B4769] dark:text-[#A0B8D4] leading-relaxed max-w-xl mb-8 font-normal">
              Polaris membantu kamu menghubungkan aktivitas harian dengan tujuan
              jangka panjang, melihat progres secara visual, dan mengambil
              keputusan yang lebih intensional.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                type="button"
                onClick={onExploreClick}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FFDE70] hover:bg-[#FCD34D] text-[#102A4C] font-bold text-base transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Explore Polaris</span>
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                onClick={onOpenResearch}
                className="w-full sm:w-auto flex items-center justify-center px-6 py-3.5 rounded-full bg-white/90 dark:bg-[#14263E]/80 hover:bg-white dark:hover:bg-[#182D4B] text-[#102A4C] dark:text-[#D1E3F8] font-bold text-base border-2 border-[#BED6F3] dark:border-[#2A476E] transition-all duration-200 hover:border-[#102A4C] dark:hover:border-[#60A5FA] cursor-pointer shadow-2xs"
              >
                Join Our User Research
              </button>
            </div>

            {/* Stacked Social Proof */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-[#0B1526] object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Student user"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-[#0B1526] object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Professional user"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-[#0B1526] object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Young leader"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-[#0B1526] object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Active member"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-xs sm:text-sm text-[#3B5A7D] dark:text-[#90A9C6] leading-snug">
                Join <strong className="text-[#102A4C] dark:text-white font-bold">5,000+</strong> students and young professionals who are building their best future with Polaris.
              </p>
            </div>
          </div>

          {/* Right Column: 3D Smartwatch Stage + Floating Cards */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px]">
            {/* Soft Ambient Stationary Radial Backdrop */}
            <div className="absolute w-[360px] sm:w-[460px] h-[360px] sm:h-[460px] rounded-full bg-gradient-to-tr from-[#A3C4EB]/40 to-[#FFDE70]/30 dark:from-[#173B64]/40 dark:to-[#1E3B60]/20 blur-3xl -z-10" />

            {/* Handwritten script note: "Small steps, Big dreams" */}
            <div className="absolute -top-3 right-4 sm:right-16 z-20 flex flex-col items-center rotate-6 pointer-events-none">
              <span className="font-handwriting text-2xl sm:text-3xl font-bold text-[#102A4C] dark:text-[#D5E5F7] tracking-wide">
                Small steps<br />Big dreams
              </span>
              <CurvedArrowDownRight className="text-[#102A4C] dark:text-[#D5E5F7] -mt-1 ml-4" />
            </div>

            {/* Stationary Base Stage with Smooth Floating 3D Smartwatch */}
            <div className="relative w-[300px] sm:w-[360px] md:w-[400px] aspect-square flex items-center justify-center">
              {/* Stationary Pedestal Backdrop Shadow */}
              <div className="absolute bottom-4 w-56 h-10 bg-[#0E2849]/15 dark:bg-black/40 rounded-full blur-xl animate-shadow-breathe" />

              {/* Floating Smartwatch Object (Watch floating gently while base stays still) */}
              <div className="relative w-full h-full rounded-[40px] overflow-hidden drop-shadow-2xl transition-transform duration-500 hover:scale-[1.03] animate-float-slow">
                <img
                  src={smartBraceletHeroImg}
                  alt="Polaris Smart Bracelet - Your Personal Life Companion"
                  className="w-full h-full object-cover rounded-[36px]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Floating Card Top-Left: "Today" Schedule */}
            <div className="absolute -top-4 sm:top-2 -left-2 sm:left-2 z-20 w-[190px] sm:w-[220px] bg-white dark:bg-[#13233A]/95 backdrop-blur-md rounded-[24px] p-4 shadow-xl border border-[#D5E5F7] dark:border-[#223955] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-float-gentle">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-extrabold text-[#102A4C] dark:text-white uppercase tracking-wider">
                  Today
                </span>
                <span className="text-[10px] text-[#4A6D95] dark:text-[#8AA6C7] font-semibold">
                  3 agenda
                </span>
              </div>

              <div className="space-y-2.5">
                {schedule.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleScheduleItem(item.id)}
                    className="w-full flex items-start gap-2.5 text-left group cursor-pointer"
                  >
                    <div className="pt-0.5">
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${item.color} ${
                          item.done ? 'ring-2 ring-emerald-500 scale-90' : ''
                        } transition-all duration-200`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className={`text-xs font-bold leading-tight truncate transition-colors ${
                          item.done
                            ? 'line-through text-slate-400 dark:text-slate-500'
                            : 'text-[#102A4C] dark:text-white group-hover:text-[#1D70E2]'
                        }`}
                      >
                        {item.title}
                      </div>
                      <div className="text-[10px] text-[#4A6D95] dark:text-[#88A6C7] font-medium">
                        {item.time}
                      </div>
                    </div>
                    {item.done && (
                      <Check size={12} className="text-emerald-500 shrink-0 mt-0.5" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Floating Stat Cards Stacked on Right */}
            <div className="absolute -bottom-6 sm:bottom-4 -right-2 sm:right-0 z-20 flex flex-col gap-2.5 sm:gap-3 w-[180px] sm:w-[210px]">
              {/* Stat 1 */}
              <div className="flex items-center gap-3 p-3 bg-white dark:bg-[#13233A]/95 backdrop-blur-md rounded-[20px] shadow-lg border border-[#D5E5F7] dark:border-[#223955] transition-transform hover:-translate-x-1 duration-200">
                <div className="w-9 h-9 rounded-full bg-[#E1EEFB] dark:bg-[#1C3352] text-[#0E529F] dark:text-[#90CDF4] flex items-center justify-center shrink-0">
                  <Sun size={18} />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#102A4C] dark:text-white leading-tight">
                    150+
                  </div>
                  <div className="text-[10px] text-[#4A6D95] dark:text-[#95AFD0] font-medium">
                    Hours of Content
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3 p-3 bg-white dark:bg-[#13233A]/95 backdrop-blur-md rounded-[20px] shadow-lg border border-[#D5E5F7] dark:border-[#223955] transition-transform hover:-translate-x-1 duration-200">
                <div className="w-9 h-9 rounded-full bg-[#D8E8F8] dark:bg-[#1C375C] text-[#102A4C] dark:text-[#A3C4EB] flex items-center justify-center shrink-0">
                  <User size={18} />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#102A4C] dark:text-white leading-tight">
                    50+
                  </div>
                  <div className="text-[10px] text-[#4A6D95] dark:text-[#95AFD0] font-medium">
                    Top Experts
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-3 p-3 bg-white dark:bg-[#13233A]/95 backdrop-blur-md rounded-[20px] shadow-lg border border-[#D5E5F7] dark:border-[#223955] transition-transform hover:-translate-x-1 duration-200">
                <div className="w-9 h-9 rounded-full bg-[#102A4C] text-[#FFDE70] flex items-center justify-center shrink-0 shadow-xs">
                  <Users size={18} />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#102A4C] dark:text-white leading-tight">
                    5,000+
                  </div>
                  <div className="text-[10px] text-[#4A6D95] dark:text-[#95AFD0] font-medium">
                    Active Members
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
