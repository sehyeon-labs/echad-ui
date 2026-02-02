import Header from '@/components/header/Header';
import Menu from '@/components/menu/Menu';
import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children } : MainLayoutProps) => {
  return (
    <div className="_main_layout">
      <Header />
      {children}
      <Menu/>
    </div>
  );
};

export default MainLayout;