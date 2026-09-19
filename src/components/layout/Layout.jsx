import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Newsletter from '../ui/Newsletter';

export default function Layout({
  children,
  transparentHeader = false,
  showNewsletter = true,
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#112211]">
      <Header transparent={transparentHeader} />
      <main className="flex-1">{children}</main>
      {showNewsletter && <Newsletter />}
      <Footer />
    </div>
  );
}
