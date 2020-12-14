import React, { useContext } from 'react';

import Layout from '../components/Layout/Layout';
import ProductContext from '../context/ProductContext';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import HomePageCollection from '../components/HomePageCollection/HomePageCollection';

const IndexPage = () => {
  const { collections } = useContext(ProductContext);

  return (
    <Layout>
      <HomePageCollection
        collections={collections.filter(
          collection => collection.title !== 'Featured hats'
        )}
      />

      {!!collections.find(
        collection => collection.title === 'Featured hats'
      ) && <FeaturedProducts />}
    </Layout>
  );
};

export default IndexPage;
