import React from 'react';
import { SparkleIcon, SparkleStarOutline, CurvedArrowUpLeft } from './SparkleIcon';

export const TheChallenge: React.FC = () => {
  const challengeCards = [
    {
      id: 'akademik',
      title: 'Akademik',
      subtitle: 'Tugas, kelas, ujian',
      image: '/src/assets/images/category_akademik_1790344982740.jpg',
    },
    {
      id: 'karier',
      title: 'Karier',
      subtitle: 'Magang, skill, masa depan',
      image: '/src/assets/images/category_karier_1790344994228.jpg',
    },
    {
      id: 'organisasi',
      title: 'Organisasi',
      subtitle: 'Komunitas, event, leadership',
      image: '/src/assets/images/category_organisasi_1790345004694.jpg',
    },
    {
      id: 'sosial',
      title: 'Sosial',
      subtitle: 'Teman, keluarga, relasi',
      image: '/src/assets/images/category_sosial_1790345027884.jpg',
    },
    {
      id: 'kesejahteraan',
      title: 'Kesejahteraan',
      subtitle: 'Kesehatan, mental, me time',
      image: '/src/assets/images/category_kesejahteraan_1790345015437.jpg',
    },
  ];

  return (
    <section id="the-challenge" className="py-16 md:py-24 relative overflow-hidden">
      {/* Decorative Sparkle Accent */}
      <div className="absolute top-12 right-[8%] text-[#FFDE70] pointer-events-none animate-pulse-subtle">
        <SparkleIcon size={26} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Section Header & Problem Statement */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E1EEFB] dark:bg-[#182C48] text-[#0E529F] dark:text-[#90CDF4] text-xs font-bold tracking-wide mb-4 border border-[#C5DCF5] dark:border-[#223E63]">
              <span>The Challenge</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A4C] dark:text-white leading-tight tracking-tight mb-5">
              Banyak Peran, <br />
              Satu Hidup
            </h2>

            <p className="text-base text-[#2B4769] dark:text-[#A0B8D4] leading-relaxed mb-6 font-normal">
              Mahasiswa dan anak muda punya banyak tanggung jawab sekaligus.
              Kuliah, organisasi, karier, hubungan sosial, dan menjaga diri
              sendiri. Mudah merasa kewalahan, bingung harus mulai dari mana,
              atau kehilangan arah.
            </p>

            {/* Micro quote accent */}
            <div className="p-4 rounded-2xl bg-[#E6F0FC] dark:bg-[#13243B] border border-[#CADFF6] dark:border-[#1E3656] text-xs text-[#133358] dark:text-[#A5C3E3] font-medium leading-relaxed shadow-2xs">
              💡 <strong className="text-[#0E2849] dark:text-white font-bold">Realitas Gen Z & Mahasiswa:</strong> 78% anak muda merasa waktu mereka terbagi ke terlalu banyak arah tanpa kompas yang menyatukan tujuan mereka.
            </div>
          </div>

          {/* Right Column: 2x3 Grid of 5 Illustrated Cards + Handwritten Note */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {challengeCards.map((card) => (
                <div
                  key={card.id}
                  className="group bg-white dark:bg-[#12233A] rounded-[24px] p-4 sm:p-5 flex flex-col items-center text-center shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-[#D5E5F7] dark:border-[#1E3656]"
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden mb-3.5 bg-[#F6FAFF] dark:bg-[#192E4C] flex items-center justify-center p-1 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-contain rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#102A4C] dark:text-white mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#3D5B7E] dark:text-[#91ADC9] font-medium">
                    {card.subtitle}
                  </p>
                </div>
              ))}

              {/* 6th Slot: Handwritten Annotation with curved arrow and sparkle star */}
              <div className="relative flex flex-col items-center justify-center p-4 sm:p-6 text-center select-none">
                <div className="flex flex-col items-start rotate-[-4deg] max-w-[190px]">
                  <CurvedArrowUpLeft className="text-[#102A4C] dark:text-[#90CDF4] -mb-1 ml-2" />
                  <p className="font-handwriting text-xl sm:text-2xl font-bold text-[#102A4C] dark:text-[#D5E5F7] leading-tight text-left">
                    Banyak hal yang penting. <br />
                    Tapi semua butuh arah.
                  </p>
                  <div className="self-end mt-1 text-[#D97706] dark:text-[#FFDE70] rotate-12">
                    <SparkleStarOutline size={22} />
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
