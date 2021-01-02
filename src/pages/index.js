import React, { useContext } from 'react';

import Layout from '../components/Layout/Layout';
import ProductContext from '../context/ProductContext';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import HomePageCollection from '../components/HomePageCollection/HomePageCollection';
import SEO from '../components/SEO/SEO';

const IndexPage = () => {
  const { collections } = useContext(ProductContext);

  return (
    <Layout>
      <SEO
        title="MadHatter Homepage"
        description="The MadHatter store homepage"
      />
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
