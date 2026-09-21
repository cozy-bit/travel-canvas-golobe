import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Layout from '../../components/layout/Layout';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import Checkbox from '../../components/ui/Checkbox';
import Modal from '../../components/ui/Modal';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import {
  CreditCard,
  Plus,
  ShieldCheck,
  Plane,
  Lock,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

import visaIcon from '../../assets/icons/visa.svg';
import mastercardIcon from '../../assets/icons/mastercard.svg';
import emiratesLogo from '../../assets/images/flights/emirates.png';

export default function FlightBookingPage() {
  const navigate = useNavigate();
  const [payPlan, setPayPlan] = useState('full'); // 'full' | 'part'
  const [selectedCard, setSelectedCard] = useState('card-1');
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);

  // New Card State
  const [newCard, setNewCard] = useState({
    number: '',
    exp: '',
    cvc: '',
    name: '',
    country: 'United States',
  });

  const [cards, setCards] = useState([
    { id: 'card-1', brand: 'visa', last4: '4321', exp: '02/27', name: 'Cozy Bit', icon: visaIcon },
    { id: 'card-2', brand: 'mastercard', last4: '8765', exp: '05/28', name: 'Cozy Bit', icon: mastercardIcon },
  ]);

  const handleAddCardSubmit = (e) => {
    e.preventDefault();
    if (newCard.number && newCard.exp) {
      const last4 = newCard.number.slice(-4) || '1111';
      const added = {
        id: `card-${Date.now()}`,
        brand: 'visa',
        last4,
        exp: newCard.exp,
        name: newCard.name || 'Cozy Bit',
        icon: visaIcon,
      };
      setCards([...cards, added]);
      setSelectedCard(added.id);
      setIsAddCardOpen(false);
      setNewCard({ number: '', exp: '', cvc: '', name: '', country: 'United States' });
    }
  };

  const handlePay = () => {
    navigate('/flights/ticket');
  };

  return (
    <Layout showNewsletter={true}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Flights', href: '/flights' },
            { label: 'Review Booking', href: '/flights/detail' },
            { label: 'Payment' },
          ]}
          className="mb-6"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Payment Schedule Selector with Apple Spring Layout */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-bold text-[#112211]">
                Payment Option
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Pay in full */}
                <div
                  onClick={() => setPayPlan('full')}
                  className={`relative p-5 rounded-xl border-2 cursor-pointer transition-colors ${
                    payPlan === 'full'
                      ? 'border-[#8DD3BB] bg-[#8DD3BB]/10 shadow-xs'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  {payPlan === 'full' && (
                    <motion.div
                      layoutId="payPlanSelection"
                      className="absolute inset-0 rounded-xl border-2 border-[#8DD3BB] bg-[#8DD3BB]/10 pointer-events-none"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-base text-[#112211]">Pay in full</span>
                      <span className="text-lg font-extrabold text-[#112211]">$212</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Pay the total and you are all set. No extra fees or installments.
                    </p>
                  </div>
                </div>

                {/* Pay part now */}
                <div
                  onClick={() => setPayPlan('part')}
                  className={`relative p-5 rounded-xl border-2 cursor-pointer transition-colors ${
                    payPlan === 'part'
                      ? 'border-[#8DD3BB] bg-[#8DD3BB]/10 shadow-xs'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  {payPlan === 'part' && (
                    <motion.div
                      layoutId="payPlanSelection"
                      className="absolute inset-0 rounded-xl border-2 border-[#8DD3BB] bg-[#8DD3BB]/10 pointer-events-none"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-base text-[#112211]">Pay part now, part later</span>
                      <span className="text-lg font-extrabold text-[#112211]">$50</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Pay $50 today, and the rest ($162) will be charged automatically before flight day.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Credit Card Selector */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#112211] flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-[#8DD3BB]" />
                  Credit or Debit Cards
                </h3>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setIsAddCardOpen(true)}
                  leftIcon={<Plus className="w-4 h-4" />}
                >
                  Add a new card
                </Button>
              </div>

              {/* Saved Cards List */}
              <div className="space-y-3">
                {cards.map((c) => (
                  <label
                    key={c.id}
                    className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedCard === c.id
                        ? 'border-[#8DD3BB] bg-white shadow-xs'
                        : 'border-gray-200 hover:border-gray-300 bg-gray-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="payment-card"
                        checked={selectedCard === c.id}
                        onChange={() => setSelectedCard(c.id)}
                        className="w-4 h-4 text-[#8DD3BB] accent-[#8DD3BB] cursor-pointer"
                      />
                      <div className="w-12 h-8 bg-white border border-gray-200 rounded-md flex items-center justify-center p-1">
                        <img src={c.icon} alt={c.brand} className="max-h-full max-w-full object-contain" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-[#112211] block">
                          •••• •••• •••• {c.last4}
                        </span>
                        <span className="text-xs text-gray-400">Expires {c.exp}</span>
                      </div>
                    </div>

                    <span className="text-xs font-semibold text-gray-500 hidden sm:block">
                      {c.name}
                    </span>
                  </label>
                ))}
              </div>

              {/* Security notice */}
              <div className="flex items-center gap-2 text-xs text-gray-500 pt-2">
                <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" />
                <span>256-Bit SSL Encrypted & PCI-DSS compliant secure checkout.</span>
              </div>
            </div>

          </div>

          {/* ================= BOOKING OVERVIEW SIDEBAR ================= */}
          <aside className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-28 space-y-6">
              <h3 className="font-bold text-lg text-[#112211] pb-4 border-b border-gray-100">
                Booking Summary
              </h3>

              {/* Flight Summary Card */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 p-2 flex items-center justify-center shrink-0">
                  <img src={emiratesLogo} alt="Emirates" className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#112211]">Emirates • EK-264</h4>
                  <p className="text-xs text-gray-500">Airbus A380-800</p>
                </div>
              </div>

              {/* Route & Times */}
              <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-xs text-gray-600">
                <div className="flex justify-between font-semibold text-[#112211]">
                  <span>Newark (EWR)</span>
                  <span>Nashville (BNA)</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>12:00 pm</span>
                  <span>02:28 pm</span>
                </div>
                <div className="pt-2 border-t border-gray-200 flex justify-between">
                  <span>Date:</span>
                  <span className="font-semibold text-black">12 Dec, 2026</span>
                </div>
              </div>

              {/* Price Calculation */}
              <div className="space-y-2 text-sm text-gray-600 pt-2 border-t border-gray-100">
                <div className="flex justify-between">
                  <span>Base Fare</span>
                  <span className="font-bold text-black">$240</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span className="font-bold">-$40</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes</span>
                  <span className="font-bold text-black">$12</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-base font-bold text-[#112211]">Amount Due</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={payPlan}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.2 }}
                    className="text-3xl font-black text-[#FF8682]"
                  >
                    ${payPlan === 'full' ? 212 : 50}
                  </motion.span>
                </AnimatePresence>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-full rounded-lg font-bold shadow-md"
                onClick={handlePay}
                leftIcon={<Lock className="w-4 h-4 mr-1" />}
              >
                Confirm & Pay
              </Button>
            </div>
          </aside>

        </div>

      </motion.div>

      {/* ================= ADD NEW CARD MODAL ================= */}
      <Modal
        isOpen={isAddCardOpen}
        onClose={() => setIsAddCardOpen(false)}
        title="Add a new card"
        maxWidth="max-w-md"
      >
        <form onSubmit={handleAddCardSubmit} className="space-y-4">
          <Input
            label="Card Number"
            placeholder="0000 0000 0000 0000"
            inputMode="numeric"
            maxLength={19}
            value={newCard.number}
            onChange={(e) => {
              const digits = e.target.value.replace(/\D/g, '').slice(0, 16);
              const formatted = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
              setNewCard({ ...newCard, number: formatted });
            }}
            icon={<CreditCard className="w-4 h-4" />}
            required
          />

          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Exp. Date"
              placeholder="MM/YY"
              inputMode="numeric"
              maxLength={5}
              value={newCard.exp}
              onChange={(e) => {
                let val = e.target.value.replace(/\D/g, '').slice(0, 4);
                if (val.length >= 3) {
                  val = val.slice(0, 2) + '/' + val.slice(2);
                }
                setNewCard({ ...newCard, exp: val });
              }}
              required
            />
            <Input
              label="CVC"
              placeholder="123"
              type="password"
              inputMode="numeric"
              maxLength={4}
              value={newCard.cvc}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, '').slice(0, 4);
                setNewCard({ ...newCard, cvc: val });
              }}
              required
            />
          </div>

          <Input
            label="Name on Card"
            placeholder="Cozy Bit"
            value={newCard.name}
            onChange={(e) => setNewCard({ ...newCard, name: e.target.value })}
            required
          />

          <Select
            label="Country or Region"
            value={newCard.country}
            onChange={(e) => setNewCard({ ...newCard, country: e.target.value })}
            options={[
              { value: 'United States', label: 'United States' },
              { value: 'Tajikistan', label: 'Tajikistan' },
              { value: 'United Arab Emirates', label: 'United Arab Emirates' },
              { value: 'Turkey', label: 'Turkey' },
              { value: 'United Kingdom', label: 'United Kingdom' },
            ]}
          />

          <Checkbox
            label="Securely save my information for 1-click checkout"
            defaultChecked
          />

          <div className="pt-4 flex gap-3">
            <Button
              variant="white"
              size="md"
              className="flex-1 rounded-lg"
              onClick={() => setIsAddCardOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="md"
              className="flex-1 rounded-lg"
            >
              Add Card
            </Button>
          </div>
        </form>
      </Modal>
    </Layout>
  );
}
