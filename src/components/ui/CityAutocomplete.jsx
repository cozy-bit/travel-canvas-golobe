import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Plane, Check, X, Search } from 'lucide-react';

export const POPULAR_DESTINATIONS = [
  { city: 'Newark', ruCity: 'Ньюарк', code: 'EWR', name: 'Newark Liberty International', country: 'United States', ruCountry: 'США', display: 'Newark (EWR)' },
  { city: 'New York', ruCity: 'Нью-Йорк', code: 'JFK', name: 'John F. Kennedy International', country: 'United States', ruCountry: 'США', display: 'New York (JFK)' },
  { city: 'New York', ruCity: 'Нью-Йорк', code: 'LGA', name: 'LaGuardia Airport', country: 'United States', ruCountry: 'США', display: 'New York (LGA)' },
  { city: 'Nashville', ruCity: 'Нэшвилл', code: 'BNA', name: 'Nashville International Airport', country: 'United States', ruCountry: 'США', display: 'Nashville (BNA)' },
  { city: 'Dubai', ruCity: 'Дубай', code: 'DXB', name: 'Dubai International Airport', country: 'United Arab Emirates', ruCountry: 'ОАЭ', display: 'Dubai (DXB)' },
  { city: 'Abu Dhabi', ruCity: 'Абу-Даби', code: 'AUH', name: 'Zayed International Airport', country: 'United Arab Emirates', ruCountry: 'ОАЭ', display: 'Abu Dhabi (AUH)' },
  { city: 'Doha', ruCity: 'Доха', code: 'DOH', name: 'Hamad International Airport', country: 'Qatar', ruCountry: 'Катар', display: 'Doha (DOH)' },
  { city: 'Istanbul', ruCity: 'Стамбул', code: 'IST', name: 'Istanbul Airport', country: 'Turkey', ruCountry: 'Турция', display: 'Istanbul (IST)' },
  { city: 'London', ruCity: 'Лондон', code: 'LHR', name: 'London Heathrow Airport', country: 'United Kingdom', ruCountry: 'Великобритания', display: 'London (LHR)' },
  { city: 'London', ruCity: 'Лондон', code: 'LGW', name: 'London Gatwick Airport', country: 'United Kingdom', ruCountry: 'Великобритания', display: 'London (LGW)' },
  { city: 'Paris', ruCity: 'Париж', code: 'CDG', name: 'Charles de Gaulle Airport', country: 'France', ruCountry: 'Франция', display: 'Paris (CDG)' },
  { city: 'Tokyo', ruCity: 'Токио', code: 'HND', name: 'Tokyo Haneda Airport', country: 'Japan', ruCountry: 'Япония', display: 'Tokyo (HND)' },
  { city: 'Tokyo', ruCity: 'Токио', code: 'NRT', name: 'Narita International Airport', country: 'Japan', ruCountry: 'Япония', display: 'Tokyo (NRT)' },
  { city: 'Melbourne', ruCity: 'Мельбурн', code: 'MEL', name: 'Melbourne Airport', country: 'Australia', ruCountry: 'Австралия', display: 'Melbourne (MEL)' },
  { city: 'Sydney', ruCity: 'Сидней', code: 'SYD', name: 'Sydney Kingsford Smith Airport', country: 'Australia', ruCountry: 'Австралия', display: 'Sydney (SYD)' },
  { city: 'Baku', ruCity: 'Баку', code: 'GYD', name: 'Heydar Aliyev International Airport', country: 'Azerbaijan', ruCountry: 'Азербайджан', display: 'Baku (GYD)' },
  { city: 'Lahore', ruCity: 'Лахор', code: 'LHE', name: 'Allama Iqbal International Airport', country: 'Pakistan', ruCountry: 'Пакистан', display: 'Lahore (LHE)' },
  { city: 'Karachi', ruCity: 'Карачи', code: 'KHI', name: 'Jinnah International Airport', country: 'Pakistan', ruCountry: 'Пакистан', display: 'Karachi (KHI)' },
  { city: 'Tashkent', ruCity: 'Ташкент', code: 'TAS', name: 'Islam Karimov International Airport', country: 'Uzbekistan', ruCountry: 'Узбекистан', display: 'Tashkent (TAS)' },
  { city: 'Los Angeles', ruCity: 'Лос-Анджелес', code: 'LAX', name: 'Los Angeles International Airport', country: 'United States', ruCountry: 'США', display: 'Los Angeles (LAX)' },
  { city: 'San Francisco', ruCity: 'Сан-Франциско', code: 'SFO', name: 'San Francisco International Airport', country: 'United States', ruCountry: 'США', display: 'San Francisco (SFO)' },
  { city: 'Miami', ruCity: 'Майами', code: 'MIA', name: 'Miami International Airport', country: 'United States', ruCountry: 'США', display: 'Miami (MIA)' },
  { city: 'Malé', ruCity: 'Мале', code: 'MLE', name: 'Velana International Airport', country: 'Maldives', ruCountry: 'Мальдивы', display: 'Malé (MLE)' },
  { city: 'Bali / Denpasar', ruCity: 'Бали', code: 'DPS', name: 'Ngurah Rai International Airport', country: 'Indonesia', ruCountry: 'Индонезия', display: 'Bali (DPS)' },
  { city: 'Bogotá', ruCity: 'Богота', code: 'BOG', name: 'El Dorado International Airport', country: 'Colombia', ruCountry: 'Колумбия', display: 'Bogotá (BOG)' },
  { city: 'Rome', ruCity: 'Рим', code: 'FCO', name: 'Leonardo da Vinci International Airport', country: 'Italy', ruCountry: 'Италия', display: 'Rome (FCO)' },
  { city: 'Barcelona', ruCity: 'Барселона', code: 'BCN', name: 'Josep Tarradellas Barcelona-El Prat Airport', country: 'Spain', ruCountry: 'Испания', display: 'Barcelona (BCN)' },
  { city: 'Singapore', ruCity: 'Сингапур', code: 'SIN', name: 'Singapore Changi Airport', country: 'Singapore', ruCountry: 'Сингапур', display: 'Singapore (SIN)' },
];

