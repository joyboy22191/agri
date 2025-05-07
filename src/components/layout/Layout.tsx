import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ComplaintProvider } from '../../context/ComplaintContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <ComplaintProvider>
        <Header />
        <main className="flex-grow mt-16 pb-8">
          {children}
        </main>
        <Footer />
      </ComplaintProvider>
    </div>
  );
};

export default Layout;