/* eslint-disable jsx-a11y/no-onchange */
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

import Layout from '../../components/Layout/Layout';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import CartContext from '../../context/CartContext';
import ProductQuantityAdder from '../../components/ProductQuantityAdder/ProductQuantityAdder';

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      shopifyId
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
  const { getProductById } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const { search, origin, pathname } = useLocation();

  const variantId = queryString.parse(search).variant;

  useEffect(() => {
    const getSingleProduct = async () => {
      const product = await getProductById(shopifyProduct.shopifyId);
      setProduct(product);
      setSelectedVariant(
        product.variants.find(({ id }) => id === variantId) ||
          product.variants[0]
      );
    };

    getSingleProduct();
  }, [getProductById, setProduct, shopifyProduct.shopifyId, variantId]);

  const handleVariantChange = e => {
    const newVariant = product?.variants.find(
      variant => variant.id === e.target.value
    );
    setSelectedVariant(newVariant);

    navigate(
      `${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`,
      {
        replace: true,
      }
    );
  };

  return (
    <Layout>
      <ProductGrid>
        <div>
          <h1>{shopifyProduct.title}</h1>
          <p>{shopifyProduct.description}</p>

          {product?.availableForSale && (
            <VariantWrapper>
              {product?.variants.length > 1 && (
                <>
                  <strong>Variant</strong>
                  <select
                    onChange={handleVariantChange}
                    value={selectedVariant?.id}
                  >
                    {product?.variants.map(variant => (
                      <option key={variant.id} value={variant.id}>
                        {variant.title}
                      </option>
                    ))}
                  </select>
                </>
              )}

              {!!selectedVariant && (
                <>
                  <PriceStyles>&#163;{selectedVariant?.price}</PriceStyles>
                  <ProductQuantityAdder
                    variantId={selectedVariant?.id}
                    available={selectedVariant?.available}
                  />
                </>
              )}
            </VariantWrapper>
          )}
        </div>

        <div>
          <ImageGallery
            selectedVariantImageId={selectedVariant?.image.id}
            images={shopifyProduct.images}
          />
        </div>
      </ProductGrid>
    </Layout>
  );
};

const ProductGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;

    > div:first-child {
      order: 2;
    }

    > div:last-child {
      order: 1;
    }
  }
`;

const VariantWrapper = styled.div`
  margin-top: 40px;

  > strong {
    display: block;
    margin-bottom: 8px;
  }
`;

const PriceStyles = styled.div`
  margin: 40px 0;
  font-weight: bold;
  font-size: 30px;
`;

export default ProductTemplate;
