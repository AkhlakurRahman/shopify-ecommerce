import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout/Layout';
import ProductGrid from './ProductTemplateStyles';
import ImageGallery from '../../components/ImageGallery/ImageGallery';

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      title
      description
      images {
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

const ProductTemplate = ({ data }) => {
  const { shopifyProduct } = data;

  console.log(shopifyProduct);

  return (
    <Layout>
      <ProductGrid>
        <div>
          <h1>{shopifyProduct.title}</h1>
          <p>{shopifyProduct.description}</p>
        </div>

        <div>
          <ImageGallery images={shopifyProduct.images} />
        </div>
      </ProductGrid>
    </Layout>
  );
};

export default ProductTemplate;
