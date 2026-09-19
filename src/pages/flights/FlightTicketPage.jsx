import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Button from '../../components/ui/Button';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import {
  CheckCircle,
  Download,
  Printer,
  Share2,
  Plane,
  Calendar,
  Clock,
  MapPin,
  QrCode,
  ShieldCheck,
  ArrowLeft
} from 'lucide-react';

import emiratesLogo from '../../assets/images/flights/emirates.png';
import qrCodeSvg from '../../assets/images/flights/qr-code.svg';

export default function FlightTicketPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Layout showNewsletter={true}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Flights', href: '/flights' },
            { label: 'Payment', href: '/flights/booking' },
            { label: 'Confirmation & Ticket' },
          ]}
          className="mb-6"
        />

        {/* ================= SUCCESS BANNER ================= */}
        <div className="text-center mb-8">
          <div className="inline-flex p-3 rounded-full bg-[#8DD3BB]/20 text-[#00845B] mb-3 animate-bounce">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#112211]">
            Booking Confirmed!
          </h1>
          <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">
            Your booking was successful and your e-ticket has been issued. A copy has also been sent to <strong>john.doe@gmail.com</strong>.
          </p>
        </div>

        {/* ================= FIGMA BOARDING PASS CARD ================= */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-8">
          
          {/* Top Header of Ticket */}
          <div className="bg-[#8DD3BB] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[#112211]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider opacity-80 block">
                Official Electronic Boarding Pass
              </span>
              <h2 className="text-2xl font-black">Emirates Airlines</h2>
              <span className="text-xs font-semibold">Boeing 777-300ER • Flight EK-264</span>
            </div>

            <div className="bg-white/80 backdrop-blur-xs px-4 py-2 rounded-xl text-right">
              <span className="text-xs text-gray-500 block font-medium">Booking Ref (PNR)</span>
              <span className="text-base font-extrabold text-[#112211] font-mono">GLB-98421</span>
            </div>
          </div>

          {/* Ticket Body */}
          <div className="p-6 sm:p-8">
            
            {/* Passenger & Flight Meta */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pb-6 border-b border-dashed border-gray-200">
              <div>
                <span className="text-xs text-gray-400 font-medium block">Passenger</span>
                <span className="text-base font-extrabold text-[#112211]">John Doe</span>
                <span className="text-xs text-gray-500 block">Adult (18+)</span>
              </div>

              <div>
                <span className="text-xs text-gray-400 font-medium block">Flight Date</span>
                <span className="text-base font-extrabold text-[#112211]">12 Dec, 2026</span>
                <span className="text-xs text-gray-500 block">Friday</span>
              </div>

              <div>
                <span className="text-xs text-gray-400 font-medium block">Flight Time</span>
                <span className="text-base font-extrabold text-[#112211]">12:00 PM</span>
                <span className="text-xs text-gray-500 block">Gate closes 11:40 AM</span>
              </div>

              <div>
                <span className="text-xs text-gray-400 font-medium block">Gate / Seat</span>
                <span className="text-base font-extrabold text-[#00845B]">Gate B22 • Seat 14A</span>
                <span className="text-xs text-gray-500 block">Economy Class</span>
              </div>
            </div>

            {/* Flight Route Details */}
            <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-dashed border-gray-200">
              <div className="text-center md:text-left">
                <span className="text-3xl font-black text-[#112211]">EWR</span>
                <p className="text-sm font-bold text-gray-700">Newark Liberty Intl</p>
                <p className="text-xs text-gray-400">Terminal B • 12:00 PM</p>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-xs font-bold text-gray-400 mb-1">2h 28m • Non-stop</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 sm:w-28 h-0.5 bg-gray-300" />
                  <div className="w-8 h-8 rounded-full bg-[#8DD3BB]/20 flex items-center justify-center text-[#00845B]">
                    <Plane className="w-4 h-4 transform -rotate-45" />
                  </div>
                  <div className="w-16 sm:w-28 h-0.5 bg-gray-300" />
                </div>
                <span className="text-xs font-semibold text-[#00845B] mt-1">Confirmed</span>
              </div>

              <div className="text-center md:text-right">
                <span className="text-3xl font-black text-[#112211]">BNA</span>
                <p className="text-sm font-bold text-gray-700">Nashville Intl Airport</p>
                <p className="text-xs text-gray-400">Terminal 1 • 02:28 PM</p>
              </div>
            </div>

            {/* Barcode / QR Code Section */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs text-gray-400 font-medium block">Barcode & Verification</span>
                {/* Visual Barcode Graphic */}
                <div className="font-mono text-xs tracking-widest text-gray-800 bg-gray-50 px-4 py-2 rounded-md border border-gray-200 inline-block select-none">
                  ||| | | |||| | ||| |||| | || ||| ||||| || | |||| ||
                </div>
                <p className="text-[11px] text-gray-400 font-mono">EK894829148002984</p>
              </div>

              <div className="w-24 h-24 bg-gray-50 border border-gray-200 rounded-xl p-2 flex items-center justify-center">
                <img src={qrCodeSvg} alt="Boarding Pass QR Code" className="w-full h-full object-contain" />
              </div>
            </div>

          </div>

          {/* Ticket Footer Notes */}
          <div className="bg-gray-50 p-4 sm:px-8 text-xs text-gray-500 border-t border-gray-100 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              Valid ID or Passport required at check-in counter.
            </span>
            <span className="font-semibold text-gray-700">Golobe Travel Certified</span>
          </div>

        </div>

        {/* ================= ACTION BUTTONS ================= */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            variant="primary"
            size="lg"
            className="w-full sm:w-auto rounded-lg px-8 shadow-sm"
            onClick={handlePrint}
            leftIcon={<Printer className="w-4 h-4" />}
          >
            Print Boarding Pass
          </Button>

          <Button
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto rounded-lg px-8"
            onClick={() => alert('Downloading e-ticket PDF...')}
            leftIcon={<Download className="w-4 h-4" />}
          >
            Download PDF
          </Button>

          <Link to="/" className="w-full sm:w-auto">
            <Button
              variant="white"
              size="lg"
              className="w-full rounded-lg px-8"
              leftIcon={<ArrowLeft className="w-4 h-4" />}
            >
              Back to Home
            </Button>
          </Link>
        </div>

      </div>
    </Layout>
  );
}
