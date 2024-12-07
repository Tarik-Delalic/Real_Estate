import React from 'react';
import { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Fragment>
    <Header />
    <main>
      <Outlet /> {/* This is where the dynamic content will render */}
    </main>
    <Footer />
  </Fragment>
  )
}

export default Layout