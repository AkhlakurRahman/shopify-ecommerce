import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { LinkStyle } from '../../LinkStyle/LinkStyle';

const Products = ({ products }) => {
  console.log(products);
  return (
    <ProductStyles>
      {products.map(product => (
        <ProductTileStyles key={product.shopifyId}>
          <Img fluid={product.images[0].localFile.childImageSharp.fluid} />
          <h3>{product.title}</h3>
          <p className="description">{product.description}</p>
          <p className="price">
            from &#163;
            {parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)}
          </p>
          <LinkStyle to={`/products/${product.handle}`}>View product</LinkStyle>
        </ProductTileStyles>
      ))}
    </ProductStyles>
  );
};

const ProductStyles = styled.section`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  h3 {
    font-weight: bold;
    font-size: 20px;
    margin: 20px;
  }
`;

const ProductTileStyles = styled.div`
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  overflow: hidden;

  .description {
    color: #999;
    text-align: left;
    padding: 0 20px 10px 20px;
  }

  .price {
    font-style: italic;
    font-weight: bold;
    padding: 20px;
    margin-top: auto;
  }

  > ${LinkStyle} {
    border: 1px solid black;
    padding: 10px;
    text-decoration: none;
    text-align: center;
    display: block;
    font-weight: bold;
    color: black;
  }
`;

export default Products;
