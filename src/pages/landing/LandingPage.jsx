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
  Bed,
  ArrowRightLeft,
  Calendar,
  User,
  Star,
  Send,
  ArrowRight,
  MapPin,
  Sparkles
} from 'lucide-react';

// Images
import heroBg from '../../assets/images/landing/hero.png';
import trip1bg from '../../assets/images/landing/trip1bg.png';
import trip2bg from '../../assets/images/landing/trip2bg.png';
import tripImg1 from '../../assets/images/landing/tripImg1.png';
import tripImg2 from '../../assets/images/landing/tripImg2.png';
import tripImg3 from '../../assets/images/landing/tripImg3.png';
import tripImg4 from '../../assets/images/landing/tripImg4.png';
import tripImg5 from '../../assets/images/landing/tripImg5.png';
import tripImg6 from '../../assets/images/landing/tripImg6.png';
import tripImg7 from '../../assets/images/landing/tripImg7.png';
import tripImg8 from '../../assets/images/landing/tripImg8.png';
import review1Img from '../../assets/images/landing/review1Img.png';
import review2Img from '../../assets/images/landing/review2Img.png';
import review3Img from '../../assets/images/landing/review3Img.png';

// Crisp word-by-word reveal without any blur effect
function AnimatedWordText({ text, delayOffset = 0, isHeading = false, className = '' }) {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isHeading ? 0.08 : 0.045,
        delayChildren: delayOffset,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: isHeading ? 22 : 14,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isHeading ? 0.6 : 0.45,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`inline-block ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={wordVariants}
          className="inline-block mr-[0.26em] will-change-transform"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function LandingPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('flights'); // 'flights' | 'stays'
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
    if (activeTab === 'flights') {
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
    } else {
      navigate('/hotels');
    }
  };

  const destinations = [
    { city: 'Istanbul, Turkey', price: '$119', desc: 'Flights • Hotels • Resorts', img: tripImg1 },
    { city: 'Sydney, Australia', price: '$340', desc: 'Flights • Hotels • Resorts', img: tripImg2 },
    { city: 'Baku, Azerbaijan', price: '$145', desc: 'Flights • Hotels • Resorts', img: tripImg3 },
    { city: 'Malé, Maldives', price: '$299', desc: 'Flights • Hotels • Resorts', img: tripImg4 },
    { city: 'Paris, France', price: '$210', desc: 'Flights • Hotels • Resorts', img: tripImg5 },
    { city: 'New York, US', price: '$180', desc: 'Flights • Hotels • Resorts', img: tripImg6 },
    { city: 'London, UK', price: '$195', desc: 'Flights • Hotels • Resorts', img: tripImg7 },
    { city: 'Tokyo, Japan', price: '$320', desc: 'Flights • Hotels • Resorts', img: tripImg8 },
    { city: 'Dubai, UAE', price: '$160', desc: 'Flights • Hotels • Resorts', img: tripImg1 },
  ];

  const reviews = [
    {
      title: '“A real sense of community, nurtured”',
      desc: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me find flight options in seconds.',
      rating: 5,
      name: 'Olga',
      location: 'Weave Studios – Kai Tak',
      avatar: review1Img,
      badge: 'Google Verified'
    },
    {
      title: '“The best booking experience ever!”',
      desc: 'Booking flights and hotels together saved me over 30% on my anniversary trip to Istanbul. Fast interface, great customer support, zero hassles.',
      rating: 5,
      name: 'Thomas',
      location: 'Weave Studios – Olympic',
      avatar: review2Img,
      badge: 'Google Verified'
    },
    {
      title: '“Super flexible and clean pricing”',
      desc: 'No hidden fees or unexpected charges at checkout. Being able to pay part now and part later gives tremendous peace of mind when traveling.',
      rating: 5,
      name: 'Eliot',
      location: 'Weave Studios – Kowloon',
      avatar: review3Img,
      badge: 'Google Verified'
    },
  ];

  return (
    <Layout transparentHeader={true}>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] flex items-center justify-center pt-24 pb-36 px-4 sm:px-6 lg:px-8">
        {/* Background Image with Gradient Overlay & Cinematic Slower Zoom-out */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            initial={{ scale: 1.10 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.8, ease: [0.16, 1, 0.3, 1] }}
            src={heroBg}
            alt="Golobe Hero Travel"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70" />
        </div>

        {/* Hero Headlines with Word-by-Word Crisp Stagger (Zero Blur) */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto mb-16">
          <span className="inline-block text-lg sm:text-2xl font-bold tracking-wider mb-2 text-[#8DD3BB]">
            <AnimatedWordText
              text="Helping Others"
              delayOffset={0.2}
              isHeading={false}
            />
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-none mb-4 drop-shadow-md">
            <AnimatedWordText
              text="Live & Travel"
              delayOffset={0.4}
              isHeading={true}
            />
          </h1>

          <p className="text-base sm:text-xl font-medium text-white/90 max-w-xl mx-auto">
            <AnimatedWordText
              text="Special offers to suit your plan. Discover hundreds of airlines and hotels at your fingertips."
              delayOffset={0.65}
              isHeading={false}
            />
          </p>
        </div>
      </section>

      {/* ================= FLOATING SEARCH WIDGET ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-28 sm:-mt-32 relative z-30 mb-20">
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-100">
          
          {/* Tabs: Flights / Stays with Apple Spring Indicator */}
          <div className="flex items-center gap-8 pb-6 border-b border-gray-100">
            <button
              type="button"
              onClick={() => setActiveTab('flights')}
              className={`flex items-center gap-2.5 pb-2 text-sm font-bold transition-colors relative cursor-pointer ${
                activeTab === 'flights' ? 'text-[#112211]' : 'text-gray-400 hover:text-[#112211]'
              }`}
            >
              <Plane className="w-5 h-5 transform -rotate-45" />
              <span>Flights</span>
              {activeTab === 'flights' && (
                <motion.div
                  layoutId="landingActiveTabIndicator"
                  className="absolute -bottom-6 left-0 right-0 h-1 bg-[#8DD3BB] rounded-full"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('stays')}
              className={`flex items-center gap-2.5 pb-2 text-sm font-bold transition-colors relative cursor-pointer ${
                activeTab === 'stays' ? 'text-[#112211]' : 'text-gray-400 hover:text-[#112211]'
              }`}
            >
              <Bed className="w-5 h-5" />
              <span>Stays</span>
              {activeTab === 'stays' && (
                <motion.div
                  layoutId="landingActiveTabIndicator"
                  className="absolute -bottom-6 left-0 right-0 h-1 bg-[#8DD3BB] rounded-full"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
            </button>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mt-8 space-y-6">
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
                <button
                  type="button"
                  onClick={handleSwap}
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-gray-300 shadow-xs items-center justify-center text-gray-500 hover:text-[#112211] hover:border-[#8DD3BB] transition-colors z-20 cursor-pointer"
                  title="Swap destinations"
                >
                  <ArrowRightLeft className="w-3.5 h-3.5" />
                </button>
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

            {/* Bottom Actions of Search Widget */}
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
                {activeTab === 'flights' ? 'Show Flights' : 'Show Places'}
              </Button>
            </div>
          </form>

        </div>
      </div>

      {/* ================= PLAN YOUR PERFECT TRIP ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#112211]">
              Plan your perfect trip
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Search Flights & Places Hire to our most popular destinations
            </p>
          </div>
          <Button
            variant="secondary"
            size="md"
            className="self-start sm:self-auto rounded-lg"
            onClick={() => navigate('/flights/search')}
          >
            See more places
          </Button>
        </div>

        {/* 9 Destination Grid with Smooth Apple 3D Elevation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              onClick={() => navigate('/flights/search')}
              className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-xs hover:shadow-xl border border-gray-100 transition-shadow duration-300 cursor-pointer group"
            >
              <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                <img
                  src={item.img}
                  alt={item.city}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base text-[#112211] truncate">
                    {item.city}
                  </h3>
                  <span className="text-xs font-bold text-[#112211] bg-[#8DD3BB]/30 px-2 py-0.5 rounded-full shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                <span className="text-xs font-semibold text-[#8DD3BB] group-hover:text-[#00845B] mt-2 inline-flex items-center gap-1">
                  Book now <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROMO BANNERS: FLIGHTS & HOTELS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Flights Banner (Amirkhon) */}
          <div className="relative rounded-3xl overflow-hidden h-[480px] shadow-lg group flex flex-col justify-end p-8 sm:p-10 text-white">
            <img
              src={trip1bg}
              alt="Flights"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            
            <div className="relative z-10 text-center max-w-sm mx-auto">
              <h3 className="text-3xl sm:text-4xl font-extrabold mb-2">Flights</h3>
              <p className="text-sm text-white/90 mb-6 font-medium">
                Search Flights & Places Hire to our most popular destinations around the world.
              </p>
              <Link to="/flights">
                <Button
                  variant="primary"
                  size="lg"
                  className="rounded-lg px-8 shadow-md"
                  leftIcon={<Send className="w-4 h-4 transform -rotate-45" />}
                >
                  Show Flights
                </Button>
              </Link>
            </div>
          </div>

          {/* Hotels Banner (Kibriyo) */}
          <div className="relative rounded-3xl overflow-hidden h-[480px] shadow-lg group flex flex-col justify-end p-8 sm:p-10 text-white">
            <img
              src={trip2bg}
              alt="Hotels"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            
            <div className="relative z-10 text-center max-w-sm mx-auto">
              <h3 className="text-3xl sm:text-4xl font-extrabold mb-2">Hotels</h3>
              <p className="text-sm text-white/90 mb-6 font-medium">
                Search hotels & Places Hire to our most popular destinations with luxury suites.
              </p>
              <Link to="/hotels">
                <Button
                  variant="primary"
                  size="lg"
                  className="rounded-lg px-8 shadow-md"
                  leftIcon={<Send className="w-4 h-4 transform -rotate-45" />}
                >
                  Show Hotels
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ================= REVIEWS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#112211]">
              Reviews
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              What people say about Golobe facilities and booking experience
            </p>
          </div>
          <Button variant="secondary" size="md" className="self-start sm:self-auto rounded-lg">
            See All Reviews
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="font-bold text-base sm:text-lg text-[#112211] mb-3">
                  {rev.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-4">
                  {rev.desc}
                </p>
                <button
                  type="button"
                  className="text-xs font-bold text-[#112211] mt-2 hover:underline cursor-pointer block"
                >
                  View more
                </button>

                {/* Stars */}
                <div className="flex items-center gap-1 mt-4 text-[#FF8682]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-[#112211]">{rev.name}</h4>
                  <p className="text-xs text-gray-400">{rev.location}</p>
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                  <img src={rev.avatar} alt={rev.name} className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