export default function CityAutocomplete({
  label,
  value,
  onChange,
  placeholder = 'Search city or airport...',
  icon = null,
  required = false,
  className = '',
  containerClassName = '',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  // Filter destinations based on user input (supports English and Russian)
  const suggestions = useMemo(() => {
    const query = (value || '').trim().toLowerCase();
    if (!query) {
      return POPULAR_DESTINATIONS.slice(0, 6);
    }

    return POPULAR_DESTINATIONS.filter((item) => {
      return (
        item.city.toLowerCase().includes(query) ||
        (item.ruCity && item.ruCity.toLowerCase().includes(query)) ||
        item.code.toLowerCase().includes(query) ||
        item.name.toLowerCase().includes(query) ||
        item.country.toLowerCase().includes(query) ||
        (item.ruCountry && item.ruCountry.toLowerCase().includes(query)) ||
        item.display.toLowerCase().includes(query)
      );
    }).slice(0, 8);
  }, [value]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const triggerChange = (newVal) => {
    if (!onChange) return;
    onChange(newVal);
  };

  const handleSelect = (item) => {
    triggerChange(item.display);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (!isOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      setIsOpen(true);
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === 'Enter') {
      if (isOpen && highlightedIndex >= 0 && highlightedIndex < suggestions.length) {
        e.preventDefault();
        handleSelect(suggestions[highlightedIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setHighlightedIndex(-1);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col ${containerClassName} ${isOpen ? 'z-50' : 'z-10'}`}
    >
      {/* Input Field Container */}
      <div
        onClick={() => inputRef.current?.focus()}
        className={`relative flex items-center border rounded-sm transition-colors duration-200 bg-white dark:bg-[#141F1A] cursor-text ${
          isOpen
            ? 'border-[#8DD3BB] ring-2 ring-[#8DD3BB]/30'
            : 'border-[#79747E]/40 dark:border-[#2D3D36] focus-within:border-[#8DD3BB] dark:focus-within:border-[#8DD3BB] focus-within:ring-2 focus-within:ring-[#8DD3BB]/30'
        }`}
      >
        {icon && (
          <div className="pl-3.5 pr-1 text-gray-500 dark:text-gray-400 flex items-center pointer-events-none shrink-0">
            {icon}
          </div>
        )}

        <div className="relative flex-1 py-1.5 px-3 min-w-0">
          {label && (
            <label className="block text-[11px] font-medium text-gray-500 dark:text-gray-400 tracking-wide select-none">
              {label} {required && <span className="text-red-500">*</span>}
            </label>
          )}
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => {
              triggerChange(e.target.value);
              if (!isOpen) setIsOpen(true);
              setHighlightedIndex(-1);
            }}
            onFocus={() => setIsOpen(true)}
            onClick={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            autoComplete="off"
            className={`w-full bg-transparent text-sm text-[#112211] dark:text-[#F3F4F6] font-medium placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none ${className}`}
          />
        </div>

        {/* Clear Button */}
        {value && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              triggerChange('');
              setIsOpen(true);
              inputRef.current?.focus();
            }}
            className="p-1 mr-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
            title="Clear input"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Floating Suggestions Dropdown */}
      {isOpen && (
        <div
          onMouseDown={(e) => e.preventDefault()}
          className="absolute top-full left-0 right-0 mt-1.5 z-50 bg-white dark:bg-[#1A2621] border border-gray-200 dark:border-[#2D3D36] rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-3.5 py-2 border-b border-gray-100 dark:border-[#24362D] flex items-center justify-between text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
            <span>{value?.trim() ? 'Matching Places' : 'Suggested Places'}</span>
            <span>{suggestions.length} found</span>
          </div>

          {suggestions.length > 0 ? (
            <ul className="max-h-60 overflow-y-auto py-1 divide-y divide-gray-50 dark:divide-[#24362D]/50">
              {suggestions.map((item, index) => {
                const isSelected = value === item.display;
                const isHighlighted = highlightedIndex === index;

                return (
                  <li
                    key={`${item.code}-${index}`}
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    className={`px-3.5 py-2.5 flex items-center justify-between gap-3 cursor-pointer transition-colors ${
                      isHighlighted
                        ? 'bg-gray-100/80 dark:bg-white/10'
                        : 'hover:bg-gray-50 dark:hover:bg-white/5'
                    } ${isSelected ? 'bg-[#8DD3BB]/15 dark:bg-[#8DD3BB]/10' : ''}`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-500 dark:text-gray-300 shrink-0">
                        <Plane className="w-4 h-4 transform -rotate-45 text-[#00845B] dark:text-[#8DD3BB]" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-[#112211] dark:text-white truncate flex items-center gap-1.5">
                          <span>{item.city}</span>
                          {item.ruCity && item.ruCity !== item.city && (
                            <span className="text-xs text-gray-400 dark:text-gray-500 font-normal">
                              ({item.ruCity})
                            </span>
                          )}
                          <span className="text-xs font-normal text-gray-400 dark:text-gray-500">
                            • {item.country}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {item.name}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-[#8DD3BB]/20 dark:bg-[#8DD3BB]/15 text-[#00845B] dark:text-[#8DD3BB] border border-[#8DD3BB]/30">
                        {item.code}
                      </span>
                      {isSelected && (
                        <Check className="w-4 h-4 text-[#00845B] dark:text-[#8DD3BB]" />
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="p-4 text-center text-xs text-gray-400 dark:text-gray-500">
              No matching destinations found for "{value}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}
