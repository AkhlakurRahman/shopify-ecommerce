import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const SHOPIFY_COLLECTION_QUERY = graphql`
  query shopifyCollectionQuery {
    allShopifyCollection {
      edges {
        node {
          shopifyId
          title
          description
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          products {
            ...ShopifyProductFields
          }
        }
      }
    }
  }
`;

const defaultState = {
  products: [],
};

const ProductContext = React.createContext(defaultState);
export default ProductContext;

export function ProductContextProvider({ children }) {
  const { allShopifyCollection } = useStaticQuery(SHOPIFY_COLLECTION_QUERY);

  return (
    <ProductContext.Provider
      value={{
        products: [],
        collections: allShopifyCollection.edges.map(({ node }) => node),
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
