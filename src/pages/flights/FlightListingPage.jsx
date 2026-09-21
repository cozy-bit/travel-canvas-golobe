import React, { useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import Layout from '../../components/layout/Layout';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import CityAutocomplete from '../../components/ui/CityAutocomplete';
import Select from '../../components/ui/Select';
import Checkbox from '../../components/ui/Checkbox';
import Modal from '../../components/ui/Modal';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { useFavorites } from '../../context/FavoritesContext';
import {
  Heart,
  Search,
  SlidersHorizontal,
  ChevronDown,
  Plane,
  ArrowRightLeft,
  Calendar,
  User,
  RotateCcw,
} from 'lucide-react';

// Airlines logos
import emiratesLogo from '../../assets/images/flights/emirates.png';
import flyDubaiLogo from '../../assets/images/flights/flydubai.png';
import qatarLogo from '../../assets/images/flights/qatar.png';
import etihadLogo from '../../assets/images/flights/etihad.png';

export default function FlightListingPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Search Criteria State (displayed in the top summary bar)
  const [searchParams, setSearchParams] = useState(() => ({
    fromCity: location.state?.fromCity || 'Newark (EWR)',
    toCity: location.state?.toCity || 'Nashville (BNA)',
    tripType: location.state?.tripType
      ? (location.state.tripType === 'oneway' ? 'One-way' : location.state.tripType === 'multicity' ? 'Multi-City' : 'Return')
      : 'Return',
    departDate: location.state?.departDate || '2026-12-12',
    returnDate: location.state?.returnDate || '2026-12-15',
    passengers: location.state?.passengers || '1 Passenger, Economy',
  }));

  // Search Modal State
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [draftSearch, setDraftSearch] = useState({ ...searchParams });

  // Open modal with fresh copy of search criteria
  const handleOpenSearchModal = () => {
    setDraftSearch({ ...searchParams });
    setIsSearchModalOpen(true);
  };

  // Swap From / To in modal
  const handleSwapDraftCities = () => {
    setDraftSearch((prev) => ({
      ...prev,
      fromCity: prev.toCity,
      toCity: prev.fromCity,
    }));
  };

  // Apply new search from modal
  const handleApplySearch = (e) => {
    e.preventDefault();
    setSearchParams({ ...draftSearch });
    setIsSearchModalOpen(false);
  };

  // Filters State
  const [maxPrice, setMaxPrice] = useState(600);
  const [selectedRating, setSelectedRating] = useState('4+');
  const [selectedAirlines, setSelectedAirlines] = useState({
    emirates: true,
    flyDubai: true,
    qatar: false,
    etihad: false,
  });
  const [selectedTimes, setSelectedTimes] = useState({
    earlyMorning: true,
    morning: true,
    afternoon: true,
    night: false,
  });
  const [selectedTrips, setSelectedTrips] = useState({
    roundTrip: true,
    oneWay: false,
    multiCity: false,
  });
  const [sortOption, setSortOption] = useState('cheapest');
  const { isFavoriteFlight, toggleFavoriteFlight } = useFavorites();

  // Reset all filters to default
  const handleResetFilters = () => {
    setMaxPrice(1200);
    setSelectedRating('0+');
    setSelectedAirlines({
      emirates: true,
      flyDubai: true,
      qatar: true,
      etihad: true,
    });
    setSelectedTimes({
      earlyMorning: true,
      morning: true,
      afternoon: true,
      night: true,
    });
    setSelectedTrips({
      roundTrip: true,
      oneWay: true,
      multiCity: true,
    });
  };

  // Flight Dataset
  const allFlights = useMemo(
    () => [
      {
        id: 1,
        airline: 'Emirates',
        airlineKey: 'emirates',
        flightNumber: 'EK-264',
        logo: emiratesLogo,
        rating: '4.2',
        ratingText: 'Very Good',
        reviewsCount: 54,
        departTime: '12:00 pm',
        arriveTime: '02:28 pm',
        duration: '2h 28m',
        durationMinutes: 148,
        stops: 'Non stop',
        price: 104,
        tripType: 'roundTrip',
        timeSlot: 'afternoon',
      },
      {
        id: 2,
        airline: 'Fly Dubai',
        airlineKey: 'flyDubai',
        flightNumber: 'FZ-712',
        logo: flyDubaiLogo,
        rating: '4.5',
        ratingText: 'Very Good',
        reviewsCount: 88,
        departTime: '06:15 am',
        arriveTime: '09:00 am',
        duration: '2h 45m',
        durationMinutes: 165,
        stops: 'Non stop',
        price: 120,
        tripType: 'roundTrip',
        timeSlot: 'morning',
      },
      {
        id: 3,
        airline: 'Qatar Airways',
        airlineKey: 'qatar',
        flightNumber: 'QR-189',
        logo: qatarLogo,
        rating: '4.7',
        ratingText: 'Excellent',
        reviewsCount: 142,
        departTime: '02:30 pm',
        arriveTime: '05:12 pm',
        duration: '2h 42m',
        durationMinutes: 162,
        stops: 'Non stop',
        price: 198,
        tripType: 'roundTrip',
        timeSlot: 'afternoon',
      },
      {
        id: 4,
        airline: 'Etihad Airways',
        airlineKey: 'etihad',
        flightNumber: 'EY-402',
        logo: etihadLogo,
        rating: '4.6',
        ratingText: 'Very Good',
        reviewsCount: 97,
        departTime: '07:45 pm',
        arriveTime: '10:20 pm',
        duration: '2h 35m',
        durationMinutes: 155,
        stops: 'Non stop',
        price: 240,
        tripType: 'roundTrip',
        timeSlot: 'night',
      },
      {
        id: 5,
        airline: 'Emirates',
        airlineKey: 'emirates',
        flightNumber: 'EK-312',
        logo: emiratesLogo,
        rating: '4.8',
        ratingText: 'Exceptional',
        reviewsCount: 119,
        departTime: '05:20 am',
        arriveTime: '07:30 am',
        duration: '2h 10m',
        durationMinutes: 130,
        stops: 'Non stop',
        price: 320,
        tripType: 'roundTrip',
        timeSlot: 'earlyMorning',
      },
      {
        id: 6,
        airline: 'Fly Dubai',
        airlineKey: 'flyDubai',
        flightNumber: 'FZ-804',
        logo: flyDubaiLogo,
        rating: '4.1',
        ratingText: 'Good',
        reviewsCount: 63,
        departTime: '10:30 am',
        arriveTime: '01:25 pm',
        duration: '2h 55m',
        durationMinutes: 175,
        stops: 'Non stop',
        price: 95,
        tripType: 'oneWay',
        timeSlot: 'morning',
      },
      {
        id: 7,
        airline: 'Qatar Airways',
        airlineKey: 'qatar',
        flightNumber: 'QR-441',
        logo: qatarLogo,
        rating: '4.9',
        ratingText: 'Exceptional',
        reviewsCount: 204,
        departTime: '04:15 pm',
        arriveTime: '06:40 pm',
        duration: '2h 25m',
        durationMinutes: 145,
        stops: 'Non stop',
        price: 410,
        tripType: 'multiCity',
        timeSlot: 'afternoon',
      },
      {
        id: 8,
        airline: 'Etihad Airways',
        airlineKey: 'etihad',
        flightNumber: 'EY-516',
        logo: etihadLogo,
        rating: '4.3',
        ratingText: 'Very Good',
        reviewsCount: 75,
        departTime: '11:00 pm',
        arriveTime: '01:30 am',
        duration: '2h 30m',
        durationMinutes: 150,
        stops: 'Non stop',
        price: 175,
        tripType: 'roundTrip',
        timeSlot: 'night',
      },
    ],
    []
  );

  // Filtered & Sorted Flights
  const filteredFlights = useMemo(() => {
    // 1. Price
    let res = allFlights.filter((flight) => flight.price <= maxPrice);

    // 2. Rating
    const minRating = parseFloat(selectedRating.replace('+', '')) || 0;
    res = res.filter((flight) => parseFloat(flight.rating) >= minRating);

    // 3. Airlines (if any selected, filter by selected; if none selected, empty)
    const hasAnyAirline = Object.values(selectedAirlines).some(Boolean);
    if (hasAnyAirline) {
      res = res.filter((flight) => selectedAirlines[flight.airlineKey]);
    } else {
      res = [];
    }

    // 4. Departure Time slots
    const hasAnyTime = Object.values(selectedTimes).some(Boolean);
    if (hasAnyTime) {
      res = res.filter((flight) => selectedTimes[flight.timeSlot]);
    } else {
      res = [];
    }

    // 5. Trip Type
    const hasAnyTrip = Object.values(selectedTrips).some(Boolean);
    if (hasAnyTrip) {
      res = res.filter((flight) => selectedTrips[flight.tripType]);
    } else {
      res = [];
    }

    // 6. Sorting
    const sorted = [...res];
    if (sortOption === 'cheapest') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'best') {
      sorted.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    } else if (sortOption === 'quickest') {
      sorted.sort((a, b) => a.durationMinutes - b.durationMinutes);
    }

    return sorted;
  }, [allFlights, maxPrice, selectedRating, selectedAirlines, selectedTimes, selectedTrips, sortOption]);

  // Tab stats summary
  const tabStats = useMemo(() => {
    if (!allFlights.length) {
      return {
        cheapest: '$104 • 2h 28m',
        best: '$240 • 2h 28m',
        quickest: '$320 • 2h 10m',
      };
    }
    const cheapestF = [...allFlights].sort((a, b) => a.price - b.price)[0];
    const bestF = [...allFlights].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))[0];
    const quickestF = [...allFlights].sort((a, b) => a.durationMinutes - b.durationMinutes)[0];

    return {
      cheapest: `$${cheapestF.price} • ${cheapestF.duration}`,
      best: `$${bestF.price} • ${bestF.duration}`,
      quickest: `$${quickestF.price} • ${quickestF.duration}`,
    };
  }, [allFlights]);

  // Format Dates for summary
  const formattedDates = useMemo(() => {
    try {
      const d = new Date(searchParams.departDate);
      const dStr = !isNaN(d.getTime())
        ? d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
        : searchParams.departDate;
      if (searchParams.tripType === 'One-way') return dStr;
      const r = new Date(searchParams.returnDate);
      const rStr = !isNaN(r.getTime())
        ? r.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
        : searchParams.returnDate;
      return `${dStr} - ${rStr}`;
    } catch {
      return '12 Dec - 15 Dec';
    }
  }, [searchParams.departDate, searchParams.returnDate, searchParams.tripType]);

  return (
    <Layout showNewsletter={true}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Flights', href: '/flights' },
            { label: 'Search Results' },
          ]}
          className="mb-6"
        />

        {/* ================= SEARCH SUMMARY / MODIFIER BAR ================= */}
        <div
          onClick={handleOpenSearchModal}
          className="bg-white dark:bg-[#1A2621] rounded-2xl shadow-sm border border-gray-100 dark:border-[#2D3D36] hover:border-[#8DD3BB]/60 dark:hover:border-[#8DD3BB]/60 transition-all p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 cursor-pointer group"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleOpenSearchModal();
            }
          }}
          aria-label="Click to modify flight search criteria"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto flex-1">
            <div className="border-r border-gray-200 dark:border-[#2D3D36] pr-3">
              <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium block">Route</span>
              <span className="text-sm font-bold text-[#112211] dark:text-white group-hover:text-[#00845B] dark:group-hover:text-[#8DD3BB] transition-colors">
                {searchParams.fromCity} - {searchParams.toCity}
              </span>
            </div>
            <div className="border-r border-gray-200 dark:border-[#2D3D36] pr-3">
              <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium block">Trip</span>
              <span className="text-sm font-bold text-[#112211] dark:text-white">
                {searchParams.tripType}
              </span>
            </div>
            <div className="border-r border-gray-200 dark:border-[#2D3D36] pr-3">
              <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium block">Dates</span>
              <span className="text-sm font-bold text-[#112211] dark:text-white">
                {formattedDates}
              </span>
            </div>
            <div>
              <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium block">Passengers & Class</span>
              <span className="text-sm font-bold text-[#112211] dark:text-white truncate block">
                {searchParams.passengers}
              </span>
            </div>
          </div>

          <Button
            variant="primary"
            size="md"
            className="w-full md:w-auto rounded-lg px-6 shrink-0 font-bold"
            leftIcon={<Search className="w-4 h-4" />}
            onClick={(e) => {
              e.stopPropagation();
              handleOpenSearchModal();
            }}
          >
            Search
          </Button>
        </div>

        {/* ================= MAIN CONTENT LAYOUT: FILTERS + RESULTS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* ================= LEFT SIDEBAR FILTERS ================= */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-[#1A2621] rounded-2xl shadow-sm border border-gray-100 dark:border-[#2D3D36] p-6 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-[#24362D]">
                <h3 className="font-bold text-lg text-[#112211] dark:text-white flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#8DD3BB]" /> Filters
                </h3>
                <button
                  type="button"
                  className="text-xs font-semibold text-gray-400 hover:text-black dark:text-gray-400 dark:hover:text-[#8DD3BB] cursor-pointer inline-flex items-center gap-1 transition-colors"
                  onClick={handleResetFilters}
                >
                  <RotateCcw className="w-3 h-3" /> Reset All
                </button>
              </div>

              {/* Price Filter */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-[#112211] dark:text-white">Price Range</span>
                  <span className="text-sm font-bold text-[#00845B] dark:text-[#8DD3BB]">${maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1200"
                  step="10"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#8DD3BB]"
                />
                <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500 mt-1">
                  <span>$50</span>
                  <span>$1,200</span>
                </div>
              </div>

              {/* Departure Time */}
              <div className="pt-4 border-t border-gray-100 dark:border-[#24362D]">
                <span className="text-sm font-bold text-[#112211] dark:text-white block mb-3">Departure Time</span>
                <div className="space-y-2.5">
                  <Checkbox
                    label="12:01 AM - 06:00 AM (Early Morning)"
                    checked={selectedTimes.earlyMorning}
                    onChange={(e) => setSelectedTimes({ ...selectedTimes, earlyMorning: e.target.checked })}
                  />
                  <Checkbox
                    label="06:01 AM - 12:00 PM (Morning)"
                    checked={selectedTimes.morning}
                    onChange={(e) => setSelectedTimes({ ...selectedTimes, morning: e.target.checked })}
                  />
                  <Checkbox
                    label="12:01 PM - 06:00 PM (Afternoon)"
                    checked={selectedTimes.afternoon}
                    onChange={(e) => setSelectedTimes({ ...selectedTimes, afternoon: e.target.checked })}
                  />
                  <Checkbox
                    label="06:01 PM - 12:00 AM (Night)"
                    checked={selectedTimes.night}
                    onChange={(e) => setSelectedTimes({ ...selectedTimes, night: e.target.checked })}
                  />
                </div>
              </div>

              {/* Rating */}
              <div className="pt-4 border-t border-gray-100 dark:border-[#24362D]">
                <span className="text-sm font-bold text-[#112211] dark:text-white block mb-3">Rating</span>
                <div className="flex gap-2">
                  {['0+', '1+', '2+', '3+', '4+'].map((rate) => (
                    <button
                      key={rate}
                      type="button"
                      onClick={() => setSelectedRating(rate)}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-md border transition-all cursor-pointer ${
                        selectedRating === rate
                          ? 'border-[#8DD3BB] bg-[#8DD3BB] text-[#112211] dark:!text-[#112211]'
                          : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                      }`}
                    >
                      {rate}
                    </button>
                  ))}
                </div>
              </div>

              {/* Airlines */}
              <div className="pt-4 border-t border-gray-100 dark:border-[#24362D]">
                <span className="text-sm font-bold text-[#112211] dark:text-white block mb-3">Airlines</span>
                <div className="space-y-2.5">
                  <Checkbox
                    label="Emirates Airlines"
                    checked={selectedAirlines.emirates}
                    onChange={(e) => setSelectedAirlines({ ...selectedAirlines, emirates: e.target.checked })}
                  />
                  <Checkbox
                    label="Fly Dubai"
                    checked={selectedAirlines.flyDubai}
                    onChange={(e) => setSelectedAirlines({ ...selectedAirlines, flyDubai: e.target.checked })}
                  />
                  <Checkbox
                    label="Qatar Airways"
                    checked={selectedAirlines.qatar}
                    onChange={(e) => setSelectedAirlines({ ...selectedAirlines, qatar: e.target.checked })}
                  />
                  <Checkbox
                    label="Etihad Airways"
                    checked={selectedAirlines.etihad}
                    onChange={(e) => setSelectedAirlines({ ...selectedAirlines, etihad: e.target.checked })}
                  />
                </div>
              </div>

              {/* Trips */}
              <div className="pt-4 border-t border-gray-100 dark:border-[#24362D]">
                <span className="text-sm font-bold text-[#112211] dark:text-white block mb-3">Trips</span>
                <div className="space-y-2.5">
                  <Checkbox
                    label="Round trip"
                    checked={selectedTrips.roundTrip}
                    onChange={(e) => setSelectedTrips({ ...selectedTrips, roundTrip: e.target.checked })}
                  />
                  <Checkbox
                    label="One way"
                    checked={selectedTrips.oneWay}
                    onChange={(e) => setSelectedTrips({ ...selectedTrips, oneWay: e.target.checked })}
                  />
                  <Checkbox
                    label="Multi-City"
                    checked={selectedTrips.multiCity}
                    onChange={(e) => setSelectedTrips({ ...selectedTrips, multiCity: e.target.checked })}
                  />
                </div>
              </div>

            </div>
          </aside>

          {/* ================= RIGHT RESULTS COLUMN ================= */}
          <main className="lg:col-span-8 space-y-6">
            
            {/* Sort Bar */}
            <div className="bg-white dark:bg-[#1A2621] rounded-2xl shadow-sm border border-gray-100 dark:border-[#2D3D36] p-2 sm:p-3 flex items-center justify-between">
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 w-full">
                {[
                  { key: 'cheapest', label: 'Cheapest', sub: tabStats.cheapest },
                  { key: 'best', label: 'Best', sub: tabStats.best },
                  { key: 'quickest', label: 'Quickest', sub: tabStats.quickest },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setSortOption(item.key)}
                    className={`relative py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-colors text-center cursor-pointer select-none ${
                      sortOption === item.key
                        ? 'text-[#112211] dark:!text-[#112211]'
                        : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5'
                    }`}
                  >
                    {sortOption === item.key && (
                      <motion.div
                        layoutId="flightSortIndicator"
                        className="absolute inset-0 bg-[#8DD3BB] rounded-xl shadow-xs"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}
                    <span className={`relative z-10 block font-bold ${
                      sortOption === item.key ? 'text-[#112211] dark:!text-[#112211]' : ''
                    }`}>
                      {item.label}
                      <span className={`block text-[11px] font-normal ${
                        sortOption === item.key ? 'text-[#112211]/85 dark:!text-[#112211]/85' : 'opacity-85'
                      }`}>
                        {item.sub}
                      </span>
                    </span>
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => setSortOption(sortOption === 'quickest' ? 'cheapest' : 'quickest')}
                  className="hidden sm:flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer"
                >
                  <span>Other sort</span> <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Results Count Banner */}
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 px-1">
              <span>
                Showing <strong className="text-[#112211] dark:text-white">{filteredFlights.length}</strong> of {allFlights.length} places
              </span>
              <span>Sorted by {sortOption}</span>
            </div>

            {/* Flight Cards List or Empty State */}
            {filteredFlights.length > 0 ? (
              <div className="space-y-4">
                {filteredFlights.map((flight) => (
                  <motion.div
                    key={flight.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ y: -4, boxShadow: '0 20px 35px -10px rgba(0, 0, 0, 0.08)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                    onClick={() => navigate('/flights/detail', { state: { flight } })}
                    className="group bg-white dark:bg-[#1A2621] rounded-2xl shadow-sm border border-gray-100 dark:border-[#2D3D36] hover:border-[#8DD3BB]/60 dark:hover:border-[#8DD3BB]/50 hover:shadow-md p-6 transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-gray-100 dark:border-[#24362D]">
                      
                      {/* Airline Logo & Reviews */}
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-12 rounded-xl bg-gray-50 dark:bg-[#141F1A] border border-gray-100 dark:border-[#2D3D36] p-2 flex items-center justify-center shrink-0">
                          <img src={flight.logo} alt={flight.airline} className="max-h-full max-w-full object-contain" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs px-2 py-0.5 rounded font-bold bg-[#8DD3BB]/20 text-[#00845B] dark:text-[#8DD3BB]">
                              {flight.rating}
                            </span>
                            <span className="text-xs font-bold text-[#112211] dark:text-white">{flight.ratingText}</span>
                            <span className="text-xs text-gray-400 dark:text-gray-500">({flight.reviewsCount} reviews)</span>
                          </div>
                          <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 mt-1">{flight.airline} • {flight.flightNumber}</h4>
                        </div>
                      </div>

                      {/* Price Tag */}
                      <div className="text-left sm:text-right">
                        <span className="text-xs text-gray-400 dark:text-gray-500 block">starting from</span>
                        <span className="text-2xl font-black text-[#FF8682]">${flight.price}</span>
                      </div>
                    </div>

                    {/* Flight Schedule & Details */}
                    <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                      <div className="flex-1 grid grid-cols-3 gap-4 items-center">
                        
                        {/* Departure */}
                        <div>
                          <span className="text-base font-extrabold text-[#112211] dark:text-white block">{flight.departTime}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{searchParams.fromCity}</span>
                        </div>

                        {/* Timeline Graphic */}
                        <div className="text-center">
                          <span className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 block mb-1">{flight.duration}</span>
                          <div className="relative flex items-center justify-center">
                            <div className="h-0.5 bg-gray-300 dark:bg-gray-700 w-full" />
                            <div className="absolute flex items-center justify-center bg-white dark:bg-[#1A2621] px-1">
                              <span className="w-2 h-2 rounded-full bg-[#8DD3BB] animate-ping absolute" />
                              <Plane className="w-4 h-4 text-[#00845B] dark:text-[#8DD3BB] relative z-10" />
                            </div>
                          </div>
                          <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 block mt-1">{flight.stops}</span>
                        </div>

                        {/* Arrival */}
                        <div className="text-right">
                          <span className="text-base font-extrabold text-[#112211] dark:text-white block">{flight.arriveTime}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{searchParams.toCity}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3 w-full md:w-auto shrink-0 pt-2 md:pt-0">
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.85 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavoriteFlight(flight);
                          }}
                          className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-colors cursor-pointer flex items-center justify-center"
                          title={isFavoriteFlight(flight.id) ? 'Remove from favourites' : 'Add to favourites'}
                        >
                          <Heart
                            className={`w-4 h-4 transition-colors ${
                              isFavoriteFlight(flight.id)
                                ? 'fill-[#FF4D4F] text-[#FF4D4F]'
                                : 'text-gray-400 dark:text-gray-400 hover:text-black dark:hover:text-white'
                            }`}
                          />
                        </motion.button>

                        <Button
                          variant="primary"
                          size="md"
                          className="flex-1 md:flex-initial rounded-lg px-6 font-bold"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate('/flights/detail', { state: { flight } });
                          }}
                        >
                          View Deals
                        </Button>
                      </div>
                    </div>

                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-[#1A2621] rounded-2xl shadow-sm border border-gray-100 dark:border-[#2D3D36] p-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#8DD3BB]/20 dark:bg-[#8DD3BB]/10 text-[#00845B] dark:text-[#8DD3BB] flex items-center justify-center mx-auto mb-4">
                  <SlidersHorizontal className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-[#112211] dark:text-white mb-2">No flights match your filters</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-6">
                  Try adjusting your price range, departure time slot, rating or selected airlines to see available flights.
                </p>
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleResetFilters}
                  leftIcon={<RotateCcw className="w-4 h-4" />}
                >
                  Reset All Filters
                </Button>
              </motion.div>
            )}

            {/* Show More Results Button */}
            {filteredFlights.length > 0 && (
              <div className="pt-4 text-center">
                <Button
                  variant="dark"
                  size="lg"
                  className="w-full sm:w-auto rounded-lg px-12 font-bold"
                  onClick={() => {
                    handleResetFilters();
                  }}
                >
                  Show all available flights ({allFlights.length})
                </Button>
              </div>
            )}

          </main>

        </div>

      </div>

      {/* ================= IN-PLACE SEARCH MODAL ================= */}
      <Modal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        maxWidth="max-w-2xl"
      >
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#8DD3BB]/20 dark:bg-[#8DD3BB]/10 flex items-center justify-center text-[#00845B] dark:text-[#8DD3BB] shrink-0">
              <Plane className="w-5 h-5 transform -rotate-45" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[#112211] dark:text-white">
                Modify Flight Search
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                Update your route, travel dates and passenger preferences
              </p>
            </div>
          </div>

          <form onSubmit={handleApplySearch} className="space-y-5">
            {/* Trip Type Selector */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
                Trip Type
              </label>
              <div className="flex flex-wrap gap-2">
                {['Return', 'One-way', 'Multi-City'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setDraftSearch((prev) => ({ ...prev, tripType: type }))}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      draftSearch.tripType === type
                        ? 'bg-[#8DD3BB] text-[#112211] dark:!text-[#112211] shadow-xs'
                        : 'border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-[#8DD3BB] dark:hover:border-[#8DD3BB]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* From - To with Swap button and CityAutocomplete */}
            <div className="relative flex flex-col sm:flex-row items-center gap-3">
              <div className="w-full sm:flex-1">
                <CityAutocomplete
                  label="From"
                  value={draftSearch.fromCity}
                  onChange={(val) => setDraftSearch((prev) => ({ ...prev, fromCity: val }))}
                  icon={<Plane className="w-4 h-4 text-gray-400" />}
                  placeholder="e.g. Newark (EWR)"
                  required
                />
              </div>

              {/* Swap Button */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.15 }}
                whileTap={{ rotate: 180, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                onClick={handleSwapDraftCities}
                className="w-9 h-9 rounded-full bg-white dark:bg-[#141F1A] border border-gray-200 dark:border-gray-700 shadow-xs flex items-center justify-center text-gray-500 dark:text-gray-300 hover:text-[#112211] dark:hover:text-white hover:border-[#8DD3BB] transition-colors shrink-0 cursor-pointer my-1 sm:my-0"
                title="Swap origin and destination"
              >
                <ArrowRightLeft className="w-4 h-4" />
              </motion.button>

              <div className="w-full sm:flex-1">
                <CityAutocomplete
                  label="To"
                  value={draftSearch.toCity}
                  onChange={(val) => setDraftSearch((prev) => ({ ...prev, toCity: val }))}
                  icon={<Plane className="w-4 h-4 text-gray-400 transform rotate-90" />}
                  placeholder="e.g. Nashville (BNA)"
                  required
                />
              </div>
            </div>

            {/* Dates & Passengers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Depart Date */}
              <Input
                label="Departure Date"
                type="date"
                value={draftSearch.departDate}
                onChange={(e) => setDraftSearch({ ...draftSearch, departDate: e.target.value })}
                icon={<Calendar className="w-4 h-4 text-gray-400" />}
              />

              {/* Return Date (enabled only for Return) */}
              <Input
                label="Return Date"
                type="date"
                value={draftSearch.returnDate}
                disabled={draftSearch.tripType === 'One-way'}
                onChange={(e) => setDraftSearch({ ...draftSearch, returnDate: e.target.value })}
                icon={<Calendar className="w-4 h-4 text-gray-400" />}
                className={draftSearch.tripType === 'One-way' ? 'opacity-40' : ''}
              />
            </div>

            {/* Passenger & Class Select */}
            <Select
              label="Passengers & Class"
              value={draftSearch.passengers}
              onChange={(e) => setDraftSearch({ ...draftSearch, passengers: e.target.value })}
              icon={<User className="w-4 h-4 text-gray-400" />}
              options={[
                { value: '1 Passenger, Economy', label: '1 Passenger, Economy' },
                { value: '2 Passengers, Economy', label: '2 Passengers, Economy' },
                { value: '3 Passengers, Economy', label: '3 Passengers, Economy' },
                { value: '1 Passenger, Business', label: '1 Passenger, Business Class' },
                { value: '2 Passengers, Business', label: '2 Passengers, Business Class' },
                { value: '1 Passenger, First Class', label: '1 Passenger, First Class' },
              ]}
            />

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100 dark:border-[#24362D]">
              <Button
                variant="white"
                size="md"
                onClick={() => setIsSearchModalOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                size="md"
                type="submit"
                leftIcon={<Search className="w-4 h-4" />}
                className="font-bold px-6"
              >
                Search Flights
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </Layout>
  );
}
