import React, { useContext } from 'react';
import HomePageCollection from '../components/HomePageCollection/HomePageCollection';

import Layout from '../components/Layout/Layout';
import ProductContext from '../context/ProductContext';

const IndexPage = () => {
  const { collections } = useContext(ProductContext);
  console.log(collections);
  return (
    <Layout>
      <HomePageCollection
        collections={collections.filter(
          collection => collection.title !== 'Featured hats'
        )}
      />
    </Layout>
  );
};

export default IndexPage;
