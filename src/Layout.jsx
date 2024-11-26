import React from 'react';
import { Outlet } from 'react-router-dom'; // Correct import for Outlet
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
