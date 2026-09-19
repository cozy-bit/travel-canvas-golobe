import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Button from '../../components/ui/Button';
import { Bed, UserCheck, Sparkles, ExternalLink, Calendar, MapPin, Search } from 'lucide-react';
import hotel1 from '../../assets/images/hotels/hotel1.png';
import hotel2 from '../../assets/images/hotels/hotel2.png';
import hotel3 from '../../assets/images/hotels/hotel3.png';

export default function HotelsPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Developer Assignment Badge */}
        <div className="bg-emerald-50 border-2 border-dashed border-emerald-400 rounded-2xl p-6 sm:p-8 mb-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wider mb-2">
                <UserCheck className="w-3.5 h-3.5" /> Зона ответственности: Кибриё
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-[#112211]">
                Hotel Flow (Поиск и бронирование отелей)
              </h1>
              <p className="text-sm text-gray-600 mt-1 max-w-2xl">
                Этот модуль закреплен за **Кибриё** (React + Tailwind CSS). Здесь верстаются экраны поиска отелей, каталога, детальной страницы и подтверждения.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href="/team-guide.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#8DD3BB] text-[#112211] font-semibold text-sm rounded-lg hover:bg-[#7BC6AE] transition-colors"
              >
                <Sparkles className="w-4 h-4" /> Инструкция в Team Guide
              </a>
            </div>
          </div>
        </div>

        {/* Hotel Search Widget Preview / Mockup */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mb-12">
          <h2 className="text-xl font-bold text-[#112211] mb-6 flex items-center gap-2">
            <Bed className="w-5 h-5 text-[#8DD3BB]" />
            Find Your Stays & Resorts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border border-gray-300 rounded-lg p-3">
              <label className="text-xs text-gray-500 font-medium block">Destination</label>
              <div className="flex items-center gap-2 mt-1">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-semibold text-[#112211]">Istanbul, Turkey</span>
              </div>
            </div>

            <div className="border border-gray-300 rounded-lg p-3">
              <label className="text-xs text-gray-500 font-medium block">Check-in</label>
              <div className="flex items-center gap-2 mt-1">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-semibold text-[#112211]">Fri 12 Dec</span>
              </div>
            </div>

            <div className="border border-gray-300 rounded-lg p-3">
              <label className="text-xs text-gray-500 font-medium block">Check-out</label>
              <div className="flex items-center gap-2 mt-1">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-semibold text-[#112211]">Sun 14 Dec</span>
              </div>
            </div>

            <div className="flex items-end">
              <Button variant="primary" size="lg" className="w-full h-[52px] rounded-lg">
                <Search className="w-4 h-4 mr-2" /> Show Places
              </Button>
            </div>
          </div>
        </div>

        {/* Preview of downloaded Figma Hotel assets ready for Kibriyo */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-[#112211] mb-4">
            Готовые ассеты отелей из Figma (в папке `src/assets/images/hotels/`):
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-xs overflow-hidden border border-gray-100 group">
              <img src={hotel1} alt="Hotel CVK" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-4">
                <h4 className="font-bold text-[#112211]">CVK Park Bosphorus Hotel</h4>
                <p className="text-xs text-gray-500 mt-1">Gümüssuyu Mah. Inönü Cad. No:8, Istanbul</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-extrabold text-[#112211]">$240/night</span>
                  <span className="text-xs px-2 py-1 bg-[#8DD3BB]/20 text-[#00845B] font-bold rounded-sm">4.8 ★</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xs overflow-hidden border border-gray-100 group">
              <img src={hotel2} alt="Hotel Grand" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-4">
                <h4 className="font-bold text-[#112211]">Grand Tarabya Hotel</h4>
                <p className="text-xs text-gray-500 mt-1">Tarabya Mah. Haydar Aliyev Cad., Istanbul</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-extrabold text-[#112211]">$185/night</span>
                  <span className="text-xs px-2 py-1 bg-[#8DD3BB]/20 text-[#00845B] font-bold rounded-sm">4.5 ★</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xs overflow-hidden border border-gray-100 group">
              <img src={hotel3} alt="Hotel Bosphorus" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-4">
                <h4 className="font-bold text-[#112211]">Swissôtel The Bosphorus</h4>
                <p className="text-xs text-gray-500 mt-1">Visnezade Mah. Acisu Sok. No:19, Istanbul</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-extrabold text-[#112211]">$310/night</span>
                  <span className="text-xs px-2 py-1 bg-[#8DD3BB]/20 text-[#00845B] font-bold rounded-sm">4.9 ★</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
