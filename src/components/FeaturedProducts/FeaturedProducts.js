import React, { useContext } from 'react';
import ProductContext from '../../context/ProductContext';

import Products from './Products/Products';

const FeaturedProducts = () => {
  const { collections } = useContext(ProductContext);

  const featuredCollection = collections.find(
    collection => collection.title === 'Featured hats'
  );

  return (
    <section>
      <h1>Featured hats</h1>
      <Products products={featuredCollection.products} />
    </section>
  );
};

export default FeaturedProducts;
