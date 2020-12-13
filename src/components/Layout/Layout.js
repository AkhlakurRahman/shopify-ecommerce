import React from 'react';
import Header from '../Header/Header';
import { LayoutWrapper } from './styles';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
    </>
  );
};

export default Layout;
