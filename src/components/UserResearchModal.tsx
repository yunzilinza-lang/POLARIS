import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import { PolarisLogo } from './PolarisLogo';

interface UserResearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserResearchModal: React.FC<UserResearchModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('Mahasiswa');
  const [challenge, setChallenge] = useState('Life Balance & Burnout');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1526]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white dark:bg-[#12233A] rounded-[32px] p-6 sm:p-8 shadow-2xl border border-[#D9E7F6] dark:border-[#1E3656] text-left">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F0F6FD] dark:bg-[#1A2E4B] text-[#55769C] dark:text-[#A0BCD8] hover:text-[#102A4C] dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-[#102A4C] dark:bg-[#FFDE70] text-[#FFDE70] dark:text-[#102A4C] flex items-center justify-center shadow-xs">
                <PolarisLogo size={16} />
              </div>
              <span className="text-xs font-bold text-[#0E529F] dark:text-[#90CDF4] uppercase tracking-wider">
                User Research & Early Access
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-[#102A4C] dark:text-white mb-2 leading-tight">
              Bantu Bentuk Masa Depan Polaris
            </h3>
            <p className="text-xs sm:text-sm text-[#3B5A7E] dark:text-[#95AFCC] mb-6 font-medium">
              Sebagai mahasiswa atau profesional muda, masukanmu sangat berharga.
              Dapatkan akses beta eksklusif dan merchandise Polaris edisi perdana.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#102A4C] dark:text-white mb-1.5">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Sarah Anindya"
                  className="w-full px-4 py-3 rounded-2xl bg-[#F6FAFF] dark:bg-[#0E1A2C] border border-[#BED6F3] dark:border-[#1F3757] text-[#102A4C] dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1D70E2] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#102A4C] dark:text-white mb-1.5">
                  Email Aktif
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sarah@university.ac.id"
                  className="w-full px-4 py-3 rounded-2xl bg-[#F6FAFF] dark:bg-[#0E1A2C] border border-[#BED6F3] dark:border-[#1F3757] text-[#102A4C] dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1D70E2] transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#102A4C] dark:text-white mb-1.5">
                    Status Kamu
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full px-3 py-3 rounded-2xl bg-[#F6FAFF] dark:bg-[#0E1A2C] border border-[#BED6F3] dark:border-[#1F3757] text-[#102A4C] dark:text-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#1D70E2] transition-colors"
                  >
                    <option value="Mahasiswa">Mahasiswa S1/D4</option>
                    <option value="Fresh Graduate">Fresh Graduate</option>
                    <option value="Young Professional">Young Professional</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#102A4C] dark:text-white mb-1.5">
                    Tantangan Terbesar
                  </label>
                  <select
                    value={challenge}
                    onChange={(e) => setChallenge(e.target.value)}
                    className="w-full px-3 py-3 rounded-2xl bg-[#F6FAFF] dark:bg-[#0E1A2C] border border-[#BED6F3] dark:border-[#1F3757] text-[#102A4C] dark:text-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#1D70E2] transition-colors"
                  >
                    <option value="Life Balance & Burnout">Life Balance & Burnout</option>
                    <option value="Prioritas & Konsistensi">Prioritas & Konsistensi</option>
                    <option value="Arah Masa Depan">Arah Masa Depan</option>
                    <option value="Activity Overload">Activity Overload</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#FFDE70] hover:bg-[#FCD34D] text-[#102A4C] font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <span>Kirim & Gabung Waitlist</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center mb-4">
              <CheckCircle size={36} />
            </div>
            <h3 className="text-2xl font-bold text-[#102A4C] dark:text-white mb-2">
              Terima Kasih, {name || 'Kawan'}!
            </h3>
            <p className="text-sm text-[#3B5A7E] dark:text-[#95AFCC] max-w-sm mx-auto mb-6 font-medium">
              Undangan user interview dan akses awal ke aplikasi Polaris telah dikirimkan ke <strong>{email}</strong>.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full bg-[#102A4C] dark:bg-[#FFDE70] text-white dark:text-[#102A4C] font-bold text-xs shadow-sm cursor-pointer"
            >
              Kembali ke Landing Page
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
