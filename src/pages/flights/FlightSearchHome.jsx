import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Layout from '../../components/layout/Layout';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import CityAutocomplete from '../../components/ui/CityAutocomplete';
import Select from '../../components/ui/Select';
import {
  Plane,
  ArrowRightLeft,
  Calendar,
  User,
  Send,
  ArrowRight,
  MapPin,
  Clock
} from 'lucide-react';

// Assets
import flightBg from '../../assets/images/flights/flight-bg.png';
import worldMap from '../../assets/images/flights/world-map.svg';
import fall1 from '../../assets/images/flights/fall1.png';
import fall2 from '../../assets/images/flights/fall2.png';
import fall3 from '../../assets/images/flights/fall3.png';
import fall4 from '../../assets/images/flights/fall4.png';

export default function FlightSearchHome() {
  const navigate = useNavigate();
  const [fromCity, setFromCity] = useState('Lahore (LHE)');
  const [toCity, setToCity] = useState('Karachi (KHI)');
  const [tripType, setTripType] = useState('return');
  const [departDate, setDepartDate] = useState('2026-10-15');
  const [returnDate, setReturnDate] = useState('2026-10-22');
  const [passengers, setPassengers] = useState('1 Passenger, Economy');

  const handleSwap = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/flights/search', {
      state: {
        fromCity,
        toCity,
        tripType,
        departDate,
        returnDate,
        passengers,
      },
    });
  };

  const mapDestinations = [
    { city: 'Melbourne', country: 'An amazing journey', price: '$700', img: fall1 },
    { city: 'Paris', country: 'A Paris Adventure', price: '$600', img: fall2 },
    { city: 'London', country: 'London eye adventure', price: '$350', img: fall3 },
    { city: 'Columbia', country: 'Amazing streets', price: '$700', img: fall4 },
  ];

  const fallPlaces = [
    { title: 'Melbourne', sub: 'An amazing journey', price: '$700', img: fall1 },
    { title: 'Paris', sub: 'A Paris Adventure', price: '$600', img: fall2 },
    { title: 'London', sub: 'London eye adventure', price: '$350', img: fall3 },
    { title: 'Columbia', sub: 'Amazing streets', price: '$700', img: fall4 },
  ];

  return (
    <Layout transparentHeader={true}>
      {/* ================= FLIGHT HERO ================= */}
      <section className="relative min-h-[520px] sm:min-h-[580px] flex items-center justify-center pt-24 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            initial={{ scale: 1.10 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.8, ease: [0.16, 1, 0.3, 1] }}
            src={flightBg}
            alt="Find Flights Hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-white max-w-4xl mx-auto text-center sm:text-left w-full"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 drop-shadow-md">
            Make your travel wishlist, <br />
            we’ll do the rest
          </h1>
          <p className="text-base sm:text-xl font-medium text-white/90 max-w-lg">
            Special offers to suit your plan. Discover flight deals from top airlines worldwide.
          </p>
        </motion.div>
      </section>

      {/* ================= SEARCH WIDGET ================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-30 mb-16"
      >
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-100">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
            <h2 className="text-lg font-bold text-[#112211] flex items-center gap-2">
              <Plane className="w-5 h-5 text-[#8DD3BB] transform -rotate-45" />
              Where are you flying?
            </h2>
          </div>

          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              {/* From - To with Swap Button */}
              <div className="md:col-span-4 relative flex items-center">
                <div className="w-full grid grid-cols-2 gap-2">
                  <CityAutocomplete
                    label="From"
                    value={fromCity}
                    onChange={(val) => setFromCity(val)}
                    icon={<Plane className="w-4 h-4 text-gray-400" />}
                    placeholder="e.g. Lahore (LHE)"
                  />
                  <CityAutocomplete
                    label="To"
                    value={toCity}
                    onChange={(val) => setToCity(val)}
                    icon={<Plane className="w-4 h-4 text-gray-400 transform rotate-90" />}
                    placeholder="e.g. Karachi (KHI)"
                  />
                </div>
                <motion.button
                  type="button"
                  onClick={handleSwap}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ rotate: 180, scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-gray-300 shadow-xs items-center justify-center text-gray-500 hover:text-[#112211] hover:border-[#8DD3BB] transition-colors z-20 cursor-pointer"
                  title="Swap destinations"
                >
                  <ArrowRightLeft className="w-3.5 h-3.5" />
                </motion.button>
              </div>

              {/* Trip Type */}
              <div className="md:col-span-2">
                <Select
                  label="Trip"
                  value={tripType}
                  onChange={(e) => setTripType(e.target.value)}
                  options={[
                    { value: 'return', label: 'Return' },
                    { value: 'oneway', label: 'One-Way' },
                    { value: 'multicity', label: 'Multi-City' },
                  ]}
                />
              </div>

              {/* Depart - Return */}
              <div className="md:col-span-3">
                <Input
                  label="Depart - Return"
                  type="text"
                  value={`${departDate} — ${returnDate}`}
                  onChange={() => {}}
                  icon={<Calendar className="w-4 h-4 text-gray-400" />}
                />
              </div>

              {/* Passenger - Class */}
              <div className="md:col-span-3">
                <Input
                  label="Passenger & Class"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  icon={<User className="w-4 h-4 text-gray-400" />}
                />
              </div>
            </div>

            {/* Bottom Form Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <button
                type="button"
                className="text-xs font-semibold text-[#112211] hover:text-[#00845B] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span className="text-base font-bold text-[#8DD3BB]">+</span> Add Promo Code
              </button>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto px-8 rounded-lg shadow-sm"
                leftIcon={<Send className="w-4 h-4 transform -rotate-45" />}
              >
                Show Flights
              </Button>
            </div>
          </form>
        </div>
      </motion.div>

      {/* ================= LET'S GO PLACES TOGETHER (WORLD MAP) ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#112211]">
              Let's go places together
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Discover the latest offers and news and start planning your next trip with us.
            </p>
          </div>
          <Button
            variant="secondary"
            size="md"
            className="rounded-lg self-start sm:self-auto"
            onClick={() => navigate('/flights/search')}
          >
            See All
          </Button>
        </div>

        {/* Map Vector Graphic Card */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-[#EAF7F2] p-8 min-h-[380px] flex items-center justify-center group"
        >
          <img
            src={worldMap}
            alt="World Map Routes"
            className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="relative z-10 text-center max-w-lg bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl transition-all duration-300 group-hover:shadow-2xl">
            <span className="text-xs uppercase font-extrabold text-[#00845B] tracking-wider mb-2 block">
              Global Flight Network
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#112211] mb-2">
              Over 250+ Global Routes
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-5">
              Fly directly to premier international hubs with Emirates, Qatar Airways, Etihad, and FlyDubai.
            </p>
            <Button
              variant="primary"
              size="md"
              className="rounded-lg px-6"
              onClick={() => navigate('/flights/search')}
            >
              Search Route Deals
            </Button>
          </div>
        </motion.div>
      </section>

      {/* ================= FALL INTO TRAVEL ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#112211]">
              Fall into travel
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Going somewhere to celebrate this season? Whether you’re going home or somewhere new, we’ve got you covered.
            </p>
          </div>
          <Button
            variant="secondary"
            size="md"
            className="rounded-lg self-start sm:self-auto"
            onClick={() => navigate('/flights/search')}
          >
            See All
          </Button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {fallPlaces.map((place, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="relative rounded-2xl overflow-hidden shadow-md h-[400px] group flex flex-col justify-end p-5 text-white cursor-pointer"
            >
              <img
                src={place.img}
                alt={place.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent group-hover:from-black/90 transition-colors duration-300" />

              <div className="relative z-10 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{place.title}</h3>
                    <p className="text-xs text-white/80">{place.sub}</p>
                  </div>
                  <span className="text-lg font-extrabold text-[#8DD3BB]">
                    {place.price}
                  </span>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  className="w-full rounded-lg mt-2 text-xs font-bold"
                  onClick={() => navigate('/flights/detail')}
                >
                  Book Flight
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Big Banner: Backpacking Sri Lanka */}
        <motion.div
          whileHover={{ scale: 1.008 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative rounded-3xl overflow-hidden shadow-xl bg-gray-900 text-white min-h-[420px] flex items-center p-8 sm:p-12 lg:p-16 group"
        >
          <img
            src={flightBg}
            alt="Backpacking Sri Lanka"
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

          <div className="relative z-10 max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#8DD3BB] text-[#112211] text-xs font-bold rounded-full">
                Featured Deal
              </span>
              <span className="text-sm font-semibold text-white/80">From $700</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">
              Backpacking <br />
              Sri Lanka
            </h3>

            <p className="text-sm sm:text-base text-white/80 mb-6 leading-relaxed">
              Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and natural beauty.
            </p>

            <Button
              variant="primary"
              size="lg"
              className="rounded-lg px-8 shadow-md"
              onClick={() => navigate('/flights/detail')}
            >
              Book Flight Now
            </Button>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
