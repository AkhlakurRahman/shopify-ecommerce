import styled from 'styled-components';

const ProductGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr;

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

export default ProductGrid;
