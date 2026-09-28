import React, { useState } from 'react';
import {
  Bell,
  Bot,
  Mic,
  ShieldAlert,
  Smartphone,
  Volume2,
  Vibrate,
  BatteryCharging,
  Bluetooth,
  Calendar,
  Hourglass,
  PhoneCall,
  Sparkles,
  Layers,
  Check,
  ChevronRight,
  Zap,
  Activity,
  Heart,
  Radio,
  Sliders,
} from 'lucide-react';
import { SparkleIcon } from './SparkleIcon';
import { PixelRobotAvatar, PixelEmotion } from './PixelRobotAvatar';
import smartBraceletMainImg from '../assets/images/polaris_smart_bracelet_main_1790587875571.jpg';
import smartBraceletLifestyleImg from '../assets/images/polaris_bracelet_lifestyle_1790587912244.jpg';

export type ScreenMode = 'main' | 'schedule' | 'voice' | 'focus' | 'sos';
export type BandColor = 'navy' | 'powder' | 'white' | 'black';
export type ViewAngle = 'front' | 'side' | 'back';

export const WearableShowcase: React.FC = () => {
  // Screen state on the smart bracelet
  const [activeScreen, setActiveScreen] = useState<ScreenMode>('main');
  // Selected emotion for pixel robot
  const [selectedEmotion, setSelectedEmotion] = useState<PixelEmotion>('normal');
  // Band color choice
  const [selectedColor, setSelectedColor] = useState<BandColor>('navy');
  // Tab view: Interactive Band vs 3D Studio vs 3 Angles vs Lifestyle
  const [viewTab, setViewTab] = useState<'interactive' | 'angles' | 'studio' | 'lifestyle'>('interactive');
  // Angle for the 3-angle view
  const [viewAngle, setViewAngle] = useState<ViewAngle>('front');

  // Color theme definitions matching user's design
  const colorThemes: Record<
    BandColor,
    {
      name: string;
      label: string;
      strapBg: string;
      strapGradient: string;
      bezelBorder: string;
      bezelRing: string;
      accentTag: string;
      chipColor: string;
    }
  > = {
    navy: {
      name: 'Navy Blue',
      label: 'Navy Blue (Default)',
      strapBg: '#152A4A',
      strapGradient: 'from-[#193256] via-[#12233C] to-[#0D192C]',
      bezelBorder: '#E5C067',
      bezelRing: 'from-[#F5D88C] via-[#D4AF37] to-[#A28020]',
      accentTag: 'bg-[#FFDE70] text-[#102A4C]',
      chipColor: '#1A3358',
    },
    powder: {
      name: 'Powder Blue',
      label: 'Powder Blue',
      strapBg: '#7EA8CF',
      strapGradient: 'from-[#8EBAE3] via-[#779FC5] to-[#5F85A9]',
      bezelBorder: '#D8E6F5',
      bezelRing: 'from-[#FFFFFF] via-[#CBDDF2] to-[#9AB8DB]',
      accentTag: 'bg-[#90CDF4] text-[#102A4C]',
      chipColor: '#84ADD4',
    },
    white: {
      name: 'White',
      label: 'White',
      strapBg: '#F1F5F9',
      strapGradient: 'from-[#FFFFFF] via-[#E2E8F0] to-[#CBD5E1]',
      bezelBorder: '#E2E8F0',
      bezelRing: 'from-[#FFFFFF] via-[#E2E8F0] to-[#94A3B8]',
      accentTag: 'bg-white text-[#102A4C]',
      chipColor: '#E2E8F0',
    },
    black: {
      name: 'Black',
      label: 'Black',
      strapBg: '#1A1D22',
      strapGradient: 'from-[#282C34] via-[#1E2127] to-[#121417]',
      bezelBorder: '#475569',
      bezelRing: 'from-[#64748B] via-[#334155] to-[#1E293B]',
      accentTag: 'bg-slate-300 text-[#0F172A]',
      chipColor: '#252930',
    },
  };

  const currentTheme = colorThemes[selectedColor];

  // Helper to switch screen & sync emotion automatically
  const handleSelectScreen = (screen: ScreenMode) => {
    setActiveScreen(screen);
    if (screen === 'main') setSelectedEmotion('normal');
    if (screen === 'schedule') setSelectedEmotion('happy');
    if (screen === 'voice') setSelectedEmotion('alert');
    if (screen === 'focus') setSelectedEmotion('thinking');
    if (screen === 'sos') setSelectedEmotion('sos');
  };

  // Helper when clicking emotion matrix
  const handleSelectEmotion = (emo: PixelEmotion) => {
    setSelectedEmotion(emo);
    if (emo === 'sos') setActiveScreen('sos');
    else if (activeScreen === 'sos') setActiveScreen('main');
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="wearable">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card Container with Deep Cosmic Glass Style */}
        <div className="relative bg-gradient-to-b from-[#0F223D] via-[#0A182B] to-[#06101D] text-white rounded-[36px] md:rounded-[48px] p-6 sm:p-10 lg:p-14 overflow-hidden shadow-2xl border border-white/15 backdrop-blur-xl">
          {/* Subtle Ambient Backdrops */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#1D70E2]/30 to-cyan-500/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 right-0 w-[420px] h-[420px] rounded-full bg-gradient-to-tl from-[#FFDE70]/15 to-blue-600/20 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

          {/* Sparkle decorative icons */}
          <div className="absolute top-8 left-12 text-[#FFDE70] opacity-80 animate-pulse-subtle pointer-events-none">
            <SparkleIcon size={18} />
          </div>
          <div className="absolute top-12 right-16 text-[#A3C4EB] opacity-60 animate-float-gentle pointer-events-none">
            <SparkleIcon size={20} />
          </div>

          {/* Header Row: Product Title & Hero Statement */}
          <div className="flex flex-col items-start max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FFDE70] text-xs font-bold tracking-wide mb-4 border border-white/15 backdrop-blur-md">
              <Sparkles size={14} />
              <span>POLARIS Smart Bracelet</span>
              <span className="w-1 h-1 rounded-full bg-[#FFDE70]" />
              <span className="text-white/80">Your Personal Life Companion</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
              Polaris Band: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFDE70] via-amber-200 to-sky-300">
                Your Personal Life Companion
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#B2CBE6] leading-relaxed max-w-2xl font-normal">
              Polaris Band adalah gelang pintar yang terhubung dengan aplikasi Polaris untuk membantu kamu mengelola tujuan, jadwal, dan keseimbangan hidup — dengan notifikasi, suara, dan AI assistant yang selalu siap mendukung.
            </p>

            {/* 4 Quick Highlight Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-6 w-full max-w-2xl">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">
                <Bell size={15} className="text-[#FFDE70]" />
                <span>Smart Reminder</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">
                <Bot size={15} className="text-sky-300" />
                <span>Pixel AI Companion</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">
                <Mic size={15} className="text-emerald-300" />
                <span>Voice Interaction</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">
                <ShieldAlert size={15} className="text-rose-400" />
                <span>SOS Darurat</span>
              </div>
            </div>
          </div>

          {/* Master Two-Column Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start pt-2">
            {/* Left Column: Interactive Band Chassis & Hardware Visualizer */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
              {/* Tab Selector */}
              <div className="flex items-center gap-1 p-1 rounded-full bg-[#132742]/90 border border-white/15 mb-6 shadow-inner z-20 overflow-x-auto max-w-full">
                <button
                  type="button"
                  onClick={() => setViewTab('interactive')}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                    viewTab === 'interactive'
                      ? 'bg-gradient-to-r from-[#1D70E2] to-[#3B82F6] text-white shadow-md shadow-blue-500/30'
                      : 'text-[#9EBCD9] hover:text-white'
                  }`}
                >
                  <Activity size={13} />
                  <span>Simulasi Layar Band</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewTab('angles')}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                    viewTab === 'angles'
                      ? 'bg-gradient-to-r from-[#1D70E2] to-[#3B82F6] text-white shadow-md shadow-blue-500/30'
                      : 'text-[#9EBCD9] hover:text-white'
                  }`}
                >
                  <Layers size={13} />
                  <span>Tampilan & Desain</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewTab('studio')}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                    viewTab === 'studio'
                      ? 'bg-gradient-to-r from-[#1D70E2] to-[#3B82F6] text-white shadow-md shadow-blue-500/30'
                      : 'text-[#9EBCD9] hover:text-white'
                  }`}
                >
                  <Sparkles size={13} />
                  <span>3D Render</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewTab('lifestyle')}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                    viewTab === 'lifestyle'
                      ? 'bg-gradient-to-r from-[#1D70E2] to-[#3B82F6] text-white shadow-md shadow-blue-500/30'
                      : 'text-[#9EBCD9] hover:text-white'
                  }`}
                >
                  <Heart size={13} />
                  <span>Lifestyle</span>
                </button>
              </div>

              {/* TAB 1: Live Interactive Smart Band Chassis */}
              {viewTab === 'interactive' && (
                <div className="relative w-full flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-300">
                  {/* Atmospheric Glow behind Band */}
                  <div
                    className="absolute w-64 h-80 rounded-full blur-3xl pointer-events-none opacity-40 animate-pulse-subtle"
                    style={{ backgroundColor: activeScreen === 'sos' ? '#EF4444' : '#1D70E2' }}
                  />

                  {/* Physical Smart Bracelet Render (Ergonomic Slim Vertical Band) */}
                  <div className="relative flex flex-col items-center justify-center py-4 select-none">
                    {/* Top Ergonomic Curved Silicone Strap */}
                    <div
                      className={`w-28 sm:w-32 h-16 rounded-t-3xl shadow-lg border-t border-x border-white/20 relative -mb-4 z-0 flex flex-col items-center justify-start pt-2 bg-gradient-to-b ${currentTheme.strapGradient}`}
                    >
                      <div className="w-12 h-1 rounded-full bg-white/15" />
                      <div className="w-12 h-1 rounded-full bg-white/15 mt-1.5" />
                    </div>

                    {/* Central Vertical Pill Capsule Body */}
                    <div
                      className="relative w-36 sm:w-40 h-80 sm:h-88 rounded-[44px] p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.9),inset_0_1px_3px_rgba(255,255,255,0.4)] border-2 transition-all duration-500 z-10 flex flex-col items-center justify-center"
                      style={{
                        borderColor: currentTheme.bezelBorder,
                        background: `linear-gradient(135deg, ${currentTheme.bezelBorder}33, #091322 40%, #030810 100%)`,
                      }}
                    >
                      {/* Metallic Chamfered Bezel Accent Ring */}
                      <div
                        className="w-full h-full rounded-[36px] p-2 shadow-inner border relative flex flex-col items-center justify-between"
                        style={{
                          borderColor: `${currentTheme.bezelBorder}55`,
                          backgroundColor: '#03070E',
                        }}
                      >
                        {/* Microphone Hole on side rim */}
                        <div className="absolute -left-1.5 top-1/3 w-1 h-3 rounded-l-full bg-black/80 border border-white/20" />
                        {/* Speaker Slit on side rim */}
                        <div className="absolute -right-1.5 top-1/2 w-1 h-6 rounded-r-full bg-black/80 border border-white/20" />

                        {/* OLED Curved Display Glass */}
                        <div className="w-full h-full rounded-[30px] bg-black relative overflow-hidden flex flex-col items-center justify-between p-3.5 text-center shadow-[inset_0_0_25px_rgba(0,0,0,0.95)] border border-white/10">
                          {/* 2.5D Curved Glass Reflection Highlights */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none rounded-[30px]" />
                          <div className="absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-b from-cyan-400/10 to-transparent rounded-full blur-md pointer-events-none" />

                          {/* SCREEN 1: LAYAR UTAMA (Main Watch Face) */}
                          {activeScreen === 'main' && (
                            <div className="flex-1 w-full flex flex-col items-center justify-between py-2 animate-in fade-in zoom-in-95 duration-300">
                              {/* Top Robot Pixel Companion */}
                              <div className="mt-1 transition-transform duration-300 hover:scale-110 cursor-pointer">
                                <PixelRobotAvatar emotion={selectedEmotion} size={52} />
                              </div>

                              {/* Center Time & Date */}
                              <div className="flex flex-col items-center my-auto">
                                <span className="text-3xl sm:text-4xl font-mono font-black text-white tracking-tight leading-none drop-shadow-md">
                                  10:24
                                </span>
                                <span className="text-[11px] font-sans font-semibold text-[#8EB7E5] mt-1.5 tracking-wide">
                                  Mon, 12 May
                                </span>
                              </div>

                              {/* Bottom Subtle Status Pill */}
                              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[9px] text-[#FFDE70] font-medium border border-white/10">
                                <Radio size={9} className="text-emerald-400 animate-pulse" />
                                <span>Polaris Sync</span>
                              </div>
                            </div>
                          )}

                          {/* SCREEN 2: NOTIFIKASI JADWAL */}
                          {activeScreen === 'schedule' && (
                            <div className="flex-1 w-full flex flex-col items-center justify-between py-2 animate-in fade-in zoom-in-95 duration-300">
                              <div className="mt-1">
                                <PixelRobotAvatar emotion="happy" size={44} />
                              </div>

                              <div className="flex flex-col items-center text-center px-1 my-auto">
                                <span className="text-[10px] uppercase font-bold text-[#FFDE70] tracking-wider mb-1">
                                  Jadwal Kuliah
                                </span>
                                <h4 className="text-xs sm:text-sm font-extrabold text-white leading-snug">
                                  Kelas Digital Marketing
                                </h4>
                                <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full bg-[#1D70E2]/25 border border-[#1D70E2]/40 text-[#60A5FA] font-mono text-sm font-bold">
                                  <Calendar size={12} />
                                  <span>08.00</span>
                                </div>
                              </div>

                              <span className="text-[9px] text-slate-300 font-medium">
                                Pengingat 15 mnt lagi
                              </span>
                            </div>
                          )}

                          {/* SCREEN 3: SUARA AI (Voice Interaction) */}
                          {activeScreen === 'voice' && (
                            <div className="flex-1 w-full flex flex-col items-center justify-between py-2 animate-in fade-in zoom-in-95 duration-300">
                              <div className="mt-1">
                                <PixelRobotAvatar emotion="alert" size={44} />
                              </div>

                              <div className="flex flex-col items-center text-center px-1 my-auto">
                                <div className="p-2 rounded-xl bg-white/10 border border-white/15 text-[11px] font-semibold text-white leading-relaxed shadow-sm">
                                  “Yuk, siap-siap untuk kelasmu!”
                                </div>

                                {/* Dynamic Audio Sound Wave Visualizer */}
                                <div className="flex items-center gap-1 mt-3 h-6">
                                  <div className="w-1 bg-[#60A5FA] rounded-full animate-pulse h-3" />
                                  <div className="w-1 bg-[#FFDE70] rounded-full animate-bounce h-5" />
                                  <div className="w-1 bg-cyan-400 rounded-full animate-pulse h-6" />
                                  <div className="w-1 bg-[#FFDE70] rounded-full animate-bounce h-4" />
                                  <div className="w-1 bg-[#60A5FA] rounded-full animate-pulse h-2" />
                                </div>
                              </div>

                              <span className="text-[9px] text-emerald-300 font-medium flex items-center gap-1">
                                <Volume2 size={10} /> Suara AI Aktif
                              </span>
                            </div>
                          )}

                          {/* SCREEN 4: MODE FOKUS */}
                          {activeScreen === 'focus' && (
                            <div className="flex-1 w-full flex flex-col items-center justify-between py-2 animate-in fade-in zoom-in-95 duration-300">
                              <div className="mt-1">
                                <PixelRobotAvatar emotion="thinking" size={44} />
                              </div>

                              <div className="flex flex-col items-center text-center px-1 my-auto">
                                <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider mb-1 flex items-center gap-1">
                                  <Hourglass size={11} className="animate-spin" /> Focus Timer
                                </span>
                                <h4 className="text-xs font-semibold text-slate-200">
                                  Waktu belajar
                                </h4>
                                <div className="text-xl sm:text-2xl font-mono font-black text-white my-1">
                                  30:00
                                </div>
                                <span className="text-[9px] text-amber-200/80 font-medium">
                                  Notifikasi senyap aktif
                                </span>
                              </div>

                              <span className="text-[9px] text-slate-400 font-mono">
                                Haptic On
                              </span>
                            </div>
                          )}

                          {/* SCREEN 5: SOS DARURAT */}
                          {activeScreen === 'sos' && (
                            <div className="flex-1 w-full flex flex-col items-center justify-between py-2 bg-gradient-to-b from-rose-950/40 via-red-900/30 to-black rounded-[22px] animate-in fade-in zoom-in-95 duration-300 border border-rose-500/30">
                              <div className="mt-1">
                                <PixelRobotAvatar emotion="sos" size={44} />
                              </div>

                              <div className="flex flex-col items-center text-center px-1 my-auto">
                                <div className="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg shadow-rose-600/50 animate-bounce mb-1">
                                  <PhoneCall size={18} />
                                </div>
                                <h4 className="text-[11px] font-extrabold text-rose-300 leading-tight">
                                  Tekan & tahan 3 detik
                                </h4>
                                <span className="text-[10px] font-bold text-white uppercase tracking-wider mt-0.5">
                                  untuk SOS
                                </span>
                              </div>

                              <span className="text-[8.5px] text-rose-200/80 font-medium animate-pulse">
                                GPS & Kontak Darurat
                              </span>
                            </div>
                          )}

                          {/* Bottom OLED Capacitive Touch Ring Button */}
                          <div className="pt-1.5 flex flex-col items-center justify-center">
                            <button
                              type="button"
                              onClick={() => {
                                const screens: ScreenMode[] = ['main', 'schedule', 'voice', 'focus', 'sos'];
                                const currentIndex = screens.indexOf(activeScreen);
                                const nextIndex = (currentIndex + 1) % screens.length;
                                handleSelectScreen(screens[nextIndex]);
                              }}
                              className="w-5 h-5 rounded-full border-2 border-white/40 hover:border-white hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer shadow-sm"
                              title="Sentuh untuk ganti layar"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                            </button>
                            <span className="text-[8px] text-slate-400 mt-1 font-mono">Touch Ring</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Ergonomic Silicone Strap */}
                    <div
                      className={`w-28 sm:w-32 h-20 rounded-b-3xl shadow-xl border-b border-x border-white/20 relative -mt-4 z-0 flex flex-col items-center justify-end pb-3 bg-gradient-to-b ${currentTheme.strapGradient}`}
                    >
                      <div className="w-12 h-1 rounded-full bg-white/15 mb-1.5" />
                      <div className="w-8 h-1 rounded-full bg-white/15" />
                    </div>
                  </div>

                  {/* 5 Screen Switcher Buttons below Band */}
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 max-w-sm px-2">
                    {[
                      { id: 'main', label: 'Layar Utama', icon: Bot },
                      { id: 'schedule', label: 'Jadwal', icon: Calendar },
                      { id: 'voice', label: 'Suara AI', icon: Mic },
                      { id: 'focus', label: 'Fokus', icon: Hourglass },
                      { id: 'sos', label: 'SOS', icon: ShieldAlert },
                    ].map((s) => {
                      const Icon = s.icon;
                      const isActive = activeScreen === s.id;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => handleSelectScreen(s.id as ScreenMode)}
                          className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1 ${
                            isActive
                              ? 'bg-[#FFDE70] text-[#102A4C] shadow-md font-bold'
                              : 'bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white'
                          }`}
                        >
                          <Icon size={11} />
                          <span>{s.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 2: 3 Sudut Desain (Tampak Depan, Samping, Belakang) */}
              {viewTab === 'angles' && (
                <div className="relative w-full flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-300">
                  {/* Angle Switcher */}
                  <div className="flex items-center gap-2 mb-6">
                    {(['front', 'side', 'back'] as ViewAngle[]).map((angle) => (
                      <button
                        key={angle}
                        type="button"
                        onClick={() => setViewAngle(angle)}
                        className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          viewAngle === angle
                            ? 'bg-[#FFDE70] text-[#102A4C] shadow-md'
                            : 'bg-white/10 text-slate-300 hover:bg-white/20'
                        }`}
                      >
                        {angle === 'front' && 'Tampak Depan'}
                        {angle === 'side' && 'Tampak Samping'}
                        {angle === 'back' && 'Tampak Belakang'}
                      </button>
                    ))}
                  </div>

                  {/* Visual Chassis for Selected Angle */}
                  <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-[36px] bg-gradient-to-b from-[#132742] to-[#081322] border border-white/15 p-6 flex flex-col items-center justify-center shadow-2xl">
                    {viewAngle === 'front' && (
                      <div className="flex flex-col items-center animate-in fade-in duration-300">
                        <div className="w-24 h-64 rounded-[32px] p-2 bg-[#091524] border-2 border-[#E5C067] shadow-xl flex flex-col items-center justify-between">
                          <div className="w-full h-full rounded-[24px] bg-black p-2.5 flex flex-col items-center justify-between">
                            <PixelRobotAvatar emotion="normal" size={38} />
                            <div className="text-center">
                              <div className="text-xl font-mono font-black text-white">10:24</div>
                              <div className="text-[9px] text-[#8EB7E5]">Mon, 12 May</div>
                            </div>
                            <div className="w-4 h-4 rounded-full border border-white/40 flex items-center justify-center" />
                          </div>
                        </div>
                        <span className="text-xs font-bold text-white mt-4">Tampak Depan</span>
                        <span className="text-[11px] text-[#A3C4EB]">Layar AMOLED Vertikal & Bezel Emas</span>
                      </div>
                    )}

                    {viewAngle === 'side' && (
                      <div className="flex flex-col items-center animate-in fade-in duration-300">
                        {/* Curved ergonomic side silhouette */}
                        <div className="relative w-16 h-64 flex items-center justify-center">
                          <div className="w-8 h-60 rounded-full border-r-4 border-t-2 border-b-2 border-[#1E3A60] bg-gradient-to-r from-[#0C1A2E] to-[#152A4A] shadow-2xl relative">
                            {/* Metallic Chamfered Accent on Edge */}
                            <div className="absolute right-0 top-1/4 h-24 w-1.5 rounded-l-md bg-gradient-to-b from-[#F5D88C] to-[#A28020]" />
                            {/* Microphone opening */}
                            <div className="absolute left-1 top-1/3 w-1.5 h-1.5 rounded-full bg-black" />
                            {/* Flush side button */}
                            <div className="absolute -left-1 top-1/2 w-1.5 h-6 rounded-l-sm bg-[#2B4E7C]" />
                          </div>
                        </div>
                        <span className="text-xs font-bold text-white mt-4">Tampak Samping</span>
                        <span className="text-[11px] text-[#A3C4EB] text-center max-w-[200px]">
                          Lengkungan ergonomis mengikuti pergelangan tangan
                        </span>
                      </div>
                    )}

                    {viewAngle === 'back' && (
                      <div className="flex flex-col items-center animate-in fade-in duration-300">
                        <div className="w-24 h-64 rounded-[32px] p-3 bg-[#0B1728] border-2 border-white/20 shadow-xl flex flex-col items-center justify-between">
                          <div className="text-[8px] font-mono tracking-widest text-slate-400">POLARIS</div>
                          {/* Dual Optical Biometric Heart Rate Sensor */}
                          <div className="w-12 h-16 rounded-2xl bg-[#030810] border border-white/20 flex flex-col items-center justify-around py-1 shadow-inner">
                            <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 animate-pulse shadow-sm shadow-emerald-400" />
                            <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 animate-pulse shadow-sm shadow-emerald-400" />
                          </div>
                          {/* Golden Magnetic Charging Pogo Pins */}
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-[#FFDE70] shadow-sm shadow-[#FFDE70]" />
                            <div className="w-2 h-2 rounded-full bg-[#FFDE70] shadow-sm shadow-[#FFDE70]" />
                          </div>
                        </div>
                        <span className="text-xs font-bold text-white mt-4">Tampak Belakang</span>
                        <span className="text-[11px] text-[#A3C4EB] text-center max-w-[220px]">
                          Sensor Biometrik Optik + 2 Pin Magnetic Charger
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 3: 3D Studio Render */}
              {viewTab === 'studio' && (
                <div className="relative w-full max-w-[340px] aspect-square rounded-[36px] overflow-hidden p-3 bg-gradient-to-b from-[#162D4C] to-[#0A1626] border border-white/20 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
                  <div className="relative w-full h-full rounded-[28px] overflow-hidden group">
                    <img
                      src={smartBraceletMainImg}
                      alt="Polaris Smart Bracelet 3D Commercial Render"
                      className="w-full h-full object-cover rounded-[28px] transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1526]/90 via-transparent to-transparent flex flex-col justify-end p-4">
                      <div className="flex items-center justify-between text-xs text-white">
                        <span className="font-semibold text-[#FFDE70] flex items-center gap-1">
                          <Sparkles size={13} /> Polaris Smart Bracelet
                        </span>
                        <span className="text-[10px] text-slate-300">AMOLED Curved Screen</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: Lifestyle on Wrist */}
              {viewTab === 'lifestyle' && (
                <div className="relative w-full max-w-[340px] aspect-square rounded-[36px] overflow-hidden p-3 bg-gradient-to-b from-[#162D4C] to-[#0A1626] border border-white/20 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
                  <div className="relative w-full h-full rounded-[28px] overflow-hidden group">
                    <img
                      src={smartBraceletLifestyleImg}
                      alt="Polaris Smart Bracelet worn on wrist"
                      className="w-full h-full object-cover rounded-[28px] transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1526]/90 via-transparent to-transparent flex flex-col justify-end p-4">
                      <p className="font-handwriting text-xl text-[#FFDE70] font-bold leading-tight">
                        Small device. Big support for your goals.
                      </p>
                      <span className="text-[11px] text-slate-200 mt-1">
                        Dipasang di pergelangan tangan dengan nyaman sepanjang hari.
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Hardware Specs, Pixel AI Emotions & Color Picker */}
            <div className="lg:col-span-6 flex flex-col items-start text-left space-y-8">
              {/* SECTION A: SPESIFIKASI & HARDWARE (4 Cards from user's image) */}
              <div className="w-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FFDE70]">
                    Spesifikasi & Hardware
                  </span>
                  <div className="flex-1 h-[1px] bg-white/10" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Spec 1: Layar AMOLED */}
                  <div className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1D70E2]/25 text-[#60A5FA] flex items-center justify-center shrink-0 border border-[#1D70E2]/40">
                      <Smartphone size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">Layar AMOLED</h4>
                      <p className="text-xs text-[#B2CBE6] leading-snug">
                        Menampilkan waktu, notifikasi, dan karakter AI (pixel).
                      </p>
                    </div>
                  </div>

                  {/* Spec 2: Speaker & Mikrofon */}
                  <div className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                      <Volume2 size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">Speaker & Mikrofon</h4>
                      <p className="text-xs text-[#B2CBE6] leading-snug">
                        Untuk notifikasi suara dan perintah suara interaktif.
                      </p>
                    </div>
                  </div>

                  {/* Spec 3: Motor Getar */}
                  <div className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                      <Vibrate size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">Motor Getar</h4>
                      <p className="text-xs text-[#B2CBE6] leading-snug">
                        Memberikan notifikasi secara haptic lembut & fokus.
                      </p>
                    </div>
                  </div>

                  {/* Spec 4: Bluetooth & Baterai */}
                  <div className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0 border border-indigo-500/30">
                      <Bluetooth size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">Bluetooth & Baterai</h4>
                      <p className="text-xs text-[#B2CBE6] leading-snug">
                        Terhubung ke aplikasi dan tahan hingga 3–5 hari.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION B: EKSPRESI KARAKTER PIXEL (Interactive 6-Emotion Matrix) */}
              <div className="w-full">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Bot size={16} className="text-[#FFDE70]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FFDE70]">
                      Ekspresi Karakter Pixel
                    </span>
                  </div>
                  <span className="text-[11px] text-[#A3C4EB]">Klik untuk uji ekspresi live</span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 w-full">
                  {[
                    { id: 'normal', label: 'Normal', desc: 'Siaga harian' },
                    { id: 'happy', label: 'Happy', desc: 'Target tercapai' },
                    { id: 'thinking', label: 'Thinking', desc: 'Analisis jadwal' },
                    { id: 'sleepy', label: 'Sleepy', desc: 'Waktu istirahat' },
                    { id: 'alert', label: 'Alert', desc: 'Jadwal penting' },
                    { id: 'sos', label: 'SOS', desc: 'Panggilan darurat' },
                  ].map((emo) => {
                    const isSelected = selectedEmotion === emo.id;
                    return (
                      <button
                        key={emo.id}
                        type="button"
                        onClick={() => handleSelectEmotion(emo.id as PixelEmotion)}
                        className={`p-2.5 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? emo.id === 'sos'
                              ? 'bg-rose-500/30 border-2 border-rose-500 shadow-lg scale-105'
                              : 'bg-white/20 border-2 border-[#FFDE70] shadow-lg scale-105'
                            : 'bg-white/5 hover:bg-white/10 border border-white/10'
                        }`}
                      >
                        <PixelRobotAvatar emotion={emo.id as PixelEmotion} size={32} />
                        <span className="text-[11px] font-bold text-white mt-1.5 leading-tight">
                          {emo.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SECTION C: PILIHAN WARNA GELANG (4 Band Colors from user's image) */}
              <div className="w-full">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FFDE70]">
                    Pilihan Warna Gelang
                  </span>
                  <span className="text-xs text-slate-300 font-semibold">{currentTheme.label}</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full">
                  {(Object.keys(colorThemes) as BandColor[]).map((key) => {
                    const theme = colorThemes[key];
                    const isSelected = selectedColor === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setSelectedColor(key)}
                        className={`p-3 rounded-2xl flex items-center gap-2.5 transition-all duration-200 cursor-pointer text-left ${
                          isSelected
                            ? 'bg-white/20 border-2 border-white shadow-lg scale-[1.02]'
                            : 'bg-white/5 hover:bg-white/10 border border-white/10'
                        }`}
                      >
                        <div
                          className="w-6 h-6 rounded-full border border-white/30 shrink-0 shadow-xs flex items-center justify-center"
                          style={{ backgroundColor: theme.chipColor }}
                        >
                          {isSelected && <Check size={12} className="text-white drop-shadow-md" />}
                        </div>
                        <span className="text-xs font-semibold text-white truncate">
                          {theme.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SECTION D: PENGISIAN DAYA & KEMASAN RAMAH LINGKUNGAN */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-1">
                {/* Magnetic Charger */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/20 text-[#FFDE70] flex items-center justify-center shrink-0">
                    <BatteryCharging size={18} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white mb-0.5">Pengisian Daya</h5>
                    <p className="text-[11px] text-[#A3C4EB] leading-relaxed">
                      Menggunakan magnetic charger yang praktis dan mudah digunakan.
                    </p>
                  </div>
                </div>

                {/* Minimalist Packaging */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white mb-0.5">Kemasan Polaris</h5>
                    <p className="text-[11px] text-[#A3C4EB] leading-relaxed">
                      Desain kemasan minimalis dan ramah lingkungan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slogan Banner Footer matching bottom of user's uploaded design */}
          <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <div className="text-[#FFDE70]">
                <SparkleIcon size={20} />
              </div>
              <span className="font-extrabold tracking-widest text-sm text-white uppercase">
                POLARIS BAND
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#FFDE70] font-semibold tracking-wide">
              Temukan arah. Selaraskan tindakan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
