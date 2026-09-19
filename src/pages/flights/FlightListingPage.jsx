import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Button from '../../components/ui/Button';
import Checkbox from '../../components/ui/Checkbox';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import {
  Heart,
  Search,
  SlidersHorizontal,
  ChevronDown,
  ArrowRight,
  Plane,
  Clock,
  Star
} from 'lucide-react';

// Airlines logos
import emiratesLogo from '../../assets/images/flights/emirates.png';
import flyDubaiLogo from '../../assets/images/flights/flydubai.png';
import qatarLogo from '../../assets/images/flights/qatar.png';
import etihadLogo from '../../assets/images/flights/etihad.png';

export default function FlightListingPage() {
  const navigate = useNavigate();

  // Filters State
  const [maxPrice, setMaxPrice] = useState(600);
  const [selectedRating, setSelectedRating] = useState('4+');
  const [selectedAirlines, setSelectedAirlines] = useState({
    emirates: true,
    flyDubai: true,
    qatar: false,
    etihad: false,
  });
  const [sortOption, setSortOption] = useState('cheapest');
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const flights = [
    {
      id: 1,
      airline: 'Emirates',
      flightNumber: 'EK-264',
      logo: emiratesLogo,
      rating: '4.2',
      ratingText: 'Very Good',
      reviewsCount: 54,
      departTime: '12:00 pm',
      departCity: 'Newark (EWR)',
      arriveTime: '02:28 pm',
      arriveCity: 'Nashville (BNA)',
      duration: '2h 28m',
      stops: 'Non stop',
      price: 104,
      trip: 'Round trip',
    },
    {
      id: 2,
      airline: 'Fly Dubai',
      flightNumber: 'FZ-712',
      logo: flyDubaiLogo,
      rating: '4.5',
      ratingText: 'Very Good',
      reviewsCount: 88,
      departTime: '06:15 am',
      departCity: 'Newark (EWR)',
      arriveTime: '09:00 am',
      arriveCity: 'Nashville (BNA)',
      duration: '2h 45m',
      stops: 'Non stop',
      price: 120,
      trip: 'Round trip',
    },
    {
      id: 3,
      airline: 'Qatar Airways',
      flightNumber: 'QR-189',
      logo: qatarLogo,
      rating: '4.7',
      ratingText: 'Excellent',
      reviewsCount: 142,
      departTime: '02:30 pm',
      departCity: 'Newark (EWR)',
      arriveTime: '05:12 pm',
      arriveCity: 'Nashville (BNA)',
      duration: '2h 42m',
      stops: 'Non stop',
      price: 198,
      trip: 'Round trip',
    },
    {
      id: 4,
      airline: 'Etihad Airways',
      flightNumber: 'EY-402',
      logo: etihadLogo,
      rating: '4.6',
      ratingText: 'Very Good',
      reviewsCount: 97,
      departTime: '07:45 pm',
      departCity: 'Newark (EWR)',
      arriveTime: '10:20 pm',
      arriveCity: 'Nashville (BNA)',
      duration: '2h 35m',
      stops: 'Non stop',
      price: 240,
      trip: 'Round trip',
    },
  ];

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
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto flex-1">
            <div className="border-r border-gray-200 pr-3">
              <span className="text-[11px] text-gray-500 font-medium block">Route</span>
              <span className="text-sm font-bold text-[#112211]">Newark (EWR) - Nashville (BNA)</span>
            </div>
            <div className="border-r border-gray-200 pr-3">
              <span className="text-[11px] text-gray-500 font-medium block">Trip</span>
              <span className="text-sm font-bold text-[#112211]">Return</span>
            </div>
            <div className="border-r border-gray-200 pr-3">
              <span className="text-[11px] text-gray-500 font-medium block">Dates</span>
              <span className="text-sm font-bold text-[#112211]">12 Dec - 15 Dec</span>
            </div>
            <div>
              <span className="text-[11px] text-gray-500 font-medium block">Passengers & Class</span>
              <span className="text-sm font-bold text-[#112211]">1 Passenger, Economy</span>
            </div>
          </div>

          <Button
            variant="primary"
            size="md"
            className="w-full md:w-auto rounded-lg px-6 shrink-0"
            leftIcon={<Search className="w-4 h-4" />}
          >
            Search
          </Button>
        </div>

        {/* ================= MAIN CONTENT LAYOUT: FILTERS + RESULTS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* ================= LEFT SIDEBAR FILTERS ================= */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <h3 className="font-bold text-lg text-[#112211] flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#8DD3BB]" /> Filters
                </h3>
                <button
                  type="button"
                  className="text-xs font-semibold text-gray-400 hover:text-black cursor-pointer"
                  onClick={() => {
                    setMaxPrice(1000);
                    setSelectedRating('0+');
                  }}
                >
                  Reset All
                </button>
              </div>

              {/* Price Filter */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-[#112211]">Price Range</span>
                  <span className="text-sm font-bold text-[#00845B]">${maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1200"
                  step="10"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#8DD3BB]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>$50</span>
                  <span>$1,200</span>
                </div>
              </div>

              {/* Departure Time */}
              <div className="pt-4 border-t border-gray-100">
                <span className="text-sm font-bold text-[#112211] block mb-3">Departure Time</span>
                <div className="space-y-2.5">
                  <Checkbox label="12:01 AM - 06:00 AM (Early Morning)" defaultChecked />
                  <Checkbox label="06:01 AM - 12:00 PM (Morning)" defaultChecked />
                  <Checkbox label="12:01 PM - 06:00 PM (Afternoon)" defaultChecked />
                  <Checkbox label="06:01 PM - 12:00 AM (Night)" />
                </div>
              </div>

              {/* Rating */}
              <div className="pt-4 border-t border-gray-100">
                <span className="text-sm font-bold text-[#112211] block mb-3">Rating</span>
                <div className="flex gap-2">
                  {['0+', '1+', '2+', '3+', '4+'].map((rate) => (
                    <button
                      key={rate}
                      type="button"
                      onClick={() => setSelectedRating(rate)}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-md border transition-all cursor-pointer ${
                        selectedRating === rate
                          ? 'border-[#8DD3BB] bg-[#8DD3BB] text-[#112211]'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {rate}
                    </button>
                  ))}
                </div>
              </div>

              {/* Airlines */}
              <div className="pt-4 border-t border-gray-100">
                <span className="text-sm font-bold text-[#112211] block mb-3">Airlines</span>
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
              <div className="pt-4 border-t border-gray-100">
                <span className="text-sm font-bold text-[#112211] block mb-3">Trips</span>
                <div className="space-y-2.5">
                  <Checkbox label="Round trip" defaultChecked />
                  <Checkbox label="One way" />
                  <Checkbox label="Multi-City" />
                </div>
              </div>

            </div>
          </aside>

          {/* ================= RIGHT RESULTS COLUMN ================= */}
          <main className="lg:col-span-8 space-y-6">
            
            {/* Sort Bar */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2 sm:p-3 flex items-center justify-between">
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 w-full">
                <button
                  type="button"
                  onClick={() => setSortOption('cheapest')}
                  className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center cursor-pointer ${
                    sortOption === 'cheapest'
                      ? 'bg-[#8DD3BB] text-[#112211] shadow-xs'
                      : 'text-gray-500 hover:text-black hover:bg-gray-50'
                  }`}
                >
                  Cheapest <span className="block text-[11px] font-normal opacity-80">$104 • 2h 28m</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSortOption('best')}
                  className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center cursor-pointer ${
                    sortOption === 'best'
                      ? 'bg-[#8DD3BB] text-[#112211] shadow-xs'
                      : 'text-gray-500 hover:text-black hover:bg-gray-50'
                  }`}
                >
                  Best <span className="block text-[11px] font-normal opacity-80">$240 • 2h 28m</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSortOption('quickest')}
                  className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center cursor-pointer ${
                    sortOption === 'quickest'
                      ? 'bg-[#8DD3BB] text-[#112211] shadow-xs'
                      : 'text-gray-500 hover:text-black hover:bg-gray-50'
                  }`}
                >
                  Quickest <span className="block text-[11px] font-normal opacity-80">$320 • 2h 10m</span>
                </button>

                <button
                  type="button"
                  className="hidden sm:flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold text-gray-500 hover:text-black hover:bg-gray-50 cursor-pointer"
                >
                  <span>Other sort</span> <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Results Count Banner */}
            <div className="flex items-center justify-between text-xs text-gray-500 px-1">
              <span>Showing <strong className="text-black">4</strong> of 257 places</span>
              <span>Sorted by recommended</span>
            </div>

            {/* Flight Cards List */}
            <div className="space-y-4">
              {flights.map((flight) => (
                <div
                  key={flight.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-gray-100">
                    
                    {/* Airline Logo & Reviews */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-12 rounded-xl bg-gray-50 border border-gray-100 p-2 flex items-center justify-center shrink-0">
                        <img src={flight.logo} alt={flight.airline} className="max-h-full max-w-full object-contain" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs px-2 py-0.5 rounded font-bold bg-[#8DD3BB]/20 text-[#00845B]">
                            {flight.rating}
                          </span>
                          <span className="text-xs font-bold text-[#112211]">{flight.ratingText}</span>
                          <span className="text-xs text-gray-400">({flight.reviewsCount} reviews)</span>
                        </div>
                        <h4 className="text-sm font-bold text-gray-700 mt-1">{flight.airline} • {flight.flightNumber}</h4>
                      </div>
                    </div>

                    {/* Price Tag */}
                    <div className="text-left sm:text-right">
                      <span className="text-xs text-gray-400 block">starting from</span>
                      <span className="text-2xl font-black text-[#FF8682]">${flight.price}</span>
                    </div>
                  </div>

                  {/* Flight Schedule & Details */}
                  <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex-1 grid grid-cols-3 gap-4 items-center">
                      
                      {/* Departure */}
                      <div>
                        <span className="text-base font-extrabold text-[#112211] block">{flight.departTime}</span>
                        <span className="text-xs text-gray-500 font-medium">{flight.departCity}</span>
                      </div>

                      {/* Timeline Graphic */}
                      <div className="text-center">
                        <span className="text-[11px] font-semibold text-gray-400 block mb-1">{flight.duration}</span>
                        <div className="relative flex items-center justify-center">
                          <div className="h-0.5 bg-gray-300 w-full" />
                          <Plane className="w-4 h-4 text-[#8DD3BB] absolute bg-white px-0.5" />
                        </div>
                        <span className="text-[11px] font-semibold text-gray-500 block mt-1">{flight.stops}</span>
                      </div>

                      {/* Arrival */}
                      <div className="text-right">
                        <span className="text-base font-extrabold text-[#112211] block">{flight.arriveTime}</span>
                        <span className="text-xs text-gray-500 font-medium">{flight.arriveCity}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 w-full md:w-auto shrink-0 pt-2 md:pt-0">
                      <button
                        type="button"
                        onClick={() => toggleFavorite(flight.id)}
                        className={`p-3 rounded-lg border transition-colors cursor-pointer ${
                          favorites[flight.id]
                            ? 'border-red-300 bg-red-50 text-red-500'
                            : 'border-gray-200 text-gray-400 hover:text-black hover:border-gray-300'
                        }`}
                        title="Add to favourites"
                      >
                        <Heart className={`w-4 h-4 ${favorites[flight.id] ? 'fill-current' : ''}`} />
                      </button>

                      <Button
                        variant="primary"
                        size="md"
                        className="flex-1 md:flex-initial rounded-lg px-6 font-bold"
                        onClick={() => navigate(`/flights/detail`)}
                      >
                        View Deals
                      </Button>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Show More Results Button */}
            <div className="pt-4 text-center">
              <Button
                variant="dark"
                size="lg"
                className="w-full sm:w-auto rounded-lg px-12"
              >
                Show more results
              </Button>
            </div>

          </main>

        </div>

      </div>
    </Layout>
  );
}
