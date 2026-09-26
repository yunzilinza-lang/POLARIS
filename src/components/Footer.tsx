import React, { useState } from 'react';
import { ArrowRight, Check, Heart, Mail } from 'lucide-react';
import { PolarisLogo } from './PolarisLogo';

interface FooterProps {
  onOpenResearch: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResearch }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer id="contact" className="pt-16 pb-12 bg-white dark:bg-[#081220] border-t border-[#D5E5F7] dark:border-[#1A2E49] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E1EDF8] dark:border-[#17273F]">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-4 flex flex-col items-start text-left">
            <a href="#home" className="flex items-center gap-3 group mb-4">
              <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center shadow-md border border-neutral-800 group-hover:scale-105 transition-transform">
                <PolarisLogo size={26} color="#FFFFFF" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-[#102A4C] dark:text-white">
                Polaris
              </span>
            </a>
            <p className="text-sm text-[#2B4769] dark:text-[#8EABC7] leading-relaxed mb-6 max-w-sm font-medium">
              Ekosistem manajemen hidup berbasis tujuan untuk mahasiswa dan profesional muda. Menghubungkan kebiasaan harian dengan visi masa depan.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1EEFB] dark:bg-[#132338] text-xs font-bold text-[#0E529F] dark:text-[#90CDF4] border border-[#BED6F3] dark:border-[#1E3758]">
              <PolarisLogo size={14} />
              <span>Your Goals. Our Compass.</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#102A4C] dark:text-white mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-sm text-[#2B4769] dark:text-[#8EABC7] font-semibold">
              <li>
                <a href="#home" className="hover:text-[#1D70E2] dark:hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#1D70E2] dark:hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#1D70E2] dark:hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#the-challenge" className="hover:text-[#1D70E2] dark:hover:text-white transition-colors">
                  About & Tantangan
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Student Community & Program */}
          <div className="md:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#102A4C] dark:text-white mb-4">
              Komunitas
            </h4>
            <ul className="space-y-2.5 text-sm text-[#2B4769] dark:text-[#8EABC7] font-semibold">
              <li>
                <button
                  type="button"
                  onClick={onOpenResearch}
                  className="hover:text-[#1D70E2] dark:hover:text-white transition-colors text-left cursor-pointer"
                >
                  Campus Ambassador
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenResearch}
                  className="hover:text-[#1D70E2] dark:hover:text-white transition-colors text-left cursor-pointer"
                >
                  User Research Lab
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenResearch}
                  className="hover:text-[#1D70E2] dark:hover:text-white transition-colors text-left cursor-pointer"
                >
                  Student Discount Club
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Contact */}
          <div className="md:col-span-4 flex flex-col items-start text-left">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#102A4C] dark:text-white mb-2">
              Dapatkan Update Polaris
            </h4>
            <p className="text-xs text-[#2B4769] dark:text-[#8EABC7] mb-4 font-medium">
              Jadilah yang pertama mencoba rilis wearable dan life balance dashboard.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold w-full border border-emerald-200 dark:border-emerald-900">
                <Check size={16} />
                <span>Kamu sudah terdaftar dalam waitlist Polaris!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center w-full gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Masukkan email kamu"
                  className="flex-1 px-4 py-2.5 rounded-full bg-[#F4F8FD] dark:bg-[#12233B] border border-[#BED6F3] dark:border-[#1E3656] text-xs text-[#102A4C] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1D70E2]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-full bg-[#FFDE70] hover:bg-[#FCD34D] text-[#102A4C] font-bold text-xs shadow-xs transition-colors shrink-0 cursor-pointer"
                >
                  Gabung
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#3B5A7E] dark:text-[#7A99BA] gap-4 font-medium">
          <p>© 2026 Polaris Life Ecosystem. Dibuat dengan cinta untuk generasi masa depan.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenResearch}
              className="hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={onOpenResearch}
              className="hover:underline cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              type="button"
              onClick={onOpenResearch}
              className="hover:underline cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
