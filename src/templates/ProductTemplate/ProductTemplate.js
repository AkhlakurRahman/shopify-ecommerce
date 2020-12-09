import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout/Layout';
import ProductGrid from './ProductTemplateStyle';

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      title
    }
  }
`;

const ProductTemplate = ({ data }) => {
  return (
    <Layout>
      <ProductGrid>
        <div>
          <h1>{data.shopifyProduct.title}</h1>
        </div>

        <div>Image</div>
      </ProductGrid>
    </Layout>
  );
};

export default ProductTemplate;
