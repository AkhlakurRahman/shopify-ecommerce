import React, { useContext } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import { useLocation } from '@reach/router';

import Layout from '../components/Layout/Layout';
import Filter from '../components/Filter/Filter';
import ProductContext from '../context/ProductContext';
import Products from '../components/FeaturedProducts/Products/Products';

const AllProductsPage = () => {
  const { products, collections } = useContext(ProductContext);
  const collectionProductMap = {};
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const selectedCollectedIds = qs.c?.split(',').filter(c => !!c) || [];
  const selectedCollectionIdsMap = {};

  selectedCollectedIds.forEach(collectionId => {
    selectedCollectionIdsMap[collectionId] = true;
  });

  if (collections) {
    collections.forEach(collection => {
      collectionProductMap[collection.shopifyId] = {};

      collection.products.forEach(product => {
        collectionProductMap[collection.shopifyId][product.shopifyId] = true;
      });
    });
  }

  console.log(collectionProductMap);

  const filterByCategory = product => {
    if (Object.keys(selectedCollectionIdsMap).length) {
      for (let key in selectedCollectionIdsMap) {
        if (collectionProductMap[key]?.[product.shopifyId]) {
          return true;
        }
      }
      return false;
    }

    return true;
  };

  const filteredProducts = products.filter(filterByCategory);

  return (
    <Layout>
      <h4>{filteredProducts.length} products</h4>

      <Content>
        <Filter collections={collections} />

        <div>
          <Products products={filteredProducts} />
        </div>
      </Content>
    </Layout>
  );
};

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 20px;
  margin-top: 20px;
`;

export default AllProductsPage;
