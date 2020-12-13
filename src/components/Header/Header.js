import React from 'react';
import styled from 'styled-components';
import Cart from './Cart/Cart';

const HeaderWrapper = styled.header`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Cart />
    </HeaderWrapper>
  );
};

export default Header;
