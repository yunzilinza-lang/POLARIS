import React, { useState } from 'react';
import { Bell, Eye, ShieldAlert, Sparkles, Heart } from 'lucide-react';
import { SparkleIcon } from './SparkleIcon';

export const WearableShowcase: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<'reminder' | 'glance' | 'sos'>('reminder');

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#102A4C] dark:bg-[#091524] text-white rounded-[36px] md:rounded-[44px] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-white/10">
          {/* Subtle Ambient Backdrops */}
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#1D70E2]/25 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 right-10 w-96 h-96 rounded-full bg-[#FFDE70]/10 blur-3xl pointer-events-none" />

          {/* Sparkle decorative icons in the banner */}
          <div className="absolute top-8 left-12 text-[#FFDE70] opacity-80 animate-pulse-subtle pointer-events-none">
            <SparkleIcon size={18} />
          </div>
          <div className="absolute top-14 right-20 text-[#A3C4EB] opacity-60 animate-float-gentle pointer-events-none">
            <SparkleIcon size={20} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Smartwatch Graphic Preview */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-64 sm:w-72 aspect-square flex items-center justify-center">
                {/* Watch Outer Casing */}
                <div className="w-56 h-56 rounded-full bg-gradient-to-b from-[#1E3A60] via-[#0F223D] to-[#081324] p-3 shadow-2xl border-2 border-white/20 flex items-center justify-center relative">
                  {/* Subtle Crown button on side */}
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-2.5 h-6 bg-[#2B4E7C] rounded-r-md border border-white/30" />

                  {/* Circular Screen Display */}
                  <div className="w-full h-full rounded-full bg-[#050B14] flex flex-col items-center justify-center p-4 text-center overflow-hidden relative shadow-inner border border-white/10">
                    {/* Screen 1: Reminder */}
                    {activeFeature === 'reminder' && (
                      <div className="animate-in fade-in zoom-in-95 duration-300 flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-[#FEF3C7]/20 text-[#FFDE70] flex items-center justify-center mb-1.5">
                          <Bell size={16} />
                        </div>
                        <span className="text-[11px] font-bold text-white tracking-wide uppercase">
                          Study Time
                        </span>
                        <span className="text-xl font-mono font-bold text-[#FFDE70] my-0.5">
                          09:00
                        </span>
                        <span className="text-[10px] text-[#A3C4EB] max-w-[130px] leading-tight font-medium">
                          Persiapan Ujian Bab 4
                        </span>
                      </div>
                    )}

                    {/* Screen 2: Quick Glance */}
                    {activeFeature === 'glance' && (
                      <div className="animate-in fade-in zoom-in-95 duration-300 flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-[#DBEAFE]/20 text-[#60A5FA] flex items-center justify-center mb-1">
                          <Eye size={16} />
                        </div>
                        <span className="text-[10px] font-bold text-[#A3C4EB] uppercase tracking-wider">
                          Daily Balance
                        </span>
                        <div className="relative my-1 flex items-center justify-center">
                          <svg className="w-16 h-16 transform -rotate-90">
                            <circle
                              cx="32"
                              cy="32"
                              r="26"
                              stroke="rgba(255,255,255,0.15)"
                              strokeWidth="5"
                              fill="none"
                            />
                            <circle
                              cx="32"
                              cy="32"
                              r="26"
                              stroke="#60A5FA"
                              strokeWidth="5"
                              strokeDasharray="163"
                              strokeDashoffset="42"
                              strokeLinecap="round"
                              fill="none"
                            />
                          </svg>
                          <span className="absolute text-sm font-bold font-mono text-white">
                            74%
                          </span>
                        </div>
                        <span className="text-[9px] text-[#90CDF4] font-medium">
                          4 dari 5 target selesai
                        </span>
                      </div>
                    )}

                    {/* Screen 3: SOS */}
                    {activeFeature === 'sos' && (
                      <div className="animate-in fade-in zoom-in-95 duration-300 flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full bg-rose-500/25 text-rose-400 flex items-center justify-center mb-1.5 animate-pulse">
                          <ShieldAlert size={20} />
                        </div>
                        <span className="text-xs font-extrabold text-rose-400 uppercase tracking-wider">
                          SOS Aktif
                        </span>
                        <span className="text-[11px] font-bold text-white mt-1">
                          Kirim Lokasi Darurat
                        </span>
                        <span className="text-[9px] text-slate-300 mt-1 max-w-[130px] leading-tight">
                          Kontak darurat & keluarga terinfo
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <span className="text-xs text-[#9EBCD9] mt-3 flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Klik kartu di samping untuk simulasi layar jam</span>
              </span>
            </div>

            {/* Middle Column: Copy */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-[#FFDE70] text-xs font-bold tracking-wide mb-4 border border-white/15">
                <span>Wearable Companion</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4">
                Selalu Dekat, <br />
                Selalu Mengingatkan
              </h2>

              <p className="text-base text-[#B2CBE6] leading-relaxed mb-8 max-w-xl font-normal">
                Dari notifikasi yang membantumu tetap fokus, hingga fitur SOS saat
                darurat, wearable Polaris adalah teman kecil yang selalu ada di
                pergelangan tanganmu.
              </p>

              {/* 3 Interactive Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full">
                {/* Card 1: Reminder */}
                <button
                  type="button"
                  onClick={() => setActiveFeature('reminder')}
                  className={`text-left p-4 rounded-2xl transition-all duration-200 cursor-pointer ${
                    activeFeature === 'reminder'
                      ? 'bg-white/20 border-2 border-[#FFDE70] shadow-lg scale-[1.02]'
                      : 'bg-white/10 hover:bg-white/15 border border-white/10'
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-[#FFDE70] text-[#102A4C] flex items-center justify-center mb-2.5 shadow-xs font-bold">
                    <Bell size={16} />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    Reminder
                  </h3>
                  <p className="text-xs text-[#B2CBE6] leading-snug">
                    Waktunya belajar untuk ujian besok!
                  </p>
                </button>

                {/* Card 2: Quick Glance */}
                <button
                  type="button"
                  onClick={() => setActiveFeature('glance')}
                  className={`text-left p-4 rounded-2xl transition-all duration-200 cursor-pointer ${
                    activeFeature === 'glance'
                      ? 'bg-white/20 border-2 border-[#FFDE70] shadow-lg scale-[1.02]'
                      : 'bg-white/10 hover:bg-white/15 border border-white/10'
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-[#60A5FA] text-white flex items-center justify-center mb-2.5 shadow-xs">
                    <Eye size={16} />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    Quick Glance
                  </h3>
                  <p className="text-xs text-[#B2CBE6] leading-snug">
                    Cek progres harian langsung dari pergelangan.
                  </p>
                </button>

                {/* Card 3: SOS */}
                <button
                  type="button"
                  onClick={() => setActiveFeature('sos')}
                  className={`text-left p-4 rounded-2xl transition-all duration-200 cursor-pointer ${
                    activeFeature === 'sos'
                      ? 'bg-white/20 border-2 border-[#FFDE70] shadow-lg scale-[1.02]'
                      : 'bg-white/10 hover:bg-white/15 border border-white/10'
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center mb-2.5 shadow-xs">
                    <ShieldAlert size={16} />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    SOS
                  </h3>
                  <p className="text-xs text-[#B2CBE6] leading-snug">
                    Tekan 3x untuk kirim lokasi darurat.
                  </p>
                </button>
              </div>

              {/* Footnote note */}
              <div className="mt-8 text-xs text-[#7F9EB8] italic font-medium">
                *Ini masih konsep prototipe.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
