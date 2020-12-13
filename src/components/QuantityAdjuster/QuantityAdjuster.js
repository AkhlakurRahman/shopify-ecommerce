import React from 'react';
import styled from 'styled-components';

const QuantityAdjuster = ({ item, onAdjust }) => {
  const { quantity } = item;

  const handleDecrementQuantity = () => {
    onAdjust({ variantId: item.variant.id, quantity: -1 });
  };

  const handleIncrementQuantity = () => {
    onAdjust({ variantId: item.variant.id, quantity: 1 });
  };

  return (
    <QuantityStyles>
      <AdjusterButton onClick={handleDecrementQuantity}>-</AdjusterButton>
      <div>{quantity}</div>
      <AdjusterButton onClick={handleIncrementQuantity}>+</AdjusterButton>
    </QuantityStyles>
  );
};

const QuantityStyles = styled.div`
  display: flex;

  > div {
    margin: auto 0;
    padding: 5px 10px;
  }
`;

const AdjusterButton = styled.div`
  cursor: pointer;
  border: 1px solid black;
  font-weight: bold;
`;

export default QuantityAdjuster;
