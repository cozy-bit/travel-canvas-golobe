import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Amirkhon Pages
import LandingPage from './pages/landing/LandingPage';
import FlightSearchHome from './pages/flights/FlightSearchHome';
import FlightListingPage from './pages/flights/FlightListingPage';
import FlightDetailPage from './pages/flights/FlightDetailPage';
import FlightBookingPage from './pages/flights/FlightBookingPage';
import FlightTicketPage from './pages/flights/FlightTicketPage';

// Team Member Placeholders
import HotelsPage from './pages/hotels/HotelsPage';
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignUpPage';
import AccountPage from './pages/account/AccountPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Lead (Amirkhon) Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/flights" element={<FlightSearchHome />} />
        <Route path="/flights/search" element={<FlightListingPage />} />
        <Route path="/flights/detail" element={<FlightDetailPage />} />
        <Route path="/flights/:id" element={<FlightDetailPage />} />
        <Route path="/flights/booking" element={<FlightBookingPage />} />
        <Route path="/flights/ticket" element={<FlightTicketPage />} />

        {/* Kibriyo Routes */}
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Tolibov Route (CSS Modules) */}
        <Route path="/account" element={<AccountPage />} />

        {/* Fallback to Home */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
