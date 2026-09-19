import React from 'react';
import Layout from '../../components/layout/Layout';
import { Bed, BookOpen, ExternalLink, Code2 } from 'lucide-react';

export default function HotelsPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Чистая заглушка для Кибриё */}
        <div className="bg-white rounded-3xl border-2 border-dashed border-[#8DD3BB] p-8 sm:p-12 text-center shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-[#8DD3BB]/20 text-[#00845B] flex items-center justify-center mx-auto mb-6">
            <Bed className="w-8 h-8" />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#8DD3BB]/20 text-[#00845B] mb-4 uppercase tracking-wider">
            Зона ответственности: Кибриё
          </span>

          <h1 className="text-3xl font-black text-[#112211] mb-3">
            Hotel Flow (Поиск и бронирование отелей)
          </h1>

          <p className="text-base text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
            Этот модуль предназначен для верстки <strong>Кибриё</strong> на <strong>React + Tailwind CSS v4</strong>. 
            Файл компонента: <code className="bg-gray-100 px-2 py-1 rounded text-sm text-black font-semibold">src/pages/hotels/HotelsPage.jsx</code>.
          </p>

          <div className="bg-gray-50 rounded-2xl p-6 text-left max-w-lg mx-auto mb-8 border border-gray-100">
            <h3 className="text-sm font-bold text-[#112211] mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#8DD3BB]" /> Что нужно сверстать по макету:
            </h3>
            <ul className="text-xs sm:text-sm text-gray-600 space-y-2 list-disc pl-5">
              <li>Поисковый виджет отелей (Destination, Check-in, Check-out, Rooms/Guests)</li>
              <li>Каталог отелей и карточки с ценами, рейтингом и фото (ассеты в <code>src/assets/images/hotels/</code>)</li>
              <li>Страница детальной информации об отеле и бронирования</li>
              <li>Используй переиспользуемые UI компоненты: <code>Button</code>, <code>Input</code> из <code>src/components/ui/</code></li>
            </ul>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/team-guide.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#8DD3BB] text-[#112211] font-bold text-sm hover:bg-[#7BC6AE] transition-all shadow-xs"
            >
              <BookOpen className="w-4 h-4" /> Открыть Team Guide
            </a>
            <a
              href="https://www.figma.com/design/f4QpbjGItycxGXdI2XfYbU/Golobe--Copy-?node-id=9-569"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-bold text-sm hover:bg-gray-50 transition-all"
            >
              <ExternalLink className="w-4 h-4" /> Макет в Figma
            </a>
          </div>
        </div>

      </div>
    </Layout>
  );
}
