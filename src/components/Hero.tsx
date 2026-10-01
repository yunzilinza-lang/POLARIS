import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Check,
  Sun,
  User,
  Users,
  Bell,
  Bot,
  Mic,
  ShieldAlert,
  Sparkles,
  Layers,
  Radio,
} from 'lucide-react';
import { PolarisLogo } from './PolarisLogo';
import { SparkleIcon, CurvedArrowDownRight } from './SparkleIcon';
import { PixelRobotAvatar, PixelEmotion } from './PixelRobotAvatar';
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
  // Motion sequence stage:
  // 0: Black / quiet (0ms)
  // 1: Pixel display awakens (150ms)
  // 2: Time "10:24" & "Mon, 12 May" & touch ring appear (350ms)
  // 3: Product reveals (500ms)
  // 4: Polaris logo appears (650ms)
  // 5: "Smart Bracelet" headline reveals (800ms)
  // 6: "Your Personal Life Companion" reveals (950ms)
  // 7: Description appears (1100ms)
  // 8: Features list appears (1250ms)
  // 9: CTA & cards settle (1500ms)
  // 10: Everything becomes calm & settled (2200ms)
  const [motionStage, setMotionStage] = useState<number>(0);
  const [pixelEmotion, setPixelEmotion] = useState<PixelEmotion>('normal');
  const [show3DRender, setShow3DRender] = useState<boolean>(false);

  // Subtle pointer parallax offset on desktop
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement | null>(null);

  // Existing schedule checklist in floating card
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

  // Choreographed Master Motion Sequence
  useEffect(() => {
    // Respect user's accessibility reduced motion preference
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;
      if (prefersReducedMotion) {
        setMotionStage(10);
        return;
      }
    }

    const timers: NodeJS.Timeout[] = [];

    // Sequence timing milestones
    timers.push(setTimeout(() => setMotionStage(1), 150)); // Pixel display wakes
    timers.push(setTimeout(() => setMotionStage(2), 350)); // Time appears
    timers.push(setTimeout(() => setMotionStage(3), 500)); // Product reveals
    timers.push(setTimeout(() => setMotionStage(4), 650)); // Polaris logo
    timers.push(setTimeout(() => setMotionStage(5), 800)); // "Smart Bracelet"
    timers.push(setTimeout(() => setMotionStage(6), 950)); // "Your Personal Life Companion"
    timers.push(setTimeout(() => setMotionStage(7), 1100)); // Description
    timers.push(setTimeout(() => setMotionStage(8), 1250)); // Features
    timers.push(setTimeout(() => setMotionStage(9), 1500)); // CTA & cards
    timers.push(setTimeout(() => setMotionStage(10), 2200)); // Final calm settle

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  // Occasional subtle alive micro-expression on Pixel character after settling
  useEffect(() => {
    if (motionStage < 10) return;
    const interval = setInterval(() => {
      setPixelEmotion('happy');
      const resetTimer = setTimeout(() => {
        setPixelEmotion('normal');
      }, 1400);
      return () => clearTimeout(resetTimer);
    }, 7500);

    return () => clearInterval(interval);
  }, [motionStage]);

  // Subtle desktop pointer parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;
    if (motionStage < 3) return; // Only after product starts revealing
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  // 4 Features with staggered arrival
  const features = [
    { title: 'Smart Reminder', icon: Bell, iconColor: 'text-[#FFDE70]' },
    { title: 'Pixel AI Companion', icon: Bot, iconColor: 'text-sky-400' },
    { title: 'Voice Interaction', icon: Mic, iconColor: 'text-emerald-400' },
    { title: 'SOS', icon: ShieldAlert, iconColor: 'text-rose-400' },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden select-none"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Progressive Typography Reveal                                */}
          {/* ========================================================================= */}
          <div
            className="lg:col-span-6 flex flex-col items-start text-left z-10"
            style={{
              transform: `translate3d(${mouseOffset.x * 1.5}px, ${mouseOffset.y * 1.5}px, 0)`,
              transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* 1. POLARIS Logo & Brand Mark (650ms, translateY: 8px -> 0, opacity: 0 -> 1) */}
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1EEFB] dark:bg-[#182C48] text-[#0E529F] dark:text-[#90CDF4] text-xs font-bold tracking-wide mb-5 border border-[#C5DCF5] dark:border-[#223E63] transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                motionStage >= 4
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-2 opacity-0'
              }`}
            >
              <PolarisLogo size={14} />
              <span className="tracking-widest uppercase font-extrabold text-[11px]">
                POLARIS
              </span>
              <span className="w-1 h-1 rounded-full bg-[#0E529F] dark:bg-[#90CDF4]" />
              <span className="font-semibold text-[#2B4769] dark:text-[#A0B8D4]">
                Your Goals. Our Compass.
              </span>
            </div>

            {/* 2. Headline: "Smart Bracelet" with individual masked word upward reveal (800ms) */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.65rem] font-extrabold text-[#102A4C] dark:text-white leading-[1.12] tracking-tight mb-3">
              {/* Word 1: "Smart" */}
              <span className="inline-block overflow-hidden pb-1 align-bottom">
                <span
                  className={`inline-block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    motionStage >= 5
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-[25px] opacity-0'
                  }`}
                >
                  Smart
                </span>
              </span>{' '}
              {/* Word 2: "Bracelet" follows 75ms later */}
              <span className="inline-block overflow-hidden pb-1 align-bottom">
                <span
                  style={{
                    transitionDelay: '75ms',
                  }}
                  className={`inline-block text-[#1D70E2] dark:text-[#60A5FA] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    motionStage >= 5
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-[25px] opacity-0'
                  }`}
                >
                  Bracelet
                </span>
              </span>
            </h1>

            {/* 3. Subheadline: "Your Personal Life Companion" (950ms, translateY: 12px -> 0) */}
            <div className="overflow-hidden mb-4">
              <h2
                className={`text-xl sm:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#1D70E2] via-[#0E529F] to-sky-600 dark:from-[#FFDE70] dark:via-amber-200 dark:to-sky-300 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  motionStage >= 6
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-3 opacity-0'
                }`}
              >
                Your Personal Life Companion
              </h2>
            </div>

            {/* 4. Description (1100ms, translateY: 10px -> 0, opacity: 0 -> 1) */}
            <p
              className={`text-base sm:text-lg text-[#2B4769] dark:text-[#A0B8D4] leading-relaxed max-w-xl mb-6 font-normal transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                motionStage >= 7
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-2.5 opacity-0'
              }`}
            >
              Polaris Band adalah gelang pintar yang terhubung dengan aplikasi
              Polaris untuk membantu kamu mengelola tujuan, jadwal, dan
              keseimbangan hidup — dengan notifikasi, suara, dan AI assistant
              yang selalu siap mendukung.
            </p>

            {/* 5. Feature List: Smart Reminder, Pixel AI Companion, Voice Interaction, SOS (1250ms) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 mb-8 w-full max-w-xl">
              {features.map((feat, idx) => {
                const isRevealed = motionStage >= 8;
                return (
                  <div
                    key={feat.title}
                    style={{
                      transitionDelay: `${idx * 80}ms`,
                    }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl bg-[#F0F6FD] dark:bg-[#13233A] border border-[#D5E5F7] dark:border-[#223955] text-xs font-semibold text-[#102A4C] dark:text-slate-200 shadow-2xs transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isRevealed
                        ? 'translate-x-0 opacity-100'
                        : '-translate-x-2 opacity-0'
                    }`}
                  >
                    <feat.icon size={15} className={feat.iconColor} />
                    <span className="truncate">{feat.title}</span>
                  </div>
                );
              })}
            </div>

            {/* 6. Action Buttons / CTA (1500ms, translateY: 10px -> 0) */}
            <div
              className={`flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                motionStage >= 9
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-2.5 opacity-0'
              }`}
            >
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
            <div
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-1 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                motionStage >= 9
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-2 opacity-0'
              }`}
            >
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
                Join{' '}
                <strong className="text-[#102A4C] dark:text-white font-bold">
                  5,000+
                </strong>{' '}
                students and young professionals who are building their best
                future with Polaris.
              </p>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: Cinematic Polaris Smart Bracelet Wakes Up Sequence          */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[480px] sm:min-h-[540px]">
            {/* Soft Ambient Radial Light Backdrop (Expands at 500ms when product reveals) */}
            <div
              className={`absolute w-[360px] sm:w-[460px] h-[360px] sm:h-[460px] rounded-full bg-gradient-to-tr from-[#A3C4EB]/40 to-[#FFDE70]/30 dark:from-[#173B64]/50 dark:to-[#1E3B60]/30 blur-3xl -z-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                motionStage >= 3 ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
              }`}
              style={{
                transform: `translate3d(${mouseOffset.x * 5}px, ${mouseOffset.y * 5}px, 0)`,
              }}
            />

            {/* Handwritten script note: "Small steps, Big dreams" (Arrives with cards at 1500ms) */}
            <div
              className={`absolute -top-3 right-4 sm:right-16 z-20 flex flex-col items-center rotate-6 pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                motionStage >= 9
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-3'
              }`}
            >
              <span className="font-handwriting text-2xl sm:text-3xl font-bold text-[#102A4C] dark:text-[#D5E5F7] tracking-wide">
                Small steps<br />Big dreams
              </span>
              <CurvedArrowDownRight className="text-[#102A4C] dark:text-[#D5E5F7] -mt-1 ml-4" />
            </div>

            {/* Stage Container: Physical Polaris Smart Bracelet */}
            <div
              className="relative w-full max-w-[340px] sm:max-w-[380px] flex flex-col items-center justify-center"
              style={{
                transform: `translate3d(${mouseOffset.x * 3}px, ${mouseOffset.y * 3}px, 0)`,
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Pedestal Ground Shadow */}
              <div
                className={`absolute bottom-2 w-52 sm:w-60 h-8 bg-[#0E2849]/20 dark:bg-black/50 rounded-full blur-xl transition-all duration-1000 ${
                  motionStage >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                } ${motionStage >= 10 ? 'animate-shadow-breathe' : ''}`}
              />

              {/* PRODUCT REVEAL (500ms):
                  opacity: 0 -> 1
                  transform: translateY(20px) scale(.97) -> translateY(0) scale(1)
                  cubic-bezier(.16, 1, .3, 1)
                  After settling (motionStage >= 10), ultra-subtle calm float ~3.5px
              */}
              <div
                className={`relative w-full flex flex-col items-center justify-center transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  motionStage >= 3
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-5 scale-[0.97]'
                } ${motionStage >= 10 ? 'animate-bracelet-calm' : ''}`}
              >
                {show3DRender ? (
                  /* Option: 3D Studio Photo Render */
                  <div className="relative w-72 sm:w-80 aspect-square rounded-[36px] overflow-hidden drop-shadow-2xl border border-white/20">
                    <img
                      src={smartBraceletHeroImg}
                      alt="Polaris Smart Bracelet 3D Commercial Render"
                      className="w-full h-full object-cover rounded-[36px]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  /* The Physical Polaris Smart Bracelet with Live Awakening AMOLED Display */
                  <div className="relative flex flex-col items-center justify-center py-2 select-none">
                    {/* Top Ergonomic Curved Silicone Strap in Navy Blue */}
                    <div
                      className={`w-28 sm:w-32 h-14 rounded-t-3xl shadow-lg border-t border-x border-white/20 relative -mb-3 z-0 flex flex-col items-center justify-start pt-2 bg-gradient-to-b from-[#193256] via-[#12233C] to-[#0D192C] transition-opacity duration-700 ${
                        motionStage >= 3 ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <div className="w-12 h-1 rounded-full bg-white/15" />
                      <div className="w-12 h-1 rounded-full bg-white/15 mt-1" />
                    </div>

                    {/* Central Vertical Pill Capsule Body with Chamfered Gold Rim */}
                    <div
                      className={`relative w-36 sm:w-40 h-[330px] sm:h-[350px] rounded-[44px] p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.85),inset_0_1px_3px_rgba(255,255,255,0.4)] border-2 transition-all duration-700 z-10 flex flex-col items-center justify-center ${
                        motionStage >= 3
                          ? 'border-[#E5C067] opacity-100 shadow-[0_25px_60px_rgba(0,0,0,0.85)]'
                          : 'border-transparent opacity-0 shadow-none'
                      }`}
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(229,192,103,0.3) 0%, #091322 45%, #030810 100%)',
                      }}
                    >
                      {/* Metallic Chamfered Bezel Accent Ring */}
                      <div className="w-full h-full rounded-[36px] p-2 shadow-inner border border-[#E5C067]/40 bg-[#03070E] relative flex flex-col items-center justify-between">
                        {/* Microphone Hole on left side rim */}
                        <div className="absolute -left-1.5 top-1/3 w-1 h-3 rounded-l-full bg-black/80 border border-white/20" />
                        {/* Speaker Slit on right side rim */}
                        <div className="absolute -right-1.5 top-1/2 w-1 h-6 rounded-r-full bg-black/80 border border-white/20" />

                        {/* OLED Curved Sapphire Display Glass */}
                        <div
                          className={`w-full h-full rounded-[30px] relative overflow-hidden flex flex-col items-center justify-between p-3.5 text-center transition-colors duration-700 ${
                            motionStage >= 1
                              ? 'bg-[#020509] shadow-[inset_0_0_25px_rgba(0,0,0,0.95)]'
                              : 'bg-black'
                          } border border-white/10`}
                        >
                          {/* 2.5D Curved Glass Specular Highlight */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none rounded-[30px]" />
                          <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-b from-cyan-400/10 to-transparent rounded-full blur-md pointer-events-none" />

                          {/* ================================================================= */}
                          {/* AMOLED SCREEN CONTENT: Bootup & Digital Lock-in                   */}
                          {/* ================================================================= */}
                          <div className="flex-1 w-full flex flex-col items-center justify-between py-2 relative z-10">
                            {/* PIXEL ROBOT CHARACTER:
                                Awakens first at 150ms with subtle scanline / matrix glow reveal
                            */}
                            <div className="mt-1 h-14 flex items-center justify-center">
                              {motionStage >= 1 ? (
                                <div className="animate-pixel-bootup cursor-pointer transition-transform hover:scale-105 active:scale-95">
                                  <PixelRobotAvatar
                                    emotion={pixelEmotion}
                                    size={52}
                                  />
                                </div>
                              ) : (
                                <div className="w-[52px] h-[52px] opacity-0" />
                              )}
                            </div>

                            {/* TIME & DATE:
                                Time "10:24" reveals at 350ms with digital transition,
                                followed by "Mon, 12 May"
                            */}
                            <div className="flex flex-col items-center my-auto">
                              {motionStage >= 2 ? (
                                <div className="animate-digital-time flex flex-col items-center">
                                  <span className="text-3xl sm:text-4xl font-mono font-black text-white tracking-tight leading-none drop-shadow-md">
                                    10:24
                                  </span>
                                  <span className="text-[11px] font-sans font-semibold text-[#8EB7E5] mt-1.5 tracking-wide transition-opacity duration-500">
                                    Mon, 12 May
                                  </span>
                                </div>
                              ) : (
                                <div className="h-12 opacity-0" />
                              )}
                            </div>

                            {/* CIRCULAR TOUCH RING & SYNC INDICATOR:
                                Settles in at 350ms
                            */}
                            <div className="flex flex-col items-center">
                              <div
                                className={`w-5 h-5 rounded-full border-2 border-white/50 flex items-center justify-center shadow-sm transition-all duration-500 ${
                                  motionStage >= 2
                                    ? 'opacity-100 scale-100'
                                    : 'opacity-0 scale-75'
                                }`}
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-white/75" />
                              </div>
                              <span
                                className={`text-[8px] text-[#A3C4EB] mt-1 font-mono tracking-wider transition-opacity duration-500 ${
                                  motionStage >= 2 ? 'opacity-90' : 'opacity-0'
                                }`}
                              >
                                POLARIS
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Ergonomic Curved Silicone Strap in Navy Blue */}
                    <div
                      className={`w-28 sm:w-32 h-16 rounded-b-3xl shadow-xl border-b border-x border-white/20 relative -mt-3 z-0 flex flex-col items-center justify-end pb-2.5 bg-gradient-to-b from-[#193256] via-[#12233C] to-[#0D192C] transition-opacity duration-700 ${
                        motionStage >= 3 ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <div className="w-12 h-1 rounded-full bg-white/15 mb-1" />
                      <div className="w-8 h-1 rounded-full bg-white/15" />
                    </div>
                  </div>
                )}
              </div>

              {/* Discreet 3D Render / Live OLED View Toggle Button */}
              <button
                type="button"
                onClick={() => setShow3DRender(!show3DRender)}
                className={`mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/15 text-[11px] font-semibold text-[#102A4C] dark:text-[#90CDF4] border border-white/15 backdrop-blur-md transition-all duration-300 cursor-pointer ${
                  motionStage >= 9 ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Layers size={12} />
                <span>{show3DRender ? 'Kembali ke Layar Live Band' : 'Lihat 3D Studio Render'}</span>
              </button>
            </div>

            {/* ========================================================================= */}
            {/* FLOATING CARDS: Fade & settle at 1500ms                                    */}
            {/* ========================================================================= */}

            {/* Floating Card Top-Left: "Today" Schedule */}
            <div
              className={`absolute -top-4 sm:top-2 -left-2 sm:left-2 z-20 w-[190px] sm:w-[220px] bg-white dark:bg-[#13233A]/95 backdrop-blur-md rounded-[24px] p-4 shadow-xl border border-[#D5E5F7] dark:border-[#223955] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-2xl hover:-translate-y-1 ${
                motionStage >= 9
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-3 scale-95 pointer-events-none'
              } ${motionStage >= 10 ? 'animate-float-gentle' : ''}`}
            >
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
                      <Check
                        size={12}
                        className="text-emerald-500 shrink-0 mt-0.5"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Floating Stat Cards Stacked on Right */}
            <div
              className={`absolute -bottom-6 sm:bottom-4 -right-2 sm:right-0 z-20 flex flex-col gap-2.5 sm:gap-3 w-[180px] sm:w-[210px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                motionStage >= 9
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-3 scale-95 pointer-events-none'
              }`}
            >
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
