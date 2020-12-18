import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const SHOPIFY_COLLECTION_QUERY = graphql`
  fragment ProductTileFields on ShopifyProduct {
    handle
    priceRange {
      minVariantPrice {
        amount
      }
    }
  }

  {
    allShopifyProduct {
      edges {
        node {
          ...ShopifyProductFields
          ...ProductTileFields
        }
      }
    }

    allShopifyCollection(sort: { fields: title, order: ASC }) {
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
            ...ProductTileFields
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
  const { allShopifyCollection, allShopifyProduct } = useStaticQuery(
    SHOPIFY_COLLECTION_QUERY
  );

  return (
    <ProductContext.Provider
      value={{
        products: allShopifyProduct.edges.map(({ node }) => node),
        collections: allShopifyCollection.edges.map(({ node }) => node),
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
