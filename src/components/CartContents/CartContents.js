import React, { useContext } from 'react';
import styled from 'styled-components';
import { navigate } from '@reach/router';

import CartContext from '../../context/CartContext';
import { Button } from '../Button/Button';
import DeleteIconButton from '../DeleteIconButton/DeleteIconButton';
import QuantityAdjuster from '../QuantityAdjuster/QuantityAdjuster';

const CartContents = () => {
  const { checkout, updateLineItem } = useContext(CartContext);

  const handleAdjustQuantity = ({ quantity, variantId }) => {
    updateLineItem({ quantity, variantId });
  };

  return (
    <section>
      <h1>You are about to buy</h1>

      {!!checkout?.lineItems && (
        <CartHeader>
          <div>Product</div>
          <div>Unit price</div>
          <div>Quantity</div>
          <div>Amount</div>
        </CartHeader>
      )}

      {checkout?.lineItems?.map(lineItem => (
        <CartItem key={lineItem.id}>
          <div>
            <div>{lineItem.title}</div>
            <div>
              {lineItem.variant.title === 'Default Title'
                ? ''
                : lineItem.variant.title}
            </div>
          </div>

          <div>&#163;{lineItem.variant.price}</div>

          <div>
            <QuantityAdjuster item={lineItem} onAdjust={handleAdjustQuantity} />
          </div>
          <div>
            &#163;{(lineItem.quantity * lineItem.variant.price).toFixed(2)}
          </div>
          <DeleteIconButton lineItemId={lineItem.id} />
        </CartItem>
      ))}

      {!!checkout?.lineItems && (
        <CartFooter>
          <div>
            <strong>Total:</strong>
          </div>
          <div>
            <span>&#163;{checkout?.totalPrice}</span>
          </div>
        </CartFooter>
      )}

      {!checkout?.lineItems && <h4>Your cart is empty</h4>}
      <Footer>
        <div>
          <Button onClick={() => navigate(-1)}>Continue shopping</Button>
        </div>

        <div>
          {!!checkout?.webUrl && (
            <Button onClick={() => (window.location.href = checkout.webUrl)}>
              Checkout
            </Button>
          )}
        </div>
      </Footer>
    </section>
  );
};

const CartHeader = styled.div`
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr 40px;
  font-weight: bold;

  > div {
    padding: 8px;
  }
`;

const CartItem = styled.div`
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr 40px;

  > div {
    padding: 8px;

    &:first-child {
      > div:first-child {
        font-weight: bold;
      }

      > div:last-child {
        font-size: 16px;
        color: #999;
      }
    }
  }
`;

const CartFooter = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr 40px;

  > div {
    padding: 8px;

    &:first-child {
      text-align: right;
    }
  }
`;

const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;

  > div:last-child {
    text-align: right;
  }
`;

export default CartContents;
