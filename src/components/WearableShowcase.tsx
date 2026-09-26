import React, { useState } from 'react';
import {
  Bell,
  Eye,
  ShieldAlert,
  Sparkles,
  Radio,
  CheckCircle2,
  MapPin,
  ChevronRight,
  Activity,
  Layers,
} from 'lucide-react';
import { SparkleIcon } from './SparkleIcon';
import smartwatchHardwareImg from '../assets/images/polaris_wearable_hardware_1790397922057.jpg';

export const WearableShowcase: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<'reminder' | 'glance' | 'sos'>('reminder');
  const [viewMode, setViewMode] = useState<'interactive' | 'photorealistic'>('interactive');

  return (
    <section className="py-12 md:py-24 relative overflow-hidden" id="wearable">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-b from-[#0F223D] via-[#0B1A30] to-[#071322] text-white rounded-[36px] md:rounded-[48px] p-6 sm:p-10 lg:p-14 overflow-hidden shadow-2xl border border-white/15 backdrop-blur-xl">
          {/* Subtle Ambient Backdrops & Nebula Glow */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#1D70E2]/30 to-cyan-500/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 right-0 w-[420px] h-[420px] rounded-full bg-gradient-to-tl from-[#FFDE70]/15 to-blue-600/20 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

          {/* Sparkle decorative icons */}
          <div className="absolute top-8 left-12 text-[#FFDE70] opacity-80 animate-pulse-subtle pointer-events-none">
            <SparkleIcon size={18} />
          </div>
          <div className="absolute top-14 right-20 text-[#A3C4EB] opacity-60 animate-float-gentle pointer-events-none">
            <SparkleIcon size={20} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Realistic Smartwatch Showcase */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
              {/* View Switcher Pills */}
              <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#172E4E]/80 border border-white/15 mb-6 shadow-inner z-20">
                <button
                  type="button"
                  onClick={() => setViewMode('interactive')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'interactive'
                      ? 'bg-gradient-to-r from-[#1D70E2] to-[#3B82F6] text-white shadow-md shadow-blue-500/30'
                      : 'text-[#9EBCD9] hover:text-white'
                  }`}
                >
                  <Activity size={13} />
                  <span>Simulasi Interaktif</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('photorealistic')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'photorealistic'
                      ? 'bg-gradient-to-r from-[#1D70E2] to-[#3B82F6] text-white shadow-md shadow-blue-500/30'
                      : 'text-[#9EBCD9] hover:text-white'
                  }`}
                >
                  <Layers size={13} />
                  <span>3D Studio Render</span>
                </button>
              </div>

              {viewMode === 'photorealistic' ? (
                /* 3D Studio Render View */
                <div className="relative w-full max-w-[340px] aspect-square rounded-[36px] overflow-hidden p-3 bg-gradient-to-b from-[#162D4C] to-[#0A1626] border border-white/20 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
                  <div className="relative w-full h-full rounded-[28px] overflow-hidden group">
                    <img
                      src={smartwatchHardwareImg}
                      alt="Polaris Smartwatch Titanium Hardware 3D Render"
                      className="w-full h-full object-cover rounded-[28px] transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1526]/80 via-transparent to-transparent flex flex-col justify-end p-4">
                      <div className="flex items-center justify-between text-xs text-white">
                        <span className="font-semibold text-[#FFDE70] flex items-center gap-1">
                          <Sparkles size={13} /> Titanium Aerospace Edition
                        </span>
                        <span className="text-[10px] text-slate-300">Curved 2.5D Sapphire</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Ultra-Realistic Interactive Watch Chassis */
                <div className="relative w-full max-w-[320px] sm:max-w-[340px] flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-300">
                  {/* Top Strap with realistic silicone texture & ribs */}
                  <div className="w-32 h-10 bg-gradient-to-b from-[#132338] to-[#1C3352] rounded-t-2xl shadow-md border-t border-x border-white/15 relative -mb-3 z-0 flex flex-col items-center justify-start pt-1">
                    <div className="w-16 h-1 rounded-full bg-white/10" />
                    <div className="w-16 h-1 rounded-full bg-white/10 mt-1" />
                  </div>

                  {/* Smartwatch Physical Chassis Container */}
                  <div className="relative w-72 h-72 sm:w-80 sm:h-80 z-10 flex items-center justify-center">
                    {/* Atmospheric Glow behind watch */}
                    <div className="absolute inset-4 rounded-full bg-[#1D70E2]/35 blur-2xl animate-pulse-subtle pointer-events-none" />

                    {/* Outer Brushed Metal Bezel Ring */}
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#475E7E] via-[#1E334F] to-[#0D1B2D] p-3.5 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_3px_rgba(255,255,255,0.4)] border border-white/20 relative flex items-center justify-center">
                      {/* Realistic Digital Crown (Top Right) */}
                      <div className="absolute -right-3 top-[32%] w-3.5 h-10 rounded-r-md bg-gradient-to-r from-[#2B4569] via-[#6384AB] to-[#2B4569] border border-white/40 shadow-lg flex flex-col justify-around py-1 cursor-pointer hover:brightness-125 transition-all">
                        <div className="w-full h-[1px] bg-black/40" />
                        <div className="w-full h-[1px] bg-black/40" />
                        <div className="w-full h-[1px] bg-black/40" />
                        <div className="w-full h-[1px] bg-black/40" />
                      </div>

                      {/* Secondary Side Button (Bottom Right) */}
                      <div className="absolute -right-2 top-[62%] w-2.5 h-8 rounded-r-sm bg-gradient-to-r from-[#213854] to-[#43648B] border-y border-r border-white/30 shadow-md" />

                      {/* Microphone hole (Left side) */}
                      <div className="absolute left-1.5 top-[50%] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-black/90 border border-white/20" />

                      {/* Inner Chamfered Metallic Rim with Precision Ticks */}
                      <div className="w-full h-full rounded-full bg-gradient-to-b from-[#112338] via-[#0A1624] to-[#040B13] p-2.5 sm:p-3 shadow-[inset_0_4px_12px_rgba(0,0,0,0.9)] border border-white/10 relative flex items-center justify-center">
                        {/* 12-Hour Micro Markers */}
                        <div className="absolute inset-1.5 rounded-full pointer-events-none opacity-40">
                          <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-white" />
                          <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-white" />
                          <div className="absolute left-0.5 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-white" />
                          <div className="absolute right-0.5 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-white" />
                        </div>

                        {/* OLED Touch Screen Display (Circular) */}
                        <div className="w-full h-full rounded-full bg-[#020509] relative overflow-hidden flex flex-col justify-between items-center p-4 text-center shadow-[inset_0_0_20px_rgba(0,0,0,0.95)] select-none">
                          {/* 2.5D Curved Glass Reflection Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent pointer-events-none rounded-full" />
                          <div className="absolute top-0 right-0 w-32 h-16 bg-gradient-to-b from-cyan-400/10 to-transparent transform rotate-45 pointer-events-none blur-sm" />

                          {/* Top OLED Status Bar */}
                          <div className="relative z-10 w-full flex items-center justify-between px-6 pt-1 text-[10px] font-mono text-[#7B9EC2]">
                            <span className="font-semibold text-white/90">09:41</span>
                            <div className="flex items-center gap-1.5 text-white/70">
                              <Radio size={10} className="text-emerald-400 animate-pulse" />
                              <span className="text-[9px] font-sans font-medium text-[#FFDE70]">88%</span>
                            </div>
                          </div>

                          {/* Dynamic Screen Content Area */}
                          <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full px-2">
                            {/* Screen 1: Smart Reminder */}
                            {activeFeature === 'reminder' && (
                              <div className="animate-in fade-in zoom-in-95 duration-300 flex flex-col items-center w-full">
                                {/* Glowing Amber Ring Icon */}
                                <div className="relative mb-2">
                                  <div className="absolute -inset-2 rounded-full bg-[#FFDE70]/20 blur-md animate-pulse" />
                                  <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-[#FFE885] to-[#E6B800] text-[#0A1626] flex items-center justify-center shadow-lg">
                                    <Bell size={18} className="animate-bounce" />
                                  </div>
                                </div>
                                <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#FFDE70]/15 border border-[#FFDE70]/30 text-[9px] font-bold tracking-wider text-[#FFDE70] uppercase mb-0.5">
                                  Study Time
                                </div>
                                <div className="text-2xl font-mono font-black text-white tracking-tight leading-none my-1 drop-shadow-md">
                                  09:00
                                </div>
                                <p className="text-[10px] text-[#A3C4EB] font-medium max-w-[150px] truncate">
                                  Persiapan Ujian Bab 4
                                </p>
                                <div className="mt-2.5 flex items-center gap-1.5 bg-white/10 hover:bg-white/20 active:scale-95 transition-all px-3 py-1 rounded-full text-[9px] text-white font-medium border border-white/15 cursor-pointer">
                                  <span>Mulai Sekarang</span>
                                  <ChevronRight size={10} />
                                </div>
                              </div>
                            )}

                            {/* Screen 2: Quick Glance Daily Rings */}
                            {activeFeature === 'glance' && (
                              <div className="animate-in fade-in zoom-in-95 duration-300 flex flex-col items-center w-full">
                                <div className="relative w-24 h-24 my-0.5 flex items-center justify-center">
                                  {/* Multi-layered Activity Rings */}
                                  <svg className="w-full h-full transform -rotate-90">
                                    {/* Track Backgrounds */}
                                    <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.08)" strokeWidth="6" fill="none" />
                                    <circle cx="48" cy="48" r="31" stroke="rgba(255,255,255,0.08)" strokeWidth="5" fill="none" />
                                    <circle cx="48" cy="48" r="23" stroke="rgba(255,255,255,0.08)" strokeWidth="4.5" fill="none" />
                                    
                                    {/* Outer Ring: Academics (Blue) */}
                                    <circle
                                      cx="48"
                                      cy="48"
                                      r="40"
                                      stroke="#38BDF8"
                                      strokeWidth="6"
                                      strokeDasharray="251"
                                      strokeDashoffset="55"
                                      strokeLinecap="round"
                                      fill="none"
                                      className="drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]"
                                    />
                                    {/* Middle Ring: Career/Org (Gold) */}
                                    <circle
                                      cx="48"
                                      cy="48"
                                      r="31"
                                      stroke="#FFDE70"
                                      strokeWidth="5"
                                      strokeDasharray="194"
                                      strokeDashoffset="48"
                                      strokeLinecap="round"
                                      fill="none"
                                      className="drop-shadow-[0_0_6px_rgba(255,222,112,0.5)]"
                                    />
                                    {/* Inner Ring: Wellbeing (Emerald) */}
                                    <circle
                                      cx="48"
                                      cy="48"
                                      r="23"
                                      stroke="#34D399"
                                      strokeWidth="4.5"
                                      strokeDasharray="144"
                                      strokeDashoffset="30"
                                      strokeLinecap="round"
                                      fill="none"
                                      className="drop-shadow-[0_0_6px_rgba(52,211,153,0.5)]"
                                    />
                                  </svg>
                                  <div className="absolute flex flex-col items-center justify-center">
                                    <span className="text-base font-black font-mono text-white leading-none">
                                      78%
                                    </span>
                                    <span className="text-[8px] text-[#A3C4EB] font-medium mt-0.5">
                                      Balance
                                    </span>
                                  </div>
                                </div>
                                <div className="text-[10px] text-[#90CDF4] font-medium flex items-center gap-1 mt-1">
                                  <CheckCircle2 size={11} className="text-emerald-400" />
                                  <span>4 dari 5 target harian selesai</span>
                                </div>
                              </div>
                            )}

                            {/* Screen 3: Instant Emergency SOS */}
                            {activeFeature === 'sos' && (
                              <div className="animate-in fade-in zoom-in-95 duration-300 flex flex-col items-center w-full">
                                <div className="relative mb-2">
                                  <div className="absolute -inset-3 rounded-full bg-rose-500/35 blur-md animate-ping opacity-75" />
                                  <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-rose-500 to-red-700 text-white flex items-center justify-center shadow-lg shadow-rose-600/50">
                                    <ShieldAlert size={20} className="animate-pulse" />
                                  </div>
                                </div>
                                <div className="inline-block px-2.5 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-[9px] font-black tracking-wider text-rose-300 uppercase">
                                  SOS Terkirim
                                </div>
                                <div className="text-[11px] font-bold text-white mt-1 flex items-center gap-1">
                                  <MapPin size={11} className="text-rose-400" />
                                  <span>GPS & Kontak Terhubung</span>
                                </div>
                                <p className="text-[8.5px] text-slate-300 max-w-[150px] leading-tight mt-1 font-mono">
                                  -6.2088° S, 106.8456° E
                                </p>
                              </div>
                            )}
                          </div>

                          {/* Bottom Navigation Dots Indicator on Watch Face */}
                          <div className="relative z-10 flex items-center gap-1.5 pb-1">
                            <button
                              type="button"
                              onClick={() => setActiveFeature('reminder')}
                              className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                                activeFeature === 'reminder' ? 'w-4 bg-[#FFDE70]' : 'bg-white/30'
                              }`}
                              aria-label="Reminder feature"
                            />
                            <button
                              type="button"
                              onClick={() => setActiveFeature('glance')}
                              className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                                activeFeature === 'glance' ? 'w-4 bg-[#60A5FA]' : 'bg-white/30'
                              }`}
                              aria-label="Glance feature"
                            />
                            <button
                              type="button"
                              onClick={() => setActiveFeature('sos')}
                              className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                                activeFeature === 'sos' ? 'w-4 bg-rose-500' : 'bg-white/30'
                              }`}
                              aria-label="SOS feature"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Strap with realistic curvature & clasp highlight */}
                  <div className="w-32 h-12 bg-gradient-to-b from-[#1C3352] to-[#112033] rounded-b-2xl shadow-xl border-b border-x border-white/15 relative -mt-3 z-0 flex flex-col items-center justify-end pb-1.5">
                    <div className="w-16 h-1 rounded-full bg-white/10 mb-1" />
                    <div className="w-10 h-0.5 rounded-full bg-white/15" />
                  </div>
                </div>
              )}

              {/* Interactive Cue Badge */}
              <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#132845]/90 border border-white/15 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs text-[#B2CBE6] font-medium">
                  {viewMode === 'interactive'
                    ? 'Klik tombol di bawah atau kartu untuk menguji layar jam'
                    : 'Render 3D fotorealistik presisi tinggi'}
                </span>
              </div>
            </div>

            {/* Right Column: Copy & Interactive Feature Cards */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FFDE70] text-xs font-bold tracking-wide mb-4 border border-white/15 backdrop-blur-md">
                <Sparkles size={14} />
                <span>Wearable Smart Companion</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white leading-tight tracking-tight mb-4">
                Selalu Dekat, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFDE70] via-amber-200 to-sky-300">
                  Selalu Mengingatkan
                </span>
              </h2>

              <p className="text-base text-[#B2CBE6] leading-relaxed mb-8 max-w-xl font-normal">
                Dari notifikasi fokus cerdas, ringkasan keseimbangan hidup harian, hingga fitur keamanan SOS darurat dengan satu sentuhan — wearable Polaris adalah teman andalan di pergelangan tanganmu.
              </p>

              {/* 3 Interactive Cards with Enhanced Tactile Feedback */}
              <div className="flex flex-col gap-3.5 w-full max-w-xl">
                {/* Card 1: Reminder */}
                <button
                  type="button"
                  onClick={() => {
                    setActiveFeature('reminder');
                    setViewMode('interactive');
                  }}
                  className={`text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                    activeFeature === 'reminder' && viewMode === 'interactive'
                      ? 'bg-gradient-to-r from-white/20 to-white/10 border-2 border-[#FFDE70] shadow-xl shadow-[#FFDE70]/10 translate-x-1.5'
                      : 'bg-white/10 hover:bg-white/15 border border-white/10 hover:translate-x-1'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    activeFeature === 'reminder' ? 'bg-[#FFDE70] text-[#102A4C] shadow-md' : 'bg-white/10 text-[#FFDE70]'
                  }`}>
                    <Bell size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-white mb-0.5">
                        Smart Reminder & Focus Timer
                      </h3>
                      {activeFeature === 'reminder' && (
                        <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#FFDE70] bg-[#FFDE70]/20 px-2 py-0.5 rounded-md">
                          Live On Screen
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-[#B2CBE6] leading-snug">
                      Getaran haptik lembut memberi tahu waktu belajar dan istirahat tanpa mengganggu fokus.
                    </p>
                  </div>
                </button>

                {/* Card 2: Quick Glance */}
                <button
                  type="button"
                  onClick={() => {
                    setActiveFeature('glance');
                    setViewMode('interactive');
                  }}
                  className={`text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                    activeFeature === 'glance' && viewMode === 'interactive'
                      ? 'bg-gradient-to-r from-white/20 to-white/10 border-2 border-[#60A5FA] shadow-xl shadow-blue-500/10 translate-x-1.5'
                      : 'bg-white/10 hover:bg-white/15 border border-white/10 hover:translate-x-1'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    activeFeature === 'glance' ? 'bg-[#60A5FA] text-white shadow-md' : 'bg-white/10 text-[#60A5FA]'
                  }`}>
                    <Eye size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-white mb-0.5">
                        Quick Glance & Life Balance
                      </h3>
                      {activeFeature === 'glance' && (
                        <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#60A5FA] bg-[#60A5FA]/20 px-2 py-0.5 rounded-md">
                          Live On Screen
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-[#B2CBE6] leading-snug">
                      Cek visualisasi cincin target harian (akademik, sosial, kesehatan) cukup dengan mengangkat pergelangan tangan.
                    </p>
                  </div>
                </button>

                {/* Card 3: SOS */}
                <button
                  type="button"
                  onClick={() => {
                    setActiveFeature('sos');
                    setViewMode('interactive');
                  }}
                  className={`text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                    activeFeature === 'sos' && viewMode === 'interactive'
                      ? 'bg-gradient-to-r from-white/20 to-white/10 border-2 border-rose-400 shadow-xl shadow-rose-500/10 translate-x-1.5'
                      : 'bg-white/10 hover:bg-white/15 border border-white/10 hover:translate-x-1'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    activeFeature === 'sos' ? 'bg-rose-500 text-white shadow-md' : 'bg-white/10 text-rose-400'
                  }`}>
                    <ShieldAlert size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-white mb-0.5">
                        Emergency SOS & Real-Time GPS
                      </h3>
                      {activeFeature === 'sos' && (
                        <span className="text-[10px] uppercase font-extrabold tracking-wider text-rose-400 bg-rose-500/20 px-2 py-0.5 rounded-md">
                          Live On Screen
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-[#B2CBE6] leading-snug">
                      Tekan tombol crown 3 detik untuk otomatis menyiarkan koordinat darurat ke keluarga dan teman terdekat.
                    </p>
                  </div>
                </button>
              </div>

              {/* Footnote note with prototype badge */}
              <div className="mt-7 flex items-center gap-2 text-xs text-[#8BA7C4] font-medium">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FFDE70]" />
                <span>Konsep perangkat wearable terintegrasi ekosistem Polaris & smartphone</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
