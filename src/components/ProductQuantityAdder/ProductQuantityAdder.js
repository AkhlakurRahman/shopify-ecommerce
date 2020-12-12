import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../Button/Button';
import Input from '../Input/Input';

const ProductQuantityAdder = ({ available, variantId }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = e => {
    setQuantity(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <QuantityStyles>
      <strong>Quantity</strong>

      <form onSubmit={handleSubmit}>
        <Input
          type="number"
          step="1"
          min="1"
          disabled={!available}
          value={quantity}
          onChange={handleQuantityChange}
        />

        <Button
          type="submit"
          disabled={!available}
          buttonText="Add to cart"
          fullWidth
        />
      </form>
    </QuantityStyles>
  );
};

const QuantityStyles = styled.div`
  margin-top: 20px;

  > strong {
    display: block;
  }

  form {
    display: flex;
  }
`;

export default ProductQuantityAdder;
