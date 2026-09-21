import React, { useState } from 'react';
import Button from './Button';
import mailboxImg from '../../assets/images/landing/mailbox.png';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mb-24 sm:-mb-28">
      <div className="bg-[#CDEAE1] dark:bg-[#15271E] dark:border dark:border-[#2D4539] rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 transition-colors duration-300">
        <div className="w-full md:w-3/5 z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#112211] dark:text-white leading-tight mb-2">
            Subscribe <br />
            Newsletter
          </h2>
          <p className="text-xl font-bold text-[#112211]/80 dark:text-[#8DD3BB] mb-2">
            The Travel
          </p>
          <p className="text-sm sm:text-base text-[#112211]/70 dark:text-gray-300 mb-6 max-w-md">
            Get inspired! Receive travel discounts, tips and behind the scenes stories.
          </p>

          {subscribed ? (
            <div className="bg-white/80 dark:bg-[#0B130E]/80 backdrop-blur-xs text-[#112211] dark:text-[#8DD3BB] font-semibold px-5 py-3.5 rounded-lg inline-flex items-center gap-2 shadow-xs border dark:border-[#24362D]">
              <span className="text-green-500 font-bold">✓</span> Thank you for subscribing! Check your inbox soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-white dark:bg-[#0B130E] dark:border dark:border-[#2D3D36] px-4 py-3 rounded-lg text-sm text-[#112211] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8DD3BB]"
              />
              <Button type="submit" variant="dark" size="md" className="rounded-lg shrink-0">
                Subscribe
              </Button>
            </form>
          )}
        </div>

        <div className="w-full md:w-2/5 flex justify-center md:justify-end">
          <img
            src={mailboxImg}
            alt="Newsletter Mailbox"
            className="w-48 sm:w-64 md:w-80 object-contain drop-shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
