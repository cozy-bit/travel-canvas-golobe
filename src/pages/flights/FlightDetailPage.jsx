import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Layout from '../../components/layout/Layout';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import {
  Plane,
  Clock,
  Wifi,
  Utensils,
  Plug,
  Tv,
  Share2,
  Heart,
  ShieldCheck,
  Luggage,
  Calendar,
  User,
  ArrowRight
} from 'lucide-react';

import emiratesLogo from '../../assets/images/flights/emirates.png';
import emiratesShow from '../../assets/images/flights/emirates-show.png';

export default function FlightDetailPage() {
  const navigate = useNavigate();
  const [passenger, setPassenger] = useState({
    firstName: 'Cozy',
    lastName: 'Bit',
    email: 'cozybit@gmail.com',
    phone: '+1 234 567 8900',
    dob: '1992-05-14',
  });

  const [isSaved, setIsSaved] = useState(false);

  const basePrice = 240;
  const discount = 40;
  const taxes = 12;
  const total = basePrice - discount + taxes;

  const handleProceed = (e) => {
    e.preventDefault();
    navigate('/flights/booking');
  };

  return (
    <Layout showNewsletter={true}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Flights', href: '/flights' },
            { label: 'Search Results', href: '/flights/search' },
            { label: 'Emirates A380 Airbus' },
          ]}
          className="mb-6"
        />

        {/* ================= HEADER SUMMARY ================= */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#112211]">
                Emirates A380 Airbus
              </h1>
              <span className="text-xs px-2.5 py-1 rounded-sm font-bold bg-[#8DD3BB]/20 text-[#00845B]">
                4.2 ★ Very Good (54 reviews)
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
              <Plane className="w-4 h-4 text-gray-400" />
              Flight EK-264 • Return • Newark (EWR) to Nashville (BNA)
            </p>
          </div>

          <div className="flex items-center gap-4 self-end md:self-auto">
            <div className="text-right">
              <span className="text-xs text-gray-400 block">Total Price</span>
              <span className="text-3xl font-black text-[#FF8682]">${total}</span>
            </div>
            <div className="flex gap-2">
              <motion.button
                type="button"
                whileTap={{ scale: 0.85 }}
                className="p-3 rounded-lg border border-gray-200 text-gray-400 hover:text-black hover:border-gray-300 transition-colors cursor-pointer"
                title="Share flight"
              >
                <Share2 className="w-4 h-4" />
              </motion.button>
              <motion.button
                type="button"
                whileTap={{ scale: 0.85 }}
                onClick={() => setIsSaved(!isSaved)}
                className={`p-3 rounded-lg border transition-colors cursor-pointer ${
                  isSaved
                    ? 'border-red-300 bg-red-50 text-red-500'
                    : 'border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-300'
                }`}
                title="Save flight"
              >
                <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Feature Highlights Banner */}
        <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-8 bg-gray-900 text-white relative min-h-[220px] flex items-center p-6 sm:p-8">
          <img
            src={emiratesShow}
            alt="Emirates Aircraft Experience"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          
          <div className="relative z-10 max-w-xl">
            <span className="text-xs uppercase font-extrabold text-[#8DD3BB] tracking-wider mb-1 block">
              In-flight Comforts
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              World-class Emirates Hospitality
            </h2>
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-white/90">
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-full">
                <Wifi className="w-3.5 h-3.5 text-[#8DD3BB]" /> Free High-speed Wi-Fi
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-full">
                <Utensils className="w-3.5 h-3.5 text-[#8DD3BB]" /> Gourmet In-flight Meals
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-full">
                <Plug className="w-3.5 h-3.5 text-[#8DD3BB]" /> In-seat USB & Power Outlets
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded-full">
                <Tv className="w-3.5 h-3.5 text-[#8DD3BB]" /> 6,500+ ice Channels
              </span>
            </div>
          </div>
        </div>

        {/* ================= MAIN CONTENT + SUMMARY SIDEBAR ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Flight Itinerary Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <img src={emiratesLogo} alt="Emirates" className="h-8 object-contain" />
                  <div>
                    <h3 className="font-bold text-base text-[#112211]">Emirates Airlines • Flight EK-264</h3>
                    <p className="text-xs text-gray-500">Airbus A380-800 • Economy Standard</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  2h 28m Flight
                </span>
              </div>

              {/* Transit Timeline with Animated Flight Radar */}
              <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00845B] relative flex items-center justify-center">
                      <span className="w-4 h-4 rounded-full bg-[#8DD3BB] animate-ping absolute opacity-75" />
                    </span>
                    <span className="text-2xl font-black text-[#112211]">12:00 pm</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700 mt-0.5">Newark Liberty Intl (EWR)</p>
                  <p className="text-xs text-gray-400">Terminal B • Gate 14</p>
                </div>

                <div className="text-center px-2">
                  <span className="text-xs text-gray-400 font-semibold block mb-1">Non-stop • 2h 28m</span>
                  <div className="relative flex items-center justify-center py-2">
                    <div className="h-0.5 bg-gradient-to-r from-[#8DD3BB] via-emerald-400 to-[#8DD3BB] w-full" />
                    
                    {/* Animated Gliding Plane along Flight Corridor */}
                    <motion.div
                      animate={{ x: [-20, 20, -20] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bg-white px-1.5 py-0.5 rounded-full shadow-xs border border-gray-100 flex items-center justify-center"
                    >
                      <Plane className="w-4 h-4 text-[#00845B] transform rotate-45" />
                    </motion.div>
                  </div>
                  <span className="text-xs text-[#00845B] font-bold block mt-1 flex items-center justify-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Airborne Transit Active
                  </span>
                </div>

                <div className="md:text-right">
                  <div className="flex items-center gap-2 md:justify-end">
                    <span className="text-2xl font-black text-[#112211]">02:28 pm</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF8682]" />
                  </div>
                  <p className="text-sm font-semibold text-gray-700 mt-0.5">Nashville Intl Airport (BNA)</p>
                  <p className="text-xs text-gray-400">Terminal 1 • Gate B22</p>
                </div>
              </div>

              {/* Baggage policy */}
              <div className="pt-6 border-t border-gray-100 flex flex-wrap gap-6 text-xs text-gray-600">
                <span className="flex items-center gap-2">
                  <Luggage className="w-4 h-4 text-[#8DD3BB]" /> Cabin Baggage: 1x 7kg included
                </span>
                <span className="flex items-center gap-2">
                  <Luggage className="w-4 h-4 text-[#8DD3BB]" /> Checked Baggage: 1x 23kg included
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-green-600" /> Free cancellation within 24h
                </span>
              </div>
            </div>

            {/* Passenger Information Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-[#112211] mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-[#8DD3BB]" />
                Passenger Details
              </h3>

              <form onSubmit={handleProceed} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="First Name"
                    value={passenger.firstName}
                    onChange={(e) => setPassenger({ ...passenger, firstName: e.target.value })}
                    required
                  />
                  <Input
                    label="Last Name"
                    value={passenger.lastName}
                    onChange={(e) => setPassenger({ ...passenger, lastName: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Email Address"
                    type="email"
                    value={passenger.email}
                    onChange={(e) => setPassenger({ ...passenger, email: e.target.value })}
                    required
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    inputMode="tel"
                    placeholder="+1 234 567 8900"
                    value={passenger.phone}
                    onChange={(e) =>
                      setPassenger({
                        ...passenger,
                        phone: e.target.value.replace(/[^\d+()\s-]/g, '')
                      })
                    }
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Date of Birth"
                    type="date"
                    value={passenger.dob}
                    onChange={(e) => setPassenger({ ...passenger, dob: e.target.value })}
                    required
                  />
                  <Input
                    label="Passport / ID Number"
                    placeholder="A12345678"
                  />
                </div>

                <div className="pt-4 flex justify-end">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="rounded-lg px-8 shadow-sm"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Proceed to Payment
                  </Button>
                </div>
              </form>
            </div>

          </div>

          {/* ================= SUMMARY SIDEBAR ================= */}
          <aside className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-28 space-y-6">
              <h3 className="font-bold text-lg text-[#112211] pb-4 border-b border-gray-100">
                Price Breakdown
              </h3>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Base Fare (1 Passenger)</span>
                  <span className="font-bold text-[#112211]">${basePrice}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Promo Discount</span>
                  <span className="font-bold">-${discount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes & Airport Surcharges</span>
                  <span className="font-bold text-[#112211]">${taxes}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service Fee</span>
                  <span className="font-bold text-green-600">FREE</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-base font-bold text-[#112211]">Total Amount</span>
                <span className="text-3xl font-black text-[#FF8682]">${total}</span>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-full rounded-lg font-bold shadow-md"
                onClick={() => navigate('/flights/booking')}
              >
                Proceed to Payment
              </Button>

              <p className="text-xs text-center text-gray-400 leading-relaxed">
                By clicking proceed, you agree to the ticket fare rules and baggage guidelines.
              </p>
            </div>
          </aside>

        </div>

      </motion.div>
    </Layout>
  );
}
