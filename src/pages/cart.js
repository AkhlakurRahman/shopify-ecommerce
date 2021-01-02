import React from 'react';

import CartContents from '../components/CartContents/CartContents';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';

const cart = () => {
  return (
    <Layout>
      <SEO title="MadHatter cart" description="The MadHatter store cart" />
      <CartContents />
    </Layout>
  );
};

export default cart;
