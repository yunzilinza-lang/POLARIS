import React from 'react';
import { Target, ListTodo, Sparkles, Brain, Watch } from 'lucide-react';
import { RadarChart } from './RadarChart';

export const CoreFeatures: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E1EEFB] dark:bg-[#182C48] text-[#0E529F] dark:text-[#90CDF4] text-xs font-bold tracking-wide mb-4 border border-[#C5DCF5] dark:border-[#223E63]">
            <span>Core Features</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A4C] dark:text-white leading-tight tracking-tight">
            Fitur Utama Polaris
          </h2>
          <p className="text-base text-[#2B4769] dark:text-[#96AFCA] max-w-xl mt-3 font-normal">
            Dirancang khusus untuk ritme dinamis anak muda yang menyeimbangkan studi, karier, dan kebahagiaan.
          </p>
        </div>

        {/* 5 Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {/* Card 1: Goal Tracking */}
          <div className="group bg-white dark:bg-[#12233A] rounded-[26px] p-6 flex flex-col items-start border border-[#D5E5F7] dark:border-[#1E3656] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-2xs">
              <Target size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#102A4C] dark:text-white mb-2 leading-snug">
              Goal Tracking
            </h3>
            <p className="text-sm text-[#3B5A7E] dark:text-[#90A9C5] leading-relaxed font-medium">
              Tetapkan tujuan jangka pendek & panjang, dan pantau progresnya.
            </p>
            <div className="mt-auto pt-6 w-full">
              <div className="bg-[#F6FAFF] dark:bg-[#172B47] rounded-xl p-3 border border-[#D5E5F7] dark:border-[#213C5F] text-[11px] text-[#3B5A7E] dark:text-[#9BB4CE]">
                <div className="flex justify-between mb-1 font-bold text-[#102A4C] dark:text-white">
                  <span>Semester Goal</span>
                  <span className="text-[#0E529F] dark:text-[#60A5FA] font-mono">82%</span>
                </div>
                <div className="w-full bg-[#E2EBF5] dark:bg-[#203756] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#1D70E2] h-full rounded-full w-[82%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Activity Log */}
          <div className="group bg-white dark:bg-[#12233A] rounded-[26px] p-6 flex flex-col items-start border border-[#D5E5F7] dark:border-[#1E3656] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-[#DBEAFE] text-[#0E529F] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-2xs">
              <ListTodo size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#102A4C] dark:text-white mb-2 leading-snug">
              Activity Log
            </h3>
            <p className="text-sm text-[#3B5A7E] dark:text-[#90A9C5] leading-relaxed font-medium">
              Catat semua aktivitas harian, dari kuliah sampai waktu me time.
            </p>
            <div className="mt-auto pt-6 w-full space-y-1.5">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-[#F6FAFF] dark:bg-[#172B47] border border-[#E2EFFC] dark:border-transparent text-[11px] text-[#1D3C61] dark:text-[#A1B8D4] font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="truncate">Tugas Struktur Data</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-[#F6FAFF] dark:bg-[#172B47] border border-[#E2EFFC] dark:border-transparent text-[11px] text-[#1D3C61] dark:text-[#A1B8D4] font-medium">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="truncate">Lari Sore 30 Mnt</span>
              </div>
            </div>
          </div>

          {/* Card 3: Life Balance Dashboard (Includes 5-axis Mini Radar Chart!) */}
          <div className="group bg-white dark:bg-[#12233A] rounded-[26px] p-5 sm:p-6 flex flex-col items-start border-2 border-[#A3C4EB] dark:border-[#284973] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 lg:col-span-1 md:col-span-2 overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] text-[#0369A1] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-2xs">
              <Sparkles size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#102A4C] dark:text-white mb-2 leading-snug">
              Life Balance Dashboard
            </h3>
            <p className="text-sm text-[#3B5A7E] dark:text-[#90A9C5] leading-relaxed mb-3 font-medium">
              Lihat keseimbangan hidupmu dalam 5 domain utama.
            </p>

            {/* Embedded 5-Axis Radar Chart */}
            <div className="w-full flex justify-center py-1 overflow-hidden">
              <RadarChart interactive={true} />
            </div>
          </div>

          {/* Card 4: AI Companion */}
          <div className="group bg-white dark:bg-[#12233A] rounded-[26px] p-6 flex flex-col items-start border border-[#D5E5F7] dark:border-[#1E3656] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-[#EDE9FE] text-[#6D28D9] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-2xs">
              <Brain size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#102A4C] dark:text-white mb-2 leading-snug">
              AI Companion
            </h3>
            <p className="text-sm text-[#3B5A7E] dark:text-[#90A9C5] leading-relaxed font-medium">
              Dapatkan insight, saran, dan motivasi personal berbasis AI.
            </p>
            <div className="mt-auto pt-6 w-full">
              <div className="p-3 rounded-xl bg-[#FAF5FF] dark:bg-[#1A223B] border border-[#E9D8FD] dark:border-[#2D3357] text-[11px] text-[#581C87] dark:text-[#C4B5FD] font-medium leading-tight">
                "Kamu sudah belajar 4 jam hari ini, jangan lupa istirahat & hidrasi ya!"
              </div>
            </div>
          </div>

          {/* Card 5: Wearable Companion */}
          <div className="group bg-white dark:bg-[#12233A] rounded-[26px] p-6 flex flex-col items-start border border-[#D5E5F7] dark:border-[#1E3656] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-[#D1FAE5] text-[#047857] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-2xs">
              <Watch size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#102A4C] dark:text-white mb-2 leading-snug">
              Wearable Companion
            </h3>
            <p className="text-sm text-[#3B5A7E] dark:text-[#90A9C5] leading-relaxed font-medium">
              Notifikasi, quick glance, dan fitur SOS untuk keamananmu.
            </p>
            <div className="mt-auto pt-6 w-full">
              <div className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#F0FDF4] dark:bg-[#132A2F] border border-[#DCFCE7] dark:border-[#1A3D43] text-[11px] text-[#15803D] dark:text-[#86EFAC] font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Sync Real-Time via BLE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
