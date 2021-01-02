import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

import CartContext from '../../../context/CartContext';
import { LinkStyle } from '../../LinkStyle/LinkStyle';

const CartWrapper = styled(LinkStyle).attrs(() => ({
  to: '/cart',
}))`
  display: flex;
  color: black;
  text-decoration: none;
  padding: 5px 8px;
  transition: all 0.3s ease-in-out;
  padding-left: 16px;

  > svg {
    margin: auto 0;
  }

  > div:last-child {
    padding-left: 8px;
    margin: auto 0;
  }

  &:hover {
    background: #ccc;
  }
`;

const Cart = () => {
  const { checkout } = useContext(CartContext);

  let totalQuantity = 0;
  if (checkout) {
    checkout.lineItems.forEach(lineItem => {
      totalQuantity += lineItem.quantity;
    });
  }

  return (
    <CartWrapper>
      <FaShoppingCart size="1.5em" />
      <div>
        {totalQuantity} item(s) / &#163;{checkout?.totalPrice || 0.0}
      </div>
    </CartWrapper>
  );
};

export default Cart;
