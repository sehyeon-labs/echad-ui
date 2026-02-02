import Header from '@/components/header/Header';
import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children } : MainLayoutProps) => {
  return (
    <div className="_main_layout">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;